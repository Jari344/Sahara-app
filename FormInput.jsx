import React from 'react'

export default function FormInput({ label, id, className = '', ...props }) {
  return (
    <div className={className}>
      {label && <label htmlFor={id} className="block text-sm font-semibold text-ink mb-1.5">{label}</label>}
      <input
        id={id}
        className="w-full font-body px-4 py-3 rounded-xl border border-border bg-white text-ink placeholder:text-muted focus:border-primary outline-none"
        {...props}
      />
    </div>
  )
}
