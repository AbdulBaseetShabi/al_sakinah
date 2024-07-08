import Image from "next/image";
import PageHeader from "../common/header";

interface PastEvent {
  title: string;
  description: string[];
  imgUrl: string;
}

const pastEvents: PastEvent[] = [
  {
    title: "Mental Health and Addiction",
    description: [
      "Our recent event delved into the multifaceted nature of addictive behaviors, examining the emotional, psychological, and social factors that contribute to addiction and its impact on mental health and overall well-being.",
      "We discussed practical coping strategies through an Islamic perspective, focusing on how faith can help manage strong emotions, build resilience, and navigate life's challenges.",
      "The event emphasized the holistic approach to well-being in Islam, integrating physical, emotional, social, and spiritual dimensions.",
      "Understanding ourselves psychologically and spiritually enhances our connection with Allah SWT and strengthens our adherence to religious teachings.",
    ],
    imgUrl: "",
  },
  {
    title: "Till Death Do Us Apart",
    description: [
      "This event provided an in-depth exploration of the essential qualities and readiness required for embarking on the journey of courtship and marriage.",
      "Participants gained valuable insights into the Islamic purposes and principles of this sacred union, reminding us of the spiritual, emotional, and social significance of marriage in Islam.",
      "The discussion offered practical guidance and profound reflections on preparing for and sustaining a harmonious and fulfilling marital relationship.",
    ],
    imgUrl: "",
  },
  {
    title: "Soul Work",
    description: [
      "This event focused on understanding the soul's vital role in our well-being and life direction.",
      "Participants explored the distinction between the \"nafs\" and the \"ego\", the factors leading to sin, and the origins of diseases of the heart.",
      "Sheikh Samatar Mahdi provided profound insights and practical guidance on nurturing the soul and addressing inner challenges, fostering a deeper connection with our spiritual selves and a clearer path to righteousness.",
    ],
    imgUrl: ""
  },
  {
    title: "Gender and Sexuality",
    description: [
      "This event will allow us to explore gender and sexuality through an Islamic lens, helping participants align their understanding with Islamic teachings while navigating contemporary issues.",
      "The importance of understanding this topic facilitates preservation of cultural and religious values and also fosters respectful community dialogues on modern dilemmas while respecting Islamic principles.",
      "Ultimately, by fostering a nuanced exploration of these topics, we aim to cultivate a community that embraces diversity within the framework of Islamic values, encouraging empathy and understanding in today's complex world.",
    ],
    imgUrl: ""
  }
];
const Past = () => {
  return (
    <div>
      <PageHeader headerText="Past Events" />
      <div className="w-full">
        {pastEvents.map(({ title, description, imgUrl }, index) => (
          <div
            className={`glass shadow-md p-4 justify-center gap-4 mx-auto mt-8 flex flex-wrap lg:flex-nowrap w-full lg:w-4/5 items-center lg:items-start ${
              index % 2 == 0 ? "" : "flex-row-reverse"
            }`}
            key={index}
          >
            <div
              className="min-w-72 min-h-72 w-72 h-72 flex justify-center"
            >
              <Image src="/barley.png" width="288" height="288" alt={title}/>
            </div>
            <div
              className={`${
                index % 2 == 0 ? "" : "lg:text-right"
              } w-11/12 text-left text-wrap`}
            >
              <h3 className="uppercase font-bold">{title}</h3>
              <p>{description.join(" ")}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Past;

// style={{ width: "calc(100% - 280px)", minWidth: "calc(100vw - 16px)", maxWidth: "480px" }}
