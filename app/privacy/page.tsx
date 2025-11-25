export default function Privacy() {
  return (
    <div className="min-h-screen bg-zinc-950 font-sans selection:bg-zinc-800 selection:text-white text-zinc-200 overflow-x-hidden relative">
      <div className="bg-brand-950 min-h-screen py-20 px-4">
        <div className="max-w-3xl mx-auto prose prose-invert prose-lg">
          <h1 className="font-serif text-4xl md:text-5xl text-white mb-8">
            Privacy Policy
          </h1>
          <p className="text-gray-400 mb-8">Effective Date: October 26, 2023</p>
          <section className="mb-12">
            <h2 className="text-2xl text-white font-serif mb-4">
              1. Information We Collect
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              To provide our map optimization and microsite services, we collect
              the following information:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li>Business owner's name and contact details (Phone, Email).</li>
              <li>
                Business location, operating hours, and service offerings.
              </li>
              <li>Photographs of the business premises and products.</li>
              <li>Menu items and pricing information.</li>
            </ul>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl text-white font-serif mb-4">
              2. How We Use Information
            </h2>
            <p className="text-gray-400 leading-relaxed">
              The information collected is publicly posted to Google Maps, Apple
              Maps, and your generated mapped.lk microsite. This is the core
              function of our service: to make your business information public
              and accessible to customers. We do not sell your private contact
              information to third parties.
            </p>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl text-white font-serif mb-4">
              3. Data Security
            </h2>
            <p className="text-gray-400 leading-relaxed">
              We implement reasonable security measures to protect your account
              credentials used to manage map listings. However, please note that
              information published to public maps is, by definition, public
              data.
            </p>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl text-white font-serif mb-4">
              4. Your Rights
            </h2>
            <p className="text-gray-400 leading-relaxed">
              As a business owner in Sri Lanka, you have the right to request
              corrections to your data or request the removal of your microsite.
              Corrections to Google/Apple Maps are subject to the respective
              platform's policies and review times.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl text-white font-serif mb-4">
              5. Contact Us
            </h2>
            <p className="text-gray-400 leading-relaxed">
              If you have questions about this policy, please contact us
              directly through our support channels or visit our office in
              Malabe.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
