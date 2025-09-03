import { Feature } from "@/types/feature";
import Image from "next/image";
import Link from "next/link";

const check = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="#007BFF"
    width="24"
    height="24"
  >
    <path d="M9 16.17L5.83 13L4.42 14.41L9 19L21 7L19.59 5.59L9 16.17Z" />
  </svg>
);
const SingleService = ({ service }: { service: Feature }) => {
  const { title, description, icon, id, paragraph, points, image } = service;
  return (
    <>
      <div className="group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark">
        <Link href="" className="relative block aspect-[37/22] w-full">
          <Image
            src={image}
            alt={title}
            className="pointer-events-none object-cover"
            layout="fill"
          />
          <span className="absolute right-6 top-6 z-20 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-xl font-semibold capitalize text-white">
            {title}
          </span>
        </Link>
        <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
          <p className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
            {description}
          </p>
          {points && (
            <ul className="mb-6 space-y-2 text-base font-medium text-body-color dark:text-gray-400">
              {points.map((point, index) => (
                <li key={index} className="flex items-center">
                  <span className="mr-2">{check}</span>
                  {point}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default SingleService;
