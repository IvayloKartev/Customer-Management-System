import prisma from "prisma/db";
import { NextResponse } from "next/server";
import axios from "axios";
export const dynamic = 'force-dynamic';

interface CompanyData {
  bulstat : string
}

interface EuProps {
  isValid: boolean,
  requestDate: string,
  userError: string,
  name: string,
  address: string,
  requestIdentifier: string,
  originalVatNumber: string,
  vatNumber: string,
}

export async function POST(req : Request, res : any) {
  const data : CompanyData = await req.json();
  const name : EuProps = await (await axios.get(`https://ec.europa.eu/taxation_customs/vies/rest-api/ms/BG/vat/${data.bulstat}`)).data;
  try {
    const result = await prisma.company.create({
      data : {
        name : name.name,
        bulstat : data.bulstat
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