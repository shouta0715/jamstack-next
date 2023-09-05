import Image from "next/image";
import Link from "next/link";
import { type FC } from "react";
import type { Blog as TBlog } from "@/libs/cms";

type Props = {
  blog: TBlog;
};

export const Blog: FC<Props> = ({ blog }) => {
  return (
    <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
      <Image
        alt={blog.eyecatch.url}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        fill
        src={blog.eyecatch.url}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
      <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

      <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
        <time className="mr-8" dateTime={blog.publishedAt}>
          {new Date(blog.publishedAt).toLocaleDateString()}
        </time>
      </div>
      <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
        <Link href={`/blogs/${blog.id}`}>
          <span className="absolute inset-0" />
          {blog.title}
        </Link>
      </h3>
    </article>
  );
};
