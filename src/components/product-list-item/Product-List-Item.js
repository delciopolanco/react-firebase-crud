const ItemSkeleton = () => {
  return (
    <div className="animate-pulse flex flex-col mb-8 w-2/6">
      <button className="block flex flex-col p-5 relative no-underline pointer rounded-md" style={{ flex: '1 0 auto', color: '#244983' }}>
        <div className="bg-gray-300 flex flex-wrap flex-row items-center justify-center relative mb-8 p-2 w-full" style={{ flex: '1 0 340px', maxHeight: '340px' }}>
        </div>
        <div className="text-2xl text-left font-bold bg-gray-300 w-3/6 h-6" style={{ color: '#244983', margin: '0 0 0.5em' }}></div>
        <div className="flex flex-col w-full" style={{ flex: '1 0 auto' }}>
          <div className="hidden">
          </div>
          <div className="justify-end">
            <div className="p-3 inline-block w-full border-none text-sm text-white uppercase text-center bg-gray-300">VER DETALLES</div>
          </div>
        </div>
      </button>
    </div>
  )
}

const Item = (name, picture) => {
  return (
    <div className="flex flex-col mb-8 w-2/6">
      <button className="block flex flex-col p-5 relative no-underline pointer hover:shadow-2xl rounded-md" style={{ flex: '1 0 auto', color: '#244983' }}>
        <div className="bg-gray-200 flex flex-wrap flex-row items-center justify-center relative mb-8 p-2" style={{ flex: '1 0 340px', maxHeight: '340px' }}>
          <img className="relative max-h-full align-middle max-w-full w-auto h-auto border-style border-none" src={picture} alt={name} />
        </div>
        <h3 className="text-2xl text-left font-bold" style={{ color: '#244983', margin: '0 0 0.5em' }}>{name}</h3>
        <div className="flex flex-col w-full" style={{ flex: '1 0 auto' }}>
          <div className="hidden">
          </div>
          <div className="justify-end">
            <div className="p-3 inline-block w-full border-none text-sm text-white uppercase text-center position transition duration-300 bg-primary ease-out hover:bg-red-600 font-bold">VER DETALLES</div>
          </div>
        </div>
      </button>
    </div>
  )
}

const ProductListItem = ({ name, picture, isLoading }) => {
  return <>{isLoading ? ItemSkeleton() : Item(name, picture)}</>
}

export { ProductListItem };