import React, { createContext, useContext, useEffect, useState } from 'react'
import { SEED_REQUESTS, NOTIFICATIONS, PENDING_VERIFICATION, HELPERS } from '../data/mockData'

const AppContext = createContext(null)

const LS_KEYS = {
  user: 'saath_user',
  requests: 'saath_requests',
  notifications: 'saath_notifications',
  verification: 'saath_verification',
  elderlyMode: 'saath_elderly_mode',
}

function load(key, fallback) {
  try {
    const raw = localStorage.getItem(key)
    return raw ? JSON.parse(raw) : fallback
  } catch {
    return fallback
  }
}

export function AppProvider({ children }) {
  const [user, setUser] = useState(() => load(LS_KEYS.user, null))
  const [requests, setRequests] = useState(() => load(LS_KEYS.requests, SEED_REQUESTS))
  const [notifications, setNotifications] = useState(() => load(LS_KEYS.notifications, NOTIFICATIONS))
  const [verificationQueue, setVerificationQueue] = useState(() => load(LS_KEYS.verification, PENDING_VERIFICATION))
  const [elderlyMode, setElderlyMode] = useState(() => load(LS_KEYS.elderlyMode, false))

  useEffect(() => { localStorage.setItem(LS_KEYS.user, JSON.stringify(user)) }, [user])
  useEffect(() => { localStorage.setItem(LS_KEYS.requests, JSON.stringify(requests)) }, [requests])
  useEffect(() => { localStorage.setItem(LS_KEYS.notifications, JSON.stringify(notifications)) }, [notifications])
  useEffect(() => { localStorage.setItem(LS_KEYS.verification, JSON.stringify(verificationQueue)) }, [verificationQueue])
  useEffect(() => { localStorage.setItem(LS_KEYS.elderlyMode, JSON.stringify(elderlyMode)) }, [elderlyMode])

  function login({ name, role }) {
    setUser({ id: 'demo-' + role, name: name || 'Demo User', role })
  }

  function logout() {
    setUser(null)
  }

  function addRequest(reqData) {
    const newReq = {
      id: 'r' + Date.now(),
      status: 'open',
      helperId: null,
      timeline: ['posted'],
      createdAt: new Date().toISOString(),
      ...reqData,
    }
    setRequests(prev => [newReq, ...prev])
    return newReq
  }

  function acceptRequest(requestId, helperId) {
    setRequests(prev => prev.map(r => r.id === requestId
      ? { ...r, status: 'assigned', helperId, timeline: [...r.timeline, 'assigned', 'notified'] }
      : r))
    addNotification({ title: 'New helper assigned', body: 'A helper accepted your request. Family has been notified.' })
  }

  function updateRequestStatus(requestId, status) {
    setRequests(prev => prev.map(r => {
      if (r.id !== requestId) return r
      const timeline = [...r.timeline]
      if (status === 'in_progress' && !timeline.includes('in_progress')) timeline.push('in_progress')
      if (status === 'completed' && !timeline.includes('completed')) timeline.push('completed')
      return { ...r, status, timeline }
    }))
  }

  function rateRequest(requestId, rating, feedback) {
    setRequests(prev => prev.map(r => r.id === requestId ? { ...r, rating, feedback } : r))
  }

  function addNotification({ title, body }) {
    setNotifications(prev => [{ id: 'n' + Date.now(), title, body, time: 'Just now', read: false }, ...prev])
  }

  function markNotificationRead(id) {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, read: true } : n))
  }

  function approveVerification(id) {
    setVerificationQueue(prev => prev.map(p => p.id === id ? { ...p, status: 'approved' } : p))
  }

  function rejectVerification(id) {
    setVerificationQueue(prev => prev.map(p => p.id === id ? { ...p, status: 'rejected' } : p))
  }

  const value = {
    user, login, logout,
    requests, addRequest, acceptRequest, updateRequestStatus, rateRequest,
    notifications, addNotification, markNotificationRead,
    verificationQueue, approveVerification, rejectVerification,
    helpers: HELPERS,
    elderlyMode, setElderlyMode,
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used within AppProvider')
  return ctx
}
