import { InputHTMLAttributes } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  placeholder: string,
  id: string,
  messageError: string,
  value: string
  error?: boolean
}

export const Input:React.FC<InputProps> = ({
  placeholder,
  id,
  messageError,
  value,
  error,
  ...rest
}) => {
  return (
    <div className="flex flex-col">
      <input 
        className={`border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder:underline ${error && value.length <= 0 ? 'mb-0' : 'mb-4'}`}
        id={id}
        placeholder={placeholder}
        value={value}
        {...rest}
      />
      {error && value.length <= 0 ? <p className="text-xs mb-4 mt-1 text-red-600">{messageError}</p> : null}
    </div>
  )
}

export default Input