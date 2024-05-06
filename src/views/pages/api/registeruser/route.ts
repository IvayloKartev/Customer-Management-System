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

/*export async function POST1(req : Request, res : any) {
  console.log('hi')
  const data : AccountData = JSON.parse(await req.json());
  try {
    const result = await prisma.user.create({
      data: {
        name : data.name,
        email : data.email,
        password : data.password
      },
    });
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(403).json({ err: "Error occured while adding a new food." });
  }
};*/
