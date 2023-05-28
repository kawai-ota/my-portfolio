import Hero from "../../components/hero";
import Container from "../../components/container";
import { getAllPosts } from "../../lib/api";
import Posts from "../../components/posts";

export default function Blog({ posts }: any) {
  return (
    <Container>
      <Hero title="Ota's Blog" subtitle="Ota's life" />
      <Posts posts={posts} />
    </Container>
  );
}
export async function getStaticProps() {
  const posts = await getAllPosts();
  return {
    props: {
      posts: posts,
    },
  };
}
