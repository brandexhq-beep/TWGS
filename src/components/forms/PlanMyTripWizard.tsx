import React, { useState, useRef } from 'react';

// ─────────────────────────────────────────────────────────────────────────────
// PlanMyTripWizard — 4-step interactive form
// Runs as a React island (client:visible)
// ─────────────────────────────────────────────────────────────────────────────

type TripType = {
  id: string;
  label: string;
  icon: string;
  description: string;
};

const TRIP_TYPES: TripType[] = [
  { id: 'domestic', label: 'Domestic', icon: '🏔️', description: 'India\'s incredible diversity' },
  { id: 'international', label: 'International', icon: '✈️', description: 'Explore the globe' },
  { id: 'luxury', label: 'Luxury', icon: '💎', description: 'Premium, curated escapes' },
  { id: 'adventure', label: 'Adventure', icon: '🧗', description: 'Thrill & wilderness' },
  { id: 'family', label: 'Family', icon: '👨‍👩‍👧', description: 'Memories for everyone' },
  { id: 'corporate', label: 'Corporate', icon: '🏢', description: 'MICE & team retreats' },
  { id: 'solo', label: 'Solo', icon: '🎒', description: 'Your pace, your way' },
  { id: 'honeymoon', label: 'Honeymoon', icon: '💑', description: 'Romance perfected' },
];

const PREFERENCE_CHIPS = [
  'Beaches', 'Mountains', 'Wildlife', 'Culture & Heritage', 'Nightlife',
  'Relaxation & Spa', 'Food & Cuisine', 'Adventure Sports', 'Photography',
  'Spiritual Journeys', 'Shopping', 'Road Trips',
];

const DESTINATIONS = [
  'Rajasthan', 'Kerala', 'Goa', 'Himachal Pradesh', 'Jammu & Kashmir', 'Uttarakhand',
  'Andaman Islands', 'Ladakh', 'Meghalaya', 'Coorg', 'Maldives', 'Bali', 'Dubai',
  'Singapore', 'Thailand', 'Sri Lanka', 'Paris', 'Santorini', 'Switzerland', 'Bali',
];

interface FormData {
  tripType: string;
  budget: number;
  startDate: string;
  endDate: string;
  adults: number;
  children: number;
  destination: string;
  preferences: string[];
  name: string;
  phone: string;
  email: string;
  message: string;
  consent: boolean;
}

const STEPS = ['Trip Type', 'Dates & Budget', 'Destination', 'Your Details'];

export default function PlanMyTripWizard() {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState<'forward' | 'back'>('forward');
  const [isAnimating, setIsAnimating] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [destSearch, setDestSearch] = useState('');
  const [destFiltered, setDestFiltered] = useState<string[]>([]);

  const [form, setForm] = useState<FormData>({
    tripType: '',
    budget: 75000,
    startDate: '',
    endDate: '',
    adults: 2,
    children: 0,
    destination: '',
    preferences: [],
    name: '',
    phone: '',
    email: '',
    message: '',
    consent: false,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  function navigate(to: number) {
    if (isAnimating) return;
    setDirection(to > step ? 'forward' : 'back');
    setIsAnimating(true);
    setTimeout(() => {
      setStep(to);
      setIsAnimating(false);
    }, 300);
  }

  function togglePreference(pref: string) {
    setForm((f) => ({
      ...f,
      preferences: f.preferences.includes(pref)
        ? f.preferences.filter((p) => p !== pref)
        : [...f.preferences, pref],
    }));
  }

  function handleDestSearch(val: string) {
    setDestSearch(val);
    setForm((f) => ({ ...f, destination: val }));
    setDestFiltered(
      val.length > 0
        ? DESTINATIONS.filter((d) => d.toLowerCase().includes(val.toLowerCase()))
        : []
    );
  }

  function validateStep(): boolean {
    const e: typeof errors = {};
    if (step === 0 && !form.tripType) e.tripType = 'Please select a trip type.';
    if (step === 1) {
      if (!form.startDate) e.startDate = 'Please select a start date.';
      if (!form.endDate) e.endDate = 'Please select a return date.';
    }
    if (step === 2 && !form.destination) e.destination = 'Please enter a destination.';
    if (step === 3) {
      if (!form.name.trim()) e.name = 'Please enter your name.';
      if (!form.phone.trim() || form.phone.length < 10) e.phone = 'Please enter a valid phone number.';
      if (!form.email.trim() || !form.email.includes('@')) e.email = 'Please enter a valid email.';
      if (!form.consent) e.consent = 'Please agree to the Privacy Policy.';
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function next() {
    if (!validateStep()) return;
    if (step < 3) navigate(step + 1);
  }

  function back() {
    if (step > 0) navigate(step - 1);
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!validateStep()) return;
    setIsLoading(true);
    // Simulate submission delay (TODO: wire to real endpoint)
    await new Promise((r) => setTimeout(r, 1500));
    setIsLoading(false);
    setSubmitted(true);
  }

  // Step slide animation classes
  const slideClass = isAnimating
    ? direction === 'forward'
      ? 'translate-x-10 opacity-0'
      : '-translate-x-10 opacity-0'
    : 'translate-x-0 opacity-100';

  if (submitted) {
    return (
      <div className="text-center py-12 px-4">
        <div className="flex items-center justify-center mb-6">
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" aria-hidden="true">
            <circle cx="40" cy="40" r="38" fill="rgba(0,39,124,0.1)" stroke="#00277C" strokeWidth="2"
              style={{ animation: 'scale-in 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards' }}
            />
            <path d="M24 40 L36 52 L56 30" stroke="#00277C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"
              style={{ strokeDasharray: 60, strokeDashoffset: 60, animation: 'draw-check 0.4s ease-out 0.3s forwards' }}
            />
          </svg>
        </div>
        <h3 className="font-display text-3xl font-medium mb-3" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
          Your journey starts here.
        </h3>
        <p className="text-base leading-relaxed max-w-sm mx-auto mb-6" style={{ color: '#666' }}>
          We've received your trip request. A specialist will contact you within{' '}
          <strong style={{ color: '#161616' }}>4 business hours</strong> with tailored options.
        </p>
        <div className="bg-[#FCFCFA] rounded-xl p-5 max-w-sm mx-auto text-left">
          <p className="text-xs uppercase tracking-widest mb-3" style={{ color: '#C6A34E', fontWeight: 600 }}>What happens next</p>
          <ul className="space-y-2 text-sm" style={{ color: '#161616' }}>
            <li className="flex gap-2">
              <span style={{ color: '#00277C' }}>✓</span>
              We review your {form.tripType} trip request
            </li>
            <li className="flex gap-2">
              <span style={{ color: '#00277C' }}>✓</span>
              Curate 2–3 personalised itinerary options
            </li>
            <li className="flex gap-2">
              <span style={{ color: '#00277C' }}>✓</span>
              Call or WhatsApp you to walk through them
            </li>
          </ul>
        </div>
        <style>{`
          @keyframes scale-in { from { transform: scale(0); } to { transform: scale(1); } }
          @keyframes draw-check { to { stroke-dashoffset: 0; } }
        `}</style>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Progress indicator */}
      <div className="mb-8" role="progressbar" aria-valuenow={step + 1} aria-valuemin={1} aria-valuemax={4} aria-label={`Step ${step + 1} of 4: ${STEPS[step]}`}>
        <div className="flex items-center justify-between mb-3">
          {STEPS.map((s, i) => (
            <div key={s} className="flex items-center" style={{ flex: i < STEPS.length - 1 ? 1 : 'none' }}>
              {/* Step dot */}
              <button
                onClick={() => i < step && navigate(i)}
                disabled={i > step}
                className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold shrink-0 transition-all duration-300 border-2"
                style={{
                  background: i < step ? '#00277C' : i === step ? 'white' : 'transparent',
                  borderColor: i <= step ? '#00277C' : '#ECECEC',
                  color: i < step ? 'white' : i === step ? '#00277C' : '#999',
                  cursor: i < step ? 'pointer' : 'default',
                }}
                aria-label={i < step ? `Go back to step ${i + 1}: ${s}` : s}
              >
                {i < step ? (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                ) : (
                  i + 1
                )}
              </button>
              {/* Connector line */}
              {i < STEPS.length - 1 && (
                <div className="flex-1 h-0.5 mx-2 rounded-full overflow-hidden" style={{ background: '#ECECEC' }}>
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{ background: '#00277C', width: i < step ? '100%' : '0%' }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
        <p className="text-xs font-semibold uppercase tracking-widest text-center" style={{ color: '#00277C' }}>
          Step {step + 1} of 4 — {STEPS[step]}
        </p>
      </div>

      {/* Step content */}
      <div
        className="transition-all duration-300 ease-out"
        style={{ transform: isAnimating ? (direction === 'forward' ? 'translateX(40px)' : 'translateX(-40px)') : 'translateX(0)', opacity: isAnimating ? 0 : 1 }}
      >
        {/* STEP 1: Trip Type */}
        {step === 0 && (
          <div>
            <p className="font-display text-2xl mb-6 text-center" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>
              What kind of adventure are you planning?
            </p>
            {errors.tripType && <p className="text-red-500 text-sm text-center mb-3">{errors.tripType}</p>}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {TRIP_TYPES.map((t) => {
                const isSelected = form.tripType === t.id;
                return (
                  <button
                    key={t.id}
                    onClick={() => { setForm((f) => ({ ...f, tripType: t.id })); setErrors((e) => ({ ...e, tripType: undefined })); }}
                    className="relative p-4 rounded-xl border-2 text-left transition-all duration-200 hover:border-[#00277C] hover:scale-[1.02]"
                    style={{
                      borderColor: isSelected ? '#00277C' : '#ECECEC',
                      background: isSelected ? 'rgba(0,39,124,0.06)' : 'white',
                    }}
                    aria-pressed={isSelected}
                    aria-label={`${t.label} — ${t.description}`}
                  >
                    {/* Checkmark badge */}
                    {isSelected && (
                      <span className="absolute top-2 right-2 w-5 h-5 rounded-full flex items-center justify-center" style={{ background: '#00277C' }}>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" aria-hidden="true">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                      </span>
                    )}
                    <span className="text-2xl block mb-2" aria-hidden="true">{t.icon}</span>
                    <span className="font-semibold text-sm block" style={{ color: isSelected ? '#00277C' : '#161616' }}>{t.label}</span>
                    <span className="text-xs block mt-0.5" style={{ color: '#666' }}>{t.description}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 2: Budget, Dates, Travellers */}
        {step === 1 && (
          <div className="space-y-6">
            <p className="font-display text-2xl mb-2" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>
              When are you going, and for how many?
            </p>

            {/* Budget slider */}
            <div className="form-field">
              <label className="form-label flex items-center justify-between">
                <span>Budget per person</span>
                <span className="font-bold text-base" style={{ color: '#00277C' }}>
                  ₹{form.budget.toLocaleString('en-IN')}
                </span>
              </label>
              <input
                type="range"
                min={15000}
                max={500000}
                step={5000}
                value={form.budget}
                onChange={(e) => setForm((f) => ({ ...f, budget: parseInt(e.target.value) }))}
                className="w-full mt-2"
                aria-label={`Budget: ₹${form.budget.toLocaleString('en-IN')}`}
              />
              <div className="flex justify-between text-xs mt-1" style={{ color: '#999' }}>
                <span>₹15,000</span>
                <span>₹5,00,000+</span>
              </div>
            </div>

            {/* Dates */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="form-field">
                <label htmlFor="start-date" className="form-label">Departure Date</label>
                <input
                  type="date"
                  id="start-date"
                  value={form.startDate}
                  onChange={(e) => { setForm((f) => ({ ...f, startDate: e.target.value })); setErrors((err) => ({ ...err, startDate: undefined })); }}
                  className={`form-input ${errors.startDate ? 'error' : ''}`}
                  min={new Date().toISOString().split('T')[0]}
                  aria-describedby={errors.startDate ? 'start-date-error' : undefined}
                  required
                />
                {errors.startDate && <span className="form-error" id="start-date-error">{errors.startDate}</span>}
              </div>
              <div className="form-field">
                <label htmlFor="end-date" className="form-label">Return Date</label>
                <input
                  type="date"
                  id="end-date"
                  value={form.endDate}
                  onChange={(e) => { setForm((f) => ({ ...f, endDate: e.target.value })); setErrors((err) => ({ ...err, endDate: undefined })); }}
                  className={`form-input ${errors.endDate ? 'error' : ''}`}
                  min={form.startDate || new Date().toISOString().split('T')[0]}
                  aria-describedby={errors.endDate ? 'end-date-error' : undefined}
                  required
                />
                {errors.endDate && <span className="form-error" id="end-date-error">{errors.endDate}</span>}
              </div>
            </div>

            {/* Travellers stepper */}
            <div className="grid grid-cols-2 gap-4">
              {([['adults', 'Adults (12+)'], ['children', 'Children (under 12)']] as const).map(([key, label]) => (
                <div key={key} className="form-field">
                  <label className="form-label">{label}</label>
                  <div className="flex items-center gap-3 mt-1">
                    <button
                      type="button"
                      onClick={() => setForm((f) => ({ ...f, [key]: Math.max(key === 'adults' ? 1 : 0, f[key] - 1) }))}
                      className="w-10 h-10 rounded-full border-2 flex items-center justify-center font-bold text-lg transition-colors hover:border-[#00277C] hover:text-[#00277C]"
                      style={{ borderColor: '#ECECEC', color: '#161616' }}
                      aria-label={`Decrease ${label}`}
                    >
                      −
                    </button>
                    <span className="w-8 text-center font-semibold text-lg">{form[key]}</span>
                    <button
                      type="button"
                      onClick={() => setForm((f) => ({ ...f, [key]: f[key] + 1 }))}
                      className="w-10 h-10 rounded-full border-2 flex items-center justify-center font-bold text-lg transition-colors hover:border-[#00277C] hover:text-[#00277C]"
                      style={{ borderColor: '#ECECEC', color: '#161616' }}
                      aria-label={`Increase ${label}`}
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STEP 3: Destination + Preferences */}
        {step === 2 && (
          <div className="space-y-6">
            <p className="font-display text-2xl mb-2" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>
              Where do you want to go?
            </p>

            {/* Destination autocomplete */}
            <div className="form-field relative">
              <label htmlFor="destination-input" className="form-label">Destination</label>
              <input
                type="text"
                id="destination-input"
                value={destSearch}
                onChange={(e) => handleDestSearch(e.target.value)}
                placeholder="Search destination (e.g. Kerala, Bali, Paris…)"
                className={`form-input ${errors.destination ? 'error' : ''}`}
                autoComplete="off"
                aria-autocomplete="list"
                aria-controls="dest-suggestions"
                aria-haspopup="listbox"
                role="combobox"
                aria-expanded={destFiltered.length > 0}
              />
              {errors.destination && <span className="form-error">{errors.destination}</span>}
              {destFiltered.length > 0 && (
                <ul
                  id="dest-suggestions"
                  role="listbox"
                  className="absolute top-full left-0 right-0 bg-white border border-[#ECECEC] rounded-xl shadow-lg mt-1 overflow-hidden z-50 max-h-48 overflow-y-auto"
                >
                  {destFiltered.map((d) => (
                    <li key={d}>
                      <button
                        type="button"
                        role="option"
                        aria-selected={form.destination === d}
                        className="w-full text-left px-4 py-2.5 text-sm hover:bg-[#FCFCFA] transition-colors"
                        onClick={() => { handleDestSearch(d); setDestFiltered([]); setErrors((err) => ({ ...err, destination: undefined })); }}
                      >
                        {d}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Preference chips */}
            <div>
              <p className="form-label mb-3">Travel preferences <span className="text-xs font-normal" style={{ color: '#999' }}>(select all that apply)</span></p>
              <div className="flex flex-wrap gap-2" role="group" aria-label="Travel preferences">
                {PREFERENCE_CHIPS.map((pref) => {
                  const selected = form.preferences.includes(pref);
                  return (
                    <button
                      key={pref}
                      type="button"
                      onClick={() => togglePreference(pref)}
                      aria-pressed={selected}
                      className="chip transition-all duration-200"
                      style={{
                        borderColor: selected ? '#00277C' : '#ECECEC',
                        color: selected ? '#00277C' : '#666',
                        background: selected ? 'rgba(0,39,124,0.06)' : 'white',
                      }}
                    >
                      {selected && '✓ '}
                      {pref}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* STEP 4: Personal Details */}
        {step === 3 && (
          <form onSubmit={submit} noValidate id="plan-my-trip-form" aria-label="Personal details form">
            <p className="font-display text-2xl mb-6" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>
              Almost there — a little about you.
            </p>

            {/* Honeypot */}
            <input type="text" name="_honey" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" aria-hidden="true" />
            <input type="hidden" name="subject" value="Plan My Trip Request — The Man Wanders Globe" />

            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="form-field">
                  <label htmlFor="pmt-name" className="form-label">Full Name *</label>
                  <input
                    type="text"
                    id="pmt-name"
                    value={form.name}
                    onChange={(e) => { setForm((f) => ({ ...f, name: e.target.value })); setErrors((er) => ({ ...er, name: undefined })); }}
                    placeholder="Raj Sharma"
                    className={`form-input ${errors.name ? 'error' : ''}`}
                    autoComplete="name"
                    required
                  />
                  {errors.name && <span className="form-error">{errors.name}</span>}
                </div>
                <div className="form-field">
                  <label htmlFor="pmt-phone" className="form-label">Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    id="pmt-phone"
                    value={form.phone}
                    onChange={(e) => { setForm((f) => ({ ...f, phone: e.target.value })); setErrors((er) => ({ ...er, phone: undefined })); }}
                    placeholder="+91 98765 43210"
                    className={`form-input ${errors.phone ? 'error' : ''}`}
                    autoComplete="tel"
                    required
                  />
                  {errors.phone && <span className="form-error">{errors.phone}</span>}
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="pmt-email" className="form-label">Email Address *</label>
                <input
                  type="email"
                  id="pmt-email"
                  value={form.email}
                  onChange={(e) => { setForm((f) => ({ ...f, email: e.target.value })); setErrors((er) => ({ ...er, email: undefined })); }}
                  placeholder="raj@example.com"
                  className={`form-input ${errors.email ? 'error' : ''}`}
                  autoComplete="email"
                  required
                />
                {errors.email && <span className="form-error">{errors.email}</span>}
              </div>

              <div className="form-field">
                <label htmlFor="pmt-message" className="form-label">Anything else we should know?</label>
                <textarea
                  id="pmt-message"
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  placeholder="Anniversary trip, specific hotel preferences, dietary requirements, accessibility needs…"
                  className="form-input resize-none"
                  rows={3}
                />
              </div>

              {/* Consent */}
              <div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={form.consent}
                    onChange={(e) => { setForm((f) => ({ ...f, consent: e.target.checked })); setErrors((er) => ({ ...er, consent: undefined })); }}
                    className="w-4 h-4 mt-0.5 accent-[#00277C]"
                    required
                  />
                  <span className="text-sm" style={{ color: '#666', lineHeight: 1.5 }}>
                    I agree to the{' '}
                    <a href="/privacy-policy" className="text-[#00277C] underline" target="_blank">Privacy Policy</a>
                    {' '}and consent to The Man Wanders Globe contacting me about my trip enquiry.
                    Placeholder data — see §10.
                  </span>
                </label>
                {errors.consent && <p className="form-error mt-1">{errors.consent}</p>}
              </div>
            </div>
          </form>
        )}
      </div>

      {/* Navigation buttons */}
      <div className="flex items-center justify-between mt-8 pt-6 border-t border-[#ECECEC]">
        <button
          type="button"
          onClick={back}
          disabled={step === 0}
          className="btn"
          style={{
            opacity: step === 0 ? 0 : 1,
            pointerEvents: step === 0 ? 'none' : 'auto',
            color: '#666',
            border: '1.5px solid #ECECEC',
            padding: '0.6rem 1.25rem',
          }}
          aria-label="Go to previous step"
        >
          ← Back
        </button>

        {step < 3 ? (
          <button type="button" onClick={next} className="btn btn-primary">
            <span>Continue</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </button>
        ) : (
          <button
            type="submit"
            form="plan-my-trip-form"
            className="btn btn-primary"
            disabled={isLoading}
            aria-busy={isLoading}
          >
            {isLoading ? (
              <>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="animate-spin" aria-hidden="true">
                  <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
                </svg>
                <span>Sending…</span>
              </>
            ) : (
              <>
                <span>Plan My Trip</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
}
