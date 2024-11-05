import axios from "axios";

import DeleteButton from "@/app/newproducts/DeleteButtomProducts";

async function loadproducts() {
  const { data } = await axios.get("/api/products");
  return data;
}

async function ProductsTable() {
  const products = await loadproducts();

  return (
    <div className="grid w-auto">
      <div className="">
        <div className="grid grid-cols-6 gap-4 p-2 text-center">
          <div> Eliminar </div>
          <div>Nombre</div>
          <div>Costo Unitario </div>
          <div>Precio Unitario</div>
          <div>Existencias</div>
          <div>Estado</div>
        </div>
      </div>

      {products.map((product) => (
        <div key={product.id} className="">
          {" "}
          <div className="grid grid-cols-6 text-center">
            <div className=" flex justify-center items-center w-9 h-9 text-lg bg-red-500 rounded-full">
              {" "}
              <DeleteButton productId={product.id} />
            </div>
            <div>{product.name}</div>
            <div>{product.unityCost}</div>
            <div>{product.unityPrice}</div>
            <div>{product.existence}</div>
            <div>{product.status}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductsTable;
