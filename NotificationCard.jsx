import React from 'react'
import { Bell } from 'lucide-react'

export default function NotificationCard({ notification, onRead }) {
  return (
    <button
      onClick={() => onRead(notification.id)}
      className={`w-full text-left flex gap-3 p-4 rounded-xl2 border border-border transition-colors ${notification.read ? 'bg-surface' : 'bg-primary-light'}`}
    >
      <div className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center shrink-0">
        <Bell size={16} />
      </div>
      <div>
        <p className="font-bold text-ink">{notification.title}</p>
        <p className="text-sm text-muted font-body mt-0.5">{notification.body}</p>
        <p className="text-xs text-muted font-body mt-1">{notification.time}</p>
      </div>
    </button>
  )
}
