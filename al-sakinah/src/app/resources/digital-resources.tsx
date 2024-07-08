import Button from "../common/button";

export interface ResourceCardProps {
  description: string;
  name: string;
  link: string;
  image: string;
}

const resources: ResourceCardProps[] = [
  {
    name: "Ramadan Workbook (2024)",
    description:
      "Want to have a structured Ramadan. Utilize our free workbook that...",
    link: "",
    image: "",
  },
];

const ResourceCard: React.FC<ResourceCardProps> = ({
  image,
  description,
  link,
  name,
}) => (
  <div className="flex gap-1 border p-4 card shadow-md">
    <div className="flex flex-col">
      <h2 className="mb-1 font-extrabold">{name}</h2>
      <p>{description}</p>
      <div className="w-36 self-end mt-4">
        <Button text="View" link="https://drive.google.com/file/d/1zhVoKXEk1NXdP-FN-nCKTWRf_x1qriyM/view"/>
      </div>
    </div>
  </div>
);

const DigitalResources = () => {
  return (
    <div className="flex flex-wrap mt-4">
      {resources.map((resource, index) => (
        <div key={index} className="mt-2 w-full mx-auto">
          <ResourceCard {...resource} />
        </div>
      ))}
    </div>
  );
};

export default DigitalResources;
