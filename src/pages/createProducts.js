import { SpectInput, Button, ImageUploader } from '../components';
import { SpectForm } from '../containers';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { useApi } from "../hooks";
import { CONFIG } from '../enums';
import { API } from '../services';

const CreateProducts = () => {
  console.log('CreateProducts RENDERIZADO');
  const categories = useApi('CATEGORIES', (cat) => cat[0].categories, []);
  const [spects, setSpects] = useState([]);
  const { register, handleSubmit, formState: { errors }, watch, setValue, reset } = useForm();
  const [images, setImages] = useState({
    main: '',
    pictures: []
  });

  const showFilters = watch("category");

  const onSubmit = async (data) => {
    try {
      await API.PRODUCTS.saveWithImages({
        name: data.name,
        description: data.description,
        reference: data.reference,
        code: data.code,
        category: data.category,
        spects: data.spects,
      }, data.images);

      resetForm();

    } catch (error) {
      console.log(error);
    }
  }

  const formError = (name, validation, error) => {
    if (!name || !validation || !error) return;

    return <p className="text-red-500 text-xs italic">{errors[name]?.type === validation && error}</p>
  }

  const validateOption = (option) => option !== "0";

  const validateImages = () => images.main !== "";

  const addImages = (pics) => {
    const pictures = [...pics.pictures];
    pictures.push(pics.main);
    setValue('images', pictures);
    setImages(pics);
  }

  const addSpect = ({ name, value }) => {
    const spect = [...spects, { name, value }];
    setSpects(spect);
    setValue('spects', spect);
  }

  const removeSpect = (e, key) => {
    if (e) e.stopPropagation();
    const spectItems = [...spects];
    spectItems.splice(key, 1);
    setSpects(spectItems);
    setValue('spects', spectItems);
  }

  const resetForm = (e) => {
    if (e) e.preventDefault();
    reset({
      name: '',
      description: '',
      reference: '',
      code: '',
      category: 0,
      spects: '',
      images: ''
    });
    setImages({
      main: '',
      pictures: []
    });
    setSpects([]);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-wrap mb-6 py-1 px-4 justify-end">
        <Button onClick={resetForm} outline={true} value={"Cancelar"} type={"button"} />
        <Button value={"Guardar"} type={"submit"} />
      </div>
      <div className="grid grid-cols-2">
        <div className="block flex flex-col p-5 relative no-underline pointer rounded-md" style={{ flex: '1 0 auto', color: '#244983' }}>
          <ImageUploader images={images} setImages={addImages} />
          <input type="hidden" {...register("images", { validate: validateImages })} />
          {formError("images", "validate", "Es necesario agregar una imagen para el producto")}
        </div>
        <div className="w-full max-w-lg p-5">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                Name
              </label>
              <input {...register("name", { required: true })} name="name" className="py-1 px-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-red-500" id="grid-first-name" type="text" placeholder="Bateria LTH" />
              {formError("name", "required", "El nombre del producto es requerido")}
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2  px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                Código de Producto
              </label>
              <input {...register("code", { required: true })} name="code" className="py-1 px-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-red-500" id="grid-last-name" type="text" placeholder="LT-13-12-001" />
              {formError("code", "required", "El código del producto es requerido")}
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                Categoria
              </label>
              <div className="relative">
                <select {...register("category", { required: true, validate: validateOption })} className="py-1 px-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-red-500" id="grid-state">
                  <option value={0}>Seleccionar..</option>
                  {categories.map((category, key) => {
                    return <option key={key} value={category}>{category}</option>
                  })}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
                {formError("category", "required", "La categoria del producto es requerido")}
                {formError("category", "validate", "La categoria del producto es requerido")}
              </div>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                Referencia
              </label>
              <input {...register("reference")} className="py-1 px-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-red-500" id="grid-password" type="text" placeholder="001-220-00020" />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                Descripción
              </label>
              <textarea {...register("description")} className="py-1 px-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-red-500" id="grid-password" rows="3" placeholder="Descripción del producto" />
            </div>
          </div>
        </div>
      </div>

      <div className="specs mb-8">
        <div className="mb-8">
          <h2 className="text-2xl text-left font-bold inline" style={{ color: '#244983', margin: '0 0 0.5em' }}>Especificaciones</h2>
        </div>
        <div className="block">
          <div className="flex flex-wrap w-full">
            <div className="flex flex-row flex-wrap justify-between w-full">
              {spects.map((a, key) => <SpectInput key={key} name={a.name} value={a.value} onClick={(e) => removeSpect(e, key)} />)}
            </div>
          </div>
          <SpectForm submit={addSpect} />
        </div>
      </div>

      {
        showFilters === CONFIG.DEFAULT_CATEGORY_TAB &&
        <div className="filters">
          <h2 className="text-2xl text-left font-bold" style={{ color: '#244983', margin: '0 0 0.5em' }}>Filtros</h2>
        </div>
      }

    </form>
  )
}

export { CreateProducts }