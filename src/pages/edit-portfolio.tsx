import FileInput from "../components/file-input";
import Input from "../components/input";
import TextArea from "../components/textarea";
import { toast } from 'react-toastify';
import { Button } from "../components/button";
import { FiPlusCircle } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { resizeImage } from "../utils";
import { useEffect, useState } from "react";
import { MdCloseFullscreen } from "react-icons/md";
import { IoMdCloseCircleOutline } from "react-icons/io";

function EditPortfolio() {
  const navigation = useNavigate();
  const [error, setError] = useState(false);
  const [numbOfPortfolioForms, setNumberOfPortfolioForms] = useState([1]);
  const [fileHeroImg, setFileHeroImg] = useState<IFileImage>();
  const [fileProfileImg, setFileProfileImg] = useState<IFileImage>();
  const [profileInput, setProfileInput] = useState<IProfile>({
    name: "",
    title: "",
    deskripsi: ""
  });
  const [portfolioInput, setPortfolioInput] = useState<IPortfolio[]>([{
    posisi: "",
    skils: "",
    perusahaan: "",
    tanggalMulai: "",
    tanggalSelesai: "",
    deskripsiPortfolio: "" 
  }]);
  
  const onChange = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, indexs?: number) => {
    const {value, name} = e.currentTarget;

    setProfileInput((prev) => {
      return {...prev, [name]: value}
    })
    
    setPortfolioInput(
      portfolioInput.map((item, index) => index === indexs ? {...item, [name]: value} : item)
    )
  }

  const isPortfolioInputFilled = () => {
    // Mengecek apakah setiap objek dalam array sudah terisi
    return portfolioInput.every(item => (
      profileInput.name !== "" &&
      profileInput.title !== "" &&
      profileInput.deskripsi !== "" &&
      item.posisi !== "" &&
      item.skils !== "" &&
      item.perusahaan !== "" &&
      item.tanggalMulai !== "" &&
      item.tanggalSelesai !== "" &&
      item.deskripsiPortfolio !== ""
    ));
  };

  const handleSimpanPerubahan = (event: React.FormEvent<HTMLFormElement>) => {
    const isFilled = isPortfolioInputFilled();
    event.preventDefault();

    if(isFilled) {
      toast.success(
        localStorage.getItem("data-profile") === null ? 
        "Data Portfolio Berhasil Dibuat 👍" : 
        "Data Portfolio Berhasil Diperbarui 👏", 
        {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        pauseOnHover: false,
        closeOnClick: false,
        progress: undefined,
        theme: "light",
      });  

      localStorage.setItem("data-profile", JSON.stringify(profileInput));
      localStorage.setItem("data-portfolio", JSON.stringify(portfolioInput));
      localStorage.setItem('data-hero-img', JSON.stringify(fileHeroImg));
      localStorage.setItem('data-profile-img', JSON.stringify(fileProfileImg));
      navigation("/");       
    }else {
      setError(true);
    }
  }

  const getFileImage = (acceptedFiles: any, type: string) => {
    var file = acceptedFiles[0]
    const reader = new FileReader();
    reader.onload = (event) => {
      resizeImage(event.target?.result, 1200, 1200).then(base64 => {        
        const result:IFileImage = {
          type,
          pathImg: file.path,
          base64Image: base64
        }
  
        if(type === "bg-image"){
          setFileHeroImg(result);
        }else {
          setFileProfileImg(result);
        }
      })
    };
    reader.readAsDataURL(file);
  }

  useEffect(() => {
    if(
      localStorage.getItem("data-profile") != null ||
      localStorage.getItem("data-portfolio") != null ||
      localStorage.getItem("data-profile-img") != null ||
      localStorage.getItem("data-hero-img") != null 
    ){
      setNumberOfPortfolioForms(JSON.parse(localStorage.getItem("data-portfolio")!));
      setProfileInput(JSON.parse(localStorage.getItem("data-profile")!));
      setPortfolioInput(JSON.parse(localStorage.getItem("data-portfolio")!));
      setFileHeroImg(JSON.parse(localStorage.getItem("data-hero-img")!));
      setFileProfileImg(JSON.parse(localStorage.getItem("data-profile-img")!));
    }
  }, [])
  
  return (
    <div className="w-[90%] md:w-[80%] mx-auto mt-10">
      <form onSubmit={handleSimpanPerubahan}>
        {/* Background Image */}
        <FileInput
          lable="Background Image"
          maxFiles={1} // 5 gb
          value={fileHeroImg?.pathImg}
          onDrop={(e) => getFileImage(e, "bg-image")}
        />

        {/* Background Image */}
        <FileInput
          lable="Profile Image"
          maxFiles={1} // 5 gb
          value={fileProfileImg?.pathImg}
          onDrop={(e) => getFileImage(e, "profile-image")}
        />

        {/* Profile Input */}
        <section className="w-full mb-10">
          <div className="flex justify-between items-center">
            <p className="decoration-solid underline">Profile</p>
            <MdCloseFullscreen size={20} />
          </div>
          <div className="mt-5">
            <Input
              id="name"
              placeholder="Nama"
              type="text"  
              name="name"
              messageError="Nama harus diisi"  
              onChange={onChange}
              value={profileInput.name}
              error={error}
            />
            <Input
              id="title"
              placeholder="Title/Posisi"
              type="text"           
              name="title"   
              messageError="Title/Posisi harus diisi"
              onChange={onChange}
              value={profileInput.title}
              error={error}
            />
            <TextArea
              rows={5}
              id="deskripsi"
              name="deskripsi"
              placeholder="Deskripsi"
              messageError="Deskripsi harus diisi"
              onChange={onChange}
              value={profileInput.deskripsi}
              error={error}
            />
          </div>
        </section>

        {/* Add Portfolio Forms */}
        <section className="w-full flex justify-end mb-10">
          <button 
            type="button" 
            className="flex justify-center items-center"
            onClick={() => {
              if(numbOfPortfolioForms.length < 10){
                setNumberOfPortfolioForms(state => [...state, Math.random()]);
                const newPortfolioInput = [...portfolioInput];

                newPortfolioInput.push({
                  posisi: "",
                  skils: "",
                  perusahaan: "",
                  tanggalMulai: "",
                  tanggalSelesai: "",
                  deskripsiPortfolio: ""
                });
              
                setPortfolioInput(newPortfolioInput);
                setError(false);
              } 
            }}
          >
            <p className="mr-3">Add Portfolio</p>
            <FiPlusCircle size={20} />
          </button>
        </section>

        {/* Portfolio Input */}
        {numbOfPortfolioForms.map((item, index) => (
          <section className="w-full mb-10" key={index}>
            <div className="flex justify-between items-center">
              <p className="decoration-solid underline">Portfolio {index + 1}</p>
              <div className="flex justify-center items-center">
                <MdCloseFullscreen size={20} className='mr-3' />
                <button 
                  type="button" 
                  onClick={() => {
                    if(numbOfPortfolioForms.length > 1){
                      setNumberOfPortfolioForms(state => state.filter((numbOfPortfolioForms) => numbOfPortfolioForms !== item));
                      setPortfolioInput(state => state.filter((_portfolioInput, indexs) => indexs !== index));
                      
                      setError(false);
                    }
                  }}
                >
                  <IoMdCloseCircleOutline size={20} className='cursor-pointer' />
                </button>
              </div>
            </div>
            <div className="mt-5">
              <Input
                id="posisi"
                placeholder="Nama"
                type="text"    
                name="posisi"
                messageError={`Nama di portfolio ${index+1} harus diisi`}
                error={error}
                value={portfolioInput[index].posisi}
                onChange={(e) => onChange(e, index)}
              />
              <Input
                id="skils"
                name="skils"
                placeholder="Skils"
                type="text"              
                messageError={`Skills di portfolio ${index+1} harus diisi`}
                error={error}
                value={portfolioInput[index].skils}
                onChange={(e) => onChange(e, index)}
              />
              <Input
                id="perusahaan"
                name="perusahaan"
                placeholder="Perusahaan"
                type="text"              
                messageError={`Perusahaan di portfolio ${index+1} harus diisi`}
                error={error}
                value={portfolioInput[index].perusahaan}
                onChange={(e) => onChange(e, index)}
              />
              <div className="grid grid-cols-2 gap-5">
                <Input
                  id="tgl-mulai"
                  name="tanggalMulai"
                  placeholder="Tanggal Mulai"
                  type="text"   
                  messageError={`Tanggal Mulai di portfolio ${index+1} harus diisi`}
                  error={error} 
                  value={portfolioInput[index].tanggalMulai}
                  onChange={(e) => onChange(e, index)}
                />
                <Input
                  id="tgl-selesai"
                  name="tanggalSelesai"
                  placeholder="Tanggal Selesai"
                  type="text"              
                  messageError={`Tanggal Selesai di portfolio ${index+1} harus diisi`}
                  error={error}
                  value={portfolioInput[index].tanggalSelesai}
                  onChange={(e) => onChange(e, index)}
                />
              </div>
              <TextArea
                rows={5}
                id="deskripsi"
                name="deskripsiPortfolio"
                placeholder="Deskripsi"
                messageError={`Deskripsi di portfolio ${index+1} harus diisi`}
                error={error}
                value={portfolioInput[index].deskripsiPortfolio}
                onChange={(e) => onChange(e, index)}
              />
            </div>
          </section>
        ))}

        <Button
          name="Simpan Perubahan"
          typeButton="simpan-perubahan"
          type="submit"
          color={"#10A4B0"}
        />
      </form>
    </div>
  )
}
  
  export default EditPortfolio