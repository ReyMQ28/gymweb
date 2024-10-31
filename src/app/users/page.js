import UserTarget from "@/components/clientes/UserTarget";
import CreateMap from "../../components/clientes/CreateMap";

function user() {
  return (
    <div className="flex flex-col justify-center items-center pl-60">
      <div className="">Crear Cliente</div>
      <br></br>
      <UserTarget />
    </div>
  );
}

export default user;
