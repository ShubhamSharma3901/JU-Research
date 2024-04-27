import NavBar from "@/components/NavBar";
import Professors from "./professors";
import Banner from "@/components/Banner";
import NavBreadCrumbs from "@/components/NavBreadCrumbs";

const page = () => {
  return (
    <div>
      <NavBar />
      <Banner />
      <div className="flex justify-center items-center mt-20">
        <NavBreadCrumbs
          page={[
            {
              name: "ACHIEVEMENTS & AWARDS",
              href: "/awards/home",
            },
            {
              name: "STANDFORD UNIVERSITY LIST OF WORLD'S TOP 2% SCIENTISTS",
              href: "",
            },
          ]}
        />
      </div>
      <Professors />
    </div>
  );
};

export default page;
