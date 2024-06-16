import { handler } from "@api/handler";
import { endpoints } from "@api/routers";
import * as configure from "@api/configure";
import express from "express";
import cors from "cors";

const server = express();
server.use(cors());
configure.serverBefore?.(server);
const { PORT = 5174, PUBLIC_DIR = "import.meta.env.PUBLIC_DIR" } = process.env;
server.use("import.meta.env.BASE", express.static(PUBLIC_DIR));
server.use("import.meta.env.BASE_API", handler);
configure.serverAfter?.(server);
server.on("error", (error) => {
  console.error(`Error at http://localhost:${PORT}`, error);
  configure.serverError?.(server, error);
});
server.on("listening", () => {
  console.log(`Ready at http://localhost:${PORT}`);
  configure.serverListening?.(server, endpoints);
});
server.listen(PORT);