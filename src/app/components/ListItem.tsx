import Link from "next/link";
import getFormattedDate from "../lib/getFormattedDate";
import { getSortedPostsData } from "../lib/posts";

type Props = {
  post: BlogPost;
};

export default function ListItem({ post }: Props) {
  const { id, title, date, headerImage, altText } = post;
  const formattedDate = getFormattedDate(date);

  return (
    <div>
      <li className="mt-4 dark:text-white/90">
        <Link
          className="text-stone-950 hover:text-purple-700"
          href={`/posts/${id}`}
        >
          <div className="relative overflow-hidden bg-no-repeat bg-cover rounded-xl">
            {/* eslint-disable-next-line @next/next/no-img-element  */}
            <img
              alt={altText}
              src={headerImage}
              className="object-cover w-full h-56 rounded-xl hover:opacity-90 hover:scale-105 "
            />
          </div>
          <h3 className="mt-1 text-lg font-medium "> {title} </h3>
        </Link>
        <p className="mt-2 mb-4 text-xs">{formattedDate}</p>
      </li>
    </div>
  );
}
