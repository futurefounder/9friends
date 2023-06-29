import getFormattedDate from "../../lib/getFormattedDate";
import { getSortedPostsData, getPostData } from "../..//lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navigation from "../../components/Nav";
import Footer from "../../components/Footer";

export function generateStaticParams() {
  const posts = getSortedPostsData();

  return posts.map((post) => ({
    postId: post.id,
  }));
}

export function generateMetadata({ params }: { params: { postId: string } }) {
  const posts = getSortedPostsData();
  const { postId } = params;

  const post = posts.find((post) => post.id === postId);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
  };
}

export default async function Post({ params }: { params: { postId: string } }) {
  const posts = getSortedPostsData();
  const { postId } = params;

  if (!posts.find((post) => post.id === postId)) notFound();

  const { title, date, headerImage, altText, contentHtml } = await getPostData(
    postId
  );

  const pubDate = getFormattedDate(date);

  return (
    <div>
      <Navigation />
      <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 dark:bg-gray-900">
        <div className="flex justify-between max-w-screen-xl px-4 mx-auto ">
          <article className="w-full max-w-2xl mx-auto format format-sm sm:format-base lg:format-lg format-purple dark:format-invert">
            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
              {title}
            </h1>
            <p className="text-xs text-base font-light text-gray-500 dark:text-gray-400">
              {pubDate}
            </p>
            <img
              src={headerImage}
              alt={altText}
              className="mt-4 mb-4"
              width={300}
            />
            <article className="prose lg:prose-xl">
              <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
            </article>
            <Link href="/blog">Back to blog</Link>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}
