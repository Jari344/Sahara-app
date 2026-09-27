import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, AlertTriangle } from 'lucide-react'
import Card from '../components/Card'
import { SAFETY_REPORTS } from '../data/mockData'

export default function AdminReports() {
  return (
    <div className="max-w-lg mx-auto px-5 sm:px-6 py-8 pb-24 space-y-5">
      <Link to="/admin" className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted hover:text-primary"><ArrowLeft size={16} /> Back to Dashboard</Link>
      <h1 className="text-2xl font-extrabold text-ink">Safety Reports</h1>

      {SAFETY_REPORTS.length === 0 ? (
        <p className="text-center text-muted font-body py-14">No safety reports on file.</p>
      ) : (
        <div className="space-y-3">
          {SAFETY_REPORTS.map(r => (
            <Card key={r.id} className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-danger-light text-danger flex items-center justify-center shrink-0">
                <AlertTriangle size={18} />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-ink">{r.reason}</p>
                <p className="text-sm text-muted font-body">{r.area} · {r.date}</p>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-secondary-light text-secondary-dark h-fit">{r.status}</span>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
