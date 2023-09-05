import { createClient, type MicroCMSQueries } from "microcms-js-sdk";

const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN as string,
  apiKey: process.env.MICROCMS_API_KEY as string,
});

export type Blog = {
  id: string;
  title: string;
  content: string;
  publishedAt: string;
  updatedAt: string;
  createdAt: string;
  eyecatch: {
    url: string;
    height: number;
    width: number;
  };
  category: {
    id: string;
    name: string;
  } | null;
};

export type BlogResponse = {
  totalCount: number;
  offset: number;
  limit: number;
  contents: Blog[];
};

export const getBlogs = async (
  queries?: MicroCMSQueries
): Promise<BlogResponse> => {
  return client.get<BlogResponse>({
    endpoint: "blogs",
    queries,
  });
};

export const getBlogDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  console.log("fetching blog detail");

  return client.getListDetail<Blog>({
    endpoint: "blogs",
    contentId,
    queries,
  });
};
