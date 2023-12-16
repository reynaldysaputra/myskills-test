interface ProfileProps{
  heroImage: string,
  profileImage: string,
  name: string,
  title: string,
  description: string
}

export const Profile: React.FC<ProfileProps> = ({
  heroImage, 
  profileImage, 
  name, 
  title, 
  description
}) => {
  return (
    <div className="w-full">
      {/* Section Hero Image */}
      <img 
        src={heroImage}
        className={`w-full h-[240px] md:h-[420px] object-cover object-center`}
      />

      {/* Section Profile */}
      <section className="w-full">
        <div className="w-[80%] md:w-[50%] mx-auto flex flex-col items-center -mt-14 md:-mt-28">
          <img
            src={profileImage}
            className="w-[160px] h-[160px] rounded-full bg-cover"
          />
          <p className="text-lg	font-bold mt-5">{name}</p>
          <p className="text-md text-[#878787] mb-2">{title}</p>
          {
            description.split("\n").map((item, index) => 
              <p key={index} className="text-[#151B26] text-sm mt-1 self-start">{item}</p>
            )
          }
        </div>
      </section>
    </div>
  )
}

export default Profile