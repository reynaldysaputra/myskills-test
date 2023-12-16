import Dropzone from 'react-dropzone'
import { MdCloseFullscreen } from "react-icons/md";
import { MdOutlineAttachment } from "react-icons/md";

interface FileInputProps {
  lable: string,
}

export const FileInput:React.FC<FileInputProps> = ({
  lable, 
}) => {
  return (
    <section className="w-full mb-10">
      <div className="flex justify-between items-center">
        <p className="decoration-solid underline">{lable}</p>
        <MdCloseFullscreen size={20} />
      </div>
      <div className="mt-5">
        <Dropzone onDrop={acceptedFiles => {
          var file = acceptedFiles[0]
          const reader = new FileReader();
          reader.onload = (event) => {
            console.log(event.target?.result);
          };
          reader.readAsDataURL(file);
        }}>
          {({getRootProps, getInputProps}) => (
            <section className="w-full bg-[#EBEBEB] rounded-lg flex justify-center items-center cursor-pointer">
              <div className="flex justify-center items-center flex-col w-full p-10" {...getRootProps()}>
                <input {...getInputProps()} />
                <MdOutlineAttachment size={20} />
                <p className="decoration-solid underline mt-3 text-center text-[#6B6B6B]">Drag and drop files, or <span className="text-blue-600">Browse</span></p>
                <p className="decoration-solid underline mt-3 text-center text-[#9F9F9F] text-sm">Support formats : png, jpg, jpeg, mp4.</p>
                <p className="decoration-solid underline mt-1 text-center text-[#9F9F9F] text-sm">Max size : 500Mb</p>
              </div>
            </section>
          )}
        </Dropzone>
      </div>
    </section>
  )
}

export default FileInput