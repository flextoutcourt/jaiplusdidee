import express from "express";
import prisma from "@/modules/core/lib/prisma"
import pusher from "../../utils/pusher";

const router = express.Router();

router.get('/', async (req, res) => {
    pusher.trigger('my-channel', 'my-event', {})
    const agents = await prisma.agent.findMany();
    res.json({data: agents});
});

export default router;