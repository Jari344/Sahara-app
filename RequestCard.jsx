import React from 'react'
import { useNavigate } from 'react-router-dom'
import { MapPin } from 'lucide-react'
import Card from './Card'
import StatusBadge from './StatusBadge'
import { REQUEST_TYPES, HELPERS } from '../data/mockData'

export default function RequestCard({ request }) {
  const navigate = useNavigate()
  const type = REQUEST_TYPES.find(t => t.id === request.type)
  const helper = HELPERS.find(h => h.id === request.helperId)

  return (
    <Card className="cursor-pointer hover:shadow-card transition-shadow" onClick={() => navigate(`/request/${request.id}`)}>
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-2xl mb-1">{type?.emoji}</div>
          <h3 className="text-lg font-bold text-ink">{request.title}</h3>
        </div>
        <StatusBadge status={request.status} />
      </div>
      <div className="mt-2 font-body text-muted text-sm space-y-1">
        <p>{request.date} · {request.time}</p>
        <p className="flex items-center gap-1"><MapPin size={14} /> {request.area}</p>
      </div>
      {helper && (
        <p className="mt-3 text-sm font-semibold text-primary-dark">Helper: {helper.name}</p>
      )}
    </Card>
  )
}
