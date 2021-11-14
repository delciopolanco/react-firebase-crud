import { useForm } from "react-hook-form";
import { Button } from "../../components";
import { memo } from 'react';

const SpectForm = memo(({ submit }) => {
  console.log("SpectForm RENDERIZADO");
  const { register, handleSubmit, setValue, watch} = useForm();
  const name = watch("name");
  const value = watch("value");

  const onSubmit = data => {
    setValue('name', '');
    setValue('value', '');
    submit(data);
  }

  return (
    <div className="inline">
      <input {...register("name", { required: true })} className="py-2 shadow appearance-none border  px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-red-500" id="grid-last-name" type="text" placeholder="Nombre" />
      <input {...register("value", { required: true })} className="py-2 ml-3  shadow appearance-none border  px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-red-500" id="grid-last-name" type="text" placeholder="Valor" />
      <div className="ml-3 inline">
        <Button value={'Agregar'} disabled={!name || !value } onClick={handleSubmit(onSubmit)}  type={"button"} />
      </div>
    </div>
  )
})

export { SpectForm }