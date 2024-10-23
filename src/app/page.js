import Link from "next/link";

function page() {
  return (
    <div >
      <div className="flex flex-col items-center justify-center">

        <h1 className="text-6xl">Ultragym</h1>
        <br></br>
        <Link href={"/users"}>
          <h1>Lista de Usuarios</h1>
        </Link>
        <Link href={"/clientes"}>
          <h1> Crear Clientes</h1>
        </Link>
        <Link href={"/products"}>
          <h1> Lista de Productos</h1>
        </Link>
        <Link href={"/newproducts"}>
          <h1> Crear Productos</h1>
        </Link>
      </div>
    </div>
  );
}

export default page;
