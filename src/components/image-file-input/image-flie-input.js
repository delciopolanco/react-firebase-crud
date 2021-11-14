import { memo, useRef } from 'react';

const ImageFileInput = memo(({ handleFile, className }) => {
  console.log('ImageFileInput RENDERIZADO');

  const hiddenFileInput = useRef(null);

  const handleClick = event => {
    hiddenFileInput.current.click();
  };

  // Call a function (passed as a prop from the parent component)
  // to handle the user-selected file 
  const handleChange = (event) => {
    if (event) event.stopPropagation();

    const files = Array.from(event.target.files);
    const supportedFiles = supoortedFiles(files);
    const unSupportedFiles = unSupoortedFiles(files);

    if (unSupportedFiles.length > 0) {
      const unSupoortedFilesName = unSupportedFiles.map(f => f.name);
      console.log("Los siguientes archivos no son soportados, ", unSupoortedFilesName);
    }

    if (supportedFiles.length > 0)
      handleFile(supportedFiles);
  };

  const unSupoortedFiles = (files) => {
    return files.filter(f => ['image/png', 'image/jpeg', 'image/gif'].indexOf(f.type) < 0);
  }

  const supoortedFiles = (files) => {
    return files.filter(f => ['image/png', 'image/jpeg', 'image/gif'].indexOf(f.type) >= 0);
  }

  return (
    <>
      <button type="button" onClick={handleClick} className={className}>
        Agregar Imagen
      </button>
      <input ref={hiddenFileInput} onChange={handleChange} type="file" multiple="multiple" className="invisible" />
    </>

  )
})

export { ImageFileInput }