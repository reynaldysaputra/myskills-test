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
        src={
          heroImage === null || heroImage === undefined ? 
          "https://i.pinimg.com/736x/a3/b3/af/a3b3afff5e457dbea716d4278c56b3f6.jpg" : 
          heroImage
        }
        className={`w-full h-[240px] md:h-[420px] object-cover object-center`}
      />

      {/* Section Profile */}
      <section className="w-full">
        <div className="w-[80%] md:w-[50%] mx-auto flex flex-col items-center -mt-14 md:-mt-28">
          <img
            src={
              profileImage === null || profileImage === undefined ?
              "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" : 
              profileImage
            }
            className="w-[160px] h-[160px] rounded-full bg-cover"
          />
          {
            name === null || name === undefined ? 
            <p className="text-lg	font-bold mt-5">No Profile</p> : 
            (
              <>              
                <p className="text-lg	font-bold mt-5">{name}</p>
                <p className="text-md text-[#878787] mb-2">{title}</p>
                {
                  description.split("\n").map((item, index) => 
                    <p key={index} className="text-[#151B26] text-sm mt-1 self-start">{item}</p>
                  )
                }
              </>
            )

          }
        </div>
      </section>
    </div>
  )
}

export default Profile