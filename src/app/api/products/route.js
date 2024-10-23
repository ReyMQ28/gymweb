import { NextResponse } from "next/server";
import { conn } from "@/libs/mysql";

// GET /api/products
export async function GET() {
  try {
    const result = await conn.query("SELECT * FROM products");
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

//POST /api/products
export async function POST(request) {
  try {
    const data = await request.json();
    const result = await conn.query("INSERT INTO products SET ?", data);
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
