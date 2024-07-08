import Button from "../common/button";
import HorizontalLine from "../common/horizontal-line";

interface PartnerServiceCardProps {
  partnerName: string;
  services: string[];
  description: string;
  partnerLogo?: string;
  needsDarkBackground?: boolean;
  partnerEmail: string;
  partnerNumber: string;
  partnerSocials: string[];
}

const partnerServices: PartnerServiceCardProps[] = [
  {
    partnerName: "Kitchener Masjid",
    description: "",
    services: ["Mentorship", "Friendship", "Therapy"],
    partnerEmail: "inquiry@uwmsa.ca",
    partnerNumber: "+1 (226) 505 8989",
    partnerLogo: "kitchener_masjid.png",
    partnerSocials: ["https://www.instagram.com/uwmsa"],
  },
  {
    partnerName: "Al-Salaam Islamic Centre",
    description: "",
    services: ["Mentorship", "Friendship", "Therapy"],
    partnerEmail: "inquiry@uwmsa.ca",
    partnerNumber: "+1 (226) 505 8989",
    partnerLogo: "al-salam.png",
    needsDarkBackground: true,
    partnerSocials: ["https://www.instagram.com/uwmsa"],
  },
  {
    partnerName: "University of Waterloo MSA",
    description: "",
    services: ["Mentorship", "Friendship", "Therapy"],
    partnerEmail: "inquiry@uwmsa.ca",
    partnerNumber: "+1 (226) 505 8989",
    partnerLogo: "uwmsa.avif",
    partnerSocials: ["https://www.instagram.com/uwmsa"],
  },
  {
    partnerName: "University of Waterloo Palestine",
    description: "",
    services: ["Mentorship", "Friendship", "Therapy"],
    partnerEmail: "inquiry@uwmsa.ca",
    partnerNumber: "+1 (226) 505 8989",
    partnerLogo: "",
    partnerSocials: ["https://www.instagram.com/uwmsa"],
  },
  {
    partnerName: "University of Waterloo Somalia Student Association",
    description: "",
    services: ["Mentorship", "Friendship", "Therapy"],
    partnerEmail: "inquiry@uwmsa.ca",
    partnerNumber: "+1 (226) 505 8989",
    partnerLogo: "uwssa.jpg",
    partnerSocials: ["https://www.instagram.com/uwmsa"],
  },
  {
    partnerName: "Palestinian Youth Movement",
    description: "",
    services: ["Mentorship", "Friendship", "Therapy"],
    partnerEmail: "inquiry@uwmsa.ca",
    partnerNumber: "+1 (226) 505 8989",
    partnerLogo: "",
    partnerSocials: ["https://www.instagram.com/uwmsa"],
  },
  {
    partnerName: "Wilfrid Laurier University MSA",
    description: "",
    services: ["Mentorship", "Friendship", "Therapy"],
    partnerEmail: "inquiry@uwmsa.ca",
    partnerNumber: "+1 (226) 505 8989",
    partnerLogo: "wlumsa.webp",
    partnerSocials: ["https://www.instagram.com/uwmsa"],
  },
  {
    partnerName: "University of Guelph MSA",
    description: "",
    services: ["Mentorship", "Friendship", "Therapy"],
    partnerEmail: "inquiry@uwmsa.ca",
    partnerNumber: "+1 (226) 505 8989",
    partnerLogo: "uogmsa.png",
    needsDarkBackground: true,
    partnerSocials: ["https://www.instagram.com/uwmsa"],
  },
];

const Information: React.FC<{ info: string }> = ({ info }) => (
  <span className="font-semibold">{info}: </span>
);

const PartnerServiceCard: React.FC<PartnerServiceCardProps> = ({
  partnerName,
  partnerLogo,
  needsDarkBackground,
}) => {
  return (
    <div className="border box-content p-4 shadow-lg bg-white">
      {partnerLogo && (
        <div>
          <img
            className="roundered mx-auto mb-2"
            width={120}
            src={`/partners/${partnerLogo}`}
            alt={partnerName}
            style={{
              backgroundColor: `${
                needsDarkBackground ? "#3A3042" : "transparent"
              }`,
            }}
          />
        </div>
      )}
      <div>
        <div className="max-w-fit mx-auto">
          <h3 className="text-center font-semibold text-lg uppercase">
            {partnerName}
          </h3>
        </div>
        <HorizontalLine />
        <p
          style={{
            fontWeight: "100",
          }}
        >
          Call/Text available 7 days of the week 12pm-9pm for spiritual health,
          mental health, drug abuse, etc....
        </p>
        <HorizontalLine />
        <div className="max-w-sm mx-auto">
          <Button text="Contact" link="" />
        </div>
        {/* <div style={{ fontWeight: "300" }}>
          <p>
            <Information info="Services" /> {services.join(", ")}
          </p>
          <p>
            <Information info="Email" />{" "}
            <a href={`mailto:${partnerEmail}`}>{partnerEmail}</a>
          </p>
          <p>
            <Information info="Number" /> {partnerNumber}
          </p>
        </div> */}
        {/* <div>
          {
                  partnerSocials.map((social, index) => (
                      <SocialIcon key={index} url={social} />
                  ))
              }
        </div> */}
      </div>
    </div>
  );
};

const Partners = () => {
  return (
    <div>
      <PartnersLarge />
      <PartnersMedium />
    </div>
  );
};

const PartnersLarge = () => {
  const itemPerColumn = Math.floor(partnerServices.length / 3);
  const remainingItems = partnerServices.length % 3;

  return (
    <div className="hidden lg:flex flex-wrap justify-evenly">
      <div className="grow basis-96 mx-2">
        {partnerServices
          .slice(0, itemPerColumn + (remainingItems > 0 ? 1 : 0))
          .map((service, index) => (
            <div key={index} className="mt-2 min-w-96 mx-auto">
              <PartnerServiceCard {...service} />
            </div>
          ))}
      </div>
      <div className="grow basis-96 mx-2">
        {partnerServices
          .slice(
            itemPerColumn + (remainingItems > 0 ? 1 : 0),
            2 * itemPerColumn +
              (remainingItems > 0 ? 1 : 0) +
              (remainingItems > 1 ? 1 : 0)
          )
          .map((service, index) => (
            <div key={index} className="mt-2 min-w-96 mx-auto">
              <PartnerServiceCard {...service} />
            </div>
          ))}
      </div>
      <div className="grow basis-96 mx-2">
        {partnerServices
          .slice(
            2 * itemPerColumn +
              (remainingItems > 0 ? 1 : 0) +
              (remainingItems > 1 ? 1 : 0)
          )
          .map((service, index) => (
            <div key={index} className="mt-2 min-w-96 mx-auto">
              <PartnerServiceCard {...service} />
            </div>
          ))}
      </div>
    </div>
  );
};

const PartnersMedium = () => {
  const itemPerColumn = Math.ceil(partnerServices.length / 2);

  return (
    <div className="flex lg:hidden flex-wrap justify-evenly">
      <div>
        {partnerServices.slice(0, itemPerColumn).map((service, index) => (
          <div key={index} className="mt-2 w-full mx-auto">
            <PartnerServiceCard {...service} />
          </div>
        ))}
      </div>
      <div>
        {partnerServices.slice(itemPerColumn).map((service, index) => (
          <div key={index} className="mt-2 w-full mx-auto">
            <PartnerServiceCard {...service} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Partners;
