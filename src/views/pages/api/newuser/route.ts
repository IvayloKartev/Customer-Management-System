export const revalidate = 0;
export const dynamic = 'force-dynamic';
import prisma from "prisma/db";
import { NextResponse, NextRequest } from "next/server";

interface AccountData {
  name : string,
  email : string, 
  password : string
}

export async function POST(request: Request) {
  const body = await request.json();
  return NextResponse.json({
    helloMF : "worldwkdpeokwe"
  });
}
