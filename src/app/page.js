import Link from "next/link";

function page() {
  return (
    <div className="flex flex-row items-center justify-center">
      <div>
        <h1>Ultragym</h1>
        <Link href={"/users"}>
          <h1>Usuarios</h1>
        </Link>
        <Link href={"/clientes"}>
          <h1>Clientes</h1>
        </Link>
      </div>
    </div>
  );
}

export default page;
