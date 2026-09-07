import { useState, useRef, useEffect } from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import {
  UserCheck, Users, Upload, Trophy, Shield,
  CheckCircle2, ChevronDown, ArrowUpRight, Info, Home,
  ListChecks, AlertOctagon, XCircle,
} from 'lucide-react'
import mascot from '../../Mascots Variations/Rules.webp'
import { enter, staggerReveal, reveal, staggerNow } from '../utils/anime-utils'

/* ── Rules data ── */
const sections = [
  {
    id: 'eligibility', num: '01', title: 'ELIGIBILITY',
    navTitle: 'Eligibility',
    subtitle: 'Who can participate in HTF 3.0.',
    icon: UserCheck,
    points: [
      'Open to all currently enrolled college / university students.',
      'Participants must be from recognized colleges or universities in India.',
      'All domains and streams are welcome — CS, ECE, MBA, Design and more.',
      'Participants must carry a valid college ID card at all times.',
      'Students from any year (1st to final year) are eligible.',
      'International students studying in Indian institutions are welcome.',
    ],
  },
  {
    id: 'team', num: '02', title: 'TEAM',
    navTitle: 'Team',
    subtitle: 'Team size, composition and collaboration rules.',
    icon: Users,
    points: [
      'Team size: 2–5 members per team.',
      'Solo participation is not permitted — minimum 2 members required.',
      'Cross-college teams are fully permitted and encouraged.',
      'Teams are encouraged to bring diverse skills: development, design, AI, product, business.',
      'Each team must designate one team leader for official communication.',
      'A participant cannot be a member of more than one team.',
      'All team members must be individually registered on the portal.',
    ],
  },
  {
    id: 'submission', num: '03', title: 'SUBMISSION',
    navTitle: 'Submission',
    subtitle: 'How and what to submit before the deadline.',
    icon: Upload,
    points: [
      'Projects must be submitted via the official HTF 3.0 submission portal.',
      'Submission deadline: Day 2, 11:00 AM sharp — no extensions will be given.',
      'Code must be pushed to a public GitHub repository with a clear commit history.',
      'A demo video of maximum 3 minutes is required with every submission.',
      'A detailed README / project documentation is mandatory.',
      'No late submissions will be accepted under any circumstances whatsoever.',
    ],
  },
  {
    id: 'judging', num: '04', title: 'JUDGING',
    navTitle: 'Judging',
    subtitle: 'Evaluation criteria and judging process.',
    icon: Trophy,
    points: [
      'Innovation & Creativity — 25% of the total score.',
      'Technical Complexity & Implementation Quality — 25%.',
      'Real-world Impact & Feasibility of the solution — 25%.',
      'Presentation, Communication & Demo clarity — 25%.',
      'Evaluation happens in two rounds: preliminary shortlisting and final judging.',
      'All judges\' decisions are final, binding and cannot be appealed.',
      'Intellectual property of submitted projects remains with the participants.',
    ],
  },
  {
    id: 'conduct', num: '05', title: 'CODE OF CONDUCT',
    navTitle: 'Code of Conduct',
    subtitle: 'Official Participant Code of Conduct for Hack The Future 3.0.',
    icon: Shield,
    points: [
      ' Our Promise — Hack The Future 3.0 is a respectful, inclusive, and safe space. We welcome participants from all backgrounds and skill levels. Harassment, discrimination, and dishonesty have zero tolerance.',
      ' Scope — This Code applies to all participants, mentors, judges, volunteers, sponsors, and guests at all official venues, online channels, and social media for the full duration of the hackathon, including night hours.',
      ' Respect & Inclusion — Treat everyone with courtesy. No harassment, hate speech, intimidation, or personal attacks. Do not disrupt talks, workshops, or other teams. Respect venue staff, security, and organizers’ directions at all times.',
      ' Academic & Creative Integrity — Submissions must be primarily built during the hackathon window. Disclose pre-existing code, libraries, and AI/code generation tools in your README. No plagiarism or copying without proper attribution. Be prepared to explain code and design choices to judges.',
      ' Fair Play — Team size: 2–5 members per team (no shadow contributors). Single project submission per team; individuals may not be on multiple teams. No sabotage or interference with other teams. Do not attempt to influence judges outside official sessions.',
      ' Safety & Wellbeing — Keep aisles clear and manage equipment safely. Strict zero tolerance for alcohol, illegal drugs, weapons, fireworks, or hazardous materials. Any inappropriate language, flirting, or behavior that makes any participant — especially female participants — uncomfortable will result in immediate disqualification. Maintain quiet during late hours.',
      ' Hardware & Data Use — Only safe, non-destructive hardware (BYOH). No tampering with venue property. Use lawful datasets and never share sensitive personal data without consent. Keep API keys private; do not hardcode secrets in public repos.',
      ' Privacy, Media & Recording — Participants consent to non-intrusive event photography/videography for documentation and publicity. Always ask consent before photographing individuals or other teams’ screens/whiteboards.',
      ' Intellectual Property (IP) & Licensing — Your team owns your project IP. Organizers are granted a non-exclusive license to showcase project name, demo video, screenshots, and descriptions for promotion. Comply with third-party asset/OSS licenses with proper attributions in README.',
      ' Submission Requirements — Submit before the deadline with project name, description, problem statement, README (setup, tech stack, known limitations, AI/code disclosures), repo link, live demo link, and a 2–3 minute demo video. Be ready to demo on your own device.',
      ' Enforcement — Report issues immediately to the Help Desk, onsite organizers, or via email (acmtulas@gmail.com). Organizers reserve the right to issue warnings, disqualify teams, remove individuals from the venue, or escalate to authorities. All decisions are final.',
      ' Agreement — By registering, checking in, or submitting a project, you agree to abide by this Code of Conduct, venue policies, and all applicable laws.',
      ' Judging & Fairness — The judges’ decision is final and binding. Once results are declared, no participant is authorized to question or challenge the outcome. We guarantee zero tolerance for bias or partiality at any stage of evaluation.',
      ' Refund Policy — All registration fees are non-refundable. No refunds will be issued for any team or participant for any reason, including withdrawal, disqualification, or inability to attend.',
       'Respect all participants, mentors, organizers, judges, volunteers and campus staff.',
      'Carry your valid college ID card and official participant badge at all times.',
      'Zero tolerance for plagiarism — all work must be original, built during the hackathon.',
      'Do not use unfair means (pre-built code without disclosure, copying) during the hackathon.',
      'Harassment, discrimination or inappropriate behaviour of any kind will not be tolerated.',
      'Non-vegetarian food and alcohol are strictly NOT allowed inside the campus.',
      'Smoking, tobacco, cigarettes and vaping are strictly NOT allowed inside the campus.',
      'Do not consume alcohol, drugs, cigarettes, tobacco or any prohibited substances inside the campus.',
      'Do not leave the campus without prior permission from organizers.',
      'Maintain cleanliness and professional discipline inside the campus at all times.',
      'Do not sleep in restricted areas (labs, corridors) — use designated rest areas only.',
      'Do not miss submission timelines; late entries will not be entertained.',
      'Any violation of this code may result in immediate disqualification without prior notice.'
    ],
  },
  {
    id: 'dos-donts', num: '06', title: "DO'S & DON'TS",
    navTitle: "Do's & Don'ts",
    subtitle: 'Do’s and Don’ts for “Hack The Future” (25–26 September 2026).',
    icon: ListChecks,
    dos: [
      'Carry your valid college ID card at all times.',
      'Wear your official participant badge inside the venue.',
      'Be present at the reporting desk on time as per the event schedule.',
      'Respect the event rules, mentors, judges, volunteers, and fellow participants.',
      'Keep your workspace neat and organized.',
      'Ensure laptops, chargers, and required accessories are in proper working condition.',
      'For hardware problem statements, bring your own hardware (BYOH) and ensure safety while handling equipment.',
      'Follow the instructions provided by organizers regarding security checks, seating, and submission deadlines.',
      'Stay within the designated event areas (Computer Centre, rest areas, cafeteria).',
      'Maintain discipline during night hours and use common areas responsibly.',
      'Report any technical, medical, or security issues immediately to organizers.',
      'Utilize the hospitality services (meals/snacks) responsibly without wastage.',
    ],
    donts: [
      'Do not engage in any form of indiscipline, misconduct, or misbehaviour.',
      'Do not leave the campus or event venue without prior permission from organizers.',
      'Do not consume alcohol, drugs, cigarettes, or any prohibited substances.',
      'Do not tamper with institute property, lab equipment, or other participants’ belongings.',
      'Do not disturb others by creating unnecessary noise or misusing resources.',
      'Do not use unfair means (plagiarism, copying, pre-built codes without disclosure) during the hackathon.',
      'Do not sleep in restricted areas (labs, corridors). Use designated rest areas only.',
      'Do not share your ID card or participant badge with anyone.',
      'Do not ignore safety instructions while working on hardware/software setups.',
      'Do not miss submission timelines; late entries will not be entertained.',
    ],
    points: [
      'Carry your valid college ID card at all times.',
      'Wear your official participant badge inside the venue.',
      'Be present at the reporting desk on time as per the event schedule.',
      'Respect the event rules, mentors, judges, volunteers, and fellow participants.',
      'Keep your workspace neat and organized.',
      'Ensure laptops, chargers, and required accessories are in proper working condition.',
      'For hardware problem statements, bring your own hardware (BYOH) and ensure safety while handling equipment.',
      'Follow the instructions provided by organizers regarding security checks, seating, and submission deadlines.',
      'Stay within the designated event areas (Computer Centre, rest areas, cafeteria).',
      'Maintain discipline during night hours and use common areas responsibly.',
      'Report any technical, medical, or security issues immediately to organizers.',
      'Utilize the hospitality services (meals/snacks) responsibly without wastage.',
    ],
  },
]

export function RulesPage() {
  const pageRef = useRef<HTMLElement>(null)
  const isFirstRender = useRef(true)
  const [active, setActive] = useState(
  new URLSearchParams(window.location.search).get('tab') || 'eligibility'
)

  const activeSection = sections.find(s => s.id === active)!

  // Mount animations
  useEffect(() => {
    const el = pageRef.current
    if (!el) return
    const obs: IntersectionObserver[] = []
    const push = (o: IntersectionObserver | null) => { if (o) obs.push(o) }

    // Hero entrance
    enter(Array.from(el.querySelectorAll('.rl-hero-copy > *')))
    enter([el.querySelector('.rl-hero-visual')!].filter(Boolean), { y: 0, x: 50, duration: 900, delay: 240 })

    // Tabs stagger in
    push(staggerReveal(
      Array.from(el.querySelectorAll('.rl-tab')),
      { y: 20, stagger: 55, threshold: 0.05 }
    ))

    // Accordion list
    push(staggerReveal(
      Array.from(el.querySelectorAll('.rl-accordion')),
      { y: 28, stagger: 70 }
    ))

    // Sidebar slides in from right
    push(reveal(el.querySelector('.rl-sidebar') as Element, { x: 44, y: 0, duration: 820, threshold: 0.1 }))

    // Warning bar
    push(reveal(el.querySelector('.rl-warning') as Element, { y: 28 }))

    return () => obs.forEach(o => o.disconnect())
  }, [])

  // Animate points list on tab change
  useEffect(() => {
    if (isFirstRender.current) { isFirstRender.current = false; return }
    const el = pageRef.current
    if (!el) return
    const points = Array.from(el.querySelectorAll('.rl-points li'))
    staggerNow(points, { y: 18, stagger: 45 })
  }, [active])

  return (
    <main className="rl-page" ref={pageRef}>
      <Header />

      {/* Breadcrumb */}
      <nav className="rl-breadcrumb" aria-label="breadcrumb">
        <Home size={12} />
        <span>HOME</span>
        <span className="rl-bc-sep">/</span>
        <span className="rl-bc-active">RULES &amp; GUIDELINES</span>
      </nav>

      {/* ── Hero ── */}
      <section className="rl-hero">
        {/* Watermark */}
        <span className="rl-watermark" aria-hidden="true">07</span>

        <div className="rl-hero-copy">
          <p className="rl-label">07 /</p>
          <h1>
            KNOW THE GAME.<br />
            <span className="rl-purple">BUILD WITHIN IT.</span>
          </h1>
          <div className="rl-h1-line" />
          <p className="rl-hero-sub">
            Read the rules carefully. They ensure a fair,<br />
            safe and amazing experience for everyone.
          </p>
        </div>

        <div className="rl-hero-visual">
          <img src={mascot} alt="HTF mascot" className="rl-hero-mascot" />
          <span className="rl-deco-plus rl-deco-plus-1">+</span>
          <span className="rl-deco-plus rl-deco-plus-2">+</span>
        </div>
      </section>

      {/* ── Tab navigation ── */}
      <div className="rl-tabs" role="tablist" aria-label="Rules sections">
        {sections.map(({ id, title, icon: Icon }) => (
          <button
            key={id}
            role="tab"
            aria-selected={active === id}
            className={`rl-tab${active === id ? ' rl-tab--active' : ''}`}
            onClick={() => setActive(id)}
          >
            <Icon size={17} strokeWidth={1.8} />
            {title}
          </button>
        ))}
      </div>

      {/* ── Main content + sidebar ── */}
      <div className="rl-body">
        <div className="rl-content">
          {/* Active (expanded) section */}
          <div className="rl-section-active">
            <div className="rl-section-header">
              <span className="rl-sec-num">{activeSection.num}</span>
              <div>
                <h2>{activeSection.title}</h2>
                <p className="rl-sec-sub">{activeSection.subtitle}</p>
              </div>
              <div className="rl-sec-illus" aria-hidden="true">
                <activeSection.icon size={56} strokeWidth={0.9} />
              </div>
            </div>
            {activeSection.dos && activeSection.donts ? (
              <div className="rl-dos-donts-wrap">
                <div className="rl-dd-group">
                  <h3 className="rl-dd-heading rl-dd-heading--do">
                    <CheckCircle2 size={16} />
                    <span>DO'S</span>
                  </h3>
                  <ul className="rl-points">
                    {activeSection.dos.map((pt, i) => (
                      <li key={i}>
                        <CheckCircle2 size={17} strokeWidth={2} />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rl-dd-group">
                  <h3 className="rl-dd-heading rl-dd-heading--dont">
                    <XCircle size={16} className="rl-point-icon--dont" />
                    <span>DON'TS</span>
                  </h3>
                  <ul className="rl-points rl-points--donts">
                    {activeSection.donts.map((pt, i) => (
                      <li key={i}>
                        <XCircle size={17} strokeWidth={2} className="rl-point-icon--dont" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <ul className="rl-points">
                {activeSection.points.map((pt, i) => (
                  <li key={i}>
                    <CheckCircle2 size={17} strokeWidth={2} />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Collapsed accordion for remaining sections */}
          {sections.filter(s => s.id !== active).map(({ id, title, subtitle, icon: Icon }) => (
            <button
              key={id}
              className="rl-accordion"
              onClick={() => setActive(id)}
              aria-expanded={false}
            >
              <div className="rl-acc-icon"><Icon size={20} strokeWidth={1.6} /></div>
              <div className="rl-acc-text">
                <strong>{title}</strong>
                <span>{subtitle}</span>
              </div>
              <ChevronDown size={18} className="rl-acc-chevron" />
            </button>
          ))}
        </div>

        {/* ── Right sidebar ── */}
        <aside className="rl-sidebar">
          <div className="rl-quicknav">
            <p className="rl-qn-label">QUICK NAVIGATION</p>
            {sections.map(({ id, num, title, navTitle }) => (
              <button
                key={id}
                className={`rl-qn-item${active === id ? ' rl-qn-item--active' : ''}`}
                onClick={() => setActive(id)}
              >
                <span className="rl-qn-num">{num}</span>
                <span>{navTitle || title.replace('CODE OF ', 'Code of ')
                  .replace('ELIGIBILITY', 'Eligibility')
                  .replace('TEAM', 'Team')
                  .replace('SUBMISSION', 'Submission')
                  .replace('JUDGING', 'Judging')}</span>
              </button>
            ))}
          </div>

          <div className="rl-doubt-box">
            <div className="rl-doubt-icon">?</div>
            <strong>Have a doubt?</strong>
            <p>Check our FAQ section or reach out to us.</p>
            <a href="/faq" className="rl-doubt-btn">
              VIEW FAQ <ArrowUpRight size={14} />
            </a>
          </div>
        </aside>
      </div>

      {/* ── Bottom warning bar ── */}
      <div className="rl-warning">
        <div className="rl-warn-left">
          <div className="rl-warn-icon"><Info size={22} /></div>
          <p>
            Breaking the rules may lead to<br />
            <strong>disqualification without prior notice.</strong>
          </p>
        </div>
        <p className="rl-warn-right">Let's build the future,<br />the right way.</p>
        <div className="rl-warn-shield" aria-hidden="true">
          <Shield size={42} strokeWidth={1.2} />
          <span className="rl-warn-dots" />
        </div>
      </div>

      <Footer />
    </main>
  )
}
