import ContactSection from "@/components/block-renderer/blocks/contact";
import { Metadata } from "next";

const BASE_URL = "https://deciphi.com";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === "ar";

  const title = isAr
    ? "اتصل بنا — Deciphi"
    : "Contact Deciphi — Cybersecurity Consultancy in Doha, Qatar";
  const description = isAr
    ? "تواصل مع فريق Deciphi في الدوحة، قطر للحصول على استشارة أمن سيبراني."
    : "Get in touch with Deciphi's team in Doha, Qatar for cybersecurity consulting, VAPT, and security integration.";

  return {
    title,
    description,
    alternates: { canonical: `${BASE_URL}/${locale}/contact` },
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/${locale}/contact`,
      type: "website",
    },
  };
}

export default async function ContactPage({ params }: PageProps) {
  const { locale } = await params;
  return (
    <main>
      <ContactSection locale={locale} />
    </main>
  );
}
