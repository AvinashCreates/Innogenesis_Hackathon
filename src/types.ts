export interface CommitteeMember {
  name: string;
  role: string;
  initials: string;
  colorClass: string;
}

export interface Coordinator {
  name: string;
  phone: string;
  role?: string;
}

export interface TrackDomain {
  name: string;
  desc: string;
  iconName: string; // references lucide icon
}

export interface Track {
  id: string;
  title: string;
  tagline: string;
  desc: string;
  prize: string;
  color: string;
  iconName: string;
  domains: TrackDomain[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface EventImage {
  url: string;
  title: string;
  caption: string;
}

// ── OFFICIAL LINKS ──
export const OFFICIAL_LINKS = {
  instagram: 'https://www.instagram.com/innogenesis_nri/',
  instagramUni: 'https://www.instagram.com/nriuniversity_official/',
  linkedin: 'https://www.linkedin.com/school/nri-group-of-institutions/',
  whatsappGroup: 'https://chat.whatsapp.com/G9CjF9K7GkL4Zp6f7B3q8R',
  brochure: 'https://drive.google.com/file/d/1innogenesis-brochure-placeholder/view',
  registrationForm: 'https://docs.google.com/forms/d/e/1FAIpQLSeabndg3PMclRkptuaBg8ArEESos01Dyfmgm6iMD9xS3Vp79Q/viewform'
};

// ── EVENTS PICTURES (UNSPLASH) ──
export const EVENT_IMAGES: EventImage[] = [
  {
    url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
    title: 'Collaborative Coding',
    caption: 'Teams working non-stop to build innovative software solutions.'
  },
  {
    url: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80',
    title: 'Mentorship Sessions',
    caption: 'Industry experts guiding students through technical architecture.'
  },
  {
    url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
    title: 'Prototyping Labs',
    caption: 'Active hardware prototyping and systems integration.'
  },
  {
    url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
    title: 'Project Showcases',
    caption: 'Final pitches and demos to our panel of executive judges.'
  }
];

// ── COMMITTEE DATA ──
export const CHIEF_PATRONS: CommitteeMember[] = [
  { name: 'Dr. R. Venkata Rao', role: 'Chief Patron · Chancellor', initials: 'VR', colorClass: 'bg-gradient-to-br from-amber-500 to-orange-600' },
  { name: 'Dr. K. R. S. Sambasiva Rao', role: 'Chief Patron · Vice-Chancellor', initials: 'SR', colorClass: 'bg-gradient-to-br from-amber-500 to-orange-600' }
];

export const PATRONS: CommitteeMember[] = [
  { name: 'Dr. G. Sambasiva Rao', role: 'Patron · Pro Vice-Chancellor', initials: 'SR', colorClass: 'bg-gradient-to-br from-violet-600 to-indigo-500' },
  { name: 'Dr. C. Naga Bhaskar', role: 'Patron · Pro Vice-Chancellor', initials: 'NB', colorClass: 'bg-gradient-to-br from-violet-600 to-indigo-500' },
  { name: 'Dr. B. Raghava Rao', role: 'Patron · Registrar', initials: 'RR', colorClass: 'bg-gradient-to-br from-violet-600 to-indigo-500' },
  { name: 'Sri M. Tej Sai', role: 'Patron · CEO', initials: 'TS', colorClass: 'bg-gradient-to-br from-purple-600 to-pink-500' }
];

export const CONVENERS: CommitteeMember[] = [
  { name: 'Dr. K. V. Sambasiva Rao', role: 'Convener · Dean R&D', initials: 'SR', colorClass: 'bg-gradient-to-br from-orange-500 to-red-500' },
  { name: 'Dr. D. Suneetha', role: 'Convener · Dean, School of Computer Studies', initials: 'DS', colorClass: 'bg-gradient-to-br from-orange-500 to-red-500' }
];

export const MEMBERS: CommitteeMember[] = [
  { name: 'Dr. Ch. V. Murali Krishna', role: 'Professor', initials: 'MK', colorClass: 'bg-gradient-to-br from-slate-700 to-slate-900' },
  { name: 'Dr. M. Venkateswara Rao', role: 'Professor', initials: 'MR', colorClass: 'bg-gradient-to-br from-slate-700 to-slate-900' },
  { name: 'Prof. B. Venu Gopal', role: 'Associate Professor', initials: 'VG', colorClass: 'bg-gradient-to-br from-slate-700 to-slate-900' },
  { name: 'Prof. M V P Uma Maheswara Rao', role: 'Associate Professor', initials: 'UR', colorClass: 'bg-gradient-to-br from-slate-700 to-slate-900' }
];

export const FACULTY_COORDINATORS: Coordinator[] = [
  { name: 'Mr. P. Srinivas', phone: '9494361866', role: 'Associate Professor' },
  { name: 'Mr. K. Raga Sai', phone: '9491659594', role: 'Assistant Professor' }
];

export const STUDENT_COORDINATORS: Coordinator[] = [
  { name: 'J. Sai Praneeth', phone: '8143173691' },
  { name: 'K. Bala Krishna', phone: '7981372766' },
  { name: 'Sk. Shafiya', phone: '9550235962' },
  { name: 'K. Lakshman', phone: '7330930528' }
];

// ── TRACKS DATA ──
export const TRACKS_DATA: Track[] = [
  {
    id: 'structured',
    title: 'TRACK 01 — GIVEN PROBLEM STATEMENT',
    tagline: 'Structured Track',
    desc: 'Problem statements will be revealed on the day of the event. Choose from one of the defined domains below.',
    prize: 'Cash prizes worth ₹5 Lakhs',
    color: 'orange',
    iconName: 'ListTodo',
    domains: [
      { name: 'AI & ML', desc: 'Build intelligent systems using machine learning, deep learning, or NLP to solve real-world challenges.', iconName: 'Cpu' },
      { name: 'Agentic AI & Autonomous Systems', desc: 'Design AI agents, autonomous pipelines, and multi-agent systems that can reason and act independently.', iconName: 'Brain' },
      { name: 'Embedded Systems & IoT', desc: 'Create connected hardware and sensor-driven solutions using microcontrollers, edge AI, and IoT protocols.', iconName: 'Workflow' },
      { name: 'Smart Energy & Electrical Systems', desc: 'Innovate in renewable energy, smart grids, power electronics, and energy efficiency solutions.', iconName: 'Zap' },
      { name: 'Smart Infrastructure & Civil Engg.', desc: 'Address urban planning, structural monitoring, water management, and smart city challenges.', iconName: 'Building' },
      { name: 'Robotics & Automation', desc: 'Build robots, automated systems, and control solutions for manufacturing, logistics, or everyday use.', iconName: 'Cog' },
      { name: 'Healthcare & Bio-informatics', desc: 'Solve medical diagnostics, patient monitoring, genomic data, or health access problems with tech.', iconName: 'Activity' },
      { name: 'Sustainability & Green Technologies', desc: 'Tackle climate change, waste management, clean water, sustainable agriculture, and eco-innovation.', iconName: 'Leaf' },
      { name: 'Open Innovation', desc: 'Have an idea that doesn\'t fit neatly? This is your domain — build anything that creates genuine value.', iconName: 'Lightbulb' }
    ]
  },
  {
    id: 'open',
    title: 'TRACK 02 — OPEN INNOVATION',
    tagline: 'Open Track',
    desc: 'You define the problem. Frame your own problem statement and build the solution across these domains.',
    prize: 'Cash prizes worth ₹5 Lakhs',
    color: 'purple',
    iconName: 'Lightbulb',
    domains: [
      { name: 'Hardware', desc: 'Build physical prototypes — circuits, embedded systems, IoT devices, or any hardware-centric solution you dream up.', iconName: 'Hammer' },
      { name: 'AI-Based Solutions', desc: 'Leverage AI, ML, or generative models to solve a problem you\'ve identified — no constraints on the domain.', iconName: 'Cpu' },
      { name: 'Healthcare Innovation', desc: 'Address any healthcare problem you\'re passionate about — diagnostics, accessibility, mental health, or patient experience.', iconName: 'Heart' }
    ]
  }
];

// ── FAQS ──
export const FAQ_DATA: FAQItem[] = [
  {
    question: 'Who can participate in INNOGENESIS?',
    answer: 'Any currently enrolled undergraduate or postgraduate student from any college in India. No restriction on year, branch, or specialization. You just need a valid college ID.'
  },
  {
    question: 'What is the team size?',
    answer: 'Teams can have 2 to 4 members. If you\'re applying solo, mark yourself as "looking for a team" and we\'ll connect you with other solo participants before the event. Purely solo participation is not permitted during the hackathon itself.'
  },
  {
    question: 'Is there a registration fee?',
    answer: 'The registration fee is ₹500 per participant. This covers the 24-hour hackathon — meals, snacks, beverages, WiFi, and event swag are all included throughout the event.'
  },
  {
    question: 'Can teams have members from different colleges?',
    answer: 'Yes! Cross-college teams are allowed and encouraged. Each team member must individually submit valid college identification during check-in on August 7.'
  },
  {
    question: 'Do we need to submit a project idea beforehand?',
    answer: 'No need — all actual building happens on-site starting August 7.'
  },
  {
    question: 'What should we bring?',
    answer: 'Laptops, chargers, and a valid college ID are mandatory. Sleeping bags or pillows if you plan to rest. We\'ll provide power strips, high-speed WiFi, and a dedicated sleeping area for all participants.'
  },
  {
    question: 'What technologies are allowed?',
    answer: 'Any language, framework, or toolset of your choice. Cloud APIs, open-source libraries, no-code tools — all fair game. The only rule: work done before the event starts does not count. Everything must be built fresh.'
  },
  {
    question: 'Is accommodation provided for outstation participants?',
    answer: 'Accommodation is available for every participant. Select this option during registration. The campus dormitory is a 2-minute walk from the hackathon venue.'
  },
  {
    question: 'How are projects judged?',
    answer: 'Projects are evaluated on: Innovation & Originality (30%), Technical Execution (25%), Real-world Impact (25%), Presentation & Demo (20%). Each track has its own panel of 2–3 expert judges. Final evaluation is a 5-minute demo + 3-minute Q&A.'
  },
  {
    question: 'When are results announced?',
    answer: 'Results are announced at the Closing Ceremony on August 8 at 5:00 PM. All finalists will present at 2:00 PM. Prize distribution happens immediately after the ceremony.'
  }
];
