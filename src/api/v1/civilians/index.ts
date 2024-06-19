import express from "express";
// import prisma from "@/modules/core/lib/prisma"

import {PrismaClient} from "@prisma/client";
const prisma = new PrismaClient();

export const GET = async (req, res) => {
    const civilians = await prisma.civilian.findMany({
        where: {
            deleted: false,
        },
        include: {
            CriminalCase: {
                include: {
                    Records: {
                        include: {
                            Case: true
                        }
                    }
                }
            },
            Testimony: true,
            Weapon: {
                include: {
                    Evidence: true
                }
            },
            Licence: {
                include: {
                    DeliveredBy: {
                        include: {
                            Civilian: true,
                            Grade: true,
                        }
                    }
                }
            },
            Car: true
        }
    });
    res.json({data: civilians});
}

export const DELETE = async (req, res) => {

    const {ids} = req.body;

    const agents = await prisma.agent.updateMany({
        where: {
            civilianId: {
                in: ids
            }
        },
        data: {
            deleted: true
        }
    });

    const civilians = await prisma.civilian.updateMany({
        where: {
            id: {
                in: ids
            }
        },
        data: {
            deleted: true
        }
    });

    res.json({data: civilians})
}