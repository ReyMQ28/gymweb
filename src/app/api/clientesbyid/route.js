import { NextResponse } from "next/server";
import { connectMongoDB } from "@/libs/mongodb";
import Clientes from "@/models/clientes";


export async function GET() {
  await connectMongoDB();
  try {
    const clientes = await Clientes.find({});
    return NextResponse.json(clientes);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  await connectMongoDB();
  try {
    const { name, identificación, lastname } = await request.json();

    await Clientes.create({
      identificación: identificación,
      name: name,
      lastname: lastname,
    });

    return NextResponse.json({
      identificación,
      name,
      lastname,
      message: "cliente creado",
    });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 404 });
  }
}
