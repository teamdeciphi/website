import { Metadata } from "next";
import { draftMode } from "next/headers";
import { getPageBySlug } from "@/data/loaders";
import { BlockRenderer } from "@/components/block-renderer";
import NotFoundPage from "@/app/[locale]/not-found";
import type { Block } from "@/types";

const BASE_URL = "https://deciphi.com";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const { isEnabled } = await draftMode();
  const status = isEnabled ? "draft" : "published";
  const page = await getPageBySlug("cloud-security", status, locale);
  const data = page?.data?.[0];

  const title =
    data?.seo?.metaTitle ??
    (locale === "ar"
      ? "أمن السحابة — Deciphi قطر"
      : "Cloud Security Services in Qatar — Deciphi");
  const description =
    data?.seo?.metaDescription ??
    (locale === "ar"
      ? "مراجعة أمن البيئات السحابية AWS وAzure وGCP. تحديد الإعدادات الخاطئة ومخاطر IAM والموارد المكشوفة."
      : "Cloud security configuration reviews for AWS, Azure, and GCP environments. Identify misconfigurations, IAM risks, and exposed resources. Fixed scope.");

  return {
    title,
    description,
    alternates: { canonical: `${BASE_URL}/${locale}/cloud-security` },
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/${locale}/cloud-security`,
      type: "website",
    },
  };
}

export default async function CloudSecurityPage({ params }: PageProps) {
  const { locale } = await params;
  const { isEnabled } = await draftMode();
  const status = isEnabled ? "draft" : "published";

  const page = await getPageBySlug("cloud-security", status, locale);
  const blocks = page?.data?.[0]?.blocks;

  if (!blocks) return <NotFoundPage />;

  return <BlockRenderer locale={locale} blocks={blocks as Block[]} />;
}
