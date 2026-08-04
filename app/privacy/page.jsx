import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Privacy Policy",
  description: "How Frontier One Technology collects, uses, protects, and manages visitor data.",
  alternates: { canonical: "/privacy/" },
};

const SECTIONS = [
  { title: "Introduction", body: ["This Privacy Policy explains how Frontier One Technology (“we,” “us,” “our”) collects, uses, and protects personal information submitted through this website."] },
  {
    title: "Information We Collect",
    body: [],
    list: [
      "Contact form: company name, email address, phone number, and project details you provide",
      "Careers application: name, phone number, email address, cover note/description, and uploaded résumé",
      "Talent network signup: name and email address",
      "Automatically collected data: basic usage and analytics data (e.g., pages visited, browser type) via our analytics provider",
    ],
  },
  {
    title: "How We Use Your Information",
    body: [],
    list: [
      "To respond to consultation requests and general inquiries",
      "To review and process job applications",
      "To improve the performance, security, and usability of the Site",
      "To notify talent-network subscribers of relevant future openings",
    ],
  },
  { title: "How We Share Information", body: ["We do not sell personal information. We may share information with trusted third-party service providers strictly to operate the Site — for example, a form-handling/mail-relay provider, résumé storage provider, hosting provider, analytics provider, and chatbot provider — each bound to protect your data appropriately. Providers will be named here once finalized."] },
  { title: "Data Retention", body: ["Contact and application data is retained only as long as necessary to fulfil the purpose it was collected for (e.g., evaluating a job application) or as required by law, after which it is securely deleted."] },
  { title: "Cookies & Tracking Technologies", body: ["The Site may use cookies or similar technologies for analytics purposes. You can control cookie preferences through your browser settings. [Cookie banner/consent mechanism to be finalized based on the analytics tools selected.]"] },
  { title: "Your Rights & Choices", body: ["Depending on your location, you may have the right to access, correct, or request deletion of your personal information. To exercise these rights, contact us at [company email to be confirmed]."] },
  { title: "Data Security", body: ["We use reasonable administrative, technical, and physical safeguards to protect personal information submitted through the Site, including secure (HTTPS) data transmission."] },
  { title: "Children's Privacy", body: ["This Site is intended for business and professional audiences and is not directed at individuals under the age of 16. We do not knowingly collect personal information from children."] },
  { title: "Changes to This Policy", body: ["We may update this Privacy Policy from time to time. The “last updated” date at the top of this page will reflect the most recent revision."] },
  { title: "Contact Us", body: ["For privacy-related questions, contact [company email to be confirmed]."] },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      image="legal/privacy-hero.webp"
      title={[{ text: "Privacy " }, { text: "Policy", serif: true }]}
      note="How Frontier One Technology collects, uses, protects, and manages visitor data."
      sections={SECTIONS}
    />
  );
}
