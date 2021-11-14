import { Button, SelectSearch } from '../../components';


const AccesoriesFilters = () => {
  const style = { color: '#244983', maxWidth: '35%', height: '40px' };
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  return (
    <div className="block w-full my-4 flex  flex-wrap flex-row block justify-center bg-gray-200">
      <div className="align-middle w-full p-0 m-4 text-base uppercase font-bold mx-1" style={style}>
        <SelectSearch placeholder={'TIPO DE PRODUCTO'} options={options} />
      </div>

      <div className="align-middle w-full p-0 m-4 text-base uppercase font-bold mx-1" style={style}>
        <SelectSearch placeholder={'CODIGO'} options={options} />
      </div>

      <div className="align-middle w-full p-0 m-4 text-base uppercase font-bold mx-1" style={{ ...style, textAlign: 'left', maxWidth: '15%' }}>
        <Button value="Buscar"></Button>
      </div>
    </div>
  )
}

export { AccesoriesFilters }