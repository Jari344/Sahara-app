import React, { useState } from 'react'
import { useNavigate, useSearchParams, Link } from 'react-router-dom'
import { Heart } from 'lucide-react'
import Card from '../components/Card'
import FormInput from '../components/FormInput'
import Button from '../components/Button'
import { AREAS } from '../data/mockData'
import { useApp } from '../context/AppContext'

const ROLE_OPTIONS = [
  { id: 'elderly', label: 'I need help' },
  { id: 'helper', label: 'I want to help' },
  { id: 'family', label: 'Family member' },
]

export default function Signup() {
  const { login } = useApp()
  const navigate = useNavigate()
  const [params] = useSearchParams()
  const [name, setName] = useState('')
  const [role, setRole] = useState(params.get('role') || 'elderly')
  const [area, setArea] = useState(AREAS[0])

  function handleSubmit(e) {
    e.preventDefault()
    login({ name, role })
    navigate('/dashboard')
  }

  return (
    <div className="max-w-md mx-auto px-6 py-14">
      <div className="text-center mb-6">
        <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center mx-auto"><Heart fill="white" /></div>
        <h1 className="text-2xl font-extrabold text-ink mt-3">Join Saath</h1>
        <p className="text-muted font-body text-sm mt-1">A demo signup for the Betul, Madhya Pradesh prototype.</p>
      </div>
      <Card>
        <form onSubmit={handleSubmit} className="space-y-4">
          <FormInput label="Your name" id="name" placeholder="e.g. Aarav Sharma" value={name} onChange={e => setName(e.target.value)} required />
          <div>
            <span className="block text-sm font-semibold text-ink mb-1.5">I am signing up as</span>
            <div className="grid grid-cols-1 gap-2">
              {ROLE_OPTIONS.map(r => (
                <button
                  type="button"
                  key={r.id}
                  onClick={() => setRole(r.id)}
                  className={`text-left px-4 py-3 rounded-xl border-2 font-semibold font-body ${role === r.id ? 'border-primary bg-primary-light text-primary-dark' : 'border-border text-ink'}`}
                >
                  {r.label}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label htmlFor="area" className="block text-sm font-semibold text-ink mb-1.5">Neighborhood</label>
            <select id="area" value={area} onChange={e => setArea(e.target.value)} className="w-full font-body px-4 py-3 rounded-xl border border-border bg-white text-ink focus:border-primary outline-none">
              {AREAS.map(a => <option key={a} value={a}>{a}</option>)}
            </select>
          </div>
          <Button type="submit" className="w-full" size="lg">Create account</Button>
        </form>
      </Card>
      <p className="text-center text-sm font-body text-muted mt-4">
        Already have an account? <Link to="/login" className="text-primary font-semibold">Log in</Link>
      </p>
    </div>
  )
}
