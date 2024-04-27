import { patents } from "@/types";

import data from "@/json/patents.json";
import Homepage from "./Homepage";
import NavBreadCrumbs from "@/components/NavBreadCrumbs";

export default async function DemoPage() {
  return (
    <div className="container mx-auto">
      <div className="mb-20">
        <Homepage />
      </div>
    </div>
  );
}
