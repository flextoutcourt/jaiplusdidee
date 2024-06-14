import express from "express";
import prisma from "@/modules/core/lib/prisma"

const router = express.Router();

router.get('/', async (req, res) => {
    const agents = await prisma.agent.findMany();
    res.json({data: agents});
});

export default router;