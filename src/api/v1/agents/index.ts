import express from "express";
// import prisma from "@/modules/core/lib/prisma"

import {PrismaClient} from "@prisma/client";
const prisma = new PrismaClient();

export const GET = async (req, res) => {
    const agents = await prisma.agent.findMany({
        where: {deleted: false},
        include:{
            Service: {
                include: {
                    entity: true
                }
            },
            Civilian: true,
            Grade: true
        }
    })
    res.json({data: agents});
}