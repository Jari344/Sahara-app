import React from 'react'
import { NavLink } from 'react-router-dom'
import { Home, ClipboardList, Bell, User } from 'lucide-react'
import { useApp } from '../context/AppContext'

export default function BottomNav() {
  const { user, elderlyMode } = useApp()
  if (!user) return null

  const items = [
    { to: '/dashboard', label: 'Home', icon: Home },
    { to: '/requests', label: 'Requests', icon: ClipboardList },
    { to: '/notifications', label: 'Alerts', icon: Bell },
    { to: '/profile', label: 'Profile', icon: User },
  ]

  const visibleItems = elderlyMode ? items.filter(i => ['/dashboard', '/notifications', '/profile'].includes(i.to)) : items

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-border flex justify-around py-2 z-40 sm:hidden">
      {visibleItems.map(({ to, label, icon: Icon }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) => `flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-lg text-xs font-semibold font-body ${isActive ? 'text-primary' : 'text-muted'}`}
        >
          <Icon size={22} />
          {label}
        </NavLink>
      ))}
    </nav>
  )
}
