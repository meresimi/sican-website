import Link from 'next/link'

export default function CallToAction() {
  const actions = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: "Become a Member",
      description: "Join 15 organizations united in climate action across Solomon Islands",
      buttonText: "Join Us",
      href: "/get-involved#membership",
      color: "bg-ocean hover:bg-ocean-dark"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Support Our Work",
      description: "Help fund climate justice initiatives and community empowerment programs",
      buttonText: "Support Us",
      href: "/get-involved#support",
      color: "bg-forest hover:bg-forest-dark"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
        </svg>
      ),
      title: "Share Our Story",
      description: "Amplify Solomon Islands' voice on climate justice and help raise awareness",
      buttonText: "Share Now",
      href: "/get-involved#share",
      color: "bg-lagoon hover:bg-teal-600"
    },
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-coral via-orange-400 to-coral-dark text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0 L45 30 L30 60 L15 30 Z' fill='white' fill-opacity='0.2'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            "JOINEM FAIT IA"
          </h2>
          <p className="text-xl text-orange-100">(Join the Fight!)</p>
          <p className="text-lg mt-4 max-w-2xl mx-auto text-orange-50">
            Climate change affects us all. Together, we are stronger. 
            Every action counts in our fight for climate justice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {actions.map((action, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8 hover:bg-opacity-20 transition-all duration-300"
            >
              <div className="mb-6">
                {action.icon}
              </div>
              <h3 className="text-2xl font-heading font-bold mb-3">
                {action.title}
              </h3>
              <p className="text-orange-100 mb-6 leading-relaxed">
                {action.description}
              </p>
              <Link
                href={action.href}
                className={`inline-block ${action.color} text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105`}
              >
                {action.buttonText}
              </Link>
            </div>
          ))}
        </div>

        {/* Wave Divider */}
        <div className="mt-16 pt-8 border-t border-white border-opacity-20">
          <div className="text-center">
            <h3 className="text-2xl font-heading font-bold mb-4">
              Stay Updated on Our Climate Work
            </h3>
            <p className="text-orange-100 mb-6">
              Subscribe to receive news, updates, and opportunities to take action
            </p>
            <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
              <button
                type="submit"
                className="bg-ocean hover:bg-ocean-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
