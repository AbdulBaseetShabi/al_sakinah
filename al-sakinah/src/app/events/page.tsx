import PageHeader from "../common/header";
import PageLayoutComponent from "../common/page-layout";
import { parse, isPast } from "date-fns";
import Button from "../common/button";
import Past from "./past";
import { Metadata } from "next";

interface Event {
  title: string;
  description: string;
  location: string;
  date: string;
  startTime: string;
  endTime: string;
  imageUrl: string;
}

interface EventComponentProps extends Omit<Event, "date"> {
  date: Date;
  isPastEvent?: boolean;
  showDivider?: boolean;
}

export const metadata: Metadata = {
  title: "Al-Sakinah Institute - Events",
  description: 'Events page for Al-Sakinah Institute where you can view the upcoming and past events ran by Al-Sakinah Institute.'
};

export const events: Event[] = [
  {
    date: "16/09/2025",
    title: "Till Death Do Us Apart",
    description:
      "Join us for this talk with shaykh Usman to learn more about what exactly makes someone ready to embark on this journey of courtship and marriage, in addition to reminding ourselves of the islamic purpose(s) of this sacred union!",
    location: "Kitchener Masjid",
    startTime: "7:00 pm",
    endTime: "9:00 pm",
    imageUrl:
      "https://cdn.pixabay.com/photo/2020/05/26/18/22/lantern-5224200_1280.png",
  },
  {
    date: "09/06/2024",
    title: "Till Death Do Us Apart",
    description:
      "Join us for this talk with shaykh Usman to learn more about what exactly makes someone ready to embark on this journey of courtship and marriage, in addition to reminding ourselves of the islamic purpose(s) of this sacred union!",
    location: "Kitchener Masjid",
    startTime: "7:00 pm",
    endTime: "9:00 pm",
    imageUrl:
      "https://cdn.pixabay.com/photo/2020/05/26/18/22/lantern-5224200_1280.png",
  },
  {
    date: "12/09/2023",
    title: "Till Death Do Us Apart",
    description:
      "Join us for this talk with shaykh Usman to learn more about what exactly makes someone ready to embark on this journey of courtship and marriage, in addition to reminding ourselves of the islamic purpose(s) of this sacred union!",
    location: "Kitchener Masjid",
    startTime: "7:00 pm",
    endTime: "9:00 pm",
    imageUrl:
      "https://cdn.pixabay.com/photo/2020/05/26/18/22/lantern-5224200_1280.png",
  },
];

export const EventComponent: React.FC<EventComponentProps> = ({
  title,
  location,
  description,
  date,
  startTime,
  endTime,
  isPastEvent = false,
  showDivider = true,
}) => {
  const eventDuration = `${date.toLocaleDateString("en-us", {
    month: "long",
    day: "2-digit",
    year: "numeric",
  })} @ ${startTime} - ${endTime}`;
  return (
    <div>
      <div className="flex flex-wrap">
        <div className="w-32 text-center">
          <div className="w-full font-extralight">
            {date
              .toLocaleDateString("en-us", { weekday: "long" })
              .toUpperCase()}
          </div>
          <div className="w-full font-bold">{date.getDate()}</div>
        </div>
        <div
          style={{
            width: "calc(100% - 150px)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div className="font-light">{eventDuration}</div>
          <div className="font-bold">{title}</div>
          <p className="font-light italic">{location}</p>
          <p className="mt-2">{description}</p>
          {!isPastEvent ? (
            <div className="w-full mt-3 max-w-96 self-end">
              <Button text="Sign Up" link="" />
            </div>
          ) : null}
        </div>
      </div>
      {showDivider && <div className="divider" />}
    </div>
  );
};

const Events = () => {
  const upcomingEvents: EventComponentProps[] = [];

  events.forEach((event) => {
    const parsedEventDate = parse(
      `${event.date} ${event.endTime}`,
      "dd/MM/yyyy hh:mm aaa",
      new Date()
    );
    const hasEventPassed = isPast(parsedEventDate);

    if (!hasEventPassed) {
      upcomingEvents.push({
        ...event,
        isPastEvent: false,
        date: parsedEventDate,
      });
    }
  });

  return (
    <PageLayoutComponent>
      <main>
        <div style={{ width: "90%" }} className="mx-auto">
          <div>
            <PageHeader headerText="Upcoming Events" />
            <ul>
              {upcomingEvents.map((event, index) => (
                <li key={index}>
                  <EventComponent {...event} />
                </li>
              ))}
            </ul>
          </div>
          <Past/>
        </div>
      </main>
    </PageLayoutComponent>
  );
};

export default Events;
