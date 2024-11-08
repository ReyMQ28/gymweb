import { NextResponse } from "next/server";
import { connectMongoDB } from "@/libs/mongodb";
import Clientes from "@/models/clientes";


// GET /api/products/ID
export async function GET(request, { params }) {

  await connectMongoDB();

  try {
    const clientes = await Clientes.findById(params.id);
    if (!clientes) {
      return NextResponse.json(
        { message: "clients not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(clientes);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

// DELETE /api/products/ID
export async function DELETE(request, { params }) {
  await connectMongoDB();
  try {
    const deletedClientes = await Clientes.findByIdAndDelete(params.id);
    if (!deletedClientes) {
      return NextResponse.json(
        { message: "clients not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(deletedClientes);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

// PUT /api/products/ID
export async function PUT(request, { params }) {
  await connectMongoDB();
  try {
    const data = await request.json();
    const updateClientes = await Clientes.findByIdAndUpdate(params.id, data);

    if (!updateClientes) {
      return NextResponse.json(
        { message: "clients not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(updateClientes);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
