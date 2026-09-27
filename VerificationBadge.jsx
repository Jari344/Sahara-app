import React from 'react'
import { ShieldCheck } from 'lucide-react'

export default function VerificationBadge({ label = 'Verified by Saath', size = 'md' }) {
  return (
    <span className={`inline-flex items-center gap-1.5 font-semibold text-secondary-dark ${size === 'sm' ? 'text-xs' : 'text-sm'}`}>
      <ShieldCheck size={size === 'sm' ? 14 : 16} />
      {label}
    </span>
  )
}
