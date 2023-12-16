import Profile from "../components/profile"
import PortfolioList from "../components/portfolio-list"
import { useState } from "react"

function Portfolio() {
  const [dataProfile, _setDataProfile] = useState<IProfile>(JSON.parse(localStorage.getItem("data-profile")!));
  const [dataPortfolio, _setDataPortfolio] = useState<IPortfolio[]>(JSON.parse(localStorage.getItem("data-portfolio")!));

  console.log(dataProfile.deskripsi)

  return (
    <>
      {/* Profile */}
      <Profile
        heroImage="https://forumkamera.com/wp-content/uploads/2023/04/Teknik-Fotografi-Landscape.jpg"
        profileImage="https://asset-a.grid.id/crop/0x0:798x407/945x630/photo/2018/09/13/1663191125.jpg"
        name={dataProfile.name}
        title={dataProfile.title}
        description={dataProfile.deskripsi}
      />

      {/* Porfolio */}
      <section className="w-[80%] mx-auto mt-10">
        <h2 className="text-lg font-bold mb-4">Portfolio</h2>
        {dataPortfolio?.map(item => (
          <PortfolioList
            key={item.skils}
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