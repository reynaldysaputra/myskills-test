import Profile from "../components/profile"
import PortfolioList from "../components/portfolio-list"
import { useState } from "react"

function Portfolio() {
  const [dataProfile, _setDataProfile] = useState<IProfile>(JSON.parse(localStorage.getItem("data-profile")!));
  const [dataPortfolio, _setDataPortfolio] = useState<IPortfolio[]>(JSON.parse(localStorage.getItem("data-portfolio")!));
  const [dataHaroImage, _setDataHeroImage] = useState<IFileImage>(JSON.parse(localStorage.getItem("data-hero-img")!));
  const [dataProfileImage, _setDataProfileImage] = useState<IFileImage>(JSON.parse(localStorage.getItem("data-profile-img")!));

  return (
    <>
      {/* Profile */}
      <Profile
        heroImage={dataHaroImage?.base64Image}
        profileImage={dataProfileImage?.base64Image}
        name={dataProfile.name}
        title={dataProfile.title}
        description={dataProfile.deskripsi}
      />

      {/* Porfolio */}
      <section className="w-[80%] mx-auto mt-10">
        <h2 className="text-lg font-bold mb-4">Portfolio</h2>
        {dataPortfolio?.map((item, index) => (
          <PortfolioList
            key={index}
            posisi={item.posisi}
            perusahaan={item.perusahaan}
            skils={item.skils}
            dateStart={item.tanggalMulai}
            dateEnd={item.tanggalSelesai}
            description={item.deskripsiPortfolio}
          />
        ))}
      </section>
    </>
  )
}

export default Portfolio