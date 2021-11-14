const Select = ({selected, disabled, options, name, change}) => {
  console.log('Select RENDERIZADO');
  return (
    <>
      <div className="relative inline-block text-gray-700 mr-1 my-3" style={{ minWidth: '16%' }}>
        <select disabled={disabled} value={selected} onChange={change} className="uppercase w-full border rounded-none h-11 pl-3 pr-6 text-base placeholder-gray-600 border appearance-none focus:shadow-outline font-bold" placeholder="Regular input" style={{ padding: '0em .3em', background: disabled ? '#e2e2e2' : '#ffffff' }}>
          <option value={0}>{name}</option>
          {options?.map((o,key) => <option key={key} value={o}>{o}</option>)}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path>
          </svg>
        </div>
      </div>
    </>
  )
}

export { Select };