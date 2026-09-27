import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Check, X } from 'lucide-react'
import { useApp } from '../context/AppContext'
import Card from '../components/Card'
import Button from '../components/Button'

export default function AdminVerification() {
  const { verificationQueue, approveVerification, rejectVerification } = useApp()

  return (
    <div className="max-w-lg mx-auto px-5 sm:px-6 py-8 pb-24 space-y-5">
      <Link to="/admin" className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted hover:text-primary"><ArrowLeft size={16} /> Back to Dashboard</Link>
      <h1 className="text-2xl font-extrabold text-ink">Pending Verification</h1>

      {verificationQueue.length === 0 ? (
        <p className="text-center text-muted font-body py-14">No one is waiting for verification.</p>
      ) : (
        <div className="space-y-3">
          {verificationQueue.map(p => (
            <Card key={p.id}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-ink">{p.name}</p>
                  <p className="text-sm text-muted font-body">{p.role} · {p.area}</p>
                  <p className="text-xs text-muted font-body mt-0.5">Submitted {p.submitted}</p>
                </div>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${p.status === 'pending' ? 'bg-accent-light text-accent-DEFAULT' : p.status === 'approved' ? 'bg-secondary-light text-secondary-dark' : 'bg-danger-light text-danger'}`}>
                  {p.status}
                </span>
              </div>
              {p.status === 'pending' && (
                <div className="flex gap-2 mt-4">
                  <Button variant="secondary" className="flex-1" icon={Check} onClick={() => approveVerification(p.id)}>Approve</Button>
                  <Button variant="danger" className="flex-1" icon={X} onClick={() => rejectVerification(p.id)}>Reject</Button>
                </div>
              )}
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
