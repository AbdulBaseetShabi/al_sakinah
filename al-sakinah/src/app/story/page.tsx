import React from "react";
import PageLayoutComponent from "../common/page-layout";
import PageHeader from "../common/header";
import Impact from "./impact";

const story = [
  "In fall 2022, the Somali-Muslim community in Kitchener, Ontario, was deeply impacted by tragic gun violence, resulting in the loss of young Black Muslim men. These events profoundly affected the tight-knit community, prompting concerned members to unite and seek proactive solutions to prevent future tragedies.",
  "Quickly, the conversation evolved from addressing immediate concerns to broader systemic issues. A few questions emerged: How can we create programs and spaces supporting those susceptible to such realities? Was there a warm and welcoming space dedicated to young BIPOC Muslims? In January 2023, Al-Sakinah Institute quickly found root in Kitchener, Ontario. Our programs span from educational initiatives to charitable activities and encompass community social events to cultivate brave space discussions and strengthen collective resilience.",
  "Sakinah, meaning tranquillity and success, is founded on a commitment to the KW community. We aim to foster a haven for the youth in Kitchener, where unity, identity, and holistic well-being are the cornerstones to fostering a resilient community.",
];

const Story = () => {
  return (
    <PageLayoutComponent>
      <div>
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
        <Impact />
        <div>
          <PageHeader headerText="Core Values" />
        </div>
      </div>
    </PageLayoutComponent>
  );
};

export default Story;
