/**
 * Monsta Media Group — Site configuration & content.
 *
 * This file is the single source of truth for static UI content so it can be
 * swapped for a CMS / Supabase fetch later. Keep all copy here, NOT in components.
 *
 * Future integration: replace these exports with hooks that fetch from your
 * own API or Supabase (e.g. useServices(), usePackages()).
 */

export const site = {
  name: "Monsta Media Group",
  shortName: "Monsta",
  location: "East Ham, London",
  tagline: "Get Paying Customers On Tap",
  description:
    "A practical, full-funnel growth partner for small businesses. Paid ads, SEO, branding, social, funnels and automations — built to bring you predictable leads.",
  email: "hello@monstamedia.co.uk",
  phone: "+44 20 0000 0000",
  address: "East Ham, London E6, United Kingdom",
  social: {
    instagram: "https://instagram.com/monstamedia",
    facebook: "https://facebook.com/monstamedia",
    linkedin: "https://linkedin.com/company/monstamedia",
    tiktok: "https://tiktok.com/@monstamedia",
  },
} as const;

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Packages", to: "/packages" },
  { label: "Work", to: "/work" },
  { label: "Insights", to: "/insights" },
  { label: "Contact", to: "/contact" },
] as const;

export const services = [
  {
    slug: "paid-ads",
    name: "Paid Ads",
    short: "Meta & Google ads built to bring leads, not vanity clicks.",
    why: "Paid ads are the fastest way to put your offer in front of buyers ready to act.",
    outcome: "Predictable, trackable leads landing in your inbox every week.",
    points: [
      "Meta, Google & YouTube campaigns",
      "Conversion-led creative & copy",
      "Daily budget pacing & optimisation",
      "Transparent weekly reporting",
    ],
    icon: "Target",
  },
  {
    slug: "seo",
    name: "SEO",
    short: "Long-term organic growth that compounds month after month.",
    why: "Customers search for what you sell. SEO makes sure they find you first.",
    outcome: "Rising rankings, steady traffic and inbound enquiries on autopilot.",
    points: [
      "Local & national SEO",
      "Technical audits & on-page fixes",
      "Content & link strategy",
      "Google Business Profile growth",
    ],
    icon: "Search",
  },
  {
    slug: "organic-social",
    name: "Organic Social",
    short: "Content systems that build trust and stop the scroll.",
    why: "People buy from brands they recognise. Consistency wins on social.",
    outcome: "A content engine that grows your audience without burning you out.",
    points: [
      "Content strategy & calendars",
      "Reels, shorts & static posts",
      "Community management",
      "Monthly performance reviews",
    ],
    icon: "Share2",
  },
  {
    slug: "branding",
    name: "Branding",
    short: "Bold identities that make small businesses look serious.",
    why: "Premium branding lets you charge more and convert better.",
    outcome: "A visual identity that earns trust before you say a word.",
    points: [
      "Logo & identity systems",
      "Brand guidelines",
      "Tone of voice",
      "Launch & rebrand kits",
    ],
    icon: "Sparkles",
  },
  {
    slug: "funnels-automations",
    name: "Funnels & Automations",
    short: "Sales funnels and follow-ups that work while you sleep.",
    why: "Most leads need 5+ touches before buying. Automations handle that for you.",
    outcome: "Higher conversion, faster follow-up, less admin.",
    points: [
      "Lead capture funnels",
      "Email & SMS sequences",
      "CRM & pipeline setup",
      "Booking & nurture flows",
    ],
    icon: "Zap",
  },
  {
    slug: "websites",
    name: "Websites & Landing Pages",
    short: "Fast, conversion-built sites that turn visits into bookings.",
    why: "Your website is your hardest-working salesperson. It needs to convert.",
    outcome: "A site that loads fast, looks premium and books calls daily.",
    points: [
      "High-converting landing pages",
      "Full brand websites",
      "Mobile-first builds",
      "Analytics & tracking baked in",
    ],
    icon: "MonitorSmartphone",
  },
] as const;

export const howItWorks = [
  {
    step: "01",
    title: "Strategy",
    desc: "We sit down, dig into your business and map a clear path to more leads.",
  },
  {
    step: "02",
    title: "Setup",
    desc: "We build the offers, ads, funnels, tracking and automations from scratch.",
  },
  {
    step: "03",
    title: "Launch",
    desc: "Campaigns go live across the right channels for your audience.",
  },
  {
    step: "04",
    title: "Lead Generation",
    desc: "Qualified enquiries start flowing into your pipeline week one.",
  },
  {
    step: "05",
    title: "Optimise",
    desc: "We test, refine and scale what works — month after month.",
  },
] as const;

export const whyMonsta = [
  {
    title: "Built for small business",
    desc: "We speak founder, not jargon. Every campaign ties back to revenue.",
    icon: "Rocket",
  },
  {
    title: "Predictable lead flow",
    desc: "Real systems that bring leads consistently, not lucky months.",
    icon: "TrendingUp",
  },
  {
    title: "No long lock-ins",
    desc: "Stay because it works, not because you're stuck in a contract.",
    icon: "ShieldCheck",
  },
  {
    title: "Practitioners, not theorists",
    desc: "We run ads, build funnels and rank sites every single day.",
    icon: "Hammer",
  },
] as const;

export const packages = [
  {
    name: "Starter",
    price: "£795",
    cadence: "/month",
    tagline: "For small businesses ready to switch on lead flow.",
    features: [
      "1 paid ads channel (Meta or Google)",
      "Landing page build",
      "Lead capture & email follow-up",
      "Monthly reporting call",
      "Up to £1.5k ad spend managed",
    ],
    cta: "Start Growing",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "£1,495",
    cadence: "/month",
    tagline: "Our most popular package. Multi-channel growth.",
    features: [
      "Meta + Google ads management",
      "Landing pages & funnels",
      "Email & SMS automations",
      "Local SEO foundations",
      "Bi-weekly strategy calls",
      "Up to £5k ad spend managed",
    ],
    cta: "Book a Call",
    highlighted: true,
  },
  {
    name: "Scale",
    price: "£2,995",
    cadence: "/month",
    tagline: "Full-funnel growth partnership for serious operators.",
    features: [
      "Multi-channel paid media",
      "SEO + content programme",
      "Organic social management",
      "Advanced automations & CRM",
      "Weekly war-room calls",
      "Unlimited ad spend management",
    ],
    cta: "Talk to Us",
    highlighted: false,
  },
] as const;

export const testimonials = [
  {
    quote:
      "Monsta turned our quiet months into our busiest. Bookings doubled in 60 days and the team actually picks up the phone.",
    name: "Sarah K.",
    role: "Owner, Beauty Studio",
  },
  {
    quote:
      "Straight talk, no fluff. They built our funnel, ran the ads and our pipeline hasn't been empty since.",
    name: "James R.",
    role: "Director, Trades Company",
  },
  {
    quote:
      "Best agency we've worked with. They understand small business and they actually care about the numbers.",
    name: "Priya M.",
    role: "Founder, Wellness Brand",
  },
] as const;

export const caseStudies = [
  {
    slug: "local-clinic-2x-bookings",
    client: "Local Clinic",
    industry: "Health & Wellness",
    headline: "2x bookings in 90 days with paid ads & funnel rebuild",
    metric: "+212%",
    metricLabel: "Booked appointments",
    services: ["Paid Ads", "Funnels", "Landing Page"],
  },
  {
    slug: "trades-co-lead-flow",
    client: "Trades Co.",
    industry: "Home Services",
    headline: "From 3 leads a week to 30 with a full-funnel rebuild",
    metric: "10x",
    metricLabel: "Weekly leads",
    services: ["Paid Ads", "Automations", "SEO"],
  },
  {
    slug: "ecom-brand-rebrand",
    client: "Lifestyle Brand",
    industry: "E-commerce",
    headline: "Rebrand + paid social drove £180k in 6 months",
    metric: "5.2x",
    metricLabel: "ROAS",
    services: ["Branding", "Paid Ads", "Social"],
  },
  {
    slug: "studio-launch",
    client: "Boutique Studio",
    industry: "Fitness",
    headline: "Sold out launch week from zero audience",
    metric: "100%",
    metricLabel: "Capacity sold",
    services: ["Branding", "Funnels", "Ads"],
  },
  {
    slug: "service-seo-growth",
    client: "Service Company",
    industry: "Professional Services",
    headline: "Page 1 for 24 commercial keywords in 6 months",
    metric: "+340%",
    metricLabel: "Organic traffic",
    services: ["SEO", "Content"],
  },
  {
    slug: "restaurant-bookings",
    client: "Independent Restaurant",
    industry: "Hospitality",
    headline: "Filled the diary 6 weeks out with local ads",
    metric: "+185%",
    metricLabel: "Bookings",
    services: ["Paid Ads", "Social"],
  },
] as const;

export const insights = [
  {
    slug: "5-mistakes-killing-meta-ads",
    title: "5 mistakes killing your Meta ads (and how to fix them)",
    excerpt:
      "Most small businesses are torching budget on the same fixable issues. Here's the playbook.",
    category: "Paid Ads",
    readTime: "6 min read",
  },
  {
    slug: "local-seo-quick-wins",
    title: "Local SEO: 7 quick wins you can do this week",
    excerpt:
      "Simple changes to your Google Business Profile that move the needle fast.",
    category: "SEO",
    readTime: "5 min read",
  },
  {
    slug: "funnel-vs-website",
    title: "Funnel vs website: what your business actually needs",
    excerpt:
      "Spoiler — you probably need both. Here's how to know which to build first.",
    category: "Funnels",
    readTime: "7 min read",
  },
  {
    slug: "content-calendar-template",
    title: "The 30-day content calendar that actually gets posted",
    excerpt:
      "A copy-paste system for staying consistent on social without the burnout.",
    category: "Social",
    readTime: "4 min read",
  },
  {
    slug: "automation-stack-2025",
    title: "The automation stack we use to follow up every lead",
    excerpt:
      "The exact tools, sequences and triggers that turn cold leads into customers.",
    category: "Automations",
    readTime: "8 min read",
  },
  {
    slug: "brand-positioning-small-business",
    title: "Brand positioning for small businesses (without the fluff)",
    excerpt:
      "How to stand out in a crowded market without spending a fortune on creative.",
    category: "Branding",
    readTime: "6 min read",
  },
] as const;

export const trustLogos = [
  "Trusted by independents",
  "Local trades",
  "Health & beauty brands",
  "Hospitality operators",
  "E-commerce founders",
  "Coaches & consultants",
] as const;
