"use client";
import { useState, useEffect } from "react";
import { MdDeleteForever } from "react-icons/md";
import { useRouter, useParams } from "next/navigation";

function CreateMap() {
  const [clientes, setEventos] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const cargarClientes = async () => {
      const response = await fetch("http://localhost:3000/api/clientesbyid", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setEventos(data.reverse());
    };

    cargarClientes();
    
  }, []);

 
  return (
    <div className="grid container w-auto px-80">
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
            <div className=" flex justify-center items-center  text-lg bg-red-500 rounded-full"
          
            >
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

export default CreateMap;
