import parse from "html-react-parser";
import Image from "next/image";
import React, { FC } from "react";
import { Blog } from "@/libs/cms";

type Props = { blog: Blog };

export const BlogDetail: FC<Props> = ({ blog }) => {
  return (
    <div className="bg-white px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <p className="text-base font-semibold leading-7 text-indigo-600">
          {new Date(blog.publishedAt).toLocaleString("ja-JP", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {blog.title}
        </h1>
        <p className="mt-6 text-xl leading-8">
          <Image
            alt={blog.eyecatch.url}
            className="mx-auto rounded-xl"
            height={blog.eyecatch.height}
            src={blog.eyecatch.url}
            width={blog.eyecatch.width}
          />
        </p>
        <div className="mt-10 max-w-2xl">
          <div className="prose text-gray-500">{parse(blog.content)}</div>
        </div>
      </div>
    </div>
  );
};
