interface PortfolioListProps {
  title?: string,
  skils?: string,
  dateStart?: string,
  dateEnd?: string,
  description?: string
}

export const PortfolioList:React.FC<PortfolioListProps> = ({
  title, 
  skils, 
  dateStart, 
  dateEnd, 
  description
}) => {
  return (
    <div className="w-full shadow-md shadow-[#D7E1EE94] rounded-md p-5">
      <h2 className="text-md font-semibold">{title}</h2>
      <p className="text-sm text-[#717984] font-medium">{skils}</p>
      <p className="text-[#717984] text-sm mt-1">{dateStart} - {dateEnd}</p>
      <p className="text-[#151B26] mt-5 text-sm">{description}</p>
    </div>
  )
}

export default PortfolioList