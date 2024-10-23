import CreateProducts from '@/components/products/CreateMapProducts'

function Products() {
  return (
    <div className='flex flex-col justify-center items-center '>
      <h1>Lista de Productos</h1>
      <br></br>
      <CreateProducts />
      </div>
  )
}

export default Products