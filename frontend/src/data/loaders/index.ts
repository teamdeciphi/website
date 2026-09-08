import {
  hardcodedGlobalData,
  hardcodedLandingPage,
  hardcodedBlogPosts,
  hardcodedCategories,
  hardcodedServicePages,
} from "@/data/hardcoded";

const PAGE_SIZE = 4;

export async function getGlobalPageData(_locale: string) {
  return hardcodedGlobalData;
}

export async function getLandingPage(_locale: string) {
  return hardcodedLandingPage;
}

export async function getAllPagesSlugs() {
  const slugs = Object.keys(hardcodedServicePages).map((slug) => ({ slug }));
  return { data: slugs };
}

export async function getPageBySlug(
  slug: string,
  _status: string,
  _locale: string,
) {
  const page = hardcodedServicePages[slug] ?? null;
  return { data: page ? [page] : [] };
}

export async function getCategories(_locale: string) {
  return hardcodedCategories;
}

export async function getBlogPostBySlug(
  slug: string,
  _status: string,
  _locale: string,
) {
  const post = hardcodedBlogPosts.find((p) => p.slug === slug) ?? null;
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
}: BlogParams) {
  let posts = [...hardcodedBlogPosts];

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
