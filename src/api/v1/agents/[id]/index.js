import prisma from "@/modules/core/lib/prisma"

import express from 'express';
const router = express.Router();

router.get('/', async (req, res) => {
    console.log(req.params);
    // const agent = await prisma.agent.findFirstOrThrow({
    //     where: {id}
    // });
    // res.json({data: agent});
});

export default router;
