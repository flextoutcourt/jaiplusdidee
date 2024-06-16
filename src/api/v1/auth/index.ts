import express from "express";
// import prisma from "@/modules/core/lib/prisma"

import {PrismaClient} from "@prisma/client";
const prisma = new PrismaClient();

const router = express.Router();

router.get('/', async (req, res) => {
    res.json({data: req});
});

router.post('/', async (req, res, next) => {
    const {matricule, password} = req.body;
    const agent = await prisma.agent.findFirstOrThrow({
        where: {
            matricule
        },
        include: {
            Entities: {
                include: {
                    entity: true
                }
            },
            Service: true
        }
    });
    if(agent.password === password){
        res.status(201).json({data: agent});
    }else{
        res.status(400).json({message: 'Bad credentials !'})
    }
})

export default router;