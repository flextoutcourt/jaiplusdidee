import express from "express";
// import prisma from "@/modules/core/lib/prisma"

import {PrismaClient} from "@prisma/client";
const prisma = new PrismaClient();

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

export const PUT = async (req, res) => {
    const {id} = req.params;
    const {body} = req.body;

    const agent = await prisma.agent.update({
        where: {
            id
        },
        data: {
            ...body
        }
    });

    res.json({data: agent});
}

export const DELETE = async (req, res) => {
    const {id} = req.params;
    
    const agent = await prisma.agent.update({
        where: {
            id: parseInt(id)
        },
        data: {
            deleted: true
        }
    });

    res.json({data: agent});
}