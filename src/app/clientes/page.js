import CreateMap from "../../components/clientes/CreateMap";
import Link from "next/link";

function Clientes() {
  return (
    <div className="flex flex-col justify-center items-center gap-7 w-full pl-72">
      <div className="flex flex-row justify-start items-center w-full">
        <Link href={"/users"}>
          <button className="bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Crear Clientes
          </button>
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <h1>Lista de Clientes</h1>
        <CreateMap />
      </div>
    </div>
  );
}

export default Clientes;
