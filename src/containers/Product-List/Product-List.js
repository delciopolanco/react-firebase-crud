
import { ProductListItem } from '../../components';

const ProductList = ({ name, items }) => {
 
  return (
    <div className="block w-full my-8">
      {
        items && items.length ?
          <div className="flex flex-wrap ">
            <h3 className="text-4xl" style={{ flex: '1 100%' }}>{name}</h3>
            {items.map((item, key) => <ProductListItem key={key} name={item.name} picture={item.pictures[0]} />)}
          </div> : null
      }
    </div>
  )
}

export { ProductList };