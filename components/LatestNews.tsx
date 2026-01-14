import Link from 'next/link'

export default function LatestNews() {
  const newsItems = [
    {
      title: "SICAN Participates in COP29 Climate Negotiations",
      excerpt: "Our team represented Solomon Islands civil society at the UN climate talks in Azerbaijan, advocating for climate justice and finance transparency.",
      date: "January 10, 2026",
      category: "International",
      image: "/images/news-placeholder.jpg"
    },
    {
      title: "Australia Supports SICAN's Climate Advocacy",
      excerpt: "Australian Government provides continued funding for SICAN's work on climate finance tracking and community empowerment across Solomon Islands.",
      date: "January 8, 2026",
      category: "Partnerships",
      image: "/images/news-placeholder.jpg"
    },
    {
      title: "Youth Climate Summit Success in Honiara",
      excerpt: "Over 200 young Solomon Islanders gathered to discuss climate action, with Miss SICAN leading inspiring conversations on youth leadership.",
      date: "January 5, 2026",
      category: "Youth",
      image: "/images/news-placeholder.jpg"
    },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-ocean mb-4">
            "NIUSIM TUMAS"
          </h2>
          <p className="text-xl text-gray-600">(Latest News)</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <article key={index} className="card group">
              {/* Image */}
              <div className="relative h-48 bg-gradient-to-br from-ocean to-lagoon overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-white text-sm">
                  [News image placeholder]
                </div>
                <div className="absolute top-4 left-4">
                  <span className="inline-block bg-coral text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">{item.date}</div>
                <h3 className="text-xl font-heading font-bold text-ocean mb-3 group-hover:text-coral transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {item.excerpt}
                </p>
                <Link
                  href={`/news/${index + 1}`}
                  className="inline-flex items-center text-coral hover:text-coral-dark font-semibold text-sm group-hover:gap-2 transition-all"
                >
                  Read More
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/news"
            className="btn-secondary"
          >
            View All News & Updates →
          </Link>
        </div>
      </div>
    </section>
  )
}
