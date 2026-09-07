import { useEffect } from "react";

const BLOG_URL = "https://blog.works.xyz/";

const BlogRedirect = () => {
  useEffect(() => {
    window.location.replace(BLOG_URL);
  }, []);

  return (
    <section className="min-h-[70vh] flex items-center justify-center px-6 py-32">
      <div className="max-w-xl text-center">
        <h1 className="text-4xl font-headline mb-6">Works Blog</h1>
        <p className="text-lg text-gray-600 mb-8">Our articles now live on the Works Blog.</p>
        <a className="underline" href={BLOG_URL}>Continue to the Works Blog</a>
      </div>
    </section>
  );
};

export default BlogRedirect;
