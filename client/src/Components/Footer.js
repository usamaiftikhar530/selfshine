import selfshine from "../images/selfshine.png";

function Footer() {
  return (
    <>
      {/* My Footer */}
      <div className="myFooter">
        <div class="container">
          <div class="row g-0">
            <div class="col-lg myBox1">
              <img src={selfshine} alt="" />
              <p>
                Aliquyam sed elitr elitr erat sed diam ipsum eirmod eos lorem
                nonumy. Tempor sea ipsum diam sed clita dolore eos dolores magna
                erat dolore sed stet justo et dolor.
              </p>
              <div className="withLogo">
                <i class="fa fa-map-marker"></i>
                <p>
                  19 Southchurch Road Southend-on-sea, SS1 2NG Just 4 Shops awar
                  from High Street - Metro Bank
                </p>
              </div>
              <div className="withLogo">
                <i class="fa-solid fa-phone"></i>
                <p>073 0838 1217</p>
              </div>
              <div className="withLogo">
                <i class="fa fa-envelope"></i>
                <p>info@example.com</p>
              </div>
              <div className="socialBtns">
                <div className="Btn">
                  <i class="fa-brands fa-twitter"></i>
                </div>
                <div className="Btn">
                  <i class="fa-brands fa-facebook-f"></i>
                </div>
                <div className="Btn">
                  <i class="fa-brands fa-linkedin"></i>
                </div>
                <div className="Btn">
                  <i class="fa-brands fa-instagram"></i>
                </div>
              </div>
            </div>
            <div class="col-lg myBox2">
              <div className="row">
                <div className="col-sm links">
                  <h4>QUICK LINKS</h4>
                  <a href="">
                    <h5>Home</h5>
                  </a>
                  <a href="">
                    <h5>About Us</h5>
                  </a>
                </div>
                <div className="col-sm links">
                  <h4>QUICK LINKS</h4>
                  <a href="">
                    <h5>Home</h5>
                  </a>
                  <a href="">
                    <h5>About Us</h5>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
