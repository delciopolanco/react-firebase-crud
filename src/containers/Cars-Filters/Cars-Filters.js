import { Select, Button, Tabs } from '../../components';
import { useState, memo } from 'react';
import { useApi } from '../../hooks';

const yearsMapper = (years) => {
  return years[0].years;
}

const brandsMapper = (brands) => {
  return brands;
}

const CarsFilters = memo(({ carTabs, car, onSearch }) => {
  const brands = useApi('BRANDS', brandsMapper, []);
  const yearOptions = useApi('YEARS', yearsMapper, []);
  const [brandOptions, setBrandsOptions] = useState([]);
  const [modelsOptions, setModelsOptions] = useState([]);
  const [motorsOptions, setMotorsOptions] = useState([]);

  const [year, setYear] = useState(0);
  const [brand, setBrand] = useState(0);
  const [model, setModel] = useState(0);
  const [motor, setMotor] = useState(0);

  const [isLoading] = useState(false);

  const onChangeHandlerCars = (name) => {
    console.log(name);
  }

  const isSelectDisabled = (options) => {
    return !options || options.length === 0 ? true : false;
  }

  const yearsHandler = (e) => {
    const selectedYear = Number(e.target.value);
    const seletedBrands = brands.filter(b => b.years.includes(selectedYear)).map(b => b.name);
    setYear(selectedYear);
    setBrandsOptions(seletedBrands);
    setModelsOptions([]);
    setMotorsOptions([]);
    setBrand(0);
    setModel(0);
    setMotor(0);
  }

  const brandHandler = (e) => {
    const selectedBrand = String(e.target.value);
    const selectedModels = brands.filter(b => b.name === selectedBrand).map(m => m.models.map(n => n.name))[0];
    setBrand(selectedBrand);
    setModelsOptions(selectedModels ? selectedModels : []);
    setMotorsOptions([]);
    setModel(0);
    setMotor(0);
  }

  const modelHandler = (e) => {
    const selectedModel = String(e.target.value);
    const selectedMotors = brands.find(b => b.name === brand).models.find(m => m.name === selectedModel);
    setMotorsOptions(selectedMotors && selectedMotors.motors.length ? selectedMotors.motors : null);
    setModel(selectedModel);
    setMotor(0);
  }

  const motorHandler = (e) => {
    setMotor(e.target.value);
  }


  return (
    <div className="w-full block text-center">
      <Tabs tabs={carTabs} selected={car} style={{
        height: '100px', ...{
          overflowY: 'hidden',
          maxHeight: '100px',
          transitionProperty: 'all',
          transitionDuration: '.5s',
          transitionTimingFunction: 'cubic-bezier(0, 1, 0.5, 1)'
        }
      }} onChange={(name) => onChangeHandlerCars(name)} ></Tabs>
      <div className="flex flex-colum flex-wrap  justify-center relative mb-8 p-2 justify-center">
        <Select name={'año'} options={yearOptions} disabled={isSelectDisabled(yearOptions)} selected={year} change={yearsHandler} />
        <Select name={'marca'} options={brandOptions} disabled={isSelectDisabled(brandOptions)} selected={brand} change={brandHandler} />
        <Select name={'modelo'} options={modelsOptions} disabled={isSelectDisabled(modelsOptions)} selected={model} change={modelHandler} />
        {motorsOptions != null ? <Select name={'motor'} options={motorsOptions} disabled={isSelectDisabled(motorsOptions)} selected={motor} change={motorHandler} /> : null}
        <div className="mr-1 my-3 max-width " style={{ minWidth: '16%' }}>
          <Button value="Buscar" onClickButton={onSearch} disabled={isLoading}></Button>
        </div>
      </div>
    </div>
  )
})

export { CarsFilters }