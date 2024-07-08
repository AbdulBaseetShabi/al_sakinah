import { Metadata } from "next";
import PageLayoutComponent from "../common/page-layout";
import ResourcesPageComponent from "./resources";

export const metadata: Metadata = {
  title: "Al-Sakinah Institute - Resources",
  description:
    "Resources page for Al-Sakinah Institute where you can access Al-Sakinah partners and digital resources.",
};

const ResourcesPage = () => {
  return (
    <PageLayoutComponent>
      <ResourcesPageComponent />
    </PageLayoutComponent>
  );
};

export default ResourcesPage;
