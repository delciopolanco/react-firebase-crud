import { memo } from 'react';

const Button = memo(({ value, onClickButton, disabled, isLoading, type = "button", outline = false }) => {
  let isDisabled = disabled ? 'bg-gray-300' : '';
  let isOutLine = outline ? 'border-2 border-red-500 hover:border-gray-500 text-black' : (isDisabled ? '' : 'bg-red-700 text-white border-none');
  let addedClases = `${isDisabled} ${isOutLine}`;
  
  return (
    <button disabled={disabled || isLoading} onClick={onClickButton} type={type} className={`ml-4 p-2 rounded-none text-center w-full inline-block uppercase font-semibold no-underline cursor-pointer transition ease-in-out duration-150 ${addedClases}`} style={{ maxWidth: '180px', height: '41px', padding: '.5em 1em', cursor: disabled ? 'not-allowed' : 'pointer' }}>
      {isLoading ? <svg className="inline animate-spin -ml-1 mr-3 h-5 w-5 text-green" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg> : null}
      {isLoading ? 'Procesando..' : value}
    </button>
  )
})

export { Button };