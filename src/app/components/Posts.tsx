import { getSortedPostsData } from "../lib/posts";
import ListItem from "./ListItem";

export default function Posts() {
  const posts = getSortedPostsData();
  return (
    <section className="max-w-2xl mx-auto mt-6">
      <h2 className="ml-4 mr-4 text-4xl font-bold dark:text-white/90">
        Yogic Insights Blog
      </h2>{" "}
      <br />
      <ul className="ml-5 mr-5">
        {posts.map((post) => (
          <ListItem key={post.id} post={post} />
        ))}{" "}
      </ul>
    </section>
  );
}
