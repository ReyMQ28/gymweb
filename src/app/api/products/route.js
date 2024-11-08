import { NextResponse } from "next/server";
import { connectMongoDB } from "@/libs/mongodb";
import Productos from "@/models/productos";


export async function GET() {

  await connectMongoDB();
 
  try {
    const productos = await Productos.find({});
    return NextResponse.json(productos);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function POST(request) {

  await connectMongoDB();
  
  try {
    const { name, unityCost, unityPrice, existence, status } = await request.json();  

    await Productos.create({
      name: name,
      unityCost: unityCost,
      unityPrice: unityPrice,
      existence: existence,
      status: status,   
       
    });

    return NextResponse.json({
      name,
      unityCost,
      unityPrice,
      existence,  
      status,   
      message: "producto creado",
    });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 404 });
  }
}
