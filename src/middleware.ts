import { getIronSession } from "iron-session";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { SessionData, sessionOptions } from "./app/lib/session";
import { cookies } from "next/headers";

export async function middleware(request: NextRequest) {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);

  if (request.nextUrl.pathname.startsWith("/me")) {
    if (!session.username)
      return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  if (request.nextUrl.pathname.startsWith("/auth")) {
    if (!!session.username) {
      return NextResponse.redirect(new URL("/me", request.url));
    }
  }
}
