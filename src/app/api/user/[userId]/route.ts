import prisma from "prisma/db";
import { NextResponse } from "next/server";
import { Context, use } from "react";
import { useRouter } from "next/router";

export const dynamic = 'force-dynamic';


interface AccountData {
  name : string,
  password : string
}

//const router = useRouter();
export async function GET(req : Request, context : any) {
    const { params } = context;
    //const router = useRouter();
    //const id = Number(router.query.userId?.toString())

  try {
    const users = await prisma.user.findMany({
      select : {
        id : true,
        names : true,
        name : true,
        email : true,
        phone : true,
        companies : true
      },
      where : {
        id : 1
      }
    });
    return NextResponse.json({
        status : "200 OK"+context.userId,
        data : users,
    })
  } catch (err) {
    return NextResponse.json({
      error : err
    })
  }
};