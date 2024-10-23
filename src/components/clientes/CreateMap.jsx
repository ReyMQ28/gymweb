import axios from "axios";

import DeleteButton from "@/app/users/DeleteButtom";

async function loadclientes() {
  const { data } = await axios.get("http://localhost:3000/api/clientesbyid");
  return data;
}

async function clientesTable() {
  const clientes = await loadclientes();

  return (
    
    <div className="grid  container w-auto px-80">
      <div className="">
        <div className="grid grid-cols-4 gap-2 p-2 ">
          <div> Eliminar </div>
          <div>Identificación</div>
          <div>Nombre</div>
          <div>Apellido</div>
        </div>
      </div>

      {clientes.map((cliente) => (
        <div key={cliente.id} className="">
          {" "}
          <div className="grid grid-cols-4">
            <div className=" flex justify-center items-center w-9 h-9 text-lg bg-red-500 rounded-full">
              {" "}
              <DeleteButton clienteId={cliente.id} />
            </div>
            <div>{cliente.identificación}</div>
            <div>{cliente.name}</div>
            <div>{cliente.lastname}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default clientesTable;
