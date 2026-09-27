import React from 'react'
import { Navigate, Link } from 'react-router-dom'
import { Plus, Users2 } from 'lucide-react'
import { useApp } from '../context/AppContext'
import RequestCard from '../components/RequestCard'
import HelperCard from '../components/HelperCard'
import MapMock from '../components/MapMock'
import Button from '../components/Button'
import { REQUEST_TYPES } from '../data/mockData'

function ElderlyDashboard() {
  const { user, requests } = useApp()
  const mine = requests.filter(r => r.requesterId === 'e1' || r.requesterName === user.name || r.requestedBy)
  const active = requests.filter(r => r.status !== 'completed').slice(0, 4)

  return (
    <div className="max-w-2xl mx-auto px-5 sm:px-6 py-8 pb-24 space-y-6">
      <h1 className="text-2xl font-extrabold text-ink">Good afternoon, {user.name.split(' ')[0]} 👋</h1>

      <Link to="/request/new">
        <div className="bg-primary text-white rounded-xl2 p-6 flex items-center justify-between shadow-card hover:bg-primary-dark transition-colors">
          <div>
            <p className="text-lg font-bold">Request Help</p>
            <p className="text-sm text-white/80 font-body mt-1">Post a new request in under a minute</p>
          </div>
          <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
            <Plus size={26} />
          </div>
        </div>
      </Link>

      <div>
        <h2 className="text-lg font-bold text-ink mb-3">My Active Requests</h2>
        {active.length === 0 ? (
          <EmptyState text="Everything is taken care of for now." cta="Request Help" to="/request/new" />
        ) : (
          <div className="space-y-3">
            {active.map(r => <RequestCard key={r.id} request={r} />)}
          </div>
        )}
      </div>
    </div>
  )
}

function HelperDashboard() {
  const { user, requests } = useApp()
  const nearby = requests.filter(r => r.status === 'open')

  return (
    <div className="max-w-2xl mx-auto px-5 sm:px-6 py-8 pb-24 space-y-6">
      <h1 className="text-2xl font-extrabold text-ink">Available nearby</h1>
      <p className="text-muted font-body -mt-4">{nearby.length} requests near you</p>
      <MapMock requests={nearby} />
      {nearby.length === 0 ? (
        <EmptyState text="New requests from your neighborhood will appear here." icon={Users2} />
      ) : (
        <div className="space-y-3">
          {nearby.map(r => <RequestCard key={r.id} request={r} />)}
        </div>
      )}
    </div>
  )
}

function EmptyState({ text, cta, to, icon: Icon }) {
  return (
    <div className="text-center py-12 border-2 border-dashed border-border rounded-xl2">
      <p className="font-semibold text-ink">{cta ? 'No active requests' : 'No nearby requests'}</p>
      <p className="text-sm text-muted font-body mt-1">{text}</p>
      {cta && (
        <Link to={to}>
          <Button className="mt-4">{cta}</Button>
        </Link>
      )}
    </div>
  )
}

export default function Dashboard() {
  const { user } = useApp()
  if (!user) return <Navigate to="/login" replace />
  if (user.role === 'family') return <Navigate to="/family" replace />
  if (user.role === 'admin') return <Navigate to="/admin" replace />
  if (user.role === 'helper') return <HelperDashboard />
  return <ElderlyDashboard />
}
