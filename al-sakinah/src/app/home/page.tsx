import PageLayoutComponent from "../common/page-layout";
import PageHeader from "../common/header";
import WelcomeContent from "./welcome";
import Button from "../common/button";
import { parse, isBefore, isPast } from "date-fns";

interface MissionAndVisionCardProp {
  title: string;
  description: string;
  image: string;
}

const missionAndVision: MissionAndVisionCardProp[] = [
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

export const SpecialCard: React.FC<MissionAndVisionCardProp> = ({
  title,
  description,
  image,
}) => {
  return (
    <div className="w-1/2 min-w-96  px-4 py-2 grow glass">
      <PageHeader headerText={title} />
      <div
        style={{ width: "80px", height: "80px", backgroundColor: "#3A3042" }}
        className="shadow-lg rounded-full mx-auto"
      >
        <img src={image} style={{ objectFit: "contain" }}></img>
      </div>
      <p>{description}</p>
    </div>
  );
};

const Home = () => {
  const { title, description, location, startTime, endTime, ...others } = {
    date: "12/09/2023",
    title: "Till Death Do Us Apart",
    description:
      "Join us for this talk with shaykh Usman to learn more about what exactly makes someone ready to embark on this journey of courtship and marriage, in addition to reminding ourselves of the islamic purpose(s) of this sacred union!",
    location: "Kitchener Masjid",
    startTime: "7:00 pm",
    endTime: "9:00 pm",
    imageUrl:
      "https://cdn.pixabay.com/photo/2020/05/26/18/22/lantern-5224200_1280.png",
  };

  const date = parse(
    `${others.date} ${endTime}`,
    "dd/MM/yyyy hh:mm aaa",
    new Date()
  );
  const eventDuration = `${date.toLocaleDateString("en-us", {
    month: "long",
    day: "2-digit",
    year: "numeric",
  })} @ ${startTime} - ${endTime}`;

  return (
    <main>
      <PageLayoutComponent>
        <div>
          {/* Welcome */}
          <div
            className="flex justify-center items-center bg-"
            style={{
              height: "calc(100vh - 64px)",
              backgroundImage:
                'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url("https://download.unsplash.com/photo-1428604467652-115d9d71a7f1")',
              backgroundSize: "cover",
            }}
          >
            <WelcomeContent />
          </div>

          {/* Mission & Vision */}
          {/* <div>
            {missionAndVision.map((info, index) => (
              <div key={index}>
                <SpecialCard {...info} />
              </div>
            ))}
          </div> */}
          <div style={{ backgroundColor: "#0C0C0C", color: "white" }}>
            <PageHeader headerText="Next Event" textColor="white" />
            <div className="flex flex-wrap justify-center gap-4">
              <div
                style={{
                  width: "400px",
                  height: "400px",
                  backgroundColor: "red",
                  border: "2px solid white",
                }}
              >
                <img src="./next_event.png" alt="Next Event" />
              </div>
              <div
                style={{ width: "500px", height: "500px" }}
                className="flex flex-col	justify-center"
              >
                <p className="mt-2">{description}</p>
                <div className="w-full mt-3 max-w-96 self-end">
                  <Button text="Sign Up" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageLayoutComponent>
    </main>
  );
};

export default Home;
