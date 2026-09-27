import React, { useState } from 'react'
import { Phone, ShieldAlert, Star } from 'lucide-react'
import { useApp } from '../context/AppContext'
import Card from '../components/Card'
import Button from '../components/Button'
import StatusBadge from '../components/StatusBadge'
import SafetyModal from '../components/SafetyModal'
import { HELPERS } from '../data/mockData'

export default function Family() {
  const { requests } = useApp()
  const [safetyOpen, setSafetyOpen] = useState(false)
  const relative = { name: 'Shanti Verma', area: 'Kothi Bazaar' }
  const relativeRequests = requests.filter(r => r.requesterName === relative.name)
  const current = relativeRequests.find(r => r.status === 'assigned' || r.status === 'in_progress')
  const completed = relativeRequests.filter(r => r.status === 'completed')
  const helper = current ? HELPERS.find(h => h.id === current.helperId) : null

  return (
    <div className="max-w-lg mx-auto px-5 sm:px-6 py-8 pb-24 space-y-5">
      <h1 className="text-2xl font-extrabold text-ink">{relative.name.split(' ')[0]}'s Support</h1>

      <Card>
        <p className="text-sm font-semibold text-ink mb-2">Current status</p>
        {current ? <StatusBadge status={current.status} /> : <StatusBadge status="open" />}
      </Card>

      {current && (
        <Card>
          <p className="text-sm font-semibold text-ink mb-2">Today's visit</p>
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-primary-light text-primary-dark flex items-center justify-center font-bold">
              {helper?.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div className="flex-1">
              <p className="font-bold text-ink">{helper?.name}</p>
              <p className="text-xs text-muted font-body">{current.time}</p>
            </div>
            <span className="flex items-center gap-1 text-accent-DEFAULT text-sm font-semibold"><Star size={14} fill="currentColor" />{helper?.rating}</span>
          </div>
          <div className="flex gap-2 mt-4">
            <Button variant="outline" className="flex-1" icon={Phone}>Call Helper</Button>
            <Button variant="ghost" className="flex-1" icon={ShieldAlert} onClick={() => setSafetyOpen(true)}>Report a Problem</Button>
          </div>
        </Card>
      )}

      <Card>
        <p className="text-sm font-semibold text-ink mb-3">Previous completed requests</p>
        {completed.length === 0 ? (
          <p className="text-sm text-muted font-body">No completed requests yet.</p>
        ) : (
          <div className="space-y-3">
            {completed.map(r => (
              <div key={r.id} className="flex items-center justify-between border-b border-border last:border-0 pb-3 last:pb-0">
                <div>
                  <p className="font-semibold text-ink text-sm">{r.title}</p>
                  <p className="text-xs text-muted font-body">{r.date}</p>
                </div>
                {r.rating && (
                  <span className="flex items-center gap-1 text-accent-DEFAULT text-sm font-semibold"><Star size={14} fill="currentColor" />{r.rating}</span>
                )}
              </div>
            ))}
          </div>
        )}
      </Card>

      <SafetyModal open={safetyOpen} onClose={() => setSafetyOpen(false)} />
    </div>
  )
}
