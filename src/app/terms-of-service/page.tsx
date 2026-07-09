import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'MedGuidesChina Terms of Service. Please read these terms carefully before using our website and services.',
  keywords: ['terms of service', 'terms of use', 'user agreement', 'MedGuidesChina terms'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://medguideschina.com/terms-of-service',
    siteName: 'China Medical Guides',
    title: 'Terms of Service | MedGuidesChina',
    description: 'MedGuidesChina Terms of Service. Please read these terms carefully before using our website and services.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service | MedGuidesChina',
    description: 'MedGuidesChina Terms of Service. Please read these terms carefully before using our website and services.',
    creator: '@medguideschina',
  },
  alternates: {
    canonical: 'https://medguideschina.com/terms-of-service',
  },
};

export default function TermsOfServicePage() {
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
              Terms of Service
            </h1>
            <p className="text-lg md:text-xl text-primary-100 leading-relaxed">
              Last updated: July 9, 2026
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container-custom max-w-4xl">
          <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 space-y-10 text-neutral-700 leading-relaxed">
            <div>
              <h2 className="text-2xl font-bold text-primary-800 mb-4">1. Acceptance of Terms</h2>
              <p>
                Welcome to MedGuidesChina ("we," "our," or "us"). By accessing or using 
                our website (medguideschina.com) or any content, information, or services 
                provided through our website, you agree to be bound by these terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary-800 mb-4">2. Description of Service</h2>
              <p>
                MedGuidesChina is an informational website that provides guidance and 
                information about medical care and healthcare services in China.
                Our website is designed for informational purposes only. We aim to help 
                international patients understand and navigate the Chinese healthcare system.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary-800 mb-4">3. Medical Disclaimer</h2>
              <p className="mt-4">
                <strong className="text-primary-800">The content on this website is for general 
                informational purposes only and does not constitute medical advice, diagnosis, 
                or treatment.</strong>
              </p>
              <p className="mt-4">
                All information on our website is provided in good faith for general 
                informational purposes only. We make no representation or warranty of any kind, 
                express or implied, regarding the accuracy, adequacy, validity, reliability, 
                availability, or completeness of any information on our website.
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>The content is not a substitute for professional medical advice, diagnosis, or treatment</li>
                <li>Always seek the advice of your physician or other qualified health providers with any questions you may have regarding a medical condition</li>
                <li>Never disregard professional medical advice or delay in seeking it because of something you have read on this website</li>
                <li>The inclusion of hospital information does not constitute an endorsement or recommendation</li>
              </ul>
              <p className="mt-4">
                Reliance on any information provided by this website is solely at your own risk.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary-800 mb-4">4. User Responsibilities</h2>
              <p>
                By using our website, you agree to:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Use the website only for lawful purposes and in accordance with these terms</li>
                <li>Not use the website in any way that violates any applicable laws or regulations</li>
                <li>Not attempt to gain unauthorized access to any part of the website, other accounts, or computer systems</li>
                <li>Not interfere with or disrupt the operation of the website or its related infrastructure</li>
                <li>Not use the website to transmit or distribute any viruses, malware, or harmful code</li>
                <li>Not scrape, crawl, or systematically extract content from our website without our prior written consent</li>
                <li>Not reproduce, distribute, modify, or create derivative works based on our content without proper attribution and permission</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary-800 mb-4">5. Intellectual Property Rights</h2>
              <p>
                The content, features, and functionality of our website — including but not 
                limited to text, graphics, logos, images, article content, hospital profiles, 
                and the overall design and selection of content — are owned by MedGuidesChina 
                and are protected by copyright, trademark, and other intellectual property laws.
                You may access and use the content on our website for your personal, non-commercial use only. 
                You may not:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Copy, reproduce, or republish content from our website for commercial purposes</li>
                <li>Modify or create derivative works based on our content</li>
                <li>Distribute, publicly display, or publicly perform any of our content</li>
                <li>Remove or alter any copyright, trademark, or other proprietary notices</li>
                <li>Use our name, logo, or trademarks without our prior written consent</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary-800 mb-4">6. Third-Party Links and Content</h2>
              <p>
                Our website contains links to third-party websites and resources, including:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Hospital and medical institution websites</li>
                <li>Government health agencies and organizations</li>
                <li>References and source materials</li>
                <li>Other informational resources</li>
              </ul>
              <p className="mt-4">
                These links are provided for your convenience and informational purposes only. 
                We have no control over the content, accuracy, privacy policies, or practices 
                of third-party websites. We do not endorse, warrant, or make any representations 
                regarding the quality, accuracy, or reliability of any third-party content.
                You acknowledge and agree that we shall not be responsible or liable, directly 
                or indirectly, for any damage or loss caused or alleged to be caused by or in 
                connection with use of or reliance on any such content available on or through 
                any such website or resource.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary-800 mb-4">7. Accuracy of Information</h2>
              <p>
                While we make reasonable efforts to ensure the accuracy and timeliness of the 
                information on our website, healthcare information and hospital details can 
                change rapidly. We cannot guarantee that all information is completely current or error-free.
                Hospital information — including but not limited to contact details, services 
                offered, pricing, insurance acceptance, and staff availability — is subject 
                to change without notice. We recommend that you:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Verify critical information directly with the hospital before making any decisions</li>
                <li>Contact hospital international departments for the most up-to-date information</li>
                <li>Consult with qualified medical professionals for medical advice</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary-800 mb-4">8. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by applicable law, MedGuidesChina and its 
                owners, operators, employees, partners, and affiliates shall not be liable 
                for any direct, indirect, incidental, special, consequential, or punitive 
                damages arising from or related to your use of, or inability to use, our 
                website or any content therein. This includes, but is not limited to, damages for:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Errors, mistakes, or inaccuracies in content</li>
                <li>Personal injury or property damage resulting from your use of the website</li>
                <li>Unauthorized access to or use of our secure servers</li>
                <li>Interruptions or cessation of transmission to or from the website</li>
                <li>Bugs, viruses, or other harmful code transmitted through the website</li>
                <li>Errors or omissions in any content</li>
                <li>Medical decisions made based on information from the website</li>
              </ul>
              <p className="mt-4">
                In jurisdictions that do not allow the exclusion of certain warranties or 
                the limitation of liability, our liability shall be limited to the greatest 
                extent permitted by law.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary-800 mb-4">9. Indemnification</h2>
              <p>
                You agree to indemnify, defend, and hold harmless MedGuidesChina and its 
                owners, operators, employees, partners, and affiliates from and against any 
                claims, damages, obligations, losses, liabilities, costs or debt, and expenses 
                (including but not limited to attorney's fees) arising from:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Your use of and access to our website</li>
                <li>Your violation of any provision of these terms</li>
                <li>Your violation of any third-party right, including without limitation any copyright, property, or privacy right</li>
                <li>Any claim that your actions caused damage to a third party</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary-800 mb-4">10. Governing Law and Jurisdiction</h2>
              <p>
                These terms and any disputes arising out of or relating to them 
                or our website shall be governed by and construed in accordance with the laws 
                of the People's Republic of China, without regard to its conflict of law provisions.
                Any legal action or proceeding relating to your access to or use of our website 
                shall be instituted in courts located in Beijing, China, and you consent to 
                the personal jurisdiction of such courts.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary-800 mb-4">11. Modifications</h2>
              <p>
                We reserve the right, at our sole discretion, to modify or replace these terms at any time. 
                What constitutes a material change will be determined at our sole discretion.
                By continuing to access or use our website after those revisions become 
                effective, you agree to be bound by the revised terms. If you do not agree 
                to the new terms, please stop using the website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary-800 mb-4">12. Severability</h2>
              <p>
                If any provision of these terms is held to be invalid or unenforceable by 
                a court of competent jurisdiction, the remaining provisions shall remain in 
                full force and effect, and the invalid or unenforceable provision shall be 
                deemed replaced by a valid, enforceable provision that most closely matches 
                the intent of the original provision.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary-800 mb-4">13. Waiver</h2>
              <p>
                No waiver of any term of these terms shall be deemed a further or continuing 
                waiver of such term or any other term, and our failure to assert any right 
                or provision under these terms shall not constitute a waiver of such right 
                or provision.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary-800 mb-4">14. Contact Us</h2>
              <p>
                If you have any questions about these terms, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-primary-50 rounded-lg">
                <p>Email: <a href="mailto:info@medguideschina.com" className="text-primary-600 hover:text-primary-800 underline">info@medguideschina.com</a></p>
                <p>Location: Beijing, China</p>
              </div>
            </div>

            <div className="pt-6 border-t border-neutral-200">
              <p className="text-sm text-neutral-500">
                Thank you for taking the time to review our terms. We appreciate 
                your trust and are committed to providing reliable, helpful information 
                about healthcare in China. Please use our website responsibly and always 
                consult with qualified medical professionals for medical advice.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
