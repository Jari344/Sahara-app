import React from 'react'
import HelperCard from '../components/HelperCard'
import { useApp } from '../context/AppContext'

export default function Helpers() {
  const { helpers } = useApp()
  return (
    <div className="max-w-2xl mx-auto px-5 sm:px-6 py-8 pb-24">
      <h1 className="text-2xl font-extrabold text-ink mb-1">Verified Helpers</h1>
      <p className="text-muted font-body mb-5">Local students, neighbors, retirees, and part-time workers near you.</p>
      <div className="space-y-3">
        {helpers.map(h => <HelperCard key={h.id} helper={h} />)}
      </div>
    </div>
  )
}
