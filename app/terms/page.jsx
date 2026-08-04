import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions governing the use of the Frontier One Technology website and services.",
  alternates: { canonical: "/terms/" },
};

const SECTIONS = [
  { title: "Acceptance of Terms", body: ["By accessing or using the Frontier One Technology website (the “Site”), you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, please do not use the Site."] },
  { title: "Use of the Website", body: ["The Site and its content are provided for general informational purposes about Frontier One Technology's services, industries served, and career opportunities. You agree to use the Site only for lawful purposes and not to interfere with its security, availability, or normal operation."] },
  { title: "Intellectual Property", body: ["All content on this Site — including text, graphics, logos, and the Frontier One Technology brand identity — is the property of Frontier One Technology or its licensors and is protected by applicable intellectual property laws. No content may be reproduced, distributed, or used without prior written permission."] },
  { title: "No Professional Advice", body: ["Information on this Site is provided for general reference and does not constitute professional, technical, legal, or financial advice. Any engagement for services is governed by a separate, signed agreement between Frontier One Technology and the client."] },
  { title: "Third-Party Links & Services", body: ["The Site may reference or link to third-party platforms (e.g., technology partners, social media, or form-processing providers). Frontier One Technology is not responsible for the content, availability, or practices of third-party sites."] },
  { title: "Careers & Applications", body: ["Submitting an application, résumé, or talent-network signup through this Site does not guarantee an interview, offer, or employment. Application data is handled in accordance with our Privacy Policy."] },
  { title: "Limitation of Liability", body: ["To the fullest extent permitted by law, Frontier One Technology shall not be liable for any indirect, incidental, or consequential damages arising from use of, or inability to use, this Site."] },
  { title: "Indemnification", body: ["You agree to indemnify and hold harmless Frontier One Technology, its employees, and affiliates from any claims arising from your misuse of the Site or violation of these Terms."] },
  { title: "Governing Law", body: ["These Terms are governed by the laws of [State/Jurisdiction to be confirmed by client], without regard to conflict-of-law principles."] },
  { title: "Changes to These Terms", body: ["Frontier One Technology may update these Terms at any time. Continued use of the Site after changes are posted constitutes acceptance of the revised Terms."] },
  { title: "Contact", body: ["Questions about these Terms may be directed to [company email to be confirmed]."] },
];

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      image="legal/terms-hero.webp"
      title={[{ text: "Terms & " }, { text: "Conditions", serif: true }]}
      note="The terms governing use of the Frontier One Technology website and services."
      sections={SECTIONS}
    />
  );
}
