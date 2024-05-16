import prisma from "prisma/db";
import { NextResponse } from "next/server";
import { use } from "react";
export const dynamic = 'force-dynamic';

interface AccountData {
    id : number
}

export async function DELETE(req : Request) {
  const reqData : AccountData = await req.json();
  try {
    const deleteUser = await prisma.user.delete({
        where : {
            id : reqData.id
        }
    })
    return NextResponse.json({
        status : "200 OK"
    })
  } catch (err) {
    return NextResponse.json({
      error : err
    })
  }
};