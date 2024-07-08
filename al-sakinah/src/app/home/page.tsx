import { Metadata } from "next";
import PageLayoutComponent from "../common/page-layout";
import PageHeader from "../common/header";
import Button from "../common/button";
import MissionVision from "../common/missionxvision";
import HorizontalLine from "../common/horizontal-line";
import WelcomeContent from "./welcome";

export const metadata: Metadata = {
  title: "Al-Sakinah Institute - Home",
  description: 'Homepage for Al-Sakinah Institute'
};

const Home = () => {
  return (
    <main>
      <PageLayoutComponent>
        <div>
          {/* Welcome */}
          <div
            className="flex justify-center items-center"
            style={{
              height: "calc(100vh - 64px)",
              backgroundImage:
                'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url("/barley.png")',
              backgroundSize: "cover",
            }}
          >
            <WelcomeContent />
          </div>
          <HorizontalLine />
          {/* Mission */}
          <MissionVision isLarge={true} />
          <HorizontalLine />

          {/* Latest News */}
          <div>
            <PageHeader headerText="Latest News" />
            <div className="flex flex-wrap justify-center gap-4 mx-auto">
              <div className="flex px-4 py-2 card glass shadow-lg border justify-center max-w-sm  box-border">
                <p className="text-7xl text-center">🙌</p>
                <p className="font-extralight text-lg mt-2">
                  JazakaAllahu Khair for attending our last event! Without your
                  continued support Al-Sakinah would not be were it is today.
                </p>
                <p className="italic mt-2">
                  Love your truly, <br />
                  the Al-Sakinah Institute team
                </p>
              </div>

              <div className="px-4 py-2 card glass shadow-lg border max-w-sm box-border">
                <div
                  style={{
                    width: "22rem",
                    height: "22rem",
                  }}
                  className="mx-auto"
                >
                  <img src="./next_event.png" alt="Next Event" />
                </div>
                <hr className="border my-4" />
                <div>
                  <Button text="Sign Up" link="" />
                </div>
              </div>
            </div>
          </div>

          <HorizontalLine />
          {/* Subscribe */}
          <div
            className="bg-[#CF9C4F] card w-1/2 shadow-lg mx-auto p-4 mt-4 border-box"
            style={{ minWidth: "384px" }}
          >
            <PageHeader
              headerText="Subscribe To Our Mailing List"
              removeSpacing={true}
            />
            <p className="text-center text-lg font-extralight">
              Subscribe to our mailing list to keep up to date with our event
              and get additional content
            </p>
            <div className="w-1/2 mx-auto mt-2">
              <Button text="Subscribe" link="" />
            </div>
          </div>
        </div>
      </PageLayoutComponent>
    </main>
  );
};

export default Home;
