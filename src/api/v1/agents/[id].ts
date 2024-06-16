import express from "express";
// import prisma from "@/modules/core/lib/prisma"

import {PrismaClient} from "@prisma/client";
const prisma = new PrismaClient();

const router = express.Router();

export const GET = async (req, res) => {
    const {id} = req.params;
    const agent = await prisma.agent.findFirstOrThrow({
        where: {
            uuid: id
        },
        include: {
            Entities: {
                include: {
                    entity: true
                }
            },
            Service: true,
            Civilian: true,
            Grade: true
        }
    });

    res.send({data: agent});
}

export default router;