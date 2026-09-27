import React, { useState } from 'react'
import RequestCard from '../components/RequestCard'
import { REQUEST_TYPES } from '../data/mockData'
import { useApp } from '../context/AppContext'

const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'open', label: 'Open' },
  { id: 'assigned', label: 'Assigned' },
  { id: 'completed', label: 'Completed' },
]

export default function RequestsList() {
  const { requests } = useApp()
  const [filter, setFilter] = useState('all')
  const filtered = filter === 'all' ? requests : requests.filter(r => r.status === filter)

  return (
    <div className="max-w-2xl mx-auto px-5 sm:px-6 py-8 pb-24">
      <h1 className="text-2xl font-extrabold text-ink mb-4">Requests</h1>
      <div className="flex gap-2 mb-5 overflow-x-auto">
        {FILTERS.map(f => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id)}
            className={`px-4 py-2 rounded-full text-sm font-semibold font-body whitespace-nowrap ${filter === f.id ? 'bg-primary text-white' : 'bg-white border border-border text-ink'}`}
          >
            {f.label}
          </button>
        ))}
      </div>
      {filtered.length === 0 ? (
        <p className="text-center text-muted font-body py-14">No requests match this filter.</p>
      ) : (
        <div className="space-y-3">
          {filtered.map(r => <RequestCard key={r.id} request={r} />)}
        </div>
      )}
    </div>
  )
}
