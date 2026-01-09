import clsx from "clsx";
import Link from "next/link";
import {
  ArrowSquareOut,
  InstagramLogo,
  Lock,
  XLogo,
  MapPin,
  MapPinSimple,
  Code,
  Newspaper,
} from "@phosphor-icons/react";
import { BlogList } from "components";
import { getAllPosts } from "pages/api/blog";
import { getAllProjects } from "pages/api/projects";
import { ContentWrapper, Button } from "ui";

const TIMELINE = [
  {
    date: "May 03 to May 22, 2023",
    title: "Turned 29, did a 3 week long birthday trip!",
    description:
      "Travelled 4 different cities in 4 different European countries. Made great memories :)",
    // link: "https://twitter.com/thelifeofrishi/status/1635590849475096577?s=20",
  },
  {
    date: "Mar 12, 2023",
    title: "Moved to Berlin",
    description: "Always wanted to travel in the west :)",
    link: "https://twitter.com/thelifeofrishi/status/1635590849475096577?s=20",
  },
  {
    date: "Mar 10, 2023",
    title: "Pika crossed $2,000 MRR",
    description: "9 months for the first $1K MRR, ~4 months for the next :D",
    link: "https://twitter.com/thelifeofrishi/status/1633760970823827456?s=20",
  },
  {
    date: "Dec 01, 2022",
    title: "Joined Hive.one",
    description:
      "Joined Hive team as frontend engineer to build a new way to explore Twitter",
    link: "https://twitter.com/thelifeofrishi/status/1598692245401501696",
  },
  {
    date: "Nov 12, 2022",
    title: "Pika crossed $1K in monthly recurring revenue",
    description:
      "9 months into building Pika, it is my first side-project to cross such big milestone",
  },
  {
    date: "Jan 02, 2022",
    title: "Launched Pika.style as an open-source project",
    description:
      "Built this small tool to save my time designing better screenshots",
  },
];

const IMAGES = [
  {
    src: "/images/pages/home/rishi-goa-1.jpg",
    place: "Chandigarh, India",
    className: "md:rotate-[2deg]",
  },
  {
    src: "/images/pages/home/rishi-tomatina-1.jpg",
    place: "Khajjiar,HP",
    className: "md:rotate-[2deg]",
  },
  {
    src: "/images/pages/home/rishi-side-1.jpg",
    place: "Punjab, India",
    className: "md:rotate-[2deg]",
  },
  {
    src: "/images/pages/home/rishi-antalya-1.jpg",
    place: "Berlin, Germany",
    className: "md:rotate-[-2deg]",
  },
];

const INFO = [

  {
    text: "Chandigarh, India",
    icon: <MapPin />,
    className: "bg-blue-100 text-blue-900",
  },
  {
    text: "Running, Gym, Design & Develp",
    icon: <Lock />,
    className: "bg-blue-50 text-blue-800",
  },
  {
    text: (
      <>
        Building{" "}
        <Link
          target="_blank"
          href="https://checkcolor.vercel.app/"
          className="underline underline-offset-[4px] decoration-gray-200 decoration-[1px] hover:decoration-current"
        >
          Coloration
        </Link>{" "}
        and{" "}
        <Link
          target="_blank"
          href="/"
          className="underline underline-offset-[4px] decoration-gray-200 decoration-[1px] hover:decoration-current"
        >
          E Point
        </Link>
      </>
    ),
    icon: <Code />,
    className: "bg-blue-50 text-blue-800",
  },
  {
    text: (
      <Link
        target="_blank"
        href="https://twitter.com/5iddddddd"
        className="underline underline-offset-[4px] decoration-gray-200 decoration-[1px] hover:decoration-current"
      >
        Networking on Twitter
      </Link>
    ),
    icon: <XLogo />,
    className: "text-gray-900 bg-gray-100",
  },
  {
    text: (
      <Link
        target="_blank"
        href="https://instagram.com/5idhantt"
        className="underline underline-offset-[4px] decoration-gray-200 decoration-[1px] hover:decoration-current"
      >
        Style on Instagram
      </Link>
    ),
    icon: <InstagramLogo />,
    className: "text-pink-900 bg-pink-50",
  },
];

export default function Home({ allPosts, allProjects, post }) {
  return (
    <div className="grid md:grid-cols-1 mt-0 md:mt-4">
      <ContentWrapper
        width="620px"
        className="divide-y divide-gray-200 dark:divide-gray-800 space-y-6"
      >
        <div className="">
           <img src="/images/pages/home/sidd.jpeg" alt="Sid" className="inline-block w-28 h-28 ml-56px border border-gray-200 dark:border-gray-800 rounded-full" />
          <h2 className="mb-1 md:mb-1 text-3xl">
            <span className="opacity-90">Sidhant 21</span>
            </h2>
            <h2 className="mb-2 md:mb-2">
            <span className="font-medium opacity-70">
              Designer & Developer
            </span>
            </h2>
          <div className="flex flex-wrap gap-2 text-sm">
            {INFO?.map((item, index) => (
              <div
                className={clsx(
                  "border rounded-lg px-[10px] py-[6px] flex gap-1.5 items-center",
                  item?.className
                )}
                key={item?.text + index}
              >
                {item?.icon ? <div className="">{item?.icon}</div> : ""}
                <div>{item?.text}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="pt-6 pb-2">
          <h2 className="text-xl font-medium text-black dark:text-white mb-4">
            Craft/projects
          </h2>
          <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
            {allProjects?.map((project) => (
              <div
                className="min-w-[120px] flex-col px-4 py-1 border border-gray-200 dark:border-gray-700/70 rounded-lg hover:bg-gray-100 dark:bg-gray-800/70 dark:hover:bg-gray-800 dark:hover:border-gray-700 dark:shadow-[0_0_8px_rgba(0,0,0,0.8)] shadow-[0_0_8px_rgba(0,0,0,0.06)] flex relative"
                key={project?.title}
              >
                {project?.ios ? (
                  <Link
                    href={project?.ios}
                    target="_blank"
                    title={project?.title}
                  >
                    <div className="absolute top-[10%] right-[10%] z-10 opacity-50 hover:opacity-100 hover:scale-[1.1] duration-100">
                      <ArrowSquareOut className="text-base" />
                    </div>
                  </Link>
                ) : project?.web ? (
                  <Link
                    href={project?.web}
                    target="_blank"
                    title={project?.title}
                  >
                    <div className="absolute top-[10%] right-[10%] z-10 opacity-50 hover:opacity-100 hover:scale-[1.1] duration-100">
                      <ArrowSquareOut className="text-base" />
                    </div>
                  </Link>
                ) : (
                  ""
                )}
                <Link
                  href={`/projects/${project?.slug}` || "/"}
                  key={project?.title}
                >
                  <div className="pt-3 pb-2 relative">
                    {project?.icon ? (
                      <img
                        className="w-[32px] drop-shadow-xl"
                        src={project?.icon}
                        alt={project?.title}
                      />
                    ) : (
                      <>
                        <div className="flex items-center justify-center w-[32px] h-[32px] text-lg font-medium text-white bg-black border border-gray-100 rounded-full dark:border-gray-800 drop-shadow-xl">
                          {project?.title?.slice(0, 1)}
                        </div>
                      </>
                    )}
                  </div>
                  <div className="pb-1">
                    <div className="flex items-center gap-[6px] mt-1">
                      <h3 className="font-medium text-base">
                        {project?.title}
                      </h3>
                      {project?.status === "Active" ? (
                        <div
                          className="w-[8px] h-[8px] rounded-full bg-green-500"
                          title="Active"
                        />
                      ) : (
                        ""
                      )}
                    </div>
                    {project?.tagline ? (
                      <p className="text-sm opacity-80">{project?.tagline}</p>
                    ) : (
                      ""
                    )}
                  </div>
                </Link>
              </div>
              
            ))}
          </div>
        </div>
        <Button variant="secondary" className="text-sm" href="/projects" as="a">
              View all Projects →
            </Button>
        <div className="pt-8 pb-2">
          <div className="flex items-center gap-3 pb-3">
            <h2 className=" text-xl font-medium text-black dark:text-white">
              Experience
            </h2>
            
          </div>
          <div className="grid grid-cols-1  gap-4">
              <div className="text-black-600/80 dark:text-gray-300/80 border rounded-lg p-3 text-sm bg-black-100/30 border-pink-200 relative overflow-hidden group dark:bg-white-600/10 dark:border-pink-900/40">
                <div className="text-2xl text-black font-bold mt-1 dark:text-white">
              Freelance Developer
              <div className="text-xs font-normal mt-1">
               Jan 2025 - present · 1 yrs
              </div>
               </div>
                 <div
                className="text-sm text-black-600 mt-1">
              - Designed and developed responsive websites from scratch <br />
              - Ensuring clean UI/UX and smooth animations<br />
              - Managed end-to-end project execution, from wireframing and prototyping to <br />deployment and maintenance
            </div>
            </div>
          </div>
        </div>
        <div className="pt-6 pb-1">
          <div className="flex items-center gap-3 pb-3">
            <h2 className=" text-xl font-medium text-black dark:text-white">
            Education
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2  gap-4">
              <div
                className="font border rounded-lg p-3 text-sm bg-black-100/30 border-red-200 relative overflow-hidden group dark:bg-white-600/10 dark:border-red-900/40">
              Bachelor of Computer Applications
              
                <Newspaper className="text-7xl absolute right-[-10px] bottom-[-12px] opacity-[.05] -rotate-[5deg] dark:opacity-[.05] text-red-500" />
                 <div
                className="font-bold text-pink-600 mt-1">
              Panjab University(2022-25)
                <Newspaper className="text-7xl absolute right-[-10px] bottom-[-12px] opacity-[.05] -rotate-[5deg] dark:opacity-[.05] text-red-500" />
            </div>
            </div>
            <br />
          </div>
        </div>
        {}

        <div>
          <div className="flex items-center mt-10 gap-3">
            <h2 className=" text-xl font-medium text-black dark:text-white">
              Photos
            </h2>
            <Link
              className="bg-transparent border-gray-200 dark:border-gray-700/70 border text-sm px-2 py-px rounded-lg flex gap-1 items-center"
              href="https://instagram.com/5iddddddd"
              target="_blank"
            >
              <InstagramLogo /> Instagram
              <ArrowSquareOut />
            </Link>
          </div>

          <div className="mt-2 mb-8">
            <p>
             Check out my aesthetic portfolio{" "}
              <Link className="border-b" href="https://instagram.com/5iddddddd" target="_blank">
                check it here
              </Link>
            </p>
          </div>

          <div className=" mt-5 justify-center relative group">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
              {IMAGES?.slice(0, 8)?.map((item) => (
                <div
                  key={item.src}
                  className={clsx(
                    // item?.className,
                    "relative bg-gray-100  hover:bg-gray-900 duration-100 ease-in-out rounded-[12px] dark:border-gray-700 hover:shadow-xl md:hover:scale-[1.1]"
                  )}
                >
                  <img
                    src={item?.src}
                    alt={item?.place}
                    className="rounded-[9px] object-cover w-full h-full"
                    loading="lazy"
                  />
                  {/* <div className="font-mono text-xs absolute bottom-[4%] left-[4%] inline-flex bg-white/90 backdrop-blur rounded-[10px] px-2 py-px items-center dark:text-black">
                  <MapPin size={14} className="mr-1" />
                  {item?.place}
                </div> */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "image",
    "excerpt",
    "external",
    "status",
    "statusText",
  ]);

  const allProjects = getAllProjects([
    "title",
    "date",
    "slug",
    "author",
    "image",
    "excerpt",
    "content",
    "icon",
    "active",
    "tagline",
    "web",
    "ios",
    "status",
    "statusText",
  ]);

  return {
    props: {
      allPosts,
      allProjects: allProjects
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .sort((a, b) => a.status === "Active" && -1)
        .sort((left, right) =>
          left.hasOwnProperty("active")
            ? -1
            : right.hasOwnProperty("active")
            ? 1
            : 0
        )
        ?.slice(0, 6),
    },
  };
}
