import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(req: Request) {
  try {
    const token = req.headers.get('Authorization')?.replace('Bearer ', '');

    if (!token) {
      return NextResponse.json({ message: 'Token missing' }, { status: 401 });
    }
  
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET || "teste") as { userId: number };
      const userId = decodedToken.userId;
      const users = await prisma.user.findUnique({
          where: { id: userId },
          select: {
              id: true,
              name: true,
              email: true,
              createdAt: true,
          },
      });
      return NextResponse.json(users, { status: 200 });
  } catch (error) {
      return NextResponse.json({ message: "Invalid token", error }, { status: 401 });
  }
}