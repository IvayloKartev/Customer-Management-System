import prisma from "prisma/db";
import { NextResponse } from "next/server";

export async function GET(req:NextResponse){
  return NextResponse.json({
    hello : 'world'
  })
}

export async function POST(req : any, res : any) {
  console.log('hi')
  const data = req.body;
  try {
    const result = await prisma.user.create({
      data: {
        ...data,
      },
    });
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(403).json({ err: "Error occured while adding a new food." });
  }
};