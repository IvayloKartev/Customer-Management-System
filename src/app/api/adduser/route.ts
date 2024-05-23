import prisma from "prisma/db";
import { NextResponse } from "next/server";
import axios from "axios";
export const dynamic = 'force-dynamic';

interface AccountData {
  name : string,
  email : string, 
  password : string,
  names? : string,
  phone? : string,
  address? : string,
  company? : string
}

interface CompanyData {
  id : number,
  name : string,
  ownerId : number
}

interface CompanyResponse {
  data : Array<CompanyData>
}

export async function POST(req : Request, res : any) {
  const data : AccountData = await req.json();

  try {
    const company = await prisma.company.findFirst({
      where : {
        name : data.company?.at(0)
      }
    })

    const result = await prisma.user.create({
      data : {
        name : data.name,
        email : data.email,
        password : data.password,
        names : data.names,
        phone : data.phone,
        address : data.address,
        companies : {
          connect : {
            id : company?.id,
            name : company?.name
          }
        }
      },
  });
  return NextResponse.json({
    success : "200 OK"
  })
    res.status(200).json(result);
  } catch (err) {
    return NextResponse.json({
      error : err
    })
  }
};