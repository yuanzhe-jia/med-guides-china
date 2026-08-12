import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          <div>
            <h3 className="font-semibold text-lg mb-5">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/hospitals" className="text-primary-200 hover:text-white transition-colors">Find a Hospital</Link></li>
              <li><Link href="/roadmap" className="text-primary-200 hover:text-white transition-colors">Read Roadmap</Link></li>
              <li><Link href="/articles" className="text-primary-200 hover:text-white transition-colors">Browse Articles</Link></li>
              <li><Link href="/faq" className="text-primary-200 hover:text-white transition-colors">View FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-5">Top Specialties</h3>
            <ul className="space-y-3">
              <li><Link href="/hospitals?specialty=dentistry" className="text-primary-200 hover:text-white transition-colors">Dentistry</Link></li>
              <li><Link href="/hospitals?specialty=cardiology" className="text-primary-200 hover:text-white transition-colors">Cardiology</Link></li>
              <li><Link href="/hospitals?specialty=orthopedics" className="text-primary-200 hover:text-white transition-colors">Orthopedics</Link></li>
              <li><Link href="/hospitals?specialty=ophthalmology" className="text-primary-200 hover:text-white transition-colors">Ophthalmology</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-5">Cities Served</h3>
            <ul className="space-y-3">
              <li><Link href="/hospitals?city=Beijing" className="text-primary-200 hover:text-white transition-colors">Beijing</Link></li>
              <li><Link href="/hospitals?city=Shanghai" className="text-primary-200 hover:text-white transition-colors">Shanghai</Link></li>
              <li><Link href="/hospitals?city=Guangzhou" className="text-primary-200 hover:text-white transition-colors">Guangzhou</Link></li>
              <li><Link href="/hospitals?city=Hainan" className="text-primary-200 hover:text-white transition-colors">Hainan</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-5">About Us</h3>
            <ul className="space-y-3">
              <li><Link href="/privacy-policy" className="text-primary-200 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="text-primary-200 hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/medical-disclaimer" className="text-primary-200 hover:text-white transition-colors">Medical Disclaimer</Link></li>
              <li><Link href="/contact-us" className="text-primary-200 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

        </div>
      </div>
      
      <div className="border-t border-primary-800">
        <div className="container-custom py-6 flex justify-center md:justify-start items-center">
          <p className="text-primary-300 text-sm">
            © {new Date().getFullYear()} MedGuidesChina. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
