interface PageProps {
  allSlugs: string[];
  currentSlug: string;
}

export function prevNextPost({ allSlugs, currentSlug }: PageProps) {
  const numberOfPosts = allSlugs.length;

  const index = allSlugs.findIndex((slug) => slug === currentSlug);

  const prevPost = index === 0 ? null : { title: "", slug: "" };
  const nextPost = index === numberOfPosts - 1 ? null : { title: "", slug: "" };

  return [prevPost, nextPost];
}
