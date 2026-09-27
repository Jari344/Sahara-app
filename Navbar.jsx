import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Heart, Bell, LogOut, ShieldAlert } from 'lucide-react'
import { useApp } from '../context/AppContext'

export default function Navbar() {
  const { user, logout, notifications } = useApp()
  const navigate = useNavigate()
  const unread = notifications.filter(n => !n.read).length

  return (
    <header className="bg-white border-b border-border sticky top-0 z-40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-extrabold text-lg text-ink">
          <div className="w-8 h-8 rounded-lg bg-primary text-white flex items-center justify-center">
            <Heart size={18} fill="white" />
          </div>
          Saath
        </Link>

        {user ? (
          <nav className="flex items-center gap-1 sm:gap-2">
            <button onClick={() => navigate('/safety')} className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold text-danger hover:bg-danger-light">
              <ShieldAlert size={18} /> Safety
            </button>
            <Link to="/notifications" className="relative p-2 rounded-lg hover:bg-black/5">
              <Bell size={20} />
              {unread > 0 && <span className="absolute top-1 right-1 w-2 h-2 bg-danger rounded-full" />}
            </Link>
            <div className="hidden sm:flex items-center gap-3 pl-2">
              <Link to="/profile" className="text-sm font-semibold text-ink hover:text-primary">{user.name}</Link>
              <button onClick={() => { logout(); navigate('/') }} className="p-2 rounded-lg hover:bg-black/5" aria-label="Log out">
                <LogOut size={18} />
              </button>
            </div>
          </nav>
        ) : (
          <nav className="flex items-center gap-3">
            <Link to="/login" className="text-sm font-semibold text-ink hover:text-primary">Log in</Link>
            <Link to="/signup" className="text-sm font-semibold bg-primary text-white px-4 py-2 rounded-xl hover:bg-primary-dark">Sign up</Link>
          </nav>
        )}
      </div>
    </header>
  )
}
