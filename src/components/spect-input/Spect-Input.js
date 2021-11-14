import './Spect-input.css';

const SpectInput = ({ withBackground, name, value, onClick }) => {
  console.log('SpectInput RENDERIZADO');

  const classes = `spect ${withBackground ? 'bg-gray-200' : 'bg-transparent'} flex flex-row flex-wrap text-base p-1`;

  return (
    <div className={`mb-4 relative ${classes}`} style={{ width: '48%' }}>
      <div className="font-bold" style={{ width: '70%' }}>{name}</div>
      <div className="font-normal text-right" style={{ width: '30%' }}>{value}</div>
      <i onClick={onClick} className='icon-close absolute cursor-pointer h-4 w-4' style={{ top: '-8px', right: '-6px' }}></i>
    </div>
  )
}

export { SpectInput };