import React from "react";

const Map = () => {
  return (
    <div className="py-5">
      <h2 className="section-head mb-4 text-start">Map</h2>
      <div>
        <iframe
          className="border-r14"
          width="100%"
          height="600"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=new%20york+()&amp;t=&amp;z=8&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
