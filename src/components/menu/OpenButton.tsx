import type { MDXInstance } from "astro";
import { useState } from "react";
import "animate.css/animate.css";

export const OpenButton = ({
  posts,
  subPosts,
}: {
  posts: MDXInstance<Record<string, any>>[];
  subPosts: MDXInstance<Record<string, any>>[];
}) => {
  const [isOpenList, setIsOpenList] = useState(
    Array.from({ length: posts.length }, () => true)
  );

  return (
    <>
      {posts.map((post, index) => (
        <div key={post.url! + index}>
          <aside className="flex gap-2 items-center">
            <a href={post.url}>{post.frontmatter.title}</a>
            <button
              className="scale-75 hover:bg-zinc-200 px-2 py-1 rounded-xl"
              onClick={() => {
                console.log("click");
                let newList = [...isOpenList];
                newList[index] = !newList[index];

                setIsOpenList(newList);
                console.log(isOpenList);
              }}
            >
              <svg
                className={
                  isOpenList[index]
                    ? "rotate-180 animate__animated animate__fadeIn"
                    : "rotate-0"
                }
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.293 8.293a1 1 0 0 1 1.414 0L12 14.586l6.293-6.293a1 1 0 1 1 1.414 1.414l-7 7a1 1 0 0 1-1.414 0l-7-7a1 1 0 0 1 0-1.414Z"
                  fill="#212121"
                />
              </svg>
            </button>
          </aside>
          <section className="pl-4 border-l-2 ml-4">
            {subPosts && isOpenList[index] ? (
              subPosts
                .filter((subpost, index) => subpost.url!.includes(post.url!))
                .map((subpost) => (
                  <div
                    key={subpost.url!}
                    className="animate__animated animate__faster animate__fadeInDown"
                  >
                    <a href={subpost.url} className="">
                      <li className="text-sm hover:text-blue-600 hover:font-semibold transition duration-300 antialiased">
                        {subpost.frontmatter.title}
                      </li>
                    </a>
                  </div>
                ))
            ) : (
              <></>
            )}
          </section>
        </div>
      ))}
    </>
  );
};

export default OpenButton;
