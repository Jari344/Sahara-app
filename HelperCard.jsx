import React from 'react'
import { useNavigate } from 'react-router-dom'
import { MapPin, Star } from 'lucide-react'
import Card from './Card'
import VerificationBadge from './VerificationBadge'

export default function HelperCard({ helper, requestContext }) {
  const navigate = useNavigate()
  return (
    <Card className="cursor-pointer hover:shadow-card transition-shadow" onClick={() => navigate(`/helper/${helper.id}`)}>
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-primary-light text-primary-dark flex items-center justify-center font-bold text-lg">
          {helper.name.split(' ').map(n => n[0]).join('')}
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-ink">{helper.name}</h3>
          <p className="text-sm text-muted font-body">{helper.role}</p>
        </div>
        <div className="flex items-center gap-1 text-accent-DEFAULT font-semibold text-sm">
          <Star size={14} fill="currentColor" /> {helper.rating}
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <p className="text-sm text-muted font-body flex items-center gap-1">
          <MapPin size={14} /> {helper.distanceKm} km away
        </p>
        <VerificationBadge size="sm" />
      </div>
    </Card>
  )
}
