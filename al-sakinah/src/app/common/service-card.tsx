import React from "react";
import Button from "./button";

export interface ServiceCardProps {
  serviceName: string;
  serviceDescription: string;
  serviceImage: string;
}

export interface PartnerServiceCardProps {
  partnerName: string;
  services: string[];
  partnerLogo?: string;
  partnerEmail: string;
  partnerNumber: string;
  partnerSocials: string[];
}



const ServiceCard: React.FC<ServiceCardProps> = ({
  serviceName,
  serviceDescription,
  serviceImage,
}) => {
  return (
    <div className="rounded-lg box-content p-1.5 max-w-full min-w-96 shadow-md">
      <img
        className="roundered mx-auto"
        width={120}
        src={serviceImage}
        alt={serviceName}
      />
      <h2 className="text-center font-semibold">{serviceName}</h2>
      {/* <p className="text-center">{serviceDescription}</p> */}
    </div>
  );
};



export { ServiceCard };
