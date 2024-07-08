interface Value {
  title: string;
  description: string;
}

const values: Value[] = [
  {
    title: "Compassion and Mercy (Rahma)",
    description:
      "Emphasize empathy, care, and kindness in all actions, program development, workshops and community outreach.",
  },
  {
    title: "Social Justice (Adl)",
    description:
      "A commitment to fairness, equity, and justice, advocating for the rights of marginalized groups and striving for a more equitable society.",
  },
  {
    title: "Community/Brotherhood/Sisterhood (Ummah)",
    description:
      "Encourage unity, belonging, and collective growth - communal wellness and the idea that serving one another strengthens the community.",
  },
  {
    title: "Knowledge and Wisdom (Ilm)",
    description:
      "Prioritize education and informed decision-making. We seek to offer resources and knowledge to inspire personal and communal growth, emphasizing the ongoing pursuit of knowledge for betterment.",
  },
  {
    title: "Integrity and Trustworthiness (Amanah)",
    description:
      "Uphold honesty and responsibility in all dealings, ensuring transparency and ethical standards.",
  },
  {
    title: "Personal and Communal Growth (Tarakki)",
    description:
      "Focus on continuous improvement and development, individually and as a community.",
  },
  {
    title: "Wellness and Balance (Tawazun)",
    description:
      "Promote physical, mental, and spiritual wellness, recognizing the importance of a balanced approach to life as advocated in Islam to foster holistic well-being.",
  },
  {
    title: "Servitude and Altruism (Khidma)",
    description:
      "Encourage selfless service and altruism to actively seek opportunities to benefit the community and those in need, reflecting the essence of Islamic charity and social responsibility.",
  },
];

const Values = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-center w-11/12 mx-auto">
      {values.map(({ title, description }, index) => (
        <div
          key={index}
          className="card grow shadow-md w-96 text-center mt-2 p-3 flex justify-center"
        >
          <h3 className="font-bold">{title}</h3>
          <p> {description}</p>
        </div>
      ))}
    </div>
  );
};

export default Values;
