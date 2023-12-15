import PortfolioList from "../components/portfolio"
import Profile from "../components/profile"

function Portfolio() {
  return (
    <>
      {/* Profile */}
      <Profile
        heroImage="https://forumkamera.com/wp-content/uploads/2023/04/Teknik-Fotografi-Landscape.jpg"
        profileImage="https://asset-a.grid.id/crop/0x0:798x407/945x630/photo/2018/09/13/1663191125.jpg"
        name="Reynaldy Saputra"
        title="Frontend Developer"
        description="Deskripsi, lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet "
      />

      {/* Porfolio */}
      <section className="w-[80%] mx-auto mt-10">
        <h2 className="text-lg font-bold mb-4">Portfolio</h2>
        <PortfolioList
          title="Frontend Developer"
          skils="React js, Next js, Typescript"
          dateStart="January 2022"
          dateEnd="Desember 2022"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel laudantium, quae reiciendis odio veritatis expedita repellendus beatae vitae error. Odio eos debitis itaque nulla! Sit facere corporis quam eius rem tempora natus maiores neque, odio doloremque rerum vero. Saepe dolorem dolorum reprehenderit quidem, a expedita facere neque quos excepturi doloremque."
        />
      </section>
    </>
  )
}

export default Portfolio