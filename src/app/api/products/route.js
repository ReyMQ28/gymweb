import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json("list of products");
}

export async function POST() {
  return NextResponse.json("create a product");
}

