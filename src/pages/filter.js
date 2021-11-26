import { CarsFilters, AccesoriesFilters, ProductList } from '../containers';
import { Tabs } from '../components';
import { CarTabs, CategoriesTabs, CONFIG } from '../enums';
import { useState } from 'react';
import { API } from '../services';


const Filter = () => {
  const categoriesTabs = CategoriesTabs;
  const carTabs = CarTabs;
  const [category, setCategory] = useState(CONFIG.DEFAULT_CATEGORY_TAB);
  const [car] = useState(CONFIG.DEFAULT_CAR_TAB);
  const [items, setItems] = useState([]);

  const getProducts = async ({ year, brand, model, motor }) => {
    const products = await API.PRODUCTS.getProductsBasedOnCriteria({
      category,
      years: year ? [year] : null,
      brands: brand ? [brand] : null,
      models: model ? [model] : null,
      motor: motor ? [motor] : null
    });

    setItems(products.docs.map((doc) => ({ ...doc.data() })));
  }


  const onChangeHandlerCategories = (name) => {
    setCategory(name);
    console.log(name);
  }

  const FiltersContainer = () => {
    return category === CONFIG.DEFAULT_CATEGORY_TAB ? <CarsFilters carTabs={carTabs} car={car} onSearch={getProducts} /> : <AccesoriesFilters onSearch={(e) => console.log('hey')} />;
  }

  const ProductsContainer = () => {
    return <ProductList name={'Baterias'} items={items} />;
  }

  const TabsContainer = () => {
    return (
      <div className="title m-0 flex flex-wrap justify-center p-0 w-auto list-none">
        <h2 className="block text-center text-lg font-medium" style={{ flex: '1 0 100%' }}>Buscador de productos</h2>
        <Tabs tabs={categoriesTabs} selected={category} style={{ height: '40px' }} onChange={(name) => onChangeHandlerCategories(name)} />
      </div>
    );
  }

  return (
    <div className="flex flex-colum flex-wrap items-center justify-center">
      {TabsContainer()}
      {FiltersContainer()}
      {ProductsContainer()}
    </div>
  )
}

export { Filter };
