import { memo } from 'react';

const TabItem = memo(({ name, icon, onClick, isSelected }) => {
  console.log('TabItem RENDERIZADO');
  const tabItemStyle = {
    opacity: '.47',
    borderBottom: 'none',
    fontWeight: '400',
    fontSize: '.875rem'
  };

  const tabItemActived = {
    borderBottom: '5px solid #d61534', 
    paddingBottom: '.5em', 
    opacity: '1', 
    fontSize: '1rem',
    fontWeight: '700',
    transition: 'all .2s ease-out'
  };

  const iconStyle = {
    height: '30px',
    width: '40px',
  };

  const iconStyleActive = {
    height: '50px',
    width: '50px'
  };
 
  const clickHandler = (e) => {
    e.preventDefault();
    onClick(e, name);
  }

  return (
    <button onClick={(e) => clickHandler(e)} className="text-base font-normal appearance-none flex items-center flex-col p-0  cursor-pointer active:bg-green-700" style={isSelected ? tabItemActived : tabItemStyle }>
      {icon ? <i className={icon} style={isSelected ? iconStyleActive : iconStyle}></i> : <></> }
      {name}
    </button>
  )
})

export { TabItem }