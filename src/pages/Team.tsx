import { useEffect } from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import aaditya from "../../public/team/aaditya.webp";
import aditya_rawat from "../../public/team/Aditya_Rawat.webp";
import chetan_pandey from "../../public/team/chetan_pandey.webp";
import gaurav_shukla from "../../public/team/gaurav_shukla.webp";
import golu from "../../public/team/Golu.webp";
import harsh from "../../public/team/harsh.webp";
import jasan_dikshit from "../../public/team/Jasan.webp";
import keshav_kumar from "../../public/team/Keshav_Kumar.webp";
import nikhil from "../../public/team/nikhil.webp";
import piyush_lingwal from "../../public/team/piyush_lingwal.webp";
import piyush_rawat from "../../public/team/piyush_rawat.webp";
import prakriti from "../../public/team/prakriti.webp";
import prashant_krishan_bharti from "../../public/team/Prashant_Krishan_Bharti.webp";
import prince from "../../public/team/prince.webp";
import rishanshu_tripathi from "../../public/team/Rishanshu_Tripathi.webp";
import ritish from "../../public/team/ritish.webp";
import smriti_bisht from "../../public/team/smriti_bisht.webp";
import sonali from "../../public/team/sonali.webp";
import swapnil from "../../public/team/swapnil.webp";
import tabeer from "../../public/team/Tabeer_hussain.webp";
import sandip_kumar from '../../public/team/sandeep_kumar.png';




const facultyMembers = [
  { name: 'HOD', role: 'Convener', image: sandip_kumar },
  { name: 'Mr. Sharadh Pratap Singh', role: 'Co-Convener', image: '' },
]

const teamMembers = [
  { name: 'Gaurav Shukla', role: 'Lead Organiser', image: gaurav_shukla },
  { name: 'Chetan Pandey', role: 'Lead Organiser', image: chetan_pandey },
  { name: 'Smriti Bisht', role: 'Lead Organiser', image: smriti_bisht },
  { name: 'Piyush Lingwal', role: 'Tech lead', image: piyush_lingwal },
  { name: 'Prashant Krishan Bharti', role: 'Secretary', image: prashant_krishan_bharti },
  { name: 'Prakriti', role: 'Treasurer', image: prakriti },
  { name: 'Rishanshu Tripathi', role: 'Web master', image: rishanshu_tripathi },
  { name: 'Jasan Dikshit', role: 'PR & Outreach Head', image: jasan_dikshit },
  { name: 'Prince', role: 'Event Head', image: prince },
   { name: 'Aaditya', role: 'Co Event Head', image: aaditya },
  { name: 'Tabeer Hussain', role: 'Media Head', image: tabeer },
  { name: 'Nikhil', role: 'Co Techincal Lead', image: nikhil },
  { name: 'Golu Kumar', role: 'Technical Member', image: golu },
  { name: 'Sonali Kumari', role: 'Event Crew', image: sonali },

  { name: 'Aditya Rawat', role: 'Technical Member', image: aditya_rawat },
 
 
  { name: 'Harsh', role: 'Technical Member', image: harsh },
  { name: 'Keshav Kumar', role: 'PR Member', image: keshav_kumar },
  
  { name: 'Piyush Rawat', role: 'Technical Member', image: piyush_rawat },
  
  
  
  { name: 'Ritish', role: 'Membership Chair', image: ritish },
  { name: 'Swapnil', role: 'Team Member', image: swapnil },
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
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    )

    document.querySelectorAll('.team-card, .team-roster-heading').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

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
              <article className="team-card" key={`${member.name}-${index}`}>
                <div className="team-card-image-wrap">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="team-card-image"
                      loading="eager"
                    />
                  ) : (
                    <div className="team-card-initials">
                      {getInitials(member.name)}
                    </div>
                  )}
                </div>
                <div className="team-card-wash" aria-hidden="true" />
                <div className="team-card-content">
                  <h3 className="team-card-name">{member.name}</h3>
                  <span className="team-card-role">{member.role}</span>
                </div>
              </article>
            ))}
          </div>

          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <article className="team-card" key={`${member.name}-${index}`}>
                <div className="team-card-image-wrap">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="team-card-image"
                      loading={index > 3 ? 'lazy' : 'eager'}
                    />
                  ) : (
                    <div className="team-card-initials">
                      {getInitials(member.name)}
                    </div>
                  )}
                </div>
                <div className="team-card-wash" aria-hidden="true" />
                <div className="team-card-content">
                  <h3 className="team-card-name">{member.name}</h3>
                  <span className="team-card-role">{member.role}</span>
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
