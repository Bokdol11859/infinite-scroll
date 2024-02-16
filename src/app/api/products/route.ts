import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();

    return Response.json({ data });
  } catch (e) {
    return new NextResponse("Error", { status: 400 });
  }
}
