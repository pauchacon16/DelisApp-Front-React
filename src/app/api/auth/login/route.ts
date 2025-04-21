import { NextRequest, NextResponse } from "next/server";
import axios from 'axios'
import { Usuario } from "@/src/interfaces";

export async function POST(request: NextRequest) {
  try {

    const body: Usuario = await request.json();
    const { data } = await axios.post(
        `http://localhost:3600/api/auth/login`,
        body
    )

    const response = NextResponse.json(
      { userLogged: '', message: data.message },
      { status: 200 }
    );

    response.cookies.set("access_token", data.token, {
      secure: true,
      sameSite: "strict",
      maxAge: 86400,
      path: "/",
    });

    return response;
  } catch (error: any) {
    return NextResponse.json(
      { message: error.response.data.error, error },
      { status: 500 }
    );
  }
}