import { Blog } from "@/components/Blog";
import { getBlogs } from "@/libs/cms";

const Home = async () => {
  const data = await getBlogs();

  return (
    <>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Blogページ
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          ここはBlogページです。
        </p>
      </div>
      <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {data.contents.map((blog) => {
          return <Blog key={blog.id} blog={blog} />;
        })}
      </div>
    </>
  );
};

export default Home;
