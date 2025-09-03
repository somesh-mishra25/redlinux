import SingleService from "@/components/Features/SingleService";
import featuresData from "@/components/Features/featuresData";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Page | Welcome to PR RedLinux",
  description:
    "At PR RED Linux, we offer comprehensive solutions to streamline your tech operations and drive innovation. From cloud architecture to web development, our expert services ensure seamless integration and optimal performance, empowering your organization to thrive in the digital landscape.",
  // other metadata
};

const Service = () => {
  return (
    <>
      <Breadcrumb
        pageName="Services"
        description="At PR RED Linux, we offer comprehensive solutions to streamline your tech operations and drive innovation. From cloud architecture to web development, our expert services ensure seamless integration and optimal performance, empowering your organization to thrive in the digital landscape."
      />

      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {featuresData.map((blog) => (
              <div
                key={blog.id}
                className="mb-8 w-full px-4
              md:mb-2 md:w-2/3 lg:w-1/2 xl:mb-2 xl:w-1/2
              "
              >
                <SingleService service={blog} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
