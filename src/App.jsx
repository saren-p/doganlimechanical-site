import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  AlarmClock,
  Building2,
  Factory,
  Flame,
  HardHat,
  ShieldCheck,
  Truck,
  Fan,
  Wrench
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: 'Commercial HVAC Installation',
    icon: Fan,
    bullets: ['Large-tonnage system sizing', 'Rooftop and split-system deployment', 'Commissioning and handover protocols']
  },
  {
    title: 'Preventative Maintenance Programs',
    icon: Wrench,
    bullets: ['Seasonal inspection cycles', 'Filter, coil, and belt maintenance', 'Performance trend logging']
  },
  {
    title: 'Restaurant Ventilation & Exhaust Systems',
    icon: Flame,
    bullets: ['Kitchen hood balancing', 'Grease duct airflow optimization', 'Code-focused exhaust upgrades']
  },
  {
    title: 'RTUs & Make-Up Air Systems',
    icon: Building2,
    bullets: ['Roof curb integration', 'Make-up air heating controls', 'High-demand occupancy calibration']
  },
  {
    title: 'Mechanical Retrofits',
    icon: Factory,
    bullets: ['Legacy equipment replacement', 'Energy-focused controls migration', 'Operational disruption minimization']
  },
  {
    title: '24/7 Emergency Repairs',
    icon: AlarmClock,
    bullets: ['Rapid dispatch protocols', 'Fleet-based on-site response', 'Critical system stabilization']
  }
];

const projects = [
  {
    name: 'Distribution Centre Airside Retrofit',
    scope: 'Replaced failing RTU bank, rebalanced supply zones, and modernized controls for 24-hour operation.',
    equipment: '6x High-capacity RTUs, VFD fan packages, BAS integration',
    industry: 'Industrial Facilities'
  },
  {
    name: 'Restaurant Group Ventilation Upgrade',
    scope: 'Rolled out standardized kitchen exhaust and make-up air modernization across multiple locations.',
    equipment: 'Demand-controlled ventilation, grease-rated duct retrofits',
    industry: 'Restaurants'
  },
  {
    name: 'Commercial Tower Mechanical Renewal',
    scope: 'Executed phased mechanical room and rooftop upgrades with minimal tenant downtime.',
    equipment: 'Condensing units, air handlers, smart thermostatic controls',
    industry: 'Commercial Buildings'
  }
];

const industries = [
  { name: 'Restaurants', image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80' },
  { name: 'Industrial Facilities', image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1200&q=80' },
  { name: 'Commercial Buildings', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80' },
  { name: 'Property Management Firms', image: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&q=80' }
];

export default function App() {
  const root = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-reveal', {
        y: 42,
        opacity: 0,
        duration: 1,
        stagger: 0.16,
        ease: 'power3.out'
      });

      gsap.to('.hero-bg', {
        yPercent: 8,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });

      ScrollTrigger.create({
        trigger: '.site-wrap',
        start: 'top top',
        onUpdate: (self) => {
          document.body.classList.toggle('scrolled-nav', self.scroll() > 20);
        }
      });

      gsap.utils.toArray('.service-panel').forEach((panel) => {
        gsap.from(panel, {
          opacity: 0,
          y: 36,
          duration: 0.9,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: panel,
            start: 'top 82%'
          }
        });
      });

      gsap.to('.scan-line', {
        xPercent: 260,
        duration: 3.2,
        repeat: -1,
        ease: 'power1.inOut',
        yoyo: true
      });

      gsap.utils.toArray('.project-card').forEach((card) => {
        gsap.to(card, {
          scale: 0.95,
          opacity: 0.6,
          filter: 'blur(2px)',
          scrollTrigger: {
            trigger: card,
            start: 'top top+=70',
            end: 'bottom top+=70',
            scrub: true
          }
        });
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div className="site-wrap" ref={root}>
      <header className="fixed left-0 right-0 top-0 z-50 px-5 py-4 md:px-10">
        <nav className="nav-shell mx-auto flex max-w-[1400px] items-center justify-between rounded-2xl border border-white/20 px-5 py-3 text-sm uppercase tracking-[0.14em] text-white backdrop-blur-sm transition-all duration-500">
          <p className="font-mono text-xs">Doganli Mechanical</p>
          <div className="hidden gap-6 md:flex">
            {['Services', 'Industries', 'Property Managers', 'Projects', 'About', 'Contact'].map((item) => (
              <a key={item} href="#" className="nav-link">{item}</a>
            ))}
          </div>
          <button className="bronze-btn">Emergency</button>
        </nav>
      </header>

      <section className="hero relative flex min-h-[100dvh] items-end overflow-hidden px-5 pb-16 pt-36 md:px-10">
        <img className="hero-bg absolute inset-0 h-[110%] w-full object-cover" src="https://images.unsplash.com/photo-1581092919535-7146ff1a5902?auto=format&fit=crop&w=1800&q=80" alt="Rooftop commercial HVAC systems at dusk" />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative mx-auto grid w-full max-w-[1400px] grid-cols-1 gap-8">
          <div className="max-w-3xl space-y-6">
            <p className="hero-reveal font-mono text-xs uppercase tracking-[0.2em] text-[#E8E6DF]">Province-Wide Commercial & Industrial HVAC</p>
            <h1 className="hero-reveal font-sora text-4xl leading-[0.94] tracking-tight text-[#E8E6DF] md:text-7xl">Commercial HVAC<br />Engineered for Performance</h1>
            <p className="hero-reveal max-w-2xl font-outfit text-lg text-[#E8E6DF]/90">Restaurants. Industrial. Commercial. Province-Wide Service.</p>
            <div className="hero-reveal flex flex-wrap gap-4">
              <button className="bronze-btn">Request Service</button>
              <button className="outline-btn">Maintenance Programs</button>
            </div>
            <div className="hero-reveal flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-[#E8E6DF]">
              <span className="pulse-dot" />24/7 Emergency Response Active
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell bg-[#F3F1EC]">
        <div className="mx-auto max-w-[1400px]">
          <h2 className="section-title">Engineered Capability Panels</h2>
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map(({ title, icon: Icon, bullets }) => (
              <article key={title} className="service-panel">
                <div className="flex items-center justify-between">
                  <h3 className="font-sora text-xl text-[#1C2E27]">{title}</h3>
                  <Icon className="h-5 w-5 text-[#A56A3F]" strokeWidth={1.5} />
                </div>
                <span className="my-5 block h-px bg-[#A56A3F]/70" />
                <ul className="space-y-3 font-outfit text-sm text-[#222625]/80">
                  {bullets.map((item) => <li key={item}>• {item}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-[#222625] text-[#E8E6DF]">
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <h2 className="section-title text-[#E8E6DF]">HVAC Management Across Your Entire Portfolio</h2>
            <p className="mt-5 max-w-xl font-outfit text-lg text-[#E8E6DF]/80">Centralized service. Scheduled maintenance. Multi-site response.</p>
            <ul className="mt-8 space-y-3 font-outfit text-[#E8E6DF]/90">
              {['Multi-property maintenance scheduling', 'Consolidated service billing', 'Dedicated account management', 'Rapid cross-site response', 'Asset lifecycle tracking'].map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
            <button className="bronze-btn mt-8">Partner With Us</button>
          </div>
          <div className="relative grid grid-cols-2 gap-4 overflow-hidden rounded-2xl border border-[#A56A3F]/30 p-5">
            {Array.from({ length: 6 }).map((_, idx) => (
              <div key={idx} className="h-24 rounded-lg border border-[#E8E6DF]/20 bg-[#1C2E27]" />
            ))}
            <div className="scan-line absolute bottom-0 left-[-40%] top-0 w-1/3 bg-gradient-to-r from-transparent via-[#A56A3F]/45 to-transparent" />
          </div>
        </div>
      </section>

      <section className="section-shell bg-[#F3F1EC]">
        <div className="mx-auto max-w-[1400px]">
          <h2 className="section-title">Industries Served</h2>
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
            {industries.map((industry) => (
              <article key={industry.name} className="industry-tile" style={{ backgroundImage: `url(${industry.image})` }}>
                <span>{industry.name}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-[#E8E6DF]">
        <div className="mx-auto max-w-[1100px]">
          <h2 className="section-title">Projects / Case Studies</h2>
          <div className="mt-10 space-y-8">
            {projects.map((project) => (
              <article key={project.name} className="project-card">
                <div className="grid gap-6 lg:grid-cols-2">
                  <div className="before-after">
                    <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1100&q=80" alt="Before state of HVAC equipment" />
                    <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1100&q=80" alt="After state of upgraded mechanical equipment" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-sora text-2xl text-[#1C2E27]">{project.name}</h3>
                    <p className="font-outfit text-[#222625]/80">{project.scope}</p>
                    <p className="font-mono text-xs uppercase tracking-[0.15em] text-[#A56A3F]">Equipment Installed: {project.equipment}</p>
                    <p className="font-outfit text-sm">Industry: {project.industry}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-[#222625] text-[#E8E6DF]">
        <div className="mx-auto max-w-[1400px]">
          <h2 className="section-title text-[#E8E6DF]">Equipped for Large-Scale Operations</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
            <img className="h-full min-h-[320px] w-full rounded-2xl object-cover" src="https://images.unsplash.com/photo-1565636825494-2f1f9f4fdbf3?auto=format&fit=crop&w=1500&q=80" alt="Fleet vehicles and rooftop installation operations" />
            <ul className="space-y-4 rounded-2xl border border-[#A56A3F]/35 bg-[#1C2E27] p-6 font-outfit">
              <li>• Province-Wide Coverage</li>
              <li>• Certified Technicians</li>
              <li>• Fully Licensed & Insured</li>
              <li>• 24/7 Dispatch System</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-shell bg-[#F3F1EC]">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="section-title">Trust & Certifications</h2>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              ['TSSA Certified', ShieldCheck],
              ['WSIB Compliant', HardHat],
              ['Licensed Refrigeration Mechanics', Fan],
              ['Fully Insured', Truck]
            ].map(([label, Icon]) => (
              <div key={label} className="cert-box">
                <Icon className="mb-3 h-5 w-5 text-[#A56A3F]" strokeWidth={1.5} />
                <p className="font-outfit text-sm text-[#1C2E27]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-[#1C2E27] text-[#E8E6DF] text-center">
        <h2 className="mx-auto max-w-4xl font-sora text-4xl tracking-tight md:text-6xl">Downtime Costs More Than Maintenance</h2>
        <p className="mx-auto mt-5 max-w-2xl font-outfit text-[#E8E6DF]/80">Reduce emergency failures through preventative maintenance planning.</p>
        <button className="bronze-btn mx-auto mt-8">Schedule a Maintenance Assessment</button>
      </section>

      <footer className="rounded-t-[2rem] bg-[#222625] px-5 py-12 text-[#E8E6DF] md:px-10">
        <div className="mx-auto grid max-w-[1400px] gap-8 md:grid-cols-4">
          <div>
            <p className="font-sora text-xl">Doganli Mechanical</p>
            <p className="mt-2 font-outfit text-sm text-[#E8E6DF]/70">Service Areas: Province-Wide Commercial & Industrial Coverage</p>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#A56A3F]">Emergency Line</p>
            <p className="mt-2 font-outfit text-lg">+1 (800) 000-0000</p>
            <p className="mt-2 flex items-center gap-2 font-mono text-xs uppercase"><span className="pulse-dot" />Emergency Line Active</p>
          </div>
          <div className="space-y-2 font-outfit text-sm text-[#E8E6DF]/80">
            <p>Services</p><p>Industries</p><p>Property Managers</p><p>Projects</p>
          </div>
          <div className="font-outfit text-sm text-[#E8E6DF]/80">
            <p>contact@doganlimechanical.com</p>
            <p className="mt-1">LinkedIn · Instagram · YouTube</p>
            <p className="mt-6 text-xs">© {new Date().getFullYear()} Doganli Mechanical. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
