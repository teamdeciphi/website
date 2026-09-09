import { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRight,
  Check,
  Cloud,
  Lock,
  XCircle,
  Radio,
  Users,
  Briefcase,
  Shield,
} from "lucide-react";
import AboutSection from "@/components/block-renderer/layout/AboutUs";
import WhyChooseUsSection from "@/components/block-renderer/layout/why-choose-us";
import HighlightHeading from "@/components/block-renderer/layout/section-heading";
import OverLine from "@/components/custom/OverLine";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";

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
    ? "من نحن — Deciphi"
    : "About Deciphi — Cybersecurity Consultancy in Doha, Qatar";
  const description = isAr
    ? "Deciphi شركة استشارات أمن سيبراني مقرها الدوحة، قطر."
    : "Deciphi is a cybersecurity and IT consulting company based in Doha, Qatar. Small team, senior experts, fixed scope engagements.";

  return {
    title,
    description,
    alternates: { canonical: `${BASE_URL}/${locale}/about` },
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/${locale}/about`,
      type: "website",
    },
  };
}

export default async function AboutPage({ params }: PageProps) {
  const { locale } = await params;
  const isAr = locale === "ar";

  if (isAr) {
    return (
      <main className="bg-[#F7F6F2] min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            من نحن
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Deciphi شركة استشارات أمن سيبراني وتكنولوجيا معلومات مقرها الدوحة،
            قطر.
          </p>
        </div>
      </main>
    );
  }

  // ── data shaped to match component props ──────────────────────────────────

  const aboutSectionData = {
    __component: "layout.content-with-image" as const,
    id: "about-page-intro",
    createdAt: "",
    updatedAt: "",
    data: {},
    label: "About Deciphi",
    heading: [
      { id: 1, text: "Cybersecurity done ", highlight: false },
      { id: 2, text: "straight.", highlight: true },
    ],
    description:
      "Deciphi is a cybersecurity and IT consulting company based in Doha, Qatar. We are small — a senior core team, with specialist engineers brought in for the work each project actually needs. The person who scopes your engagement is the person who does it.",
    indicatorlabel: "Doha-Based Team",
    cta: {
      text: "Get in touch",
      href: `/${locale}/contact`,
      isExternal: false,
    },
    text: "",
    cardtext: [
      {
        id: 1,
        value: "DOHA-BASED",
        label: "Local team, on site when it matters.",
      },
      {
        id: 2,
        value: "VAPT DELIVERED",
        label: "Multiple penetration testing engagements completed.",
      },
      // { id: 3, value: "FIXED SCOPE", label: "Fixed price. You know the cost before we start." },
    ],
    feature: [
      { id: "f1", text: "Penetration Testing & VAPT", icon: "Shield" },
      { id: "f2", text: "SIEM & Security Integration", icon: "Monitor" },
      { id: "f3", text: "Cybersecurity Consulting", icon: "FileText" },
      { id: "f4", text: "Fixed Scope, Fixed Price", icon: "Lock" },
    ],
    cardImage: {
      id: "about-img",
      documentId: "about-img",
      url: "https://images.unsplash.com/photo-1560264418-c4445382edbc?q=80&w=2940&auto=format&fit=crop",
      alternativeText: "Deciphi cybersecurity team at work",
      name: "about-image",
    },
  };

  const whyData = {
    __component: "layout.choose-us-section" as const,
    id: "about-page-why",
    createdAt: "",
    updatedAt: "",
    data: {},
    indicatorlabel: "",
    label: "How we work",
    heading: [
      { id: 1, text: "Built for ", highlight: false },
      { id: 2, text: "smaller.", highlight: true },
      { id: 2, text: " businesses.", highlight: false },
    ],
    description:
      "Most of the organisations we work with in Qatar do not have anyone whose job is security. They have someone responsible for IT, a set of systems the business genuinely depends on, and no clear picture of where the risk sits. For them we keep it simple.",
    cta: { text: "Talk to us", href: `/${locale}/contact`, isExternal: false },
    image: {
      id: "why-img",
      documentId: "why-img",
      url: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&q=80",
      alternativeText: "Security experts collaborating",
      name: "why-img",
    },
    points: [
      {
        id: "wp1",
        point: "Fixed scope agreed in writing before anything starts",
      },
      { id: "wp2", point: "Fixed price — no open-ended day rate" },
      {
        id: "wp3",
        point: "A report with a first page any non-technical owner can act on",
      },
    ],
  };

  const whatWeDoItems = [
    {
      icon: <Briefcase className="w-8 h-8 text-[#C0392B]" />,
      title: "What we do",
      body: "Our main work is vulnerability assessment and penetration testing. We have delivered multiple VAPT engagements for organisations here — finding what is reachable, what is exploitable, and what to fix first, then writing it up so that both your IT team and your management can act on it.",
    },
    {
      icon: <Shield className="w-8 h-8 text-[#C0392B]" />,
      title: "Security integration",
      body: "Alongside VAPT we implement and integrate security technology: SIEM and monitoring platforms, security products, and the system integration work that makes them function as one environment rather than six tools that do not talk to each other.",
    },
  ];

  const notItems = [
    {
      icon: <XCircle className="w-5 h-5 text-[#C0392B] shrink-0 mt-0.5" />,
      title: "We are not NCSA-accredited.",
      body: "Accreditation exists in Qatar for penetration testing and a small number of firms hold it. If your requirement specifically calls for an accredited provider, we will tell you that in the first conversation rather than the fifth.",
    },
    {
      icon: <Radio className="w-5 h-5 text-[#C0392B] shrink-0 mt-0.5" />,
      title: "We do not operate a 24/7 security operations centre.",
      body: "We build them, integrate them, and hand them over working — but we are not watching your network overnight, and any small company that tells you otherwise is not being straight with you.",
    },
    {
      icon: <Users className="w-5 h-5 text-[#C0392B] shrink-0 mt-0.5" />,
      title: "We do not have a sales team.",
      body: "You will be talking to the people who do the work.",
    },
  ];

  return (
    <main className="bg-[#FAFAFA]">
      {/* ── Hero spacer ── */}
      <div className="pt-24 bg-[#F7F6F2]" />

      {/* ── Intro: reuse AboutSection component ── */}
      <AboutSection {...aboutSectionData} />

      {/* ── What we do ── */}
      <section
        aria-labelledby="what-we-do-heading"
        className="py-20 lg:py-28 px-5 md:px-8 lg:px-12 bg-[#F7F6F2]"
      >
        <div className="max-w-7xl mx-auto">
          <OverLine label="Our Work" className="mb-8" />
          <HighlightHeading
            id="what-we-do-heading"
            segments={[
              { text: "What we ", highlight: false },
              { text: "deliver", highlight: true },
            ]}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whatWeDoItems.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-[#C0392B]/10 flex items-center justify-center mb-5">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <Typography
                  variant="body-lg"
                  className="text-gray-600 leading-relaxed"
                >
                  {item.body}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What we are not ── */}
      <section
        aria-labelledby="not-heading"
        className="py-20 lg:py-28 px-5 md:px-8 lg:px-12 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <OverLine label="Transparency" className="mb-8" />
          <HighlightHeading
            id="not-heading"
            segments={[
              { text: "What we ", highlight: false },
              { text: "are not", highlight: true },
            ]}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          />
          <Typography
            variant="body-lg"
            className="text-gray-600 mb-12 max-w-2xl"
          >
            We would rather you heard this from us than discovered it later.
          </Typography>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {notItems.map((item) => (
              <div
                key={item.title}
                className="bg-[#F7F6F2] rounded-2xl p-7 border border-gray-100"
              >
                <div className="flex items-start gap-3 mb-4">
                  <span className="mt-1 w-5 h-5 rounded-full bg-[#C0392B]/10 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-[#C0392B]" />
                  </span>
                  <h3 className="text-base font-bold text-gray-900 leading-snug">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed pl-8">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How we work with smaller businesses: reuse WhyChooseUsSection ── */}
      <WhyChooseUsSection {...whyData} />

      {/* ── Talk to us CTA (mirrors footer CTA style) ── */}
      <section
        aria-labelledby="cta-about-heading"
        className="py-20 lg:py-28 px-5 md:px-8 lg:px-12 bg-[#F7F6F2]"
      >
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
          <OverLine label="Get in touch" />
          <HighlightHeading
            id="cta-about-heading"
            segments={[
              { text: "Talk to ", highlight: false },
              { text: "us", highlight: true },
            ]}
            className="text-4xl md:text-5xl font-bold text-gray-900"
          />
          <Typography variant="body-lg" className="text-gray-600 max-w-xl">
            If you run a business in Qatar and nobody has looked at your
            security from the outside, that is a conversation worth having —
            with us or with anyone competent.
          </Typography>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
            <Button variant="cta" size="lg" asChild>
              <Link href={`/${locale}/contact`}>
                Get in touch
                <ChevronRight className="transition-transform" />
              </Link>
            </Button>
            {/* <address className="not-italic text-sm text-gray-500">
              <a
                href="mailto:contact@deciphi.com"
                className="hover:text-gray-800 transition-colors"
              >
                contact@deciphi.com
              </a>
              <span className="mx-2">·</span>
              Doha, Qatar
            </address> */}
          </div>
        </div>
      </section>
    </main>
  );
}
