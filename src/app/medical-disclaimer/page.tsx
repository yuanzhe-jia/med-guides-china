import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Medical Disclaimer',
  description: 'MedGuidesChina Medical Disclaimer. Information on this website is for general informational purposes only and does not constitute medical advice.',
  keywords: ['medical disclaimer', 'health disclaimer', 'no medical advice', 'MedGuidesChina disclaimer'],
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://medguideschina.com/medical-disclaimer',
    siteName: 'China Medical Guides',
    title: 'Medical Disclaimer | MedGuidesChina',
    description: 'MedGuidesChina Medical Disclaimer. Information on this website is for general informational purposes only and does not constitute medical advice.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Medical Disclaimer | MedGuidesChina',
    description: 'MedGuidesChina Medical Disclaimer. Information on this website is for general informational purposes only and does not constitute medical advice.',
    creator: '@medguideschina',
  },
  alternates: {
    canonical: 'https://medguideschina.com/medical-disclaimer',
  },
};

export default function MedicalDisclaimerPage() {
  return (
    <div className="bg-neutral-50 min-h-screen">
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white py-16 md:py-20 overflow-hidden relative">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary-400 rounded-full -translate-x-1/2 translate-y-1/2" />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5">
              Medical Disclaimer
            </h1>
            <p className="text-lg md:text-xl text-primary-100 leading-relaxed">
              Last updated: August 10, 2026
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container-custom max-w-4xl">
          <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 space-y-10 text-neutral-700 leading-relaxed">
            <div>
              <h2 className="text-2xl font-bold text-primary-800 mb-4">1. No Medical Advice</h2>
              <p className="mt-4">
                Welcome to MedGuidesChina ("we," "our" or "us"). The content on this website is for general informational purposes only and does not constitute medical advice, diagnosis, or treatment.
                We make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on our website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary-800 mb-4">2. Not a Substitute for Professional Care</h2>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>The content is not a substitute for professional medical advice, diagnosis, or treatment</li>
                <li>Always seek the advice of your physician or other qualified health providers with any questions you may have regarding a medical condition</li>
                <li>Never disregard professional medical advice or delay in seeking it because of something you have read on this website</li>
                <li>The inclusion of hospital information does not constitute an endorsement or recommendation</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary-800 mb-4">3. Reliance at Your Own Risk</h2>
              <p>
                Reliance on any information provided by this website is solely at your own risk. 
                We do not warrant that the information will meet your requirements or that the 
                operation of our website will be uninterrupted or error-free.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary-800 mb-4">4. No Doctor-Patient Relationship</h2>
              <p>
                Your use of this website does not create a doctor-patient relationship between 
                you and MedGuidesChina, its owners, operators, employees, or any associated 
                medical professionals. The website is not a medical institution, healthcare provider, or insurance company.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary-800 mb-4">5. Emergency Situations</h2>
              <p>
                If you think you may have a medical emergency, call your doctor, go to the 
                emergency department, or call the local emergency number immediately. Do NOT 
                rely on the information on this website in an emergency situation.
                For international patients in China, the universal emergency number is 120 for ambulance services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary-800 mb-4">6. Changes to Information</h2>
              <p>
                Medical and healthcare information — including hospital services, pricing, 
                insurance acceptance, appointment procedures, and availability — can change 
                rapidly without notice. While we strive to keep the information current, we 
                cannot guarantee that all information reflects the most recent updates.
                Always verify critical details directly with the hospital or healthcare 
                provider before making any medical decisions or travel arrangements.
              </p>
            </div>

            <div className="pt-6 border-t border-neutral-200">
              <p className="text-sm text-neutral-500">
                This medical disclaimer is designed to be as comprehensive and clear as possible. 
                If you have any questions or concerns about the information on our website, 
                please consult with a qualified medical professional. Your health and safety 
                are of the utmost importance to us.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
