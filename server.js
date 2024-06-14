// server/index.js

import express from 'express';
import { readdir, stat } from 'fs/promises';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 4000;

// Function to dynamically load routes from the api directory
async function registerRoutes(directory) {
    try {
        const files = await readdir(directory);
        for (const file of files) {
            const routePath = path.join(directory, file);
            const stats = await stat(routePath);
            if (stats.isDirectory()) {
                // Check if the directory name is a dynamic parameter like [id]
                if (file.startsWith('[') && file.endsWith(']')) {
                    const paramName = file.slice(1, -1); // Extract parameter name
                    const parentRoutePath = path.join(directory, '..'); // Go one level up
                    const { default: route } = await import(`file://${routePath}/index.js`);
                    const routeName = path.basename(parentRoutePath); // Extract route name from parent directory
                    const baseRoute = `/api/${routeName}/:${paramName}`;
                    app.use(baseRoute, route);
                    console.log(`Loaded route from ${routePath}/index.js`);
                } else {
                    await registerRoutes(routePath); // Recursively load routes from subdirectories
                }
            } else if (file === 'index.js') {
                const { default: route } = await import(`file://${routePath}`);
                const routeName = path.basename(directory); // Extract route name from directory
                const baseRoute = `/api/${routeName}`;
                app.use(baseRoute, route);
                console.log(`Loaded route from ${routePath}`);
            }
        }
    } catch (err) {
        console.error('Error loading routes:', err);
    }
}

// Load routes from the api directory
await registerRoutes(path.join(__dirname, 'src/api'));

// Example route
app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from the server!' });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
