import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const response = NextResponse.json(
      { userLogged: '', message: 'Cerro sesión' },
      { status: 200 }
    );

    response.cookies.delete('access_token');

    return response;
  } catch (error: any) {
    return NextResponse.json(
      { message: error.response.data.error, error },
      { status: 500 }
    );
  }
}