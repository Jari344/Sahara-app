import React from 'react'
import { MapPin } from 'lucide-react'
import { REQUEST_TYPES } from '../data/mockData'

// Stylized mock neighborhood map — no external map API required.
const PIN_POSITIONS = [
  { top: '22%', left: '30%' },
  { top: '48%', left: '62%' },
  { top: '68%', left: '25%' },
  { top: '34%', left: '78%' },
  { top: '58%', left: '45%' },
]

export default function MapMock({ requests = [] }) {
  return (
    <div className="relative w-full h-64 rounded-xl2 overflow-hidden border border-border bg-secondary-light">
      <svg className="absolute inset-0 w-full h-full opacity-40" viewBox="0 0 400 260" preserveAspectRatio="none">
        <path d="M0,80 H400" stroke="#5C8A66" strokeWidth="2" />
        <path d="M0,180 H400" stroke="#5C8A66" strokeWidth="2" />
        <path d="M120,0 V260" stroke="#5C8A66" strokeWidth="2" />
        <path d="M280,0 V260" stroke="#5C8A66" strokeWidth="2" />
      </svg>
      {requests.slice(0, 5).map((r, i) => {
        const type = REQUEST_TYPES.find(t => t.id === r.type)
        const pos = PIN_POSITIONS[i % PIN_POSITIONS.length]
        return (
          <div key={r.id} className="absolute -translate-x-1/2 -translate-y-full flex flex-col items-center" style={pos}>
            <div className="bg-white rounded-full shadow-card p-1.5 border-2 border-primary">
              <MapPin size={18} className="text-primary" fill="#EAF1F5" />
            </div>
            <span className="text-[11px] font-semibold font-body bg-white px-1.5 py-0.5 rounded shadow-soft mt-0.5 whitespace-nowrap">
              {type?.emoji} {type?.label}
            </span>
          </div>
        )
      })}
    </div>
  )
}
