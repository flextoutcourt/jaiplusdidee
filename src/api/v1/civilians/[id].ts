import express from "express";
// import prisma from "@/modules/core/lib/prisma"

import {PrismaClient} from "@prisma/client";
const prisma = new PrismaClient();

export const GET = async (req, res) => {
    const {id} = req.params;

    const civilian = await prisma.civilian.findFirstOrThrow({
        where: {
            uuid: id
        },
        include: {
            CriminalCase: true,
            Testimony: true
        }
    });
    res.json({data: civilian});
}

export const PUT = async (req, res) => {

    console.log(req.params);

    const {id} = req.params;
    const body = req.body;

    const civilian = await prisma.civilian.update({
        where: {
            id: parseInt(id)
        },
        data: {
            ...body
        }
    })

    res.json({data: civilian});

}

export const DELETE = async (req, res) => {
    const {id} = req.params;

    const civilian = await prisma.civilian.update({
        where: {
            id: parseInt(id)
        },
        data: {
            deleted: true
        }
    })

    res.json({data: civilian})
}