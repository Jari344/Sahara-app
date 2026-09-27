import React from 'react'
import { Link } from 'react-router-dom'
import { ShieldCheck, MapPin, Users, Smile, HeartHandshake, ClipboardCheck, UserCheck, PhoneCall } from 'lucide-react'
import Button from '../components/Button'

const REASONS = [
  { icon: ShieldCheck, text: 'Verified local helpers' },
  { icon: MapPin, text: 'Hyperlocal matching' },
  { icon: Users, text: 'Family visibility' },
  { icon: Smile, text: 'Simple for seniors' },
  { icon: HeartHandshake, text: 'Human connection, not AI companionship' },
]

const STEPS = [
  { icon: ClipboardCheck, title: 'Post a request', text: 'Say what kind of help is needed, and when.' },
  { icon: UserCheck, title: 'A neighbor accepts', text: 'A verified local helper picks up the request nearby.' },
  { icon: PhoneCall, title: 'Family gets updates', text: 'Everyone stays informed, start to finish.' },
]

export default function Landing() {
  return (
    <div>
      <section className="max-w-5xl mx-auto px-6 pt-14 pb-10 text-center">
        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-secondary-dark bg-secondary-light px-3 py-1.5 rounded-full">
          <MapPin size={14} /> Currently serving: Betul, Madhya Pradesh
        </span>
        <h1 className="mt-6 text-4xl sm:text-5xl font-extrabold text-ink leading-tight max-w-2xl mx-auto">
          A little help, right around the corner.
        </h1>
        <p className="mt-4 text-lg text-muted font-body max-w-xl mx-auto">
          Connect elderly people and families with trusted people nearby for simple tasks, visits, and everyday support.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/signup?role=elderly"><Button size="lg" className="w-full sm:w-auto">I Need Help</Button></Link>
          <Link to="/signup?role=helper"><Button size="lg" variant="outline" className="w-full sm:w-auto">I Want to Help</Button></Link>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-extrabold text-ink text-center mb-8">Why Saath?</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {REASONS.map(({ icon: Icon, text }) => (
            <div key={text} className="bg-white rounded-xl2 border border-border p-5 text-center shadow-soft">
              <Icon className="mx-auto text-primary" size={28} />
              <p className="mt-3 text-sm font-semibold text-ink font-body">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-primary-light py-12 mt-6">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-extrabold text-ink text-center mb-8">How it works</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {STEPS.map(({ icon: Icon, title, text }, i) => (
              <div key={title} className="text-center">
                <div className="w-14 h-14 rounded-full bg-white shadow-soft flex items-center justify-center mx-auto text-primary">
                  <Icon size={26} />
                </div>
                <h3 className="mt-3 font-bold text-ink">{title}</h3>
                <p className="text-sm text-muted font-body mt-1">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-extrabold text-ink text-center mb-8">Saath in your neighborhood</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            ['12', 'families helped this month'],
            ['27', 'verified helpers'],
            ['43', 'completed requests'],
            ['8,400', 'minutes of community support'],
          ].map(([value, label]) => (
            <div key={label} className="bg-white rounded-xl2 border border-border p-5 text-center shadow-soft">
              <p className="text-2xl font-extrabold text-secondary-dark">{value}</p>
              <p className="text-xs text-muted font-body mt-1">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-14 text-center">
        <h2 className="text-2xl font-extrabold text-ink">Ready to get started?</h2>
        <p className="text-muted font-body mt-2">Join families and helpers already part of the Betul community.</p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/signup"><Button size="lg">Get Started</Button></Link>
          <Link to="/login"><Button size="lg" variant="ghost">I already have an account</Button></Link>
        </div>
      </section>
    </div>
  )
}
