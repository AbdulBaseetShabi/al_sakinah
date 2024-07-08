import PageHeader from "./header";

export const missionAndVisionMap: MissionAndVisionCardProp[] = [
  {
    title: "Mission",
    description:
      " By fostering brave spaces with BIPOC Muslims, we seek to facilitate open dialogue through the co-contribution of knowledge and lived experiences to support personal and spiritual growth and foster community building.",
    image: "./rocket.png",
  },
  {
    title: "Vision",
    description:
      "A united and thriving community that serves as an intellectual hub to promote the holistic well-being of BIPOC Muslims in the KW region.",
    image: "./binoculars.png",
  },
];

export interface MissionAndVisionCardProp {
  title: string;
  description: string;
  image: string;
}

export const SpecialCard: React.FC<
  MissionAndVisionCardProp & {
    isLarge: boolean;
  }
> = ({ title, description, image, isLarge }) => {
  return (
    <div className="w-1/2 grow min-w-96 px-4 py-2">
      <PageHeader headerText={title} />
      <div
        style={{ width: "80px", height: "80px", backgroundColor: "#3A3042" }}
        className="shadow-lg rounded-full mx-auto mt-2"
      >
        <img src={image} style={{ objectFit: "contain" }}></img>
      </div>
      <p className={`text-center mt-1 ${isLarge ? "font-light text-lg" : ""}`}>
        {description}
      </p>
    </div>
  );
};

const MissionVision = ({ isLarge = false }: { isLarge?: boolean }) => {
  return (
    <div className="flex flex-wrap w-full">
      {missionAndVisionMap.map((value, index) => (
        <SpecialCard {...value} key={index} isLarge={isLarge} />
      ))}
    </div>
  );
};

export default MissionVision;
