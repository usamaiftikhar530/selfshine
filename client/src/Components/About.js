import about from "../images/about.jpg";

function About() {
  return (
    <>

      {/* About */}
      <div className="about">
        <div class="container">
          <div class="row">
            <div class="col-md">
              <img src={about} alt="" />
            </div>
            <div class="col-md aboutInfo">
              <h6>ABOUT US</h6>
              <h1>Your Best Spa, Beauty & Skin Care Center</h1>
              <p>
                Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam
                dolore sed et. Sit rebum labore sit sit ut vero no sit. Et elitr
                stet dolor sed sit et sed ipsum et kasd erat duo eos et erat
              </p>
              <div className="container">
                <div className="row">
                  <div className="col-sm clientBox">
                    <h1>99</h1>
                    <h3>SPA SPECIALIST</h3>
                  </div>
                  <div className="col-sm clientBox">
                    <h1>999</h1>
                    <h3>HAPPY CLIENTS</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
