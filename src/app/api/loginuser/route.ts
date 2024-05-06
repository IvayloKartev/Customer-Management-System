import prisma from "prisma/db";
import { NextResponse } from "next/server";
import { use } from "react";
export const dynamic = 'force-dynamic';

interface AccountData {
  name : string,
  password : string
}

export async function POST(req : Request, res : any) {
  const data : AccountData = await req.json();
  try {
    const users = await prisma.user.findUnique({
        where : {
            name : data.name
        }
    });
    if(users != null && data.password === users.password) {
        return NextResponse.json({
            login : "OK",
            user : users
        })
    } else {
        return NextResponse.json({
            login : "User does not exist or wrong password.",
            user : null
        })
    }  
  } catch (err) {
    return NextResponse.json({
      error : err
    })
  }
};