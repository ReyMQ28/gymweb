"use client"
import products from "@/app/products/page";
import ProductTarget from "@/components/products/ProductTarget";

function NewProdcts() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1>Crear Productos</h1>
      <ProductTarget  />
      </div>

    
  )
}

export default NewProdcts