import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

const facultyMembers = [
  { name: 'HOD', role: 'Convener', image: '/hod.png' },
  { name: 'Mr. Sharadh Pratap Singh', role: 'Co-Convener', image: '' },
]

const teamMembers = [
  { name: 'Gaurav Shukla', role: 'Lead Organiser', image: '/Gaurav-Shukla.png' },
  { name: 'Smriti Bisht', role: 'Lead Organiser', image: '/Smriti-Bisht.png' },
  { name: 'Piyush Lingwal', role: 'Tech lead', image: '/Piyush-Lingwal.png' },
  { name: 'Rishanshu Tripathi', role: 'Web master', image: '/Rishanshu-Tripathi.png' },
  { name: 'abcd', role: 'Web Designer', image: '' },
  { name: 'abcd', role: 'Hospitality & Fooding Head', image: '' },
  { name: 'Jasan Dikshit', role: 'PR & Outreach Head', image: '' },
  { name: 'Tabeer', role: 'Media Head', image: '/Tabeer.png' },
  { name: 'abcd', role: 'Sponsorship Head', image: '' },
]

const getInitials = (name: string) => {
  if (name.toLowerCase() === 'abcd') return 'AB';
  const parts = name.trim().split(' ').filter(Boolean);
  if (parts.length >= 2) {
    let first = parts[0];
    let second = parts[1];
    if (first.toLowerCase() === 'mr.' || first.toLowerCase() === 'ms.') {
      first = parts[1] || 'M';
      second = parts[2] || parts[1];
    }
    return (first[0] + (second ? second[0] : '')).toUpperCase();
  }
  return name.substring(0, 2).toUpperCase();
}

export function TeamPage() {
  return (
    <main className="team-page">
      <Header />

      {/* Breadcrumb */}
      <nav className="ab-breadcrumb">
        <span className="ab-bc-dot" />
        <span>THE EVENT</span>
        <span className="ab-bc-sep">/</span>
        <span>MEET THE TEAM</span>
      </nav>

      <section className="team-hero">
        <div className="team-hero-grid" aria-hidden="true" />
        <div className="team-hero-orb team-hero-orb--one" aria-hidden="true" />
        <div className="team-hero-orb team-hero-orb--two" aria-hidden="true" />
        <div className="team-shell">
          <p className="eyebrow">09 / The People Behind Hack The Future 3.0</p>
          <h1>MEET THE <span>TEAM.</span></h1>
          <p className="team-hero-copy">
            The makers, mentors, and problem-solvers bringing Hack The Future 3.0 to life.
          </p>
          <div className="team-hero-line"><span /></div>
        </div>
      </section>

      <section className="team-roster">
        <div className="team-shell">
          <div className="team-roster-heading">
            <div>
              <p className="team-section-label">OUR CREW</p>
              <h2>BUILDING THE <span>FUTURE.</span></h2>
            </div>
            <p>Meet the dedicated team shaping an unforgettable hackathon experience.</p>
          </div>

          <div className="faculty-grid">
            {facultyMembers.map((member, index) => (
              <article className="team-card" key={member.role}>
                {member.image ? (
                  <img
                    src={member.image}
                    alt={`${member.name}`}
                    className="team-card-image"
                    loading="eager"
                  />
                ) : (
                  <div className="team-card-initials">
                    {getInitials(member.name)}
                  </div>
                )}
                <div className="team-card-wash" aria-hidden="true" />
                <div className="team-card-content">
                  <div>
                    <h3>{member.name}</h3>
                    <p>{member.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <article className="team-card" key={member.role}>
                {member.image ? (
                  <img
                    src={member.image}
                    alt={`${member.name}`}
                    className="team-card-image"
                    loading={index > 2 ? 'lazy' : 'eager'}
                  />
                ) : (
                  <div className="team-card-initials">
                    {getInitials(member.name)}
                  </div>
                )}
                <div className="team-card-wash" aria-hidden="true" />
                <div className="team-card-content">
                  <div>
                    <h3>{member.name}</h3>
                    <p>{member.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </main>
  )
}
