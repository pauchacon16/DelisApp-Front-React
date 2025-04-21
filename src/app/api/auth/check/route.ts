import { NextResponse } from "next/server";
import { headers } from "next/headers";
import jwt from "jsonwebtoken";

export async function GET() {
  try {
    const headersList = await headers();
    const token = headersList.get("token");

    // Valido que haya token
    if (!token) {
      return NextResponse.json(
        { message: 'No autorizado' },
        { status: 400 }
      );
    }

    try {
      jwt.verify(token, 'SECRET_KEY', (err, decoded) => {
          if (err) {
            return NextResponse.json(
              { message: 'No autorizado' },
              { status: 400 }
            );
          }
      });
      return NextResponse.json(
        { isAuthorized: true, message: 'Autorizado' },
        { status: 200 }
      );
    } catch (error) {
      return NextResponse.json(
        { message: 'Token no válido', error },
        { status: 400 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { message: 'Ocurrió un error', error },
      { status: 400 }
    );
  }
}