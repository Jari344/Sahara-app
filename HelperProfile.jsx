import React from 'react'
import { useParams } from 'react-router-dom'
import { CheckCircle2, Clock } from 'lucide-react'
import Card from '../components/Card'
import ProfileCard from '../components/ProfileCard'
import { useApp } from '../context/AppContext'
import { REQUEST_TYPES } from '../data/mockData'

export default function HelperProfile() {
  const { id } = useParams()
  const { helpers } = useApp()
  const helper = helpers.find(h => h.id === id)

  if (!helper) return <div className="max-w-lg mx-auto px-6 py-14 text-center text-muted font-body">Helper not found.</div>

  return (
    <div className="max-w-lg mx-auto px-5 sm:px-6 py-8 pb-24 space-y-5">
      <Card><ProfileCard helper={helper} /></Card>

      <Card>
        <p className="text-sm font-semibold text-ink mb-2">About</p>
        <p className="text-sm text-muted font-body">{helper.about}</p>
      </Card>

      <Card>
        <p className="text-sm font-semibold text-ink mb-3">Help I can provide</p>
        <div className="flex flex-wrap gap-2">
          {helper.skills.map(s => {
            const t = REQUEST_TYPES.find(t => t.id === s)
            return (
              <span key={s} className="inline-flex items-center gap-1.5 bg-primary-light text-primary-dark text-sm font-semibold font-body px-3 py-1.5 rounded-full">
                {t?.emoji} {t?.label}
              </span>
            )
          })}
        </div>
      </Card>

      <Card>
        <p className="text-sm font-semibold text-ink mb-2 flex items-center gap-1.5"><Clock size={16} /> Availability</p>
        <p className="text-sm text-muted font-body">{helper.availability}</p>
      </Card>

      <Card>
        <p className="text-sm font-semibold text-ink mb-3">Verification</p>
        <div className="space-y-2 font-body text-sm">
          {[
            ['Identity Verified', helper.verified.identity],
            ['Phone Verified', helper.verified.phone],
            ['Community Verified', helper.verified.community],
          ].map(([label, ok]) => (
            <div key={label} className="flex items-center gap-2">
              <CheckCircle2 size={16} className={ok ? 'text-secondary' : 'text-border'} />
              <span className={ok ? 'text-ink' : 'text-muted'}>{label}</span>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted font-body mt-3">We never display government ID numbers or sensitive documents. Verification is confirmed by your local coordinator.</p>
      </Card>
    </div>
  )
}
