import React from 'react'
import { useNavigate } from 'react-router-dom'
import { LogOut, Type } from 'lucide-react'
import { useApp } from '../context/AppContext'
import Card from '../components/Card'
import Button from '../components/Button'
import VerificationBadge from '../components/VerificationBadge'
import { HELPERS } from '../data/mockData'

const ROLE_LABEL = {
  elderly: 'Getting help',
  helper: 'Helper',
  family: 'Family member',
  admin: 'Local coordinator',
}

export default function Profile() {
  const { user, logout, elderlyMode, setElderlyMode } = useApp()
  const navigate = useNavigate()
  const helperRecord = HELPERS.find(h => h.id === 'h1')

  if (!user) return null

  return (
    <div className="max-w-lg mx-auto px-5 sm:px-6 py-8 pb-24 space-y-5">
      <div className="text-center">
        <div className="w-20 h-20 mx-auto rounded-full bg-primary-light text-primary-dark flex items-center justify-center font-bold text-2xl">
          {user.name.split(' ').map(n => n[0]).join('').slice(0, 2) || 'U'}
        </div>
        <h1 className="text-xl font-extrabold text-ink mt-3">{user.name}</h1>
        <p className="text-sm text-muted font-body">{ROLE_LABEL[user.role]}</p>
        {user.role === 'helper' && <div className="mt-1"><VerificationBadge /></div>}
      </div>

      <Card>
        <p className="text-sm font-semibold text-ink mb-3">Accessibility</p>
        <button
          onClick={() => setElderlyMode(!elderlyMode)}
          className="w-full flex items-center justify-between px-4 py-3 rounded-xl border border-border"
        >
          <span className="flex items-center gap-2 font-body font-semibold text-ink"><Type size={18} /> Larger, simpler view</span>
          <span className={`w-11 h-6 rounded-full relative transition-colors ${elderlyMode ? 'bg-primary' : 'bg-border'}`}>
            <span className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-soft transition-transform ${elderlyMode ? 'translate-x-5' : 'translate-x-0.5'}`} />
          </span>
        </button>
      </Card>

      <Card>
        <p className="font-semibold text-ink mb-2">Need help using Saath?</p>
        <p className="text-sm text-muted font-body mb-3">You're never on your own — a family member or your local coordinator can always step in.</p>
        <div className="flex flex-col gap-2">
          <Button variant="outline" className="w-full">Ask a family member to help</Button>
          <Button variant="ghost" className="w-full">Contact local coordinator</Button>
        </div>
      </Card>

      <Button variant="ghost" className="w-full" icon={LogOut} onClick={() => { logout(); navigate('/') }}>
        Log out
      </Button>
    </div>
  )
}
