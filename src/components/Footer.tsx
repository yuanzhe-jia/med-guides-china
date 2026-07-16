import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          <div>
            <h3 className="font-semibold text-lg mb-5">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/hospitals" className="text-primary-200 hover:text-white transition-colors">Hospitals</Link></li>
              <li><Link href="/guide" className="text-primary-200 hover:text-white transition-colors">Medical Guide</Link></li>
              <li><Link href="/articles" className="text-primary-200 hover:text-white transition-colors">Articles</Link></li>
              <li><Link href="/faq" className="text-primary-200 hover:text-white transition-colors">FAQ</Link></li>
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
            <h3 className="font-semibold text-lg mb-5">References</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://english.beijing.gov.cn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-200 hover:text-white transition-colors flex items-center gap-2"
                >
                  <span>Beijing Government</span>
                  <ExternalLink size={12} className="flex-shrink-0" />
                </a>
              </li>
              <li>
                <a
                  href="https://english.shanghai.gov.cn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-200 hover:text-white transition-colors flex items-center gap-2"
                >
                  <span>Shanghai Government</span>
                  <ExternalLink size={12} className="flex-shrink-0" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.gz.gov.cn/guangzhouinternational/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-200 hover:text-white transition-colors flex items-center gap-2"
                >
                  <span>Guangzhou Government</span>
                  <ExternalLink size={12} className="flex-shrink-0" />
                </a>
              </li>
              <li>
                <a
                  href="https://en.hainan.gov.cn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-200 hover:text-white transition-colors flex items-center gap-2"
                >
                  <span>Hainan Government</span>
                  <ExternalLink size={12} className="flex-shrink-0" />
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>
      
      <div className="border-t border-primary-800">
        <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-300 text-sm">
            © {new Date().getFullYear()} MedGuidesChina. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-primary-300">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
