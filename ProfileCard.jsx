import React from 'react'
import { Star } from 'lucide-react'
import VerificationBadge from './VerificationBadge'

export default function ProfileCard({ helper }) {
  return (
    <div className="text-center">
      <div className="w-20 h-20 mx-auto rounded-full bg-primary-light text-primary-dark flex items-center justify-center font-bold text-2xl">
        {helper.name.split(' ').map(n => n[0]).join('')}
      </div>
      <h2 className="text-xl font-extrabold text-ink mt-3">{helper.name}</h2>
      <div className="flex items-center justify-center gap-3 mt-1 text-sm font-body">
        <VerificationBadge />
        <span className="flex items-center gap-1 text-accent-DEFAULT font-semibold">
          <Star size={14} fill="currentColor" /> {helper.rating}
        </span>
      </div>
      <p className="text-sm text-muted font-body mt-1">{helper.completed} completed requests</p>
    </div>
  )
}
