import React from 'react'
import clsx from 'clsx'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'danger' | 'outlined'
  size?: 'small' | 'medium' | 'large'
}
const base = "rounded-[3px] font-medium"
const variants = {
    primary: 'bg-primary dark:bg-primary-dark text-white',
    secondary: 'bg-gray-500 text-white',
    danger: 'bg-destructive text-white',
    outlined: 'border border-primary border-2 font-semibold text-primary bg-transparent hover:bg-primary hover:text-white',
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

export { Button }