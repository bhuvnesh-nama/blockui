import React from 'react'
import clsx from 'clsx'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'danger'
  size?: 'small' | 'medium' | 'large'
}
const base = "rounded-md font-medium"
const variants = {
    primary: 'bg-blue-500 text-white',
    secondary: 'bg-gray-500 text-white',
    danger: 'bg-red-500 text-white',
}
const sizes = {
    small: 'px-2 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
}

function Button({variant, size, className,children, ...props }: Props) {
    
  return (
    <button className={clsx(base, variants[variant || 'primary'], sizes[size || 'medium'], className)} {...props}>
        {children}
    </button>
  )
}

export default Button