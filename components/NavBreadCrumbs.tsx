import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import React from "react";

function NavBreadCrumbs({
  page,
}: {
  page: {
    href: string;
    name: string;
  }[];
}) {
  return (
    <Breadcrumb className="font-montserrat">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        {page.map((item, index) => {
          if (item === page[page.length - 1]) {
            return (
              <BreadcrumbItem>
                <BreadcrumbPage>{item.name}</BreadcrumbPage>
              </BreadcrumbItem>
            );
          } else
            return (
              <>
                <BreadcrumbItem>
                  <BreadcrumbLink href={item.href}>{item.name}</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
              </>
            );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

export default NavBreadCrumbs;
