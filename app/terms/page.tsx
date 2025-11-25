export default function Terms() {
  return (
    <div className="min-h-screen bg-zinc-950 font-sans selection:bg-zinc-800 selection:text-white text-zinc-200 overflow-x-hidden relative">
      <div className="bg-brand-950 min-h-screen py-20 px-4">
        <div className="max-w-3xl mx-auto prose prose-invert prose-lg">
          <h1 className="font-serif text-4xl md:text-5xl text-white mb-8">
            Terms of Service
          </h1>
          <p className="text-gray-400 mb-8">Last updated: October 26, 2023</p>

          <section className="mb-12">
            <h2 className="text-2xl text-white font-serif mb-4">
              1. Services Provided
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Mapped.lk ("we", "us") provides digital optimization services for
              local businesses. This includes claiming and managing listings on
              Google Maps and Apple Maps, photography services, and the creation
              of microsites under the *.mapped.lk domain.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl text-white font-serif mb-4">
              2. Pricing and Payments
            </h2>
            <ul className="list-disc pl-6 space-y-3 text-gray-400">
              <li>
                <strong className="text-white">Map Optimization:</strong> A
                one-time fee of 3,000 LKR (promotional rate for first 100
                customers) or 5,000 LKR (standard rate) is due upon completion
                of the profile setup.
              </li>
              <li>
                <strong className="text-white">Monthly Management:</strong> 999
                LKR per month. This fee is recurring.
              </li>
              <li>
                <strong className="text-white">Microsite Subscription:</strong>{" "}
                499 LKR per month for the hosting and maintenance of your
                dedicated subdomain webpage.
              </li>
              <li>
                <strong className="text-white">Travel Fees:</strong> For
                businesses located outside of Anuradhapura or Malabe, a travel
                fee will be assessed based on distance. This fee will be
                communicated and agreed upon before service delivery.
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl text-white font-serif mb-4">
              3. Ownership and Credentials
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              You (the Client) retain full ownership of your Google Maps and
              Apple Maps business profiles. Mapped.lk acts as an authorized
              manager. Upon cancellation of services, we will transfer full
              administrative control back to you, provided all outstanding
              invoices are paid.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Microsites created on *.mapped.lk subdomains remain the property
              of Mapped.lk. Content provided by you (menus, photos) remains your
              property.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl text-white font-serif mb-4">
              4. Cancellation and Termination
            </h2>
            <p className="text-gray-400 leading-relaxed">
              You may cancel monthly subscriptions at any time with 30 days'
              notice. No refunds are provided for partial months. We reserve the
              right to terminate services for non-payment or inappropriate
              content.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
