import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { MapPin, Phone, ShieldAlert, Star, CheckCircle2, Circle } from 'lucide-react'
import { useApp } from '../context/AppContext'
import Card from '../components/Card'
import Button from '../components/Button'
import StatusBadge from '../components/StatusBadge'
import Modal from '../components/Modal'
import SafetyModal from '../components/SafetyModal'
import { REQUEST_TYPES, HELPERS } from '../data/mockData'

const TIMELINE_STEPS = [
  { key: 'posted', label: 'Request accepted' },
  { key: 'assigned', label: 'Helper assigned' },
  { key: 'notified', label: 'Family notified' },
  { key: 'in_progress', label: 'Help in progress' },
  { key: 'completed', label: 'Completed' },
]

export default function RequestDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { requests, user, acceptRequest, updateRequestStatus, rateRequest } = useApp()
  const request = requests.find(r => r.id === id)
  const [safetyOpen, setSafetyOpen] = useState(false)
  const [callOpen, setCallOpen] = useState(false)
  const [rating, setRating] = useState(0)
  const [feedback, setFeedback] = useState('')

  if (!request) {
    return <div className="max-w-lg mx-auto px-6 py-14 text-center text-muted font-body">Request not found.</div>
  }

  const type = REQUEST_TYPES.find(t => t.id === request.type)
  const helper = HELPERS.find(h => h.id === request.helperId)
  const isHelperView = user?.role === 'helper'

  return (
    <div className="max-w-lg mx-auto px-5 sm:px-6 py-8 pb-24 space-y-5">
      <div>
        <div className="text-3xl mb-1">{type?.emoji}</div>
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-extrabold text-ink">{request.title}</h1>
          <StatusBadge status={request.status} />
        </div>
        <p className="text-muted font-body mt-1">{request.date} · {request.time} · {request.duration}</p>
        <p className="text-muted font-body flex items-center gap-1 mt-0.5"><MapPin size={14} /> {request.area}</p>
      </div>

      {request.notes && (
        <Card>
          <p className="text-sm font-semibold text-ink mb-1">Details</p>
          <p className="text-sm text-muted font-body">{request.notes}</p>
        </Card>
      )}

      {helper && (
        <Card>
          <p className="text-sm font-semibold text-ink mb-2">Your helper</p>
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-primary-light text-primary-dark flex items-center justify-center font-bold">
              {helper.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div className="flex-1">
              <p className="font-bold text-ink">{helper.name}</p>
              <p className="text-xs text-muted font-body">Expected arrival: {request.time.split('–')[0].trim()}</p>
            </div>
            <span className="flex items-center gap-1 text-accent-DEFAULT text-sm font-semibold"><Star size={14} fill="currentColor" />{helper.rating}</span>
          </div>
          <div className="flex gap-2 mt-4">
            <Button variant="outline" className="flex-1" icon={Phone} onClick={() => setCallOpen(true)}>Call Helper</Button>
            <Button variant="ghost" className="flex-1" icon={ShieldAlert} onClick={() => setSafetyOpen(true)}>Report a Problem</Button>
          </div>
        </Card>
      )}

      <Card>
        <p className="text-sm font-semibold text-ink mb-3">Status</p>
        <div className="space-y-3">
          {TIMELINE_STEPS.map(step => {
            const complete = request.timeline?.includes(step.key)
            return (
              <div key={step.key} className="flex items-center gap-2.5">
                {complete ? <CheckCircle2 size={18} className="text-secondary" /> : <Circle size={18} className="text-border" />}
                <span className={`text-sm font-body ${complete ? 'text-ink font-semibold' : 'text-muted'}`}>{step.label}</span>
              </div>
            )
          })}
        </div>
      </Card>

      {isHelperView && request.status === 'open' && (
        <Card className="bg-accent-light border-accent">
          <p className="text-sm font-body text-ink mb-3">Please accept only if you are confident you can arrive at the selected time.</p>
          <Button className="w-full" onClick={() => acceptRequest(request.id, 'h1')}>Accept Request</Button>
        </Card>
      )}

      {isHelperView && request.status === 'assigned' && (
        <Button className="w-full" onClick={() => updateRequestStatus(request.id, 'in_progress')}>Mark as In Progress</Button>
      )}

      {isHelperView && request.status === 'in_progress' && (
        <Button className="w-full" variant="secondary" onClick={() => updateRequestStatus(request.id, 'completed')}>Mark as Completed</Button>
      )}

      {request.status === 'completed' && !request.rating && !isHelperView && (
        <Card>
          <p className="font-semibold text-ink mb-2">How was your experience?</p>
          <div className="flex gap-1 mb-3">
            {[1, 2, 3, 4, 5].map(n => (
              <button key={n} onClick={() => setRating(n)} aria-label={`${n} stars`}>
                <Star size={26} className={n <= rating ? 'text-accent-DEFAULT' : 'text-border'} fill={n <= rating ? 'currentColor' : 'none'} />
              </button>
            ))}
          </div>
          <textarea
            placeholder="Very helpful and punctual."
            value={feedback}
            onChange={e => setFeedback(e.target.value)}
            className="w-full font-body px-4 py-3 rounded-xl border border-border mb-3"
            rows={3}
          />
          <Button className="w-full" disabled={!rating} onClick={() => rateRequest(request.id, rating, feedback)}>Submit Rating</Button>
        </Card>
      )}

      {request.status === 'completed' && request.rating && (
        <Card>
          <p className="text-sm font-semibold text-ink mb-1">Your rating</p>
          <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map(n => (
              <Star key={n} size={18} className={n <= request.rating ? 'text-accent-DEFAULT' : 'text-border'} fill={n <= request.rating ? 'currentColor' : 'none'} />
            ))}
          </div>
          {request.feedback && <p className="text-sm text-muted font-body mt-2">"{request.feedback}"</p>}
        </Card>
      )}

      <SafetyModal open={safetyOpen} onClose={() => setSafetyOpen(false)} />
      <Modal open={callOpen} onClose={() => setCallOpen(false)} title="Call Helper">
        <p className="font-body text-muted text-sm">This is a demo — in the full app, this would start a call with {helper?.name}.</p>
        <Button className="w-full mt-4" onClick={() => setCallOpen(false)}>Close</Button>
      </Modal>
    </div>
  )
}
