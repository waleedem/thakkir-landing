import { useState } from 'react'
import { 
  Users, 
  CheckCircle, 
  BookOpen, 
  BarChart3, 
  Bell, 
  Target,
  ChevronDown,
  ChevronUp,
  Star,
  Instagram,
  Youtube,
  ArrowRight
} from 'lucide-react'

const APP_STORE_URL = 'https://apps.apple.com/us/app/thakkir-memorize-together/id6747952106'

// ============================================================================
// NAVIGATION (Simplified: Logo + Download button only)
// ============================================================================
function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-offwhite/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="text-3xl font-bold text-charcoal tracking-tight">
            Thakkir
          </a>

          {/* Download Button */}
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white px-7 py-3 rounded-full text-base font-semibold hover:bg-primary-dark transition-all shadow-sm hover:shadow-md"
          >
            Download App
          </a>
        </div>
      </div>
    </nav>
  )
}

// ============================================================================
// HERO SECTION (Differentiated design with gradient accent)
// ============================================================================
function Hero() {
  return (
    <section className="pt-28 pb-24 lg:pt-40 lg:pb-40 relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Subtle background gradient */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-primary/8 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-primary-light/5 to-transparent pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative w-full">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-3 bg-primary/10 text-primary px-5 py-2 rounded-full text-base font-medium mb-8">
              <span className="w-2.5 h-2.5 bg-primary rounded-full animate-pulse" />
              Now available on iOS
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-charcoal leading-[1.05] tracking-tight">
              Your Quran memorization partner, built for consistency.
            </h1>
            <p className="mt-8 text-xl text-warmgrey leading-relaxed max-w-xl">
              Stay accountable with a memorization partner, log daily check-ins, 
              and track your Hifdh progress—all with an in-app Mushaf and audio reciters.
            </p>
            
            <div className="mt-12">
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-primary to-primary-light text-white font-bold px-10 py-5 rounded-full transition-all shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 hover:scale-[1.03] text-lg"
              >
                Download on the App Store
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            <p className="mt-10 text-base text-warmgrey flex items-center gap-3">
              <span className="flex -space-x-2">
                <span className="w-8 h-8 rounded-full bg-primary/20 border-2 border-white" />
                <span className="w-8 h-8 rounded-full bg-primary/30 border-2 border-white" />
                <span className="w-8 h-8 rounded-full bg-primary/40 border-2 border-white" />
              </span>
              Trusted by students across the UK, Europe, and the Middle East
            </p>
          </div>

          {/* Right Content - Phone Mockups (Horizontal stacked layout) */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-2xl h-[580px]">
              {/* Phone 1 - Left (Mushaf) */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-52 h-[420px] rounded-[2.5rem] transform hover:scale-105 transition-transform overflow-hidden">
                <img src="/mushaf.png" alt="Thakkir Mushaf Screen" className="w-full h-full object-cover rounded-[2.5rem]" />
              </div>
              
              {/* Phone 2 - Center (Home, Main, larger) */}
              <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-64 h-[520px] rounded-[3rem] z-10 overflow-hidden">
                <img src="/home.png" alt="Thakkir Home Screen" className="w-full h-full object-cover rounded-[3rem]" />
              </div>
              
              {/* Phone 3 - Right (Progress) */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-52 h-[420px] rounded-[2.5rem] transform hover:scale-105 transition-transform overflow-hidden">
                <img src="/progress.png" alt="Thakkir Progress Screen" className="w-full h-full object-cover rounded-[2.5rem]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


// ============================================================================
// FEATURES SECTION
// ============================================================================
const features = [
  {
    icon: Users,
    title: 'Memorization Partner Matching',
    description: 'Pair with a partner to keep each other accountable throughout your Hifdh journey.',
  },
  {
    icon: CheckCircle,
    title: 'Daily Check-ins',
    description: 'Log what you memorized each day and maintain your streak for consistent progress.',
  },
  {
    icon: BookOpen,
    title: 'In-App Mushaf & Reciters',
    description: 'Read, listen, and revise without leaving the app. Multiple reciters available.',
  },
  {
    icon: BarChart3,
    title: 'Progress Analytics',
    description: 'See verses completed, streaks, and goal progress at a glance.',
  },
  {
    icon: Bell,
    title: 'Smart Reminders',
    description: 'Gentle notifications to keep your Hifdh on track and maintain consistency.',
  },
  {
    icon: Target,
    title: 'Goal Setting',
    description: 'Set personalized memorization goals and track your journey to completion.',
  },
]

function Features() {
  return (
    <section id="features" className="py-28 lg:py-40">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-20">
          <p className="text-primary font-semibold text-base uppercase tracking-wide mb-4">Features</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal">
            What you can do with Thakkir
          </h2>
          <p className="mt-6 text-warmgrey text-xl max-w-3xl mx-auto">
            Everything you need to build a consistent Quran memorization habit.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white p-10 rounded-3xl border border-gray-100 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group"
            >
              <div className="w-18 h-18 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors" style={{width: '72px', height: '72px'}}>
                <feature.icon className="w-9 h-9 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-charcoal mb-4">
                {feature.title}
              </h3>
              <p className="text-warmgrey leading-relaxed text-lg">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// HOW IT WORKS SECTION
// ============================================================================
const steps = [
  {
    number: '1',
    title: 'Set your memorization goal',
    description: 'Choose your Surahs or Juz and set your preferred pace.',
  },
  {
    number: '2',
    title: 'Connect with a partner',
    description: 'Get matched with an accountability partner or invite a friend.',
  },
  {
    number: '3',
    title: 'Check in daily and track progress',
    description: 'Log your verses, review analytics, and stay consistent.',
  },
]

function HowItWorks() {
  return (
    <section id="how-it-works" className="py-28 lg:py-40 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-20">
          <p className="text-primary font-semibold text-base uppercase tracking-wide mb-4">How it works</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal">
            Get started in minutes
          </h2>
          <p className="mt-6 text-warmgrey text-xl">
            Three simple steps to transform your memorization journey.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-16 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-14 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          
          {steps.map((step) => (
            <div key={step.number} className="text-center relative">
              <div className="w-28 h-28 bg-gradient-to-br from-primary to-primary-light rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl shadow-primary/25">
                <span className="text-5xl font-bold text-white">{step.number}</span>
              </div>
              <h3 className="text-2xl font-semibold text-charcoal mb-4">
                {step.title}
              </h3>
              <p className="text-warmgrey text-lg max-w-sm mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// STATS SECTION
// ============================================================================
const stats = [
  { value: '250+', label: 'Early downloads' },
  { value: '10,000+', label: 'Social media impressions' },
  { value: '87%', label: 'Users report increased consistency' },
  { value: '15+', label: 'Countries reached' },
]

function Stats() {
  return (
    <section id="stats" className="py-28 lg:py-40 bg-gradient-to-br from-primary/5 to-primary-light/10">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-20">
          <p className="text-primary font-semibold text-base uppercase tracking-wide mb-4">Impact</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal">
            Our impact so far
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center p-8 bg-white rounded-3xl shadow-sm border border-gray-100">
              <div className="text-5xl sm:text-6xl lg:text-7xl font-bold text-primary mb-4">
                {stat.value}
              </div>
              <div className="text-warmgrey text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// REVIEWS SECTION
// ============================================================================
const reviews = [
  {
    name: 'Anonymous',
    location: 'Qatar',
    quote: 'I like being able to track my memorization with my friends, it makes hifdh so much more fun. I think anyone trying to memorize the Quran will benefit from this app a lot!',
    rating: 5,
  },
  {
    name: 'Anonymous',
    location: 'United Kingdom',
    quote: 'Great app with straightforward features. Very helpful for tracking your memorization and holding yourself accountable with others! Highly recommend.',
    rating: 5,
  },
  {
    name: 'Anonymous',
    location: 'United Kingdom',
    quote: 'Lovely App, great for staying on track and staying motivated for memorization.',
    rating: 5,
  },
]

function Reviews() {
  return (
    <section id="reviews" className="py-28 lg:py-40">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-20">
          <p className="text-primary font-semibold text-base uppercase tracking-wide mb-4">Testimonials</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal">
            What early users are saying
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-gradient-to-br from-white to-gray-50 p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="flex gap-1.5 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-charcoal mb-8 leading-relaxed text-xl">
                "{review.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">{review.name[0]}</span>
                </div>
                <div>
                  <div className="font-semibold text-charcoal text-lg">
                    {review.name}, {review.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// CTA SECTION
// ============================================================================
function CTA() {
  return (
    <section className="py-28 lg:py-40">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="bg-gradient-to-r from-primary to-primary-light rounded-[2.5rem] p-16 lg:p-24 text-center text-white relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-2xl" />
          
          <div className="relative">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Start building a consistent relationship with the Quran today.
            </h2>
            <p className="mt-8 text-xl text-white/80 max-w-3xl mx-auto">
              Join hundreds of students already using Thakkir to stay accountable in their Hifdh journey.
            </p>
            
            <div className="mt-12">
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-white text-primary font-bold px-10 py-5 rounded-full hover:bg-gray-100 transition-colors text-xl shadow-xl"
              >
                Download on the App Store
                <ArrowRight className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// FAQ SECTION
// ============================================================================
const faqs = [
  {
    question: 'Who is Thakkir for?',
    answer: 'Thakkir is designed for anyone memorizing the Quran—whether you\'re just starting out or working to complete your Hifdh. It\'s especially helpful for students who want accountability and structure in their memorization routine.',
  },
  {
    question: 'Is Thakkir free?',
    answer: 'Thakkir offers a free tier with core features including partner matching, daily check-ins, and basic progress tracking. Premium features are available for users who want advanced analytics and additional tools.',
  },
  {
    question: 'Do I need a partner to use the app?',
    answer: 'While the partner feature is a core part of Thakkir, you can also use the app independently. The Mushaf, reciters, and personal tracking features work without a partner.',
  },
  {
    question: 'Which devices are supported?',
    answer: 'Thakkir is currently available on iOS devices through the App Store. Android support is coming soon.',
  },
]

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="faq" className="py-28 lg:py-40 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-20">
          <p className="text-primary font-semibold text-base uppercase tracking-wide mb-4">FAQ</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal">
            Frequently asked questions
          </h2>
        </div>

        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm"
            >
              <button
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-charcoal text-xl">{faq.question}</span>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${openIndex === index ? 'bg-primary text-white' : 'bg-gray-100 text-warmgrey'}`}>
                  {openIndex === index ? (
                    <ChevronUp className="w-6 h-6" />
                  ) : (
                    <ChevronDown className="w-6 h-6" />
                  )}
                </div>
              </button>
              {openIndex === index && (
                <div className="px-8 pb-6">
                  <p className="text-warmgrey leading-relaxed text-lg">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// FOOTER
// ============================================================================
function Footer() {
  const links = [
    { label: 'Affiliate', href: 'mailto:support@thakkir.app' },
    { label: 'Blog', href: '#' },
    { label: 'Terms', href: '#' },
    { label: 'Support', href: 'mailto:support@thakkir.app' },
  ]

  return (
    <footer id="contact" className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Logo */}
        <div className="text-center mb-10">
          <span className="text-3xl font-bold text-charcoal">Thakkir</span>
        </div>
        
        {/* Top Row - Links */}
        <div className="flex flex-wrap justify-center gap-10 mb-10">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-warmgrey hover:text-primary transition-colors text-base"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Bottom Row - Social Icons */}
        <div className="flex justify-center gap-8 mb-10">
          <a
            href="https://instagram.com/thakkirapp"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a
            href="https://tiktok.com/@thakkirapp"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
            </svg>
          </a>
          <a
            href="https://youtube.com/@thakkirapp"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
          >
            <Youtube className="w-6 h-6" />
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 pt-8">
          <div className="text-center text-warmgrey text-sm">
            © {new Date().getFullYear()} Thakkir. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

// ============================================================================
// MAIN APP
// ============================================================================
function App() {
  return (
    <div className="min-h-screen bg-offwhite">
      <Navigation />
      <Hero />
      <Features />
      <HowItWorks />
      <Stats />
      <Reviews />
      <CTA />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App
