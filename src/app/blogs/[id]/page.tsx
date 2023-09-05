import React from "react";
import { BlogDetail } from "@/components/Detail";
import { getBlogDetail, getBlogs } from "@/libs/cms";

export async function generateStaticParams() {
  const response = await getBlogs({ fields: ["id"] });

  return response.contents.map((content) => {
    return {
      id: content.id,
    };
  });
}

const Page = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const blog = await getBlogDetail(id as string);

  return <BlogDetail blog={blog} />;
};

export default Page;
