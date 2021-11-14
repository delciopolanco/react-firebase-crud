import { useEffect, useState } from 'react';
import { ProductListItem } from '../../components';
import { API } from '../../services';

const ProductList = ({ name }) => {
  const [items, setItems] = useState([]);

  const getProducts = async () => {
    const products = await API.PRODUCTS.get();
    setItems(products.docs.map((doc) => ({ ...doc.data() })));
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="block w-full my-8">
      <div className="flex flex-wrap ">
        <h3 className="text-4xl" style={{ flex: '1 100%' }}>{name}</h3>

        {items.map((item, key) => <ProductListItem key={key} name={item.name} picture={item.pictures[0]} />)}
      </div>
    </div>
  )
}

export { ProductList };