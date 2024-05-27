import prisma from "prisma/db";
import { NextResponse } from "next/server";
import { use } from "react";
export const dynamic = 'force-dynamic';

interface AccountData {
  name : string,
  password : string
}

export async function GET(req : Request) {
  try {
    const companies = await prisma.company.findMany({
      select : {
        id : true,
        name : true,
        bulstat : true,
        owner : {
          select : {
            user : {
              select : {
                names : true
              }
            }
          }
        }
      }
    });
    return NextResponse.json({
        status : "200 OK",
        data : companies
    })
  } catch (err) {
    return NextResponse.json({
      error : err
    })
  }
};