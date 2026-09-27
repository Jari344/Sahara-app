import React, { useState } from 'react'
import Modal from './Modal'
import Button from './Button'
import { AlertTriangle } from 'lucide-react'

const REASONS = ["Helper didn't arrive", 'I felt unsafe', 'Request was incorrect', 'Other']

export default function SafetyModal({ open, onClose }) {
  const [reason, setReason] = useState(null)
  const [submitted, setSubmitted] = useState(false)

  function submit() {
    setSubmitted(true)
  }

  function handleClose() {
    setSubmitted(false)
    setReason(null)
    onClose()
  }

  return (
    <Modal open={open} onClose={handleClose} title="Report a problem">
      {submitted ? (
        <div className="text-center py-4">
          <div className="w-12 h-12 rounded-full bg-secondary-light text-secondary-dark flex items-center justify-center mx-auto mb-3">
            <AlertTriangle size={24} />
          </div>
          <p className="font-semibold text-ink">Thank you — the local coordinator has been notified and will follow up shortly.</p>
          <Button className="mt-4 w-full" onClick={handleClose}>Done</Button>
        </div>
      ) : (
        <div className="space-y-3 font-body">
          <p className="text-sm text-muted">What happened? This will be sent to your local coordinator right away.</p>
          {REASONS.map(r => (
            <button
              key={r}
              onClick={() => setReason(r)}
              className={`w-full text-left px-4 py-3 rounded-xl border-2 font-semibold ${reason === r ? 'border-danger bg-danger-light text-danger' : 'border-border text-ink'}`}
            >
              {r}
            </button>
          ))}
          <Button variant="danger" className="w-full mt-2" disabled={!reason} onClick={submit}>
            Submit report
          </Button>
        </div>
      )}
    </Modal>
  )
}
