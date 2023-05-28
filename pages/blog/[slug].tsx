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
}

interface BlogProps {
  title: string;
  publish: string;
  content: string;
  eyecatch: Eyecatch;
  prevPost: { title: string; slug: string };
  nextPost: { title: string; slug: string };
}

export default function Schedule({
  title,
  publish,
  content,
  eyecatch,
  prevPost,
  nextPost,
}: BlogProps) {
  return (
    <Container>
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
        <Pagination
          prevText={prevPost.title}
          prevUrl={`/blog/${prevPost.slug}`}
          nextText={nextPost.title}
          nextUrl={`/blog/${nextPost.slug}`}
        />
      </article>
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

export const getStaticProps: GetStaticProps<BlogProps> = async ({ params }) => {
  const slug = params?.slug;

  if (!slug) {
    return {
      notFound: true,
    };
  }

  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      notFound: true,
    };
  }
  const allSlugs = await getAllSlugs();
  const [prevPost, nextPost] = prevNextPost({
    allSlugs: allSlugs,
    currentSlug: slug as string,
  });

  return {
    props: {
      title: post.title,
      publish: post.publishDate,
      content: post.content,
      eyecatch: post.eyecatch,
      categories: post.categories,
      prevPost: prevPost || { title: "", slug: "" },
      nextPost: nextPost || { title: "", slug: "" },
    },
  };
};
