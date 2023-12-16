import React from "react";
import { IconType } from 'react-icons';

interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  Icon?: IconType | string
  name: string,
  typeButton: "add-portfolio" | 'simpan-perubahan',
  color: string,
  disabled?: boolean
}

export const Button: React.FC<ButtonProps> = ({ 
  Icon= "null", 
  name, 
  typeButton, 
  color, 
  disabled,
  ...rest 
}) => {
  const addPortfolioStyle = `px-5 py-2 border-2 rounded-md text-xs sm:text-sm md:text-md duration-300 mr-3 items-center flex`;
  const simpanPerubahanStyle = `px-5 py-2 border-2 rounded-md text-xs sm:text-sm md:text-md items-center ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`;

  return(
    <button
     className={typeButton === "add-portfolio" ? addPortfolioStyle : simpanPerubahanStyle}
     style={{
      borderColor: color,
      backgroundColor: typeButton === 'simpan-perubahan' ? color : "",
      color: typeButton === 'simpan-perubahan' ? disabled ? color : "white" : color
     }}
     disabled={disabled}
     {...rest}
    >
      {
        typeButton === 'add-portfolio' ? 
        <Icon size={24} style={{marginRight: '10'}} color={color} /> : 
        null
      }
      {name}
    </button>
  )
}