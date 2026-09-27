import React from 'react'
import Card from './Card'

export default function DashboardStats({ stats }) {
  return (
    <div className="grid grid-cols-2 gap-3">
      {stats.map(s => (
        <Card key={s.label} className="text-center py-6">
          <p className="text-3xl font-extrabold text-primary-dark">{s.value}</p>
          <p className="text-sm text-muted font-body mt-1">{s.label}</p>
        </Card>
      ))}
    </div>
  )
}
