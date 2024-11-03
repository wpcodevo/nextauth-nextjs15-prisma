import { NextResponse } from "next/server";
import { auth } from "../../../../auth";

export async function GET(_request: Request) {
  const session = await auth();

  if (!session?.user) {
    return new NextResponse(
      JSON.stringify({ status: "fail", message: "You are not logged in" }),
      { status: 401 }
    );
  }

  return NextResponse.json({
    authenticated: !!session,
    session,
  });
}
