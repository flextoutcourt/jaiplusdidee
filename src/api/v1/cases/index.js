import express from "express";
const router = express.Router();

router.get('/', (req, res) => {
    res.json({message: 'case index'})
})

export default router;