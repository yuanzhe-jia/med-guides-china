import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'MedGuidesChina privacy policy. Learn how we handle your information when you use our website and services.',
  keywords: ['privacy policy', 'data privacy', 'MedGuidesChina privacy', 'personal information'],
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
    url: 'https://medguideschina.com/privacy-policy',
    siteName: 'China Medical Guides',
    title: 'Privacy Policy | MedGuidesChina',
    description: 'MedGuidesChina privacy policy. Learn how we handle your information when you use our website and services.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | MedGuidesChina',
    description: 'MedGuidesChina privacy policy. Learn how we handle your information when you use our website and services.',
    creator: '@medguideschina',
  },
  alternates: {
    canonical: 'https://medguideschina.com/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
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
              Privacy Policy
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
              <h2 className="text-2xl font-bold text-primary-800 mb-4">1. Introduction</h2>
              <p>
                Welcome to MedGuidesChina ("we," "our," or "us"). We respect your privacy 
                and are committed to protecting it through our compliance with this policy.
                As an informational website about healthcare in China, we are designed to 
                provide you with valuable information without requiring you to share personal 
                information. Please read this policy carefully to understand our policies and 
                practices regarding your information and how we will treat it.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary-800 mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-primary-700 mt-6 mb-3">2.1 Information You Provide to Us</h3>
              <p>
                We do not require you to register or provide personal information to use our website. 
                You may browse our content, read articles, and access hospital information anonymously.
              </p>
              <p className="mt-4">
                If you contact us via email, you may choose to provide us with:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Your name (optional)</li>
                <li>Your email address</li>
                <li>Any information you choose to include in your message</li>
              </ul>
              <p className="mt-4">
                We use this information solely to respond to your inquiries and provide the information you request.
              </p>

              <h3 className="text-xl font-semibold text-primary-700 mt-6 mb-3">2.2 Information We Collect Automatically</h3>
              <p>
                As you navigate through and interact with our website, we may automatically 
                collect certain information about your device and browsing patterns:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Log Data: IP address, browser type, referring/exit pages, and the date/time of your visit</li>
                <li>Device Information: Device type, operating system, and screen resolution</li>
                <li>Usage Data: Pages visited, time spent on pages, and click patterns</li>
              </ul>
              <p className="mt-4">
                This information is collected through standard web server logs and analytics 
                tools. It does not include personally identifiable information, and we use it 
                solely to improve our website and understand how visitors use our content.
              </p>

              <h3 className="text-xl font-semibold text-primary-700 mt-6 mb-3">2.3 Cookies and Similar Technologies</h3>
              <p className="mt-4">
                Cookies are small files stored on your device. You can control cookies through 
                your browser settings. Disabling cookies may affect some functionality of the 
                website, but our core content will remain accessible.
                We may use cookies and similar tracking technologies to enhance your browsing 
                experience and collect information about how you use our website.
                We do not use cookies for advertising purposes or to build personal profiles.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary-800 mb-4">3. How We Use Your Information</h2>
              <p>
                We use information that we collect about you or that you provide to us, including any personal information:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>To present our website and its contents to you</li>
                <li>To improve our website and user experience</li>
                <li>To analyze website traffic and usage patterns</li>
                <li>To respond to your inquiries and provide customer support</li>
                <li>To maintain the security and integrity of our website</li>
                <li>To comply with legal obligations</li>
              </ul>
              <p className="mt-4">
                We do not sell, rent, or trade your personal information to third parties for commercial purposes.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary-800 mb-4">4. Disclosure of Your Information</h2>
              <p>
                We may disclose information that we collect or you provide as described in this privacy policy:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>To our trusted service providers who assist in operating our website (e.g., hosting providers), subject to confidentiality obligations</li>
                <li>To comply with any court order, law, or legal process, including responding to any government or regulatory request</li>
                <li>If we believe disclosure is necessary or appropriate to protect the rights, property, or safety of MedGuidesChina, our users, or others</li>
                <li>In connection with a merger, sale, or transfer of all or part of our business</li>
              </ul>
              <p className="mt-4">
                We do not share your personal information with third parties for their own marketing purposes.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary-800 mb-4">5. Third-Party Websites and Services</h2>
              <p>
                Our website may contain links to third-party websites, including hospital 
                websites, government health organizations, and other resources. These 
                third-party sites have their own privacy policies, and we have no 
                responsibility or liability for their policies or practices.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary-800 mb-4">6. Data Security</h2>
              <p className="mt-4">
                We have implemented measures designed to secure your personal information from 
                accidental loss and from unauthorized access, use, alteration, and disclosure.
                Our website uses HTTPS encryption to protect data in transit. However, the 
                transmission of information via the internet is not completely secure. Although 
                we do our best to protect your personal information, we cannot guarantee the 
                security of your personal information transmitted to our website. 
                Any transmission of personal information is at your own risk.
                Since we do not store large amounts of personal information, the risk to your 
                privacy is minimal.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary-800 mb-4">7. Children's Privacy</h2>
              <p>
                Our website is not intended for children under 13 years of age. 
                No one under age 13 may provide any personal information to us on the website.
                We do not knowingly collect personal information from children under 13. If 
                you are under 13, do not use or provide any information on this website. If 
                we learn we have collected or received personal information from a child under 
                13 without verification of parental consent, we will delete that information.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary-800 mb-4">8. Your Rights and Choices</h2>
              <p>
                Depending on your jurisdiction, you may have certain rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>You can request a copy of the personal information we hold about you</li>
                <li>You can request correction of inaccurate or incomplete information</li>
                <li>You can request deletion of your personal information</li>
                <li>You can object to our processing of your personal information</li>
                <li>You can request restriction of processing</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary-800 mb-4">9. Changes to Our Privacy Policy</h2>
              <p>
                We may update the privacy policy from time to time. 
                If we make material changes, we will post the updated policy on this page and update the "Last updated" date at the top of this policy. 
                We encourage you to review the privacy policy periodically to stay informed about our privacy practices.
              </p>
            </div>

            <div className="pt-6 border-t border-neutral-200">
              <p className="text-sm text-neutral-500">
                The privacy policy provides a comprehensive overview of our data practices. 
                As an informational website, we minimize data collection and prioritize your 
                privacy. We are committed to transparency and will continue to update this 
                policy as needed to reflect any changes in our practices.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
