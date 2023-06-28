import { getSortedPostsData } from "../lib/posts";
import ListItem from "./ListItem";

export default function Posts() {
  const posts = getSortedPostsData();
  return (
    <section className="max-w-2xl mx-auto mt-6">
      <h2 className="text-4xl font-bold dark:text-white/90">Blog</h2> <br />
      <ul className="w-full">
        {posts.map((post) => (
          <ListItem key={post.id} post={post} />
        ))}
      </ul>
    </section>
  );
}
