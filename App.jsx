import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import BottomNav from './components/BottomNav'
import ProtectedRoute from './components/ProtectedRoute'

import Landing from './pages/Landing'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import PostRequest from './pages/PostRequest'
import RequestDetail from './pages/RequestDetail'
import RequestsList from './pages/RequestsList'
import Helpers from './pages/Helpers'
import HelperProfile from './pages/HelperProfile'
import Profile from './pages/Profile'
import Notifications from './pages/Notifications'
import Family from './pages/Family'
import Admin from './pages/Admin'
import AdminVerification from './pages/AdminVerification'
import AdminRequests from './pages/AdminRequests'
import AdminReports from './pages/AdminReports'
import Safety from './pages/Safety'

export default function App() {
  return (
    <div className="min-h-screen bg-bg font-sans">
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/request/new" element={<ProtectedRoute><PostRequest /></ProtectedRoute>} />
        <Route path="/request/:id" element={<ProtectedRoute><RequestDetail /></ProtectedRoute>} />
        <Route path="/requests" element={<ProtectedRoute><RequestsList /></ProtectedRoute>} />
        <Route path="/helpers" element={<ProtectedRoute><Helpers /></ProtectedRoute>} />
        <Route path="/helper/:id" element={<ProtectedRoute><HelperProfile /></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/notifications" element={<ProtectedRoute><Notifications /></ProtectedRoute>} />
        <Route path="/family" element={<ProtectedRoute roles={['family']}><Family /></ProtectedRoute>} />
        <Route path="/safety" element={<ProtectedRoute><Safety /></ProtectedRoute>} />

        <Route path="/admin" element={<ProtectedRoute roles={['admin']}><Admin /></ProtectedRoute>} />
        <Route path="/admin/verification" element={<ProtectedRoute roles={['admin']}><AdminVerification /></ProtectedRoute>} />
        <Route path="/admin/requests" element={<ProtectedRoute roles={['admin']}><AdminRequests /></ProtectedRoute>} />
        <Route path="/admin/reports" element={<ProtectedRoute roles={['admin']}><AdminReports /></ProtectedRoute>} />
      </Routes>
      <BottomNav />
    </div>
  )
}
