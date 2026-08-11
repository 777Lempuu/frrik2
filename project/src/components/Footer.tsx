import { Instagram, Youtube, Twitter, Twitch } from 'lucide-react';

const footerSections = [
  {
    title: 'Sections',
    links: ['Culture', 'Music', 'Crime', 'Politics', 'Legal', 'Lists', 'Video'],
  },
  {
    title: 'Company',
    links: ['About', 'Contact', 'Tip Line', 'Careers', 'Press', 'Ethics'],
  },
  {
    title: 'Legal',
    links: ['Terms', 'Privacy', 'Advertise', 'DMCA', 'Accessibility'],
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink-950 border-t border-ink-800">
      <div className="container-x py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2 lg:col-span-2">
            <a href="#top" className="font-display text-2xl text-white">
              HIT <span className="text-crimson-500">&amp;</span> RUN
              <span className="font-headline text-[0.65rem] font-medium uppercase tracking-[0.25em] text-ink-400 ml-2">
                Media
              </span>
            </a>
            <p className="mt-4 text-sm text-ink-400 leading-relaxed max-w-xs">
              Los Santos&rsquo;s loudest voice. Culture, crime, and music
              reporting from the streets up. Independent since day one.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {[Instagram, Youtube, Twitter, Twitch].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex items-center justify-center w-9 h-9 rounded-full border border-ink-700 text-ink-300 hover:border-crimson-500 hover:text-crimson-400 transition"
                  aria-label="Social link"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-headline text-xs font-bold uppercase tracking-widest text-gold-400 mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-ink-400 hover:text-crimson-400 transition-colors hover-underline"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t border-ink-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-ink-500">
            &copy; 2026 Hit &amp; Run Media. All rights reserved. A fan-made
            in-game publication.
          </p>
          <p className="text-xs text-ink-600">
            Printed in Los Santos &middot; Distributed Worldwide
          </p>
        </div>
      </div>
    </footer>
  );
}
