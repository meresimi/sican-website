export default function ClimateStats() {
  const stats = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      number: "5",
      label: "Islands Lost",
      description: "Since 1947",
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      number: "+15cm",
      label: "Sea Level Rise",
      description: "Last 20 years",
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      number: "238,000",
      label: "People At Risk",
      description: "From climate impacts",
    },
  ]

  return (
    <section className="section-padding bg-sand">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-ocean mb-4">
            "OUR ISLANDS, OUR FUTURE, OUR FIGHT"
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Climate change is not a distant threat—it's happening now in Solomon Islands
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-ocean to-lagoon rounded-full text-white mb-6">
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl font-heading font-bold text-climate-red mb-2">
                {stat.number}
              </div>
              <div className="text-xl font-semibold text-ocean mb-2">
                {stat.label}
              </div>
              <div className="text-gray-600">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Wave Divider */}
        <div className="mt-12 wave-pattern h-8"></div>
      </div>
    </section>
  )
}
