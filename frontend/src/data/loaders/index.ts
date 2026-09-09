import {
  hardcodedGlobalData,
  hardcodedGlobalDataAr,
  hardcodedLandingPage,
  hardcodedLandingPageAr,
  hardcodedBlogPosts,
  hardcodedBlogPostsAr,
  hardcodedCategories,
  hardcodedCategoriesAr,
  hardcodedServicePages,
  hardcodedServicePagesAr,
} from "@/data/hardcoded";

const PAGE_SIZE = 4;

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function isAr(locale: string) {
  return locale === "ar";
}

// ---------------------------------------------------------------------------
// Loaders
// ---------------------------------------------------------------------------

export async function getGlobalPageData(locale: string) {
  return isAr(locale) ? hardcodedGlobalDataAr : hardcodedGlobalData;
}

export async function getLandingPage(locale: string) {
  return isAr(locale) ? hardcodedLandingPageAr : hardcodedLandingPage;
}

export async function getAllPagesSlugs() {
  const slugs = Object.keys(hardcodedServicePages).map((slug) => ({ slug }));
  return { data: slugs };
}

export async function getPageBySlug(
  slug: string,
  _status: string,
  locale: string,
) {
  const pages = isAr(locale) ? hardcodedServicePagesAr : hardcodedServicePages;
  const page = pages[slug] ?? null;
  if (!page) return { data: [] };
  // Return seo at top level alongside blocks so generateMetadata can access it
  return { data: [{ seo: page.seo ?? null, blocks: page.blocks }] };
}

export async function getCategories(locale: string) {
  return isAr(locale) ? hardcodedCategoriesAr : hardcodedCategories;
}

export async function getBlogPostBySlug(
  slug: string,
  _status: string,
  locale: string,
) {
  const posts = isAr(locale) ? hardcodedBlogPostsAr : hardcodedBlogPosts;
  const post = posts.find((p) => p.slug === slug) ?? null;
  return { data: post ? [post] : [] };
}

type BlogParams = {
  page?: number;
  queryString?: string;
  category?: string;
  slug?: string;
  locale: string;
};

export async function getBlogPosts({
  page = 1,
  queryString,
  category,
  slug,
  locale,
}: BlogParams) {
  const source = isAr(locale) ? hardcodedBlogPostsAr : hardcodedBlogPosts;
  let posts = [...source];

  if (queryString) {
    const q = queryString.toLowerCase();
    posts = posts.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category?.text?.toLowerCase().includes(q),
    );
  }

  if (category) {
    posts = posts.filter(
      (p) => p.category?.text?.toLowerCase() === category.toLowerCase(),
    );
  }

  // Related posts mode: exclude current slug, return up to 2
  if (slug) {
    return posts.filter((p) => p.slug !== slug).slice(0, 2);
  }

  const total = posts.length;
  const pageCount = Math.ceil(total / PAGE_SIZE);
  const start = (page - 1) * PAGE_SIZE;

  return {
    data: posts.slice(start, start + PAGE_SIZE),
    meta: {
      pagination: { page, pageSize: PAGE_SIZE, pageCount, total },
    },
  };
}
