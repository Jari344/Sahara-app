import React from 'react'
import { Link } from 'react-router-dom'
import { ShieldCheck, ClipboardList, AlertTriangle, Users } from 'lucide-react'
import { useApp } from '../context/AppContext'
import DashboardStats from '../components/DashboardStats'
import Card from '../components/Card'
import { ADMIN_STATS } from '../data/mockData'

const SECTIONS = [
  { to: '/admin/verification', label: 'Pending Verification', icon: ShieldCheck, text: 'Review and approve new helpers and families' },
  { to: '/admin/requests', label: 'Active Requests', icon: ClipboardList, text: 'See requests and assigned helpers' },
  { to: '/admin/reports', label: 'Safety Reports', icon: AlertTriangle, text: 'Review reported incidents' },
]

export default function Admin() {
  const { requests, verificationQueue } = useApp()
  const stats = [
    { label: 'Active Users', value: ADMIN_STATS.activeUsers },
    { label: 'Open Requests', value: requests.filter(r => r.status === 'open').length },
    { label: 'Verified Helpers', value: ADMIN_STATS.verifiedHelpers },
    { label: 'Completed Helps', value: ADMIN_STATS.completedHelps },
  ]

  return (
    <div className="max-w-2xl mx-auto px-5 sm:px-6 py-8 pb-24 space-y-6">
      <h1 className="text-2xl font-extrabold text-ink">Coordinator Dashboard</h1>
      <DashboardStats stats={stats} />

      <div className="space-y-3">
        {SECTIONS.map(({ to, label, icon: Icon, text }) => (
          <Link key={to} to={to}>
            <Card className="flex items-center gap-4 hover:shadow-card transition-shadow">
              <div className="w-11 h-11 rounded-xl bg-primary-light text-primary-dark flex items-center justify-center shrink-0">
                <Icon size={22} />
              </div>
              <div className="flex-1">
                <p className="font-bold text-ink">{label}</p>
                <p className="text-sm text-muted font-body">{text}</p>
              </div>
              {label === 'Pending Verification' && verificationQueue.filter(v => v.status === 'pending').length > 0 && (
                <span className="w-6 h-6 rounded-full bg-danger text-white text-xs font-bold flex items-center justify-center">
                  {verificationQueue.filter(v => v.status === 'pending').length}
                </span>
              )}
            </Card>
          </Link>
        ))}
      </div>

      <Card>
        <p className="font-semibold text-ink mb-3 flex items-center gap-2"><Users size={18} /> Community Activity</p>
        <p className="text-sm text-muted font-body">42 completed requests so far this month across all Betul neighborhoods.</p>
      </Card>
    </div>
  )
}
