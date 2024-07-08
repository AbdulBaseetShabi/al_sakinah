import React from "react";
import { Metadata } from "next";
import PageLayoutComponent from "../common/page-layout";
import PageHeader from "../common/header";
import MissionVision from "../common/missionxvision";
import Values from "./values";

export const metadata: Metadata = {
  title: "Al-Sakinah Institute - About Us",
  description: 'About us page for Al-Sakinah Institute where you can view the history, mission and vision statement and core values of Al-Sakinah Institute.'
};

const Story = () => {
  return (
    <PageLayoutComponent>
      <div className="w-full md:w-11/12 mx-auto">
        <div>
          <PageHeader headerText="The AlSakinah Story" />
          <div className="px-2 mx-auto">
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
              <li>
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-start md:text-end mb-10">
                  <div className="text-lg font-black">Fall 2022</div>
                  The Somali-Muslim community in Kitchener, Ontario, was deeply
                  impacted by tragic gun violence, resulting in the loss of
                  young Black Muslim men. These events profoundly affected the
                  tight-knit community, prompting concerned members to unite and
                  seek proactive solutions to prevent future tragedies.
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-end mb-10">
                  <div className="text-lg font-black">Sometime Inbetween</div>
                  The conversation quickly evolved from addressing immediate
                  concerns to broader systemic issues. A few questions emerged:
                  How can we create programs and spaces supporting those
                  susceptible to such realities? Was there a warm and welcoming
                  space dedicated to young BIPOC Muslims?
                </div>
                <hr />
              </li>
              <li>
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-start md:text-end mb-10">
                  <div className="text-lg font-black">January 2023</div>
                  Al-Sakinah Institute quickly found root in Kitchener, Ontario.
                  Our programs span from educational initiatives to charitable
                  activities and encompass community social events to cultivate
                  brave space discussions and strengthen collective resilience.
                </div>
                <hr />
              </li>
            </ul>
          </div>
        </div>
        <hr className="w-1/4 mx-auto my-4 max-w-md"/>
        {/* Mission & Vision */}
        <MissionVision />
        <hr className="w-1/4 mx-auto my-4 max-w-md"/>
        {/* Core Values */}
        <div>
          <PageHeader headerText="Core Values" />
          <Values />
        </div>
      </div>
    </PageLayoutComponent>
  );
};

export default Story;
