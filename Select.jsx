import React from 'react'

export default function Select({ label, id, children, className = '', ...props }) {
  return (
    <div className={className}>
      {label && <label htmlFor={id} className="block text-sm font-semibold text-ink mb-1.5">{label}</label>}
      <select
        id={id}
        className="w-full font-body px-4 py-3 rounded-xl border border-border bg-white text-ink focus:border-primary outline-none"
        {...props}
      >
        {children}
      </select>
    </div>
  )
}
