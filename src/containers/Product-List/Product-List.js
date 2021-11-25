
import { ProductListItem } from '../../components';


const Items = (name, items) => {
  return (
    <>
      {
        items && items.length ?
          <div className="flex flex-wrap ">
            <h3 className="text-4xl" style={{ flex: '1 100%' }}>{name}</h3>
            {items.map((item, key) => <ProductListItem key={key} name={item.name} picture={item.pictures[0]} />)}
          </div> : null
      }
    </>
  )
}

const ItemSkeletons = (name) => {
  return (
    <>
      {
        <div className="flex flex-wrap ">
          <div style={{ flex: '1 100%' }}>
            <span className="block animate-pulse font-bold bg-gray-300 w-1/5 h-6"></span>
          </div>
          {[1, 1, 1].map((_, key) => <ProductListItem key={key} isLoading={true} />)}
        </div>
      }
    </>
  )
}

const ProductList = ({ name, items, isLoading }) => {

  return (
    <div className="block w-full my-8">
      {
        isLoading ? ItemSkeletons(name) : Items(name, items)
      }
    </div>
  )
}

export { ProductList };