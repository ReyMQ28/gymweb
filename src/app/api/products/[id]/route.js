import { NextResponse } from "next/server";
import { conn } from "@/libs/mysql";

// GET /api/products/ID
export async function GET(request, { params }) {
  try {
    const result = await conn.query("SELECT * FROM products WHERE id = ?", [
      params.id,
    ]);
    if (result.affectedRows === 0) {
      return NextResponse.json(
        { message: "product not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(result[0]);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

// DELETE /api/products/ID
export async function DELETE(request, { params }) {
  try {
    const result = await conn.query("DELETE FROM products WHERE id = ?", [
      params.id,
    ]);
    if (result.affectedRows === 0) {
      return NextResponse.json(
        { message: "product not found" },
        { status: 404 }
      );
    }
    return NextResponse.json("delete product by id");
  } catch (error) {
    NextResponse.json({ message: error.message }, { status: 500 });
  }
}

// PUT /api/products/ID
export async function PUT(request, { params }) {
  try {
    const data = await request.json();
    const result = await conn.query("UPDATE products SET ? WHERE id = ?", [
      data,
      params.id,
    ]);
    if (result.affectedRows === 0) {
      return NextResponse.json(
        { message: "product not found" },
        { status: 404 }
      );
    }

    const updateProduct = await conn.query(
      "SELECT * FROM products WHERE id = ?",
      [params.id]
    );

    return NextResponse.json(updateProduct[0]);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}       