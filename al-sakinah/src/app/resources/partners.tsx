interface PartnerServiceCardProps {
  partnerName: string;
  services: string[];
  partnerLogo?: string;
  partnerEmail: string;
  partnerNumber: string;
  partnerSocials: string[];
}

const partnerServices: PartnerServiceCardProps[] = [
  {
    partnerName: "UW MSA 1",
    services: ["Mentorship", "Friendship", "Therapy"],
    partnerEmail: "inquiry@uwmsa.ca",
    partnerNumber: "+1 (226) 505 8989",
    partnerLogo:
      "https://cdn.pixabay.com/photo/2023/06/28/22/00/tiger-8095253_1280.png",
    partnerSocials: ["https://www.instagram.com/uwmsa"],
  },
  {
    partnerName: "UW MSA 2",
    services: ["Mentorship", "Friendship", "Therapy"],
    partnerEmail: "inquiry@uwmsa.ca",
    partnerNumber: "+1 (226) 505 8989",
    partnerLogo: "",
    partnerSocials: ["https://www.instagram.com/uwmsa"],
  },
  {
    partnerName: "UW MSA 3",
    services: ["Mentorship", "Friendship", "Therapy"],
    partnerEmail: "inquiry@uwmsa.ca",
    partnerNumber: "+1 (226) 505 8989",
    partnerLogo:
      "https://cdn.pixabay.com/photo/2023/06/28/22/00/tiger-8095253_1280.png",
    partnerSocials: ["https://www.instagram.com/uwmsa"],
  },
  {
    partnerName: "UW MSA 4",
    services: ["Mentorship", "Friendship", "Therapy"],
    partnerEmail: "inquiry@uwmsa.ca",
    partnerNumber: "+1 (226) 505 8989",
    partnerLogo: "",
    partnerSocials: ["https://www.instagram.com/uwmsa"],
  },
  {
    partnerName: "UW MSA 5",
    services: ["Mentorship", "Friendship", "Therapy"],
    partnerEmail: "inquiry@uwmsa.ca",
    partnerNumber: "+1 (226) 505 8989",
    partnerLogo:
      "https://cdn.pixabay.com/photo/2023/06/28/22/00/tiger-8095253_1280.png",
    partnerSocials: ["https://www.instagram.com/uwmsa"],
  },
  {
    partnerName: "UW MSA 6",
    services: ["Mentorship", "Friendship", "Therapy"],
    partnerEmail: "inquiry@uwmsa.ca",
    partnerNumber: "+1 (226) 505 8989",
    partnerLogo: "",
    partnerSocials: ["https://www.instagram.com/uwmsa"],
  },
  {
    partnerName: "UW MSA 7",
    services: ["Mentorship", "Friendship", "Therapy"],
    partnerEmail: "inquiry@uwmsa.ca",
    partnerNumber: "+1 (226) 505 8989",
    partnerLogo: "",
    partnerSocials: ["https://www.instagram.com/uwmsa"],
  },
];

const Information: React.FC<{ info: string }> = ({ info }) => (
  <span className="font-semibold">{info}: </span>
);

const PartnerServiceCard: React.FC<PartnerServiceCardProps> = ({
  partnerName,
  partnerEmail,
  partnerLogo,
  partnerSocials,
  partnerNumber,
  services,
}) => {
  return (
    <div className="border box-content p-4 shadow-lg bg-white">
      {partnerLogo && (
        <img
          className="roundered mx-auto"
          width={120}
          src={partnerLogo}
          alt={partnerName}
        />
      )}
      <div>
        <div className="max-w-fit mx-auto mb-4">
          <h3 className="text-center font-semibold text-lg">{partnerName}</h3>
        </div>
        <p
          style={{
            fontWeight: "100",
          }}
        >
          Call/Text available 7 days of the week 12pm-9pm for spiritual health,
          mental health, drug abuse, etc....
        </p>
        <hr className="w-1/2 mx-auto border my-5" />
        <div style={{ fontWeight: "300" }}>
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
        </div>
        <div>
          {/* {
                  partnerSocials.map((social, index) => (
                      <SocialIcon key={index} url={social} />
                  ))
              } */}
        </div>
      </div>
    </div>
  );
};

const Partners = () => {
  <div className="flex flex-wrap mt-4">
    {partnerServices.map((service, index) => (
      <div key={index} className="mt-2 w-full max-w-96 mx-auto">
        <PartnerServiceCard {...service} />
      </div>
    ))}
  </div>;
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
    <div className="hidden lg:flex flex-wrap ustify-evenly">
      <div className="grow basis-96">
        {partnerServices
          .slice(0, itemPerColumn + (remainingItems > 0 ? 1 : 0))
          .map((service, index) => (
            <div key={index} className="mt-2 min-w-96 mx-auto">
              <PartnerServiceCard {...service} />
            </div>
          ))}
      </div>
      <div className="grow basis-96">
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
      <div className="grow basis-96">
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
        {partnerServices
          .slice(0, itemPerColumn)
          .map((service, index) => (
            <div key={index} className="mt-2 w-full mx-auto">
              <PartnerServiceCard {...service} />
            </div>
          ))}
      </div>
      <div>
        {partnerServices
          .slice(
            itemPerColumn
          )
          .map((service, index) => (
            <div key={index} className="mt-2 w-full mx-auto">
              <PartnerServiceCard {...service} />
            </div>
          ))}
      </div>
    </div>
  );
};
export default Partners;
