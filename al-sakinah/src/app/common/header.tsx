import React from "react";

interface OwnProps {
  headerText: string;
  textColor?: string;
  removeSpacing?: boolean;
}

const PageHeader: React.FC<OwnProps> = ({
  headerText,
  textColor,
  removeSpacing = false,
}) => {
  return (
    <div className={`max-w-fit mx-auto ${removeSpacing ? "" : "pt-4 pb-2.5"}`}>
      <h1
        className="text-xl font-semibold uppercase"
        style={{
          color: textColor ?? "black",
        }}
      >
        {headerText}
      </h1>
      <hr className="mx-auto border-t-4" style={{ borderColor: "#CF9C4F" }} />
    </div>
  );
};

export default PageHeader;
