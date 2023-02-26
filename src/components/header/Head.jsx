import React from "react";

export const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container d_flex">
          <div className="left row">
            <i className="fa fa-phone"></i>
            <label>+88363 5225 3637</label>
            <i className="fa fa-envelope"></i>
            <label>example@gmail.com</label>
          </div>
          <div className="right row RText">
            <label>Theme FAQ's</label>
            <label>Need Helps</label>
            <span> </span>
            <label htmlFor="">EN</label>
            <span>dhsg</span>
            <label htmlFor="">UK</label>
          </div>
        </div>
      </section>
    </>
  );
};
