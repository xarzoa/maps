import { CheckCircle2Icon, MapPin, Search } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/btn";
import { StarRating } from "@/components/ui/stars";

const customers = [
  {
    id: 1,
    name: "Anuja Super Sale",
    category: "Wholesaler",
    improvement: "1000+ Views",
    description: "Not provided. Managed by us.",
    image: "/anuja.png",
    stars: 2.9,
    managed: true,
  },
  {
    id: 2,
    name: "Kanola Coffee Shop",
    category: "Coffee Shop",
    improvement: "1000+ Clicks",
    description: "Not provided. Not managed by us.",
    image: "https://picsum.photos/400/300?random=10",
    stars: 3.8,
    managed: false,
  },
  {
    id: 3,
    name: "Aurous Education institute",
    category: "Educational institution",
    improvement: "1500+ Clicks",
    description: "Not provided. Not managed by us.",
    image: "https://picsum.photos/400/300?random=10000",
    stars: 3,
    managed: false,
  },
];

const pricing = [
  {
    id: 1,
    name: "Map Optimization",
    price: "3,000 LKR",
    description: "One-time setup fee. Regular price 5,000 LKR.",
    features: [
      "Google & Apple Maps Claiming",
      "Operating Hours Setup",
      "Professional Photo Uploads",
      "Menu/Service List Integration",
      "Verification Assistance",
    ],
    highlight: true,
  },
  {
    id: 2,
    name: "Monthly Management",
    price: "999 LKR",
    period: "/ month",
    description: "Keep your profile active and engaging.",
    features: [
      "Weekly Photo Updates",
      "Review Responses",
      "Holiday Hour Adjustments",
      "Performance Reporting",
      "Priority Support",
    ],
  },
  {
    id: 3,
    name: "Microsite",
    price: "499 LKR",
    period: "/ month",
    description: "Your own branded sub-domain.",
    features: [
      "yourname.mapped.lk domain",
      "Mobile-Optimized Design",
      "Digital Menu & Pricing",
      "Booking Integration",
      "Customizable Themes",
    ],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 font-sans selection:bg-zinc-800 selection:text-white text-zinc-200 overflow-x-hidden relative">
      <main className="pt-32 pb-10 px-4 relative max-w-7xl mx-auto flex flex-col items-center text-center min-h-[80vh] justify-center">
        <div className="z-10 max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-zinc-900 text-zinc-300 border border-zinc-800 text-sm font-bold mb-6">
            Boost your local visibility
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-medium text-white leading-tight mb-6 drop-shadow-2xl">
            Get your business <br />
            <span className="italic pr-2 border-b-4 border-zinc-700 text-zinc-200">
              on the map.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            We build and manage optimized Google & Apple Maps profiles for
            businesses. Start getting discovered by locals today without lifting
            a finger.
          </p>
          <Button size="lg">Get Started</Button>
        </div>
      </main>
      <section
        id="customers"
        className="py-20 bg-zinc-900 border-t border-zinc-800"
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
              Trusted by local favorites
            </h2>
            <p className="text-zinc-500">
              From coffee shops to dental clinics, we help everyone get found.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 mx-auto gap-4">
            {customers.map((customer) => {
              return (
                <div
                  className="grid grid-cols-1 md:grid-cols-3 gap-8 md:min-w-5xl"
                  key={customer.id}
                >
                  <div className="group hover:-translate-y-2 transition-transform duration-300">
                    <div className="h-48 bg-zinc-800 rounded-t-2xl overflow-hidden relative grayscale contrast-125">
                      <Image
                        width="400"
                        height="300"
                        src={customer.image}
                        alt={customer.category}
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                      />
                      <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-white shadow-sm border border-zinc-700">
                        {customer.improvement}
                      </div>
                    </div>
                    <div className="bg-zinc-950 border-x border-b border-zinc-800 p-6 rounded-b-2xl">
                      <h3 className="font-bold text-lg mb-1 text-zinc-100">
                        {customer.name}
                      </h3>
                      <p className="text-zinc-500 text-sm mb-4">
                        {customer.category}
                      </p>
                      <div className="flex gap-1 mb-3 text-zinc-100">
                        <StarRating rating={customer.stars} />
                      </div>
                      <p className="text-sm text-zinc-400">
                        {customer.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="py-20 bg-brand-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-gray-500">
              Special rates for our first 100 customers in Sri Lanka.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((tier) => (
              <div
                key={tier.id}
                className={`relative p-8 rounded-2xl border flex flex-col ${tier.highlight ? "bg-white/10 border-white/30 shadow-2xl shadow-white/5" : "bg-transparent border-white/10"}`}
              >
                {tier.highlight && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white text-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-serif font-medium text-white mb-2">
                  {tier.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-3xl font-bold text-white">
                    {tier.price}
                  </span>
                  {tier.period && (
                    <span className="text-gray-400 text-sm">{tier.period}</span>
                  )}
                </div>
                <p className="text-sm text-gray-400 mb-6">{tier.description}</p>
                <div className="grow space-y-4 mb-8">
                  {tier.features.map((feat) => (
                    <div
                      key={tier.features.indexOf(feat)}
                      className="flex items-start gap-3 text-sm text-gray-300"
                    >
                      <CheckCircle2Icon className="w-5 h-5 text-white shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
                <button
                  type="button"
                  className={`w-full py-3 rounded-lg font-medium transition-colors ${tier.highlight ? "bg-white text-black hover:bg-gray-200" : "bg-white/10 text-white hover:bg-white/20"}`}
                >
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-8 italic">
            * Travel fees apply for locations outside Anuradhapura & Malabe.
          </p>
        </div>
      </section>
      <section className="py-20 bg-zinc-900 border-t border-zinc-800">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif text-white mb-6">
                We handle the boring stuff. <br />
                You run your business.
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-zinc-800 text-white border border-zinc-700 flex items-center justify-center font-bold shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-100">
                      Profile Creation
                    </h4>
                    <p className="text-zinc-500 text-sm">
                      We claim and verify your listings on Google, Apple, Bing,
                      and Yelp.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-zinc-800 text-white border border-zinc-700 flex items-center justify-center font-bold shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-100">Optimization</h4>
                    <p className="text-zinc-500 text-sm">
                      We optimize keywords, photos, and hours to ensure you rank
                      high.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-zinc-800 text-white border border-zinc-700 flex items-center justify-center font-bold shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-100">
                      Review Management
                    </h4>
                    <p className="text-zinc-500 text-sm">
                      We help you generate more 5-star reviews and respond to
                      them.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Button>Start Now</Button>
              </div>
            </div>
            <div className="relative h-96 w-full">
              <div className="absolute top-0 right-0 w-4/5 h-full bg-zinc-800 rounded-3xl transform rotate-3 border border-zinc-700"></div>
              <div className="absolute top-4 right-4 w-4/5 h-full bg-zinc-900 border border-zinc-700 rounded-3xl shadow-[8px_8px_0px_0px_rgba(39,39,42,1)] flex flex-col p-6 overflow-hidden">
                <div className="flex justify-between items-center mb-6 border-b border-zinc-800 pb-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                    <div className="w-3 h-3 rounded-full bg-zinc-800"></div>
                  </div>
                  <div className="text-xs font-bold text-zinc-500 tracking-widest">
                    PROFILE STATUS
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-3 bg-zinc-950/50 rounded-lg border border-zinc-800">
                    <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-green-500">
                      <CheckCircle2Icon />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-bold text-zinc-200">
                        Verification
                      </div>
                      <div className="text-xs text-zinc-500">
                        Profile claimed & verified
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-3 bg-zinc-950/50 rounded-lg border border-zinc-800">
                    <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center">
                      <MapPin />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-bold text-zinc-200">
                        Location
                      </div>
                      <div className="text-xs text-zinc-500">
                        Address synced across maps
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-3 bg-zinc-950/50 rounded-lg border border-zinc-800">
                    <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center">
                      <Search />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-bold text-zinc-200">
                        SEO Keywords
                      </div>
                      <div className="text-xs text-zinc-500">
                        Optimized for "Near Me"
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-auto pt-4 flex justify-center">
                  <div className="px-3 py-1 bg-zinc-800 rounded text-xs font-mono text-zinc-400 border border-zinc-700">
                    Status: ACTIVE
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
