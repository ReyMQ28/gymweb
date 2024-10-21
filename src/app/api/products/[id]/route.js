"server client";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json("get product by id");
}

export async function DELETE() {
  return NextResponse.json("delete product by id");
}

export async function PUT() {
  return NextResponse.json("update product by id");
}
