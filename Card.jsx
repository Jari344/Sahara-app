import React from 'react'

export default function Card({ children, className = '', ...props }) {
  return (
    <div className={`bg-surface rounded-xl2 shadow-soft border border-border p-5 ${className}`} {...props}>
      {children}
    </div>
  )
}
