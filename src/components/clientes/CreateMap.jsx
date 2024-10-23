import axios from "axios";

async function loadclientes() {
  const { data } = await axios.get("http://localhost:3000/api/clientesbyid");
  return data;
}

async function clientesTable() {
  const clientes = await loadclientes();

  return (
    <div className="">
      {clientes.map((cliente) => (
        <div key={cliente.id}>
          <div className="flex justify-center items-center  gap-4">
            <div> delete </div>
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
