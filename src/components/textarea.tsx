import { InputHTMLAttributes } from "react"

interface TextAreaProps extends InputHTMLAttributes<HTMLTextAreaElement>{
  id: string,
  placeholder: string,
  rows: number,
  messageError: string,
  value: string,
  error?: boolean
}

export const TextArea:React.FC<TextAreaProps> = ({
  id,
  placeholder,
  rows,
  messageError,
  value,
  error,
  ...rest
}) => {
  return (
    <div>
      <textarea 
        id={id}
        rows={rows} 
        className="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder:underline" 
        placeholder={placeholder}
        value={value}
        {...rest}
      />
      {error && value.length <= 0 ? <p className="text-xs mb-4 mt-1 text-red-600">{messageError}</p> : null}
    </div>
  )
}

export default TextArea