import React from 'react'
import { CircleDot, CheckCircle2, Clock } from 'lucide-react'

const CONFIG = {
  open: { label: 'Looking for a helper', color: 'bg-accent-light text-accent-DEFAULT', icon: Clock },
  assigned: { label: 'Helper assigned', color: 'bg-primary-light text-primary-dark', icon: CircleDot },
  in_progress: { label: 'Help in progress', color: 'bg-primary-light text-primary-dark', icon: CircleDot },
  completed: { label: 'Completed', color: 'bg-secondary-light text-secondary-dark', icon: CheckCircle2 },
}

export default function StatusBadge({ status }) {
  const c = CONFIG[status] || CONFIG.open
  const Icon = c.icon
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-semibold ${c.color}`}>
      <Icon size={14} />
      {c.label}
    </span>
  )
}
