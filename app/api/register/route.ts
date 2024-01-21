import bcrypt from "bcrypt";

import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(
  request: Request
) {
  try {
    const body = await request.json();
    const {
      email,
      name,
      password,
      addict
    } = body;

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
      data: {
        email,
        name,
        hashedPassword,
        addict
      }
    });

    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json(error)
  }
}
