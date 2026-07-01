import { useState, ChangeEvent, FormEvent } from 'react';
import { Mail, Phone, MapPin, Instagram, Linkedin, Send, MessageSquare, ArrowRight } from 'lucide-react';
import { OFFICIAL_LINKS } from '../types';

interface ContactProps {
  theme?: 'light' | 'dark';
}

export default function Contact({ theme = 'dark' }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [feedbackMsg, setFeedbackMsg] = useState('');
  const [copied, setCopied] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    // Map ID (e.g. c-name) to key
    const key = id.replace('c-', '');
    setFormData((prev) => ({
      ...prev,
      [key]: value
    }));
  };

  const getEmailData = () => {
    const { name, email, subject, message } = formData;
    const recipient = 'hackathon5@nriit.edu.in';
    const emailSubject = subject
      ? `[INNOGENESIS 2026] ${subject} - from ${name}`
      : `[INNOGENESIS 2026] Inquiry from ${name}`;

    const body = `Hello Organizing Committee,\n\nName: ${name}\nEmail: ${email}\nTopic: ${subject || 'Not Selected'}\n\nMessage:\n${message}\n\n---\nSent via INNOGENESIS 2026 Contact Form`;

    return {
      recipient,
      subject: emailSubject,
      body,
      mailtoUrl: `mailto:${recipient}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(body)}`
    };
  };

  const triggerMailto = (mailtoUrl: string) => {
    // Try primary assignment
    try {
      window.location.href = mailtoUrl;
    } catch (e) {
      // Ignored fallback
    }

    // Try secondary dynamic link to bypass iframe sandbox restrictions
    try {
      const link = document.createElement('a');
      link.href = mailtoUrl;
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (e) {
      // Ignored fallback
    }
  };

  const handleSendEmail = (e: FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      setStatus('error');
      setFeedbackMsg('Please fill out all required fields (Name, Email, and Message).');
      return;
    }

    setStatus('success');
    setFeedbackMsg('Launching your mail application...');
    
    const { mailtoUrl } = getEmailData();
    triggerMailto(mailtoUrl);
  };

  const copyToClipboard = async () => {
    const { body } = getEmailData();
    try {
      await navigator.clipboard.writeText(body);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Fallback
    }
  };

  return (
    <div className="content animate-fade-in max-w-7xl mx-auto px-4 sm:px-8 py-12 text-[var(--text-color)]">
      <section className="py-12">
        <div className="flex items-center gap-2 text-[var(--accent-amber)] font-semibold tracking-wider text-sm md:text-base uppercase mb-4">
          <MessageSquare className="w-5 h-5 text-[var(--accent-amber)]" />
          Contact Us
        </div>
        <h2 className="font-mono text-3xl md:text-5xl font-black tracking-tight mb-6">
          We're here to help.
        </h2>
        <p className="text-base md:text-xl text-[var(--text-muted)] max-w-2xl leading-relaxed mb-12 font-light">
          Have queries regarding registrations, tracks, transport accommodation, or local campus entries? Reach out directly via our contact form or contact coordinators.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* CONTACT DETAIL CARDS */}
          <div className="space-y-6">
            
            {/* EMAIL */}
            <div className="bg-[var(--glass-bg)] border border-[var(--glass-border)] hover:border-[var(--accent-amber)]/20 p-6 rounded-2xl flex gap-4 items-start transition-colors shadow-sm">
              <div className="p-3 bg-[var(--accent-amber)]/10 rounded-xl text-[var(--accent-amber)] border border-[var(--accent-amber)]/25 flex-shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xs text-[var(--text-muted)] opacity-60 font-mono tracking-wider uppercase mb-1">General Inquiries</h4>
                <a href="mailto:hackathon5@nriit.edu.in" className="text-base md:text-lg font-bold hover:text-[var(--accent-amber)] transition-colors">
                  hackathon5@nriit.edu.in
                </a>
              </div>
            </div>

            {/* PHONES / SUPPORT */}
            <div className="bg-[var(--glass-bg)] border border-[var(--glass-border)] hover:border-[var(--accent-amber)]/20 p-6 rounded-2xl flex gap-4 items-start transition-colors shadow-sm">
              <div className="p-3 bg-[var(--accent-amber)]/10 rounded-xl text-[var(--accent-amber)] border border-[var(--accent-amber)]/25 flex-shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div className="space-y-3">
                <h4 className="text-xs text-[var(--text-muted)] opacity-60 font-mono tracking-wider uppercase mb-1">Contact Coordinators</h4>
                <div className="text-base md:text-lg font-bold leading-normal">
                  <a href="tel:9491659594" className="hover:text-[var(--accent-amber)] transition-colors">Mr. K. Raga Sai</a>
                  <div className="text-[var(--text-muted)] opacity-80 font-light text-sm mt-0.5">[Assistant Professor] · 9491659594</div>
                </div>
                <div className="text-base md:text-lg font-bold leading-normal">
                  <a href="tel:9494361866" className="hover:text-[var(--accent-amber)] transition-colors">Mr. P. Srinivas</a>
                  <div className="text-[var(--text-muted)] opacity-80 font-light text-sm mt-0.5">[Associate Professor] · 9494361866</div>
                </div>
              </div>
            </div>

            {/* VENUE */}
            <div className="bg-[var(--glass-bg)] border border-[var(--glass-border)] hover:border-[var(--accent-amber)]/20 p-6 rounded-2xl flex gap-4 items-start transition-colors shadow-sm">
              <div className="p-3 bg-[var(--accent-amber)]/10 rounded-xl text-[var(--accent-amber)] border border-[var(--accent-amber)]/25 flex-shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xs text-[var(--text-muted)] opacity-60 font-mono tracking-wider uppercase mb-1">Venue</h4>
                <p className="text-base md:text-lg font-bold leading-relaxed">
                  Dr. RVR NRI Institute of Technology,<br />
                  Agiripalli, Andhra Pradesh — 521 212
                </p>
              </div>
            </div>

            {/* INSTAGRAM & SOCIAL LINKS */}
            <div className="bg-[var(--glass-bg)] border border-[var(--glass-border)] hover:border-[var(--accent-amber)]/20 p-6 rounded-2xl flex gap-4 items-start transition-colors shadow-sm">
              <div className="p-3 bg-[var(--accent-amber)]/10 rounded-xl text-[var(--accent-amber)] border border-[var(--accent-amber)]/25 flex-shrink-0">
                <Instagram className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xs text-[var(--text-muted)] opacity-60 font-mono tracking-wider uppercase mb-2">Follow for Updates</h4>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm md:text-base font-bold">
                  <a href={OFFICIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-violet-500 hover:text-violet-400">
                    @innogenesis_nri
                  </a>
                  <span className="text-[var(--text-muted)] opacity-35 select-none">·</span>
                  <a href={OFFICIAL_LINKS.instagramUni} target="_blank" rel="noopener noreferrer" className="text-[var(--accent-amber)] hover:text-[var(--accent-amber)]/80">
                    @nriuniversity_official
                  </a>
                </div>
              </div>
            </div>

            {/* GOOGLE MAPS EMBED */}
            <div className="rounded-2xl overflow-hidden border border-[var(--glass-border)] h-64 shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.5!2d80.7377657!3d16.6631257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35e0d94546c99f%3A0x94dc5f4441a45bab!2sDr.%20RVR%20NRI%20INSTITUTE%20OF%20TECHNOLOGY%20-%20DEEMED%20TO%20BE%20UNIVERSITY%2C%20Agiripalli!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, filter: theme === 'dark' ? 'invert(90%) hue-rotate(180deg)' : 'none' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="NRI Institute Location"
              />
            </div>
            
            <a
              href="https://www.google.com/maps/place/Dr.+RVR+NRI+INSTITUTE+OF+TECHNOLOGY+-+DEEMED+TO+BE+UNIVERSITY,+Agiripalli/@16.6631257,80.7377657,15z/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[var(--accent-amber)] hover:text-[var(--accent-amber)]/80"
            >
              <MapPin className="w-4 h-4" />
              Open in Google Maps →
            </a>

          </div>

          {/* CONTACT FORM BOX */}
          <div className="bg-[var(--card-bg)] border border-[var(--glass-border)] rounded-2xl p-6 md:p-8 shadow-2xl transition-colors duration-300">
            <h3 className="text-xl font-black mb-6">Send us a message</h3>
            <form onSubmit={handleSendEmail} className="space-y-5">
              
              {/* Name */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="c-name" className="text-xs md:text-sm font-bold tracking-wide text-[var(--text-muted)] opacity-70 uppercase">
                  Your name
                </label>
                <input
                  type="text"
                  id="c-name"
                  placeholder="Full name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-[var(--glass-bg)] border border-[var(--glass-border)] focus:border-[var(--accent-amber)] focus:bg-[var(--glass-bg)]/80 outline-none text-[var(--text-color)] text-base p-4.5 rounded-xl transition-all font-medium"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="c-email" className="text-xs md:text-sm font-bold tracking-wide text-[var(--text-muted)] opacity-70 uppercase">
                  Email address
                </label>
                <input
                  type="email"
                  id="c-email"
                  placeholder="you@college.edu"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-[var(--glass-bg)] border border-[var(--glass-border)] focus:border-[var(--accent-amber)] focus:bg-[var(--glass-bg)]/80 outline-none text-[var(--text-color)] text-base p-4.5 rounded-xl transition-all font-medium"
                />
              </div>

              {/* Subject Dropdown */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="c-subject" className="text-xs md:text-sm font-bold tracking-wide text-[var(--text-muted)] opacity-70 uppercase">
                  Subject Topic
                </label>
                <select
                  id="c-subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full bg-[var(--card-bg)] border border-[var(--glass-border)] focus:border-[var(--accent-amber)] focus:bg-[var(--glass-bg)]/80 outline-none text-[var(--text-color)] text-base p-4.5 rounded-xl transition-all font-medium"
                  style={{ backgroundColor: 'var(--card-bg)', color: 'var(--text-color)' }}
                >
                  <option value="" style={{ backgroundColor: 'var(--card-bg)', color: 'var(--text-color)' }}>Select topic…</option>
                  <option value="Registration help" style={{ backgroundColor: 'var(--card-bg)', color: 'var(--text-color)' }}>Registration help</option>
                  <option value="Sponsorship enquiry" style={{ backgroundColor: 'var(--card-bg)', color: 'var(--text-color)' }}>Sponsorship enquiry</option>
                  <option value="Accommodation" style={{ backgroundColor: 'var(--card-bg)', color: 'var(--text-color)' }}>Accommodation details</option>
                  <option value="Track question" style={{ backgroundColor: 'var(--card-bg)', color: 'var(--text-color)' }}>Track disciplines query</option>
                  <option value="Other" style={{ backgroundColor: 'var(--card-bg)', color: 'var(--text-color)' }}>Other</option>
                </select>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="c-message" className="text-xs md:text-sm font-bold tracking-wide text-[var(--text-muted)] opacity-70 uppercase">
                  Message Body
                </label>
                <textarea
                  id="c-message"
                  placeholder="Tell us how we can help…"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full bg-[var(--glass-bg)] border border-[var(--glass-border)] focus:border-[var(--accent-amber)] focus:bg-[var(--glass-bg)]/80 outline-none text-[var(--text-color)] text-base p-4.5 rounded-xl transition-all resize-none font-medium"
                />
              </div>

              {/* Status Feedbacks */}
              {status === 'error' && (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium animate-fade-in flex items-start gap-2.5">
                  <span className="mt-0.5">⚠️</span>
                  <div>{feedbackMsg}</div>
                </div>
              )}

              {status === 'success' && (
                <div className="p-5 rounded-2xl bg-[var(--accent-orange)]/5 border border-[var(--accent-orange)]/20 text-[var(--text-color)] text-sm font-medium animate-fade-in space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[var(--accent-orange)]/20 text-[var(--accent-orange)] flex items-center justify-center font-bold text-sm flex-shrink-0">
                      ✓
                    </div>
                    <div>
                      <p className="font-bold text-[var(--accent-orange)] text-base">Message Formatted Successfully!</p>
                      <p className="text-[var(--text-muted)] text-xs mt-1 leading-relaxed">
                        To guarantee your message delivers perfectly to <strong className="text-[var(--text-color)] font-semibold text-[var(--accent-orange)]">hackathon5@nriit.edu.in</strong>, select your preferred method below to open and send the pre-composed message:
                      </p>
                    </div>
                  </div>

                  {/* Mail Client Options */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1.5">
                    {/* Gmail Web App */}
                    <button
                      type="button"
                      onClick={() => {
                        const { subject, body } = getEmailData();
                        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=hackathon5@nriit.edu.in&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                        window.open(gmailUrl, '_blank');
                      }}
                      className="px-4 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                    >
                      <span className="text-base">✉</span>
                      Open in Gmail
                    </button>

                    {/* Outlook Web App */}
                    <button
                      type="button"
                      onClick={() => {
                        const { subject, body } = getEmailData();
                        const outlookUrl = `https://outlook.live.com/mail/0/deeplink/compose?to=hackathon5@nriit.edu.in&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                        window.open(outlookUrl, '_blank');
                      }}
                      className="px-4 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                    >
                      <span className="text-base">📅</span>
                      Open in Outlook
                    </button>

                    {/* Default Mail App (mailto) */}
                    <button
                      type="button"
                      onClick={() => {
                        const { mailtoUrl } = getEmailData();
                        triggerMailto(mailtoUrl);
                      }}
                      className="px-4 py-3 rounded-xl bg-[var(--accent-orange)] hover:bg-[var(--accent-orange)]/90 text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                    >
                      <Send className="w-3.5 h-3.5" />
                      Default Mail App
                    </button>

                    {/* Copy to Clipboard fallback */}
                    <button
                      type="button"
                      onClick={copyToClipboard}
                      className="px-4 py-3 rounded-xl bg-[var(--glass-bg)] hover:bg-[var(--glass-bg)]/80 border border-[var(--glass-border)] text-[var(--text-color)] text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>{copied ? '✓ Body Copied' : '📋 Copy Draft'}</span>
                    </button>
                  </div>

                  {/* Pre-formatted Draft Review */}
                  <div className="bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-xl p-3.5 mt-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-muted)] block mb-1.5 font-bold">Pre-formatted Draft Body preview:</span>
                    <pre className="text-xs text-[var(--text-muted)] font-mono whitespace-pre-wrap break-all select-all max-h-32 overflow-y-auto leading-relaxed p-1 bg-black/5 rounded-lg border border-[var(--glass-border)]/50">
                      {getEmailData().body}
                    </pre>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 rounded-full bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 hover:from-orange-500 hover:to-amber-400 text-white font-black text-sm tracking-widest uppercase cursor-pointer flex items-center justify-center gap-2 shadow-lg hover:scale-[1.01] active:scale-95 transition-all"
              >
                {status === 'success' ? 'Update & Resend Message' : 'Send Message'}
                <Send className="w-4 h-4" />
              </button>

            </form>
          </div>

        </div>
      </section>
    </div>
  );
}
