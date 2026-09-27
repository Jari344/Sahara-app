import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Heart } from 'lucide-react'
import Card from '../components/Card'
import FormInput from '../components/FormInput'
import Button from '../components/Button'
import { useApp } from '../context/AppContext'

export default function Login() {
  const { login } = useApp()
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [role, setRole] = useState('elderly')

  function handleSubmit(e) {
    e.preventDefault()
    login({ name, role })
    navigate('/dashboard')
  }

  return (
    <div className="max-w-md mx-auto px-6 py-14">
      <div className="text-center mb-6">
        <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center mx-auto"><Heart fill="white" /></div>
        <h1 className="text-2xl font-extrabold text-ink mt-3">Welcome back</h1>
        <p className="text-muted font-body text-sm mt-1">This is a demo login — no password or OTP needed.</p>
      </div>
      <Card>
        <form onSubmit={handleSubmit} className="space-y-4">
          <FormInput label="Your name" id="name" placeholder="e.g. Shanti Verma" value={name} onChange={e => setName(e.target.value)} required />
          <div>
            <span className="block text-sm font-semibold text-ink mb-1.5">I am logging in as</span>
            <div className="grid grid-cols-1 gap-2">
              {[
                { id: 'elderly', label: 'I need help' },
                { id: 'helper', label: 'I want to help' },
                { id: 'family', label: 'Family member' },
                { id: 'admin', label: 'Local coordinator (admin)' },
              ].map(r => (
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
          <Button type="submit" className="w-full" size="lg">Log in</Button>
        </form>
      </Card>
      <p className="text-center text-sm font-body text-muted mt-4">
        New to Saath? <Link to="/signup" className="text-primary font-semibold">Sign up</Link>
      </p>
    </div>
  )
}
