import prisma from "prisma/db";
import { NextResponse } from "next/server";
import { use } from "react";
export const dynamic = 'force-dynamic';

interface AccountData {
  name : string,
  password : string
}

export async function GET(req : Request) {
  //const reqData : AccountData = await req.json();
  try {
    const users = await prisma.user.findMany({
      select : {
        id : true,
        names : true,
        name : true,
        email : true,
        phone : true,
        companies : true
      }
    });
    return NextResponse.json({
        status : "200 OK",
        data : users
    })
  } catch (err) {
    return NextResponse.json({
      error : err
    })
  }
};