import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { useApp } from '../context/AppContext'
import RequestCard from '../components/RequestCard'

export default function AdminRequests() {
  const { requests } = useApp()

  return (
    <div className="max-w-lg mx-auto px-5 sm:px-6 py-8 pb-24 space-y-5">
      <Link to="/admin" className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted hover:text-primary"><ArrowLeft size={16} /> Back to Dashboard</Link>
      <h1 className="text-2xl font-extrabold text-ink">Active Requests</h1>
      <div className="space-y-3">
        {requests.map(r => <RequestCard key={r.id} request={r} />)}
      </div>
    </div>
  )
}
