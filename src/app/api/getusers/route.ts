import prisma from "prisma/db";
import { NextResponse } from "next/server";
import { use } from "react";
import UsersTable from "@/views/pages/userstable/UsersTable";
export const dynamic = 'force-dynamic';

interface AccountData {
  name : string,
  password : string
}

export async function GET(req : Request, context : any) {
  //const reqData : AccountData = await req.json();
  try {
    const users = await prisma.user.findMany({
      select : {
        id : true,
        password : true,
        names : true,
        name : true,
        email : true,
        phone : true,
        address : true,
        companies : {
          select : {
            company : {
              select : {
                id : true,
                name : true
              }
            } 
          }
        }
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