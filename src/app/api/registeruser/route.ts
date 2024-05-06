import prisma from "prisma/db";
import { NextResponse } from "next/server";
export const dynamic = 'force-dynamic';

interface AccountData {
  name : string,
  email : string, 
  password : string
}

export async function POST(req : Request, res : any) {
  const data : AccountData = await req.json();
  try {
    const result = await prisma.user.create({
      data : {
        name : data.name,
        email : data.email,
        password : data.password
      },
  });
  return NextResponse.json({
    success : "success"
  })
    res.status(200).json(result);
  } catch (err) {
    return NextResponse.json({
      error : err
    })
  }
};