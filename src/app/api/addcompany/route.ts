import prisma from "prisma/db";
import { NextResponse } from "next/server";
export const dynamic = 'force-dynamic';

interface CompanyData {
  name : string
}

export async function POST(req : Request, res : any) {
  const data : CompanyData = await req.json();
  try {
    const result = await prisma.company.create({
      data : {
        name : data.name
      }
    })
  return NextResponse.json({
    success : "200 OK"
  })
  } catch (err) {
    return NextResponse.json({
      error : err,
      data : data
    })
  }
};