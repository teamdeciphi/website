import { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRight,
  Shield,
  Users,
  AlertTriangle,
  List,
  FileText,
  CheckCircle,
} from "lucide-react";
import OverLine from "@/components/custom/OverLine";
import { Typography, typography } from "@/components/ui/typography";
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
    ? "أمن السحابة — Deciphi قطر"
    : "Cloud Security Assessment (AWS, Azure, GCP) — Deciphi Qatar";
  const description = isAr
    ? "مراجعة أمن البيئات السحابية AWS وAzure وGCP. تحديد الإعدادات الخاطئة ومخاطر IAM والموارد المكشوفة."
    : "Cloud security configuration reviews for AWS, Azure, and GCP environments. Identify misconfigurations, IAM risks, and exposed resources. Fixed scope.";

  return {
    title,
    description,
    alternates: { canonical: `${BASE_URL}/en/cloud-security` },
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/${locale}/cloud-security`,
      type: "website",
    },
  };
}

// ── Section data ─────────────────────────────────────────────────────────────

const whatIsIncluded = [
  // ⚠️ REVIEW: "where applicable to scope" hedge — confirm CIS Benchmark coverage before removing
  "Configuration review against the CIS Benchmarks for the relevant cloud provider (where applicable to scope)",
  "IAM and access control review: who has access to what, and whether it follows least-privilege principles",
  "Network configuration review: security groups, firewall rules, exposed services",
  "Storage and data exposure review: publicly accessible resources, encryption at rest and in transit",
  // ⚠️ REVIEW: "logging and monitoring posture" is advisory/review — not active monitoring
  "Logging and monitoring posture: what is being recorded and whether it is sufficient to detect an incident",
  "Findings documented with severity ratings and remediation steps",
];

const whoNeedsIt = [
  "Organisations that have migrated to AWS, Azure, or GCP and have not had an external security review of the environment",
  "Businesses where cloud infrastructure has grown quickly and configuration has not kept up with the pace of change",
  "Teams that have had a cloud-related incident (a storage bucket exposure, an over-privileged IAM role, an unexpected bill from resource abuse)",
  "Organisations required to demonstrate cloud security controls to clients, auditors, or regulators",
  "Development teams that have deployed workloads without a formal security review",
];

const processSteps = [
  {
    number: "01",
    title: "Scoping",
    body: "Agree which cloud accounts, regions, and services are in scope.",
  },
  {
    number: "02",
    title: "Read-only access provisioning",
    body: "We work from a read-only role. No changes are made to your environment.",
  },
  {
    number: "03",
    title: "Configuration review",
    // ⚠️ REVIEW: "automated and manual" — ensure this reflects actual tooling before publish
    body: "Automated and manual review against the agreed baseline.",
  },
  {
    number: "04",
    title: "Findings documentation",
    body: "Severity-rated findings with remediation steps specific to your environment.",
  },
  {
    number: "05",
    title: "Report and debrief",
    body: "We walk you through the findings and answer questions about remediation.",
  },
];

const whatYouReceive = [
  // ⚠️ REVIEW: deliverable list — confirm all items are in scope before each engagement
  "A findings report with severity ratings, affected resources, and specific remediation steps",
  "An executive summary covering overall cloud security posture and priority actions",
  "Remediation guidance your cloud or DevOps team can act on directly",
  "A debrief session to walk through findings",
];

const whatWeNeed = [
  "Read-only access to the cloud account(s) in scope — we will specify the minimum required permissions",
  "Clarity on which accounts, regions, and services are in scope",
  "A point of contact with knowledge of the cloud environment",
];

// ── Page component ────────────────────────────────────────────────────────────

export default async function CloudSecurityPage({ params }: PageProps) {
  const { locale } = await params;

  return (
    <main>
      {/* ────────────────────────────────────────────────────────────────────
          1. Hero — What it is
      ──────────────────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="hero-heading"
        className="bg-gray-950 pt-32 pb-20 lg:pb-28 px-5 md:px-8 lg:px-12"
      >
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <OverLine label="Cloud Security" className="mb-8 border-gray-700" />

            <h1
              id="hero-heading"
              className={`${typography.display} text-white mb-6`}
            >
              Cloud environments are not secure by default.
            </h1>

            <Typography variant="body-lg" className="text-gray-300 mb-6">
              Cloud security work covers the review, assessment, and hardening
              of your cloud infrastructure — typically AWS, Azure, or GCP
              environments. Most organisations migrate to the cloud and assume
              the provider&apos;s defaults are secure. They are not.
              Misconfiguration is the leading cause of cloud data exposure, and
              most of it is avoidable.
            </Typography>

            {/* ⚠️ REVIEW: "review and advise on" language — intentionally conservative;
                we do not manage cloud environments on a 24/7 or CSPM-as-a-service basis */}
            <Typography variant="body-lg" className="text-gray-300 mb-10">
              Our cloud security work focuses on identifying those
              misconfigurations, reviewing your access control model, and giving
              you a clear picture of what is exposed and how to close it.
            </Typography>

            <Button variant="cta" size="lg" asChild>
              <Link href={`/${locale}/contact`}>
                Talk to a Cybersecurity Engineer
                <ChevronRight className="transition-transform" />
              </Link>
            </Button>
          </div>

          {/* Cloud provider indicators */}
          <div className="mt-16 flex flex-wrap gap-3">
            {["AWS", "Azure", "GCP"].map((provider) => (
              <span
                key={provider}
                className="px-4 py-2 rounded-full border border-gray-700 text-gray-400 text-sm font-medium"
              >
                {provider}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────────────
          2. Who needs it
      ──────────────────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="who-heading"
        className="py-20 lg:py-28 px-5 md:px-8 lg:px-12 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <OverLine label="Who it is for" className="mb-8" />
              <h2
                id="who-heading"
                className={`${typography["heading-xl"]} text-gray-900 mb-4`}
              >
                Does this apply to your organisation?
              </h2>
              <Typography variant="body-lg" className="text-gray-500">
                Cloud security reviews are relevant to any organisation running
                workloads in a public cloud environment — not just enterprises.
              </Typography>
            </div>

            <ul className="space-y-4" role="list">
              {whoNeedsIt.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 bg-[#F7F6F2] rounded-xl p-5"
                >
                  <span
                    className="mt-0.5 w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0"
                    aria-hidden="true"
                  >
                    <Users className="w-3.5 h-3.5 text-emerald-600" />
                  </span>
                  <Typography variant="body" className="text-gray-700">
                    {item}
                  </Typography>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────────────
          3. Problem it solves
      ──────────────────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="problem-heading"
        className="py-20 lg:py-28 px-5 md:px-8 lg:px-12 bg-[#F7F6F2]"
      >
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <OverLine label="The problem" className="mb-8 mx-auto" />
            <h2
              id="problem-heading"
              className={`${typography["heading-xl"]} text-gray-900 mb-8`}
            >
              Misconfiguration is the real risk.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            {[
              {
                icon: <AlertTriangle className="w-5 h-5 text-amber-600" />,
                bg: "bg-amber-50",
                heading: "Humans configure it, humans make mistakes",
                body: "Default settings are often insecure. Resources accumulate access permissions over time. These are not edge cases — they are the baseline state of most cloud environments that have never been reviewed.",
              },
              {
                icon: <Shield className="w-5 h-5 text-red-600" />,
                bg: "bg-red-50",
                heading: "The specific failures that cause breaches",
                body: "Storage buckets accidentally made public. IAM roles that are over-provisioned. Logging that is not switched on. These are not theoretical risks — they are the actual cause of most cloud data exposure incidents.",
              },
              {
                icon: <CheckCircle className="w-5 h-5 text-emerald-600" />,
                bg: "bg-emerald-50",
                heading: "An external review finds the drift",
                body: "A configuration that was secure at deployment often drifts over time as infrastructure grows. An external review finds what has moved from a secure baseline before it is exploited.",
              },
            ].map((card) => (
              <div
                key={card.heading}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm"
              >
                <span
                  className={`inline-flex items-center justify-center w-10 h-10 rounded-xl ${card.bg} mb-5`}
                  aria-hidden="true"
                >
                  {card.icon}
                </span>
                <h3
                  className={`${typography["heading-sm"]} text-gray-900 mb-3`}
                >
                  {card.heading}
                </h3>
                <Typography variant="body" className="text-gray-600">
                  {card.body}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────────────
          4. What's included
      ──────────────────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="included-heading"
        className="py-20 lg:py-28 px-5 md:px-8 lg:px-12 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <OverLine label="Scope of work" className="mb-8" />
              <h2
                id="included-heading"
                className={`${typography["heading-xl"]} text-gray-900 mb-4`}
              >
                What the review covers.
              </h2>
              {/* ⚠️ REVIEW: "we review and advise on" — intentionally not "we manage";
                  keep this framing to avoid implying ongoing managed/CSPM service */}
              <Typography variant="body-lg" className="text-gray-500 mb-6">
                We review and advise on the configuration areas most likely to
                contain exploitable risk. The exact scope is agreed at the start
                of each engagement.
              </Typography>
            </div>

            <ul className="space-y-3" role="list">
              {whatIsIncluded.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 py-4 border-b border-gray-100 last:border-0"
                >
                  <span
                    className="mt-1 w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0"
                    aria-hidden="true"
                  >
                    <List className="w-3 h-3 text-emerald-600" />
                  </span>
                  <Typography variant="body" className="text-gray-700">
                    {item}
                  </Typography>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────────────
          5. Process
      ──────────────────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="process-heading"
        className="py-20 lg:py-28 px-5 md:px-8 lg:px-12 bg-[#F7F6F2]"
      >
        <div className="max-w-7xl mx-auto">
          <OverLine label="How it works" className="mb-8" />
          <h2
            id="process-heading"
            className={`${typography["heading-xl"]} text-gray-900 mb-4`}
          >
            A structured, non-disruptive process.
          </h2>
          <Typography
            variant="body-lg"
            className="text-gray-500 mb-14 max-w-2xl"
          >
            We do not need write access or the ability to make changes. The
            review is read-only throughout.
          </Typography>

          <ol
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            role="list"
          >
            {processSteps.map((step) => (
              <li
                key={step.number}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm flex flex-col gap-4"
              >
                <span
                  className="text-4xl font-bold text-gray-100 leading-none select-none"
                  aria-hidden="true"
                >
                  {step.number}
                </span>
                <h3 className={`${typography["heading-sm"]} text-gray-900`}>
                  {step.title}
                </h3>
                <Typography variant="body" className="text-gray-600">
                  {step.body}
                </Typography>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────────────
          6. What you receive
      ──────────────────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="deliverables-heading"
        className="py-20 lg:py-28 px-5 md:px-8 lg:px-12 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <OverLine label="Deliverables" className="mb-8" />
              <h2
                id="deliverables-heading"
                className={`${typography["heading-xl"]} text-gray-900 mb-4`}
              >
                What you receive at the end of the engagement.
              </h2>
              {/* ⚠️ REVIEW: "subject to scope" may be needed for specific items
                  if the engagement is a smaller/lighter variant */}
              <Typography variant="body-lg" className="text-gray-500">
                Everything is written to be actionable — not just a list of
                findings, but remediation steps your team can follow directly.
              </Typography>
            </div>

            <ul className="space-y-4" role="list">
              {whatYouReceive.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 bg-[#F7F6F2] rounded-xl p-5"
                >
                  <span
                    className="mt-0.5 w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0"
                    aria-hidden="true"
                  >
                    <FileText className="w-3.5 h-3.5 text-emerald-600" />
                  </span>
                  <Typography variant="body" className="text-gray-700">
                    {item}
                  </Typography>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────────────
          7. What we need from you
      ──────────────────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="requirements-heading"
        className="py-20 lg:py-28 px-5 md:px-8 lg:px-12 bg-[#F7F6F2]"
      >
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <OverLine label="What we need from you" className="mb-8" />
            <h2
              id="requirements-heading"
              className={`${typography["heading-xl"]} text-gray-900 mb-4`}
            >
              Minimal ask. We have done this before.
            </h2>
            <Typography variant="body-lg" className="text-gray-500 mb-10">
              We keep the access request to the minimum required for the review.
              We will specify exactly what permissions we need before
              provisioning starts.
            </Typography>

            <ul className="space-y-4" role="list">
              {whatWeNeed.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-100"
                >
                  <span
                    className="mt-0.5 w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center shrink-0 font-bold text-xs text-gray-500"
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                  <Typography variant="body" className="text-gray-700">
                    {item}
                  </Typography>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────────────
          8. CTA
      ──────────────────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="cta-heading"
        className="py-20 lg:py-28 px-5 md:px-8 lg:px-12 bg-gray-950"
      >
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
          <OverLine label="Get started" className="border-gray-700" />
          <h2
            id="cta-heading"
            className={`${typography["heading-xl"]} text-white`}
          >
            When did someone last look at your cloud configuration?
          </h2>
          {/* ⚠️ REVIEW: honest/informal CTA tone — intentional; confirm brand voice before publish */}
          <Typography variant="body-lg" className="text-gray-400 max-w-xl">
            If the honest answer is never, that is worth a conversation.
          </Typography>
          <div className="mt-2">
            <Button variant="cta" size="lg" asChild>
              <Link href={`/${locale}/contact`}>
                Talk to a Cybersecurity Engineer
                <ChevronRight className="transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
