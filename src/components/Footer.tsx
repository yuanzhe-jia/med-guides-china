import Link from 'next/link';
import { Heart, Phone, Mail, MapPin, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <Heart className="text-primary-800" size={20} />
              </div>
              <div>
                <span className="text-xl font-bold">MedGuides</span>
                <span className="text-xs text-primary-300 block -mt-1">China Healthcare</span>
              </div>
            </Link>
            <p className="text-primary-200 text-sm leading-relaxed mb-6">
              Your trusted guide to world-class healthcare in China. We bridge the gap between international patients and China's best medical care.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 bg-primary-800 hover:bg-primary-700 rounded-full flex items-center justify-center transition-colors">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-9 h-9 bg-primary-800 hover:bg-primary-700 rounded-full flex items-center justify-center transition-colors">
                <Twitter size={16} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-5">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-primary-200 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/hospitals" className="text-primary-200 hover:text-white transition-colors">Find Hospitals</Link></li>
              <li><Link href="/guide" className="text-primary-200 hover:text-white transition-colors">Medical Guide</Link></li>
              <li><Link href="/articles" className="text-primary-200 hover:text-white transition-colors">Articles</Link></li>
              <li><Link href="/faq" className="text-primary-200 hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-5">Top Specialties</h3>
            <ul className="space-y-3">
              <li><Link href="/hospitals?specialty=oncology" className="text-primary-200 hover:text-white transition-colors">Oncology</Link></li>
              <li><Link href="/hospitals?specialty=orthopedics" className="text-primary-200 hover:text-white transition-colors">Orthopedics</Link></li>
              <li><Link href="/hospitals?specialty=cardiology" className="text-primary-200 hover:text-white transition-colors">Cardiology</Link></li>
              <li><Link href="/hospitals?specialty=neurology" className="text-primary-200 hover:text-white transition-colors">Neurology</Link></li>
              <li><Link href="/hospitals?specialty=tcm" className="text-primary-200 hover:text-white transition-colors">Traditional Chinese Medicine</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-5">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-primary-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-primary-200 text-sm">24/7 Hotline</p>
                  <a href="tel:+86-10-6915-6699" className="text-white font-medium hover:text-primary-300 transition-colors">
                    +86 10 6915 6699
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-primary-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-primary-200 text-sm">Email</p>
                  <a href="mailto:info@medguideschina.com" className="text-white font-medium hover:text-primary-300 transition-colors">
                    info@medguideschina.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-primary-200 text-sm">Serving</p>
                  <p className="text-white font-medium">Beijing, Shanghai, Guangzhou</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="border-t border-primary-800">
        <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-300 text-sm">
            © {new Date().getFullYear()} MedGuides China. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-primary-300">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Medical Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
