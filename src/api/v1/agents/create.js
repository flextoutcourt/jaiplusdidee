import express from "express";
const router = express.Router();

router.get('/', (req, res) => {
    res.json({message: 'Agents create'})
})

export default router;