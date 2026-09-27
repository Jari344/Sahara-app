import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CheckCircle2 } from 'lucide-react'
import Button from '../components/Button'
import Card from '../components/Card'
import { REQUEST_TYPES, DURATIONS, AREAS } from '../data/mockData'
import { useApp } from '../context/AppContext'

const REQUESTER_OPTIONS = ['Me', 'My son/daughter', 'Other family member']

export default function PostRequest() {
  const { addRequest, user } = useApp()
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const [done, setDone] = useState(false)
  const [form, setForm] = useState({
    type: '', date: '', time: '', duration: '1 hour', area: AREAS[0], notes: '', requestedBy: 'Me',
  })

  const type = REQUEST_TYPES.find(t => t.id === form.type)

  function next() { setStep(s => Math.min(s + 1, 5)) }
  function back() { setStep(s => Math.max(s - 1, 1)) }

  function submit() {
    addRequest({
      type: form.type,
      title: type?.label || 'Request',
      requesterId: 'e1',
      requesterName: user?.name || 'Demo User',
      date: form.date || 'Today',
      time: form.time || 'Flexible',
      duration: form.duration,
      area: form.area,
      notes: form.notes,
      requestedBy: form.requestedBy,
    })
    setDone(true)
  }

  if (done) {
    return (
      <div className="max-w-md mx-auto px-6 py-20 text-center">
        <div className="w-16 h-16 rounded-full bg-secondary-light text-secondary-dark flex items-center justify-center mx-auto">
          <CheckCircle2 size={32} />
        </div>
        <h1 className="text-2xl font-extrabold text-ink mt-4">Your request has been posted.</h1>
        <p className="text-muted font-body mt-2">Nearby verified helpers will be notified. Family will get updates as it progresses.</p>
        <Button className="mt-6" onClick={() => navigate('/dashboard')}>Back to Dashboard</Button>
      </div>
    )
  }

  return (
    <div className="max-w-lg mx-auto px-5 sm:px-6 py-8 pb-24">
      <div className="flex items-center gap-1.5 mb-6">
        {[1, 2, 3, 4, 5].map(i => (
          <div key={i} className={`h-1.5 flex-1 rounded-full ${i <= step ? 'bg-primary' : 'bg-border'}`} />
        ))}
      </div>

      {step === 1 && (
        <Card>
          <h1 className="text-xl font-bold text-ink mb-4">What kind of help do you need?</h1>
          <div className="grid grid-cols-2 gap-3">
            {REQUEST_TYPES.map(t => (
              <button
                key={t.id}
                onClick={() => { setForm(f => ({ ...f, type: t.id })); next() }}
                className={`p-4 rounded-xl2 border-2 text-center font-semibold font-body ${form.type === t.id ? 'border-primary bg-primary-light' : 'border-border'}`}
              >
                <div className="text-2xl mb-1">{t.emoji}</div>
                {t.label}
              </button>
            ))}
          </div>
        </Card>
      )}

      {step === 2 && (
        <Card>
          <h1 className="text-xl font-bold text-ink mb-4">When do you need help?</h1>
          <div className="space-y-4 font-body">
            <div>
              <label className="block text-sm font-semibold text-ink mb-1.5">Date</label>
              <input type="date" value={form.date} onChange={e => setForm(f => ({ ...f, date: e.target.value }))} className="w-full px-4 py-3 rounded-xl border border-border" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-ink mb-1.5">Time</label>
              <input type="time" value={form.time} onChange={e => setForm(f => ({ ...f, time: e.target.value }))} className="w-full px-4 py-3 rounded-xl border border-border" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-ink mb-1.5">Duration</label>
              <div className="flex gap-2">
                {DURATIONS.map(d => (
                  <button
                    key={d}
                    onClick={() => setForm(f => ({ ...f, duration: d }))}
                    className={`flex-1 py-2.5 rounded-xl border-2 font-semibold ${form.duration === d ? 'border-primary bg-primary-light' : 'border-border'}`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <NavButtons onBack={back} onNext={next} />
        </Card>
      )}

      {step === 3 && (
        <Card>
          <h1 className="text-xl font-bold text-ink mb-1">Where?</h1>
          <p className="text-sm text-muted font-body mb-4">For privacy, we only share your neighborhood — never your exact address.</p>
          <div className="grid grid-cols-2 gap-2">
            {AREAS.map(a => (
              <button
                key={a}
                onClick={() => setForm(f => ({ ...f, area: a }))}
                className={`py-3 rounded-xl border-2 font-semibold font-body ${form.area === a ? 'border-primary bg-primary-light' : 'border-border'}`}
              >
                {a}
              </button>
            ))}
          </div>
          <NavButtons onBack={back} onNext={next} />
        </Card>
      )}

      {step === 4 && (
        <Card>
          <h1 className="text-xl font-bold text-ink mb-4">Tell us a little more</h1>
          <textarea
            rows={5}
            value={form.notes}
            onChange={e => setForm(f => ({ ...f, notes: e.target.value }))}
            placeholder="Please explain what kind of help you need."
            className="w-full font-body px-4 py-3 rounded-xl border border-border focus:border-primary outline-none"
          />
          <NavButtons onBack={back} onNext={next} />
        </Card>
      )}

      {step === 5 && (
        <Card>
          <h1 className="text-xl font-bold text-ink mb-4">Who is requesting?</h1>
          <div className="space-y-2">
            {REQUESTER_OPTIONS.map(r => (
              <button
                key={r}
                onClick={() => setForm(f => ({ ...f, requestedBy: r }))}
                className={`w-full text-left px-4 py-3 rounded-xl border-2 font-semibold font-body ${form.requestedBy === r ? 'border-primary bg-primary-light' : 'border-border'}`}
              >
                {r}
              </button>
            ))}
          </div>
          <div className="flex gap-3 mt-6">
            <Button variant="ghost" onClick={back}>Back</Button>
            <Button className="flex-1" size="lg" onClick={submit}>Post Request</Button>
          </div>
        </Card>
      )}
    </div>
  )
}

function NavButtons({ onBack, onNext }) {
  return (
    <div className="flex gap-3 mt-6">
      <Button variant="ghost" onClick={onBack}>Back</Button>
      <Button className="flex-1" onClick={onNext}>Continue</Button>
    </div>
  )
}
