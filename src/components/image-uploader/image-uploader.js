
import './image-uploader.css';
import { memo } from 'react';
import { ImageFileInput } from '../image-file-input/image-flie-input';
import { ImageWithButton } from '../image-with-button/image-with-button';

const ImageUploader = memo(({ images, setImages }) => {


  const handleOnChange = (files, type) => {
    if (files && files.length > 1) {
      setMultipleFiles(files);
    } else {
      setSingleFiles(files, type);
    }
  }

  const setMultipleFiles = (files) => {
    let main = images.main;
    let pictures = images.pictures;

    if (!main) {
      main = files.splice(0, 1)[0];
      main.image = URL.createObjectURL(main);
    }

    pictures = [...pictures, ...files.map(f => {
      f.image = URL.createObjectURL(f);
      return f;
    })];

    setImages({ ...images, ...{ main, pictures } });
  }

  const setSingleFiles = (file, type) => {
    if (type === 'main' || !images.main) {
      const main = file[0];
      main.image = URL.createObjectURL(main);
      setImages({ ...images, ...{ main } });
    } else {
      const pic = file[0];
      pic.image = URL.createObjectURL(pic);
      setImages({ ...images, ...{ pictures: [...images.pictures, pic] } });
    }
  }

  const removeImage = (type, key) => {
    const pictures = [...images.pictures];

    if (type === 'main') {
      if (pictures.length > 0) {
        const main = pictures.splice(key, 1);
        setImages({ ...images, ...{ main, pictures } });
      } else {
        setImages({ ...images, ...{ main: '' } });
      }
    } else {
      pictures.splice(key, 1);
      setImages({ ...images, ...{ pictures } });
    }
  }

  return (
    <>
      <div className="border-2 border-dashed flex flex-wrap flex-row items-center justify-center relative mb-2 p-2" style={{ flex: '1 0 340px', maxHeight: '240px' }}>
        {images?.main?.image ?
          <ImageWithButton iconHeigth={'h-8 w-8'} onRemove={(e) => removeImage('main')} image={images?.main?.image} name={"main"} /> :
          <ImageFileInput className={'absolute cursor-pointer max-h-full w-full h-full align-middle max-w-full w-auto h-auto border-style border-none hover:bg-gray-50'} handleFile={(e) => handleOnChange(e, 'main')} />
        }
      </div>
      <div className="flex flex-col w-full" style={{ flex: '1 0 auto' }}>
        <div className="justify-end">
          <div className="flex flex-nowrap items-left relative mb-8 p-2 overflow-hidden no-scrollbar" style={{ flex: '1 0 auto', maxHeight: '80px' }}>
            {images?.pictures.map((p, key) => {
              return <div key={key} className="border-2 border-dashed flex flex-wrap flex-row items-center justify-center relative mb-2 p-2 mr-4" style={{ flex: "1 0 auto", maxWidth: '80px' }}>
                <ImageWithButton iconHeigth={'h-4 w-4'} onRemove={(e) => removeImage('pic', key)} image={p.image ? p.image : null} name={`pic${key}`} />
              </div>
            })}
            <div className="border-2 border-dashed flex flex-wrap flex-row items-center justify-center relative mb-2 p-2 mr-4" style={{ flex: "1 0 auto", maxWidth: '80px' }}>
              <ImageFileInput className={'text-xs relative cursor-pointer max-h-full w-full h-full align-middle max-w-full w-auto h-auto border-style border-none hover:bg-gray-50'} handleFile={(e) => handleOnChange(e, 'pic')} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
})

export { ImageUploader }