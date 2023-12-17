import Dropzone, { DropzoneProps } from 'react-dropzone'
import Modal from 'react-modal';
import { useState } from 'react';
import { MdCloseFullscreen } from "react-icons/md";
import { MdOutlineAttachment } from "react-icons/md";

interface FileInputProps extends DropzoneProps {
  lable: string,
  pathImage?: string,
  base64Image: string
}

export const FileInput:React.FC<FileInputProps> = ({
  lable, 
  pathImage,
  base64Image,
  ...rest
}) => {
  const [isOpenPreviewImg, setIsOpenPreviewImg] = useState(false);

  return (
    <section className="w-full mb-10">
      <div className="flex justify-between items-center">
        <p className="decoration-solid underline">{lable}</p>
        <MdCloseFullscreen size={20} />
      </div>
      <div className="mt-5">
        <Dropzone
          {...rest}
        >
          {({getRootProps, getInputProps}) => (
            <section className="w-full bg-[#EBEBEB] rounded-lg flex justify-center items-center cursor-pointer">
              <div className="flex justify-center items-center flex-col w-full p-10" {...getRootProps()}>
                <input {...getInputProps()} />
                <MdOutlineAttachment size={20} />
                <p className="decoration-solid underline mt-3 text-center text-[#6B6B6B]">Drag and drop files, or <span className="text-blue-600">Browse</span></p>
                
                {pathImage ? (
                  <>
                    <p className="decoration-solid underline mt-3 text-center text-green-500 text-sm">{pathImage}</p>                  
                    <button 
                      type='button'
                      className="decoration-solid underline mt-3 text-center text-sm text-[#6B6B6B]"
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsOpenPreviewImg(true);
                      }}
                    >
                      Preview Image
                    </button>                  
                  </>
                ) : (
                  <>
                    <p className="decoration-solid underline mt-3 text-center text-[#9F9F9F] text-sm">Support formats : png, jpg, jpeg, mp4.</p>
                    <p className="decoration-solid underline mt-1 text-center text-[#9F9F9F] text-sm">Max size : 500Mb</p>
                  </>
                )}
              </div>
            </section>
          )}
        </Dropzone>
      </div>

      {/* Preview image */}
      <Modal
        isOpen={isOpenPreviewImg}
        ariaHideApp={false}
        overlayClassName={"fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-30"}
        className={'w-full h-full mx-auto flex justify-center items-center'}
      >
        <p
          className='absolute top-10 right-10 text-lg font-bold cursor-pointer'
          onClick={() => setIsOpenPreviewImg(false)}
        >
          X
        </p>
        <img 
          src={base64Image}
          className='w-[30%]' 
          alt="image-preview" 
        />
      </Modal>
    </section>
  )
}

export default FileInput