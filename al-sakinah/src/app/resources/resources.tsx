"use client";
import React from "react";
import PageHeader from "../common/header";
import DigitalResources from "./digital-resources";
import Partners from "./partners";

const ResourcesPageComponent = () => {
  const [isPartnerServiceTab, setIsPartnerServiceTab] =
    React.useState<boolean>(true);
  const activeTab = "tab-active [--tab-bg:#3A3042] text-white";
  return (
      <div style={{ width: "90%", maxWidth: "1200px" }} className="mx-auto">
        <PageHeader headerText="Resources" />
        <div>
          <div role="tablist" className="tabs tabs-lifted tabs-lg">
            <a
              role="tab"
              className={`tab ${isPartnerServiceTab ? activeTab : ""}`}
              onClick={() => setIsPartnerServiceTab(true)}
              style={{
                color: `${isPartnerServiceTab ? "white" : "black"}`,
              }}
            >
              Partners
            </a>
            <a
              role="tab"
              className={`tab ${!isPartnerServiceTab ? activeTab : ""}`}
              style={{
                color: `${!isPartnerServiceTab ? "white" : "black"}`,
              }}
              onClick={() => setIsPartnerServiceTab(false)}
            >
              Digital Resources
            </a>
          </div>
          {isPartnerServiceTab ? <Partners /> : <DigitalResources />}
        </div>
      </div>
  );
};

export default ResourcesPageComponent;
