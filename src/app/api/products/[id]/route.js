import { NextResponse } from "next/server";
import { connectMongoDB } from "@/libs/mongodb";
import Productos from "@/models/productos";


// GET /api/products/ID
export async function GET(request, { params }) {

  await connectMongoDB();
  
  try {
    const productos = await Productos.findById(params.id);
    if (!productos) {
      return NextResponse.json(
        { message: "clients not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(productos);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

// DELETE /api/products/ID
export async function DELETE(request, { params }) {
  await connectMongoDB();
  try {
    const deletedproductos = await Productos.findByIdAndDelete(params.id);
    if (!deletedproductos) {
      return NextResponse.json(
        { message: "clients not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(deletedproductos);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

// PUT /api/products/ID
export async function PUT(request, { params }) {
  await connectMongoDB();
  try {
    const data = await request.json();
    const updateproductos = await Productos.findByIdAndUpdate(params.id, data);

    if (!updateproductos) {
      return NextResponse.json(
        { message: "clients not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(updateproductos);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
