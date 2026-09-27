import React from 'react'

const VARIANTS = {
  primary: 'bg-primary text-white hover:bg-primary-dark',
  secondary: 'bg-secondary text-white hover:bg-secondary-dark',
  outline: 'bg-white text-primary border-2 border-primary hover:bg-primary-light',
  ghost: 'bg-transparent text-ink hover:bg-black/5',
  danger: 'bg-danger text-white hover:opacity-90',
}

export default function Button({ children, variant = 'primary', size = 'md', className = '', icon: Icon, ...props }) {
  const sizes = {
    md: 'px-5 py-3 text-base',
    lg: 'px-6 py-4 text-lg',
    sm: 'px-4 py-2 text-sm',
  }
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${VARIANTS[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {Icon && <Icon size={20} />}
      {children}
    </button>
  )
}
