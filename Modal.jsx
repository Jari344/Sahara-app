import React from 'react'
import { X } from 'lucide-react'

export default function Modal({ open, onClose, title, children }) {
  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/40 p-0 sm:p-4">
      <div className="bg-surface rounded-t-2xl sm:rounded-xl2 w-full sm:max-w-md max-h-[90vh] overflow-y-auto shadow-card">
        <div className="flex items-center justify-between px-5 py-4 border-b border-border">
          <h2 className="text-lg font-bold text-ink">{title}</h2>
          <button onClick={onClose} aria-label="Close" className="p-1 rounded-full hover:bg-black/5">
            <X size={22} />
          </button>
        </div>
        <div className="p-5">{children}</div>
      </div>
    </div>
  )
}
