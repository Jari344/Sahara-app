import React, { useState } from 'react'
import { PhoneCall, ShieldAlert, Users } from 'lucide-react'
import Card from '../components/Card'
import Button from '../components/Button'
import Modal from '../components/Modal'
import SafetyModal from '../components/SafetyModal'

export default function Safety() {
  const [emergencyOpen, setEmergencyOpen] = useState(false)
  const [reportOpen, setReportOpen] = useState(false)

  return (
    <div className="max-w-lg mx-auto px-5 sm:px-6 py-8 pb-24 space-y-5">
      <h1 className="text-2xl font-extrabold text-ink">Safety</h1>
      <p className="text-muted font-body -mt-3">Your safety comes first. Reach out any time, day or night.</p>

      <Card className="bg-danger-light border-danger">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-danger text-white flex items-center justify-center shrink-0">
            <PhoneCall size={20} />
          </div>
          <div className="flex-1">
            <p className="font-bold text-ink">Emergency</p>
            <p className="text-sm text-muted font-body">Call emergency services right away</p>
          </div>
        </div>
        <Button variant="danger" className="w-full mt-4" onClick={() => setEmergencyOpen(true)}>Call Emergency Services</Button>
      </Card>

      <Card>
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-primary-light text-primary-dark flex items-center justify-center shrink-0">
            <ShieldAlert size={20} />
          </div>
          <div className="flex-1">
            <p className="font-bold text-ink">Report a Problem</p>
            <p className="text-sm text-muted font-body">Tell your local coordinator what happened</p>
          </div>
        </div>
        <Button variant="outline" className="w-full mt-4" onClick={() => setReportOpen(true)}>Report a Problem</Button>
      </Card>

      <Card>
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-secondary-light text-secondary-dark flex items-center justify-center shrink-0">
            <Users size={20} />
          </div>
          <div className="flex-1">
            <p className="font-bold text-ink">Family Check-In</p>
            <p className="text-sm text-muted font-body">Family is notified automatically when a request is accepted, when the helper arrives, and when it's completed.</p>
          </div>
        </div>
      </Card>

      <SafetyModal open={reportOpen} onClose={() => setReportOpen(false)} />
      <Modal open={emergencyOpen} onClose={() => setEmergencyOpen(false)} title="Call Emergency Services">
        <p className="font-body text-muted text-sm">This is a demo — in the full app, this would immediately dial local emergency services and alert your local coordinator.</p>
        <Button variant="danger" className="w-full mt-4" onClick={() => setEmergencyOpen(false)}>Close</Button>
      </Modal>
    </div>
  )
}
