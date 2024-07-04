import PageHeader from "../common/header";

const Impact = () => {
  return (
    <div>
      <PageHeader headerText="Our Impact" />
      <div className="w-full" style={{ backgroundColor: "yellow" }}>
        <div className="flex mx-auto w-full lg:w-3/4 justify-center" style={{ backgroundColor: "black"}}>
          <div
            style={{
              width: "250px",
              height: "250px",
              backgroundColor: "blue",
            }}
          >
            Image
          </div>
          <div
            style={{
              backgroundColor: "palegreen",
            }}
          >
            <h3>Mental Health Awareness Event</h3>
            <p>
              With over 10+ attendees, we were able to create a safe space for
              individuals within the KW region to discuss ...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impact;
