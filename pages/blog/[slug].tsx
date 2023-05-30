import Meta from "../../components/meta";
import { extractText } from "../../lib/extra-text";
import { getPostBySlug, getAllSlugs } from "../../lib/api";
import Container from "../../components/container";
import PostHeader from "../../components/post-header";
import Image from "next/image";
import PostBody from "../../components/post-body";
import {
  TwoColumn,
  TwoColumnMain,
  TwoColumnSidebar,
} from "../../components/two-column";
import ConvertBody from "../../components/convert-body";
import Contact from "../../components/contact";
import { GetStaticProps } from "next";
import { prevNextPost } from "../../lib/prev-next-post";
import Pagination from "../../components/pagination";

interface Eyecatch {
  url: string;
  width: number;
  height: number;
  blurDataURL: string;
}

interface BlogProps {
  title: string;
  publish: string;
  content: string;
  eyecatch: Eyecatch;
  description: string;
  prevPost: { title: string; slug: string };
  nextPost: { title: string; slug: string };
}

export default function Post({
  title,
  publish,
  content,
  eyecatch,
  description,
  prevPost,
  nextPost,
}: BlogProps) {
  return (
    <Container>
      <Meta pageTitle={title} pageDesc={description} />
      <article>
        <PostHeader title={title} publish={publish} />
        <figure>
          <Image
            src={eyecatch.url}
            alt=""
            layout="responsive"
            width={eyecatch.width}
            height={eyecatch.height}
            quality={90}
          />
        </figure>
        <TwoColumn>
          <TwoColumnMain>
            <PostBody>
              <ConvertBody contentHTML={content} />
            </PostBody>
          </TwoColumnMain>
          <TwoColumnSidebar>
            <Contact />
          </TwoColumnSidebar>
        </TwoColumn>
      </article>
      <Pagination
        prevText={nextPost.title}
        prevUrl={`/blog/${nextPost.slug}`}
        nextText={prevPost.title}
        nextUrl={`/blog/${prevPost.slug}`}
      />
    </Container>
  );
}

interface PageProps {
  slug: string;
}

export const getStaticPaths = async () => {
  const allSlugs = await getAllSlugs();

  return {
    paths: allSlugs.map(({ slug }: PageProps) => `/blog/${slug}`),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug;

  if (!slug) {
    return {
      notFound: true,
    };
  }

  const post = await getPostBySlug(slug);
  console.log(post);

  if (!post) {
    return {
      notFound: true,
    };
  }
  const allSlugs = await getAllSlugs();
  const [prevPost, nextPost] = prevNextPost(allSlugs, slug as string);

  const description = extractText(post.content);

  return {
    props: {
      title: post.title,
      publish: post.publishDate,
      content: post.content,
      eyecatch: post.eyecatch,
      categories: post.categories,
      prevPost: prevPost || { title: "", slug: "" },
      nextPost: nextPost || { title: "", slug: "" },
      description: description,
    },
  };
};
