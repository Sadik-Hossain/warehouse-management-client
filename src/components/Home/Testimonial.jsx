import React from "react";

const Testimonial = ({ t }) => {
  return (
    <div
      style={{
        border: "2px solid #000 ",
        padding: "1.5rem",
        borderRadius: "1.5rem",
        background: "#fff",
      }}
    >
      <img
        style={{
          border: "2px solid #000 ",
          borderRadius: "50%",
          width: "64px",
        }}
        src={t.img}
        alt=""
      />
      <h1>{t.name}</h1>
      <h3>company: {t.company}</h3>
      <p>{t.about}</p>
    </div>
  );
};

export default Testimonial;
