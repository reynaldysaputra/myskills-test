interface PortfolioListProps {
  posisi: string,
  skils: string,
  perusahaan: string,
  dateStart: string,
  dateEnd: string,
  description: string
}

export const PortfolioList:React.FC<PortfolioListProps> = ({
  posisi, 
  skils, 
  perusahaan,
  dateStart, 
  dateEnd, 
  description
}) => {
  return (
    <div className="w-full shadow-md shadow-[#D7E1EE94] rounded-md p-5 mt-5">
      <h2 className="text-md font-semibold">{posisi}</h2>
      <h2 className="text-md font-medium">{perusahaan}</h2>
      <p className="text-sm text-[#717984] font-medium">{skils}</p>
      <p className="text-[#717984] text-sm mt-1 mb-5">{dateStart} - {dateEnd}</p>
      {
        description.split("\n").map(item => 
          <p key={item} className="text-[#151B26] text-sm mt-1">{item}</p>
        )
      }
    </div>
  )
}

export default PortfolioList