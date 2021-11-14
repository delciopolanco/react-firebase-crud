import { memo } from 'react';

const ImageWithButton = memo(({ image, name, onRemove, iconHeigth }) => {
  console.log('ImageWithButton RENDERIZADO');

  const top = iconHeigth.indexOf('4') > 0 ? '-9px' : '-19px';
  const right = iconHeigth.indexOf('4') > 0 ? '-9px' : '-16px';

  return (
    <>
      <img className="relative max-h-full align-middle max-w-full w-auto h-auto border-style border-none" src={image} alt={name} />
      <i onClick={onRemove} className={`icon-close absolute cursor-pointer ${iconHeigth}`} style={{ top, right }}></i>
    </>

  )
})

export { ImageWithButton }