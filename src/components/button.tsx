import React from "react";
import { IconType } from 'react-icons';
import { useNavigate } from "react-router-dom";

interface ButtonProps {
  Icon?: IconType | string
  name: string,
  type: "add-portfolio" | 'simpan-perubahan',
  color: string,
  disabled: boolean
}

export const Button: React.FC<ButtonProps> = ({ 
  Icon= "null", 
  name, 
  type, 
  color, 
  disabled 
}) => {
  const addPortfolioStyle = `px-5 py-2 border-2 rounded-md text-xs sm:text-sm md:text-md duration-300 mr-3 items-center flex`;
  const simpanPerubahanStyle = `px-5 py-2 border-2 rounded-md text-xs sm:text-sm md:text-md items-center ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`;
  const navigation = useNavigate();

  return(
    <button
     className={type === "add-portfolio" ? addPortfolioStyle : simpanPerubahanStyle}
     style={{
      borderColor: color,
      backgroundColor: type === 'simpan-perubahan' ? color : "",
      color: type === 'simpan-perubahan' ? disabled ? color : "white" : color
     }}
     disabled={disabled}
     onClick={() => type === 'add-portfolio' ? navigation("edit-portfolio") : disabled ? null : navigation("/")}
    >
      {
        type === 'add-portfolio' ? 
        <Icon size={24} style={{marginRight: '10'}} color={color} /> : 
        null
      }
      {name}
    </button>
  )
}