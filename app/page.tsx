import { PhoneCall, MapPin, Mail, ShieldCheck, Stethoscope, Headphones, Wrench, Clock, Star, CheckCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-wide">HearingSupport.in</h1>

          <a
            href="tel:7349278427"
            className="bg-white text-blue-700 px-4 py-2 rounded-xl font-semibold shadow hover:bg-gray-100 transition"
          >
            Call Now
          </a>
        </div>

        <div className="max-w-6xl mx-auto px-6 pb-10 pt-4">
          <h2 className="text-4xl font-bold leading-tight">
            Hearing Aid Accessories & Home Service in Bangalore
          </h2>
          <p className="mt-4 text-lg text-blue-100 max-w-2xl">
            We provide hearing aid batteries, domes, filters, tubes, cleaning kits, and professional home service support
            across Bangalore.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="https://wa.me/917349278427"
              target="_blank"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold shadow transition"
            >
              WhatsApp Now
            </a>

            <a
              href="#services"
              className="bg-white text-blue-700 hover:bg-gray-100 px-6 py-3 rounded-xl font-semibold shadow transition"
            >
              View Services
            </a>
          </div>
        </div>
      </header>

      {/* Trust Badges */}
      <section className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl shadow border bg-white flex gap-4">
          <ShieldCheck className="w-10 h-10 text-blue-600" />
          <div>
            <h3 className="font-bold text-lg">Trusted Support</h3>
            <p className="text-gray-600 mt-1">
              Professional service with genuine accessories and expert guidance.
            </p>
          </div>
        </div>

        <div className="p-6 rounded-2xl shadow border bg-white flex gap-4">
          <Clock className="w-10 h-10 text-blue-600" />
          <div>
            <h3 className="font-bold text-lg">Fast Home Visit</h3>
            <p className="text-gray-600 mt-1">
              Quick service visits available in Bangalore at your convenience.
            </p>
          </div>
        </div>

        <div className="p-6 rounded-2xl shadow border bg-white flex gap-4">
          <Star className="w-10 h-10 text-blue-600" />
          <div>
            <h3 className="font-bold text-lg">Affordable Pricing</h3>
            <p className="text-gray-600 mt-1">
              Transparent charges and budget-friendly accessory options.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-gray-50 py-14">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center">Our Services</h2>
          <p className="text-gray-600 text-center mt-3 max-w-2xl mx-auto">
            We provide complete hearing aid accessories, repair support, and home service assistance.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            <div className="bg-white p-6 rounded-2xl shadow border">
              <Headphones className="w-10 h-10 text-indigo-600" />
              <h3 className="font-bold text-xl mt-4">Accessories</h3>
              <ul className="mt-3 text-gray-600 space-y-2">
                <li className="flex gap-2 items-center"><CheckCircle className="w-5 h-5 text-green-600" /> Batteries</li>
                <li className="flex gap-2 items-center"><CheckCircle className="w-5 h-5 text-green-600" /> Domes & Wax Filters</li>
                <li className="flex gap-2 items-center"><CheckCircle className="w-5 h-5 text-green-600" /> Tubes & Earhooks</li>
                <li className="flex gap-2 items-center"><CheckCircle className="w-5 h-5 text-green-600" /> Cleaning Kits</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow border">
              <Wrench className="w-10 h-10 text-indigo-600" />
              <h3 className="font-bold text-xl mt-4">Repair & Service</h3>
              <ul className="mt-3 text-gray-600 space-y-2">
                <li className="flex gap-2 items-center"><CheckCircle className="w-5 h-5 text-green-600" /> Sound Issue Fix</li>
                <li className="flex gap-2 items-center"><CheckCircle className="w-5 h-5 text-green-600" /> Cleaning & Maintenance</li>
                <li className="flex gap-2 items-center"><CheckCircle className="w-5 h-5 text-green-600" /> Receiver & Tube Change</li>
                <li className="flex gap-2 items-center"><CheckCircle className="w-5 h-5 text-green-600" /> Battery Door Repair</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow border">
              <Stethoscope className="w-10 h-10 text-indigo-600" />
              <h3 className="font-bold text-xl mt-4">Home Visit Support</h3>
              <ul className="mt-3 text-gray-600 space-y-2">
                <li className="flex gap-2 items-center"><CheckCircle className="w-5 h-5 text-green-600" /> Hearing Aid Checkup</li>
                <li className="flex gap-2 items-center"><CheckCircle className="w-5 h-5 text-green-600" /> Demo & Trial Support</li>
                <li className="flex gap-2 items-center"><CheckCircle className="w-5 h-5 text-green-600" /> Senior Citizen Assistance</li>
                <li className="flex gap-2 items-center"><CheckCircle className="w-5 h-5 text-green-600" /> Device Programming Help</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-14">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center">Contact Us</h2>
          <p className="text-gray-600 text-center mt-3">
            We are available for Bangalore home service and hearing aid accessories support.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            <div className="p-6 rounded-2xl border shadow bg-white flex gap-4">
              <PhoneCall className="w-10 h-10 text-blue-600" />
              <div>
                <h3 className="font-bold text-lg">Phone</h3>
                <p className="text-gray-600 mt-1">+91 73492 78427</p>
              </div>
            </div>

            <div className="p-6 rounded-2xl border shadow bg-white flex gap-4">
              <MapPin className="w-10 h-10 text-blue-600" />
              <div>
                <h3 className="font-bold text-lg">Location</h3>
                <p className="text-gray-600 mt-1">Bangalore, India</p>
              </div>
            </div>

            <div className="p-6 rounded-2xl border shadow bg-white flex gap-4">
              <Mail className="w-10 h-10 text-blue-600" />
              <div>
                <h3 className="font-bold text-lg">Email</h3>
                <p className="text-gray-600 mt-1">hearingsupport@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <a
              href="tel:7349278427"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold shadow transition"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/917349278427"
              target="_blank"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold shadow transition"
            >
              WhatsApp Now
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-6">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p>© {new Date().getFullYear()} HearingSupport.in | Bangalore</p>
          <p className="text-sm text-gray-400">Hearing Aid Accessories & Home Service</p>
        </div>
      </footer>
    </div>
  );
}
