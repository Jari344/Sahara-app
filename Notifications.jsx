import React from 'react'
import { useApp } from '../context/AppContext'
import NotificationCard from '../components/NotificationCard'
import { Bell } from 'lucide-react'

export default function Notifications() {
  const { notifications, markNotificationRead } = useApp()

  return (
    <div className="max-w-lg mx-auto px-5 sm:px-6 py-8 pb-24">
      <h1 className="text-2xl font-extrabold text-ink mb-5">Notifications</h1>
      {notifications.length === 0 ? (
        <div className="text-center py-14 text-muted font-body">
          <Bell className="mx-auto mb-2" />
          Nothing new right now.
        </div>
      ) : (
        <div className="space-y-3">
          {notifications.map(n => <NotificationCard key={n.id} notification={n} onRead={markNotificationRead} />)}
        </div>
      )}
    </div>
  )
}
