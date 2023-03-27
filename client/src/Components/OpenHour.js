import opening from "../images/opening.jpg";

function OpenHour() {
  return (
    <>
      {/* Open Hours */}
      <div className="openHour">
        <div class="container">
          <div class="row">
            <div class="col-md">
              <img src={opening} alt="" />
            </div>
            <div class="col-md openHourTiming">
              <div className="timingContent">
                <h6>OPEN HOURS</h6>
                <h1>Best Relax And Spa Zone</h1>
                <p>
                  Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam
                  dolore sed et. Sit rebum labore sit sit ut vero no sit. Et
                  elitr stet dolor sed sit et sed ipsum et kasd erat duo eos et
                  erat
                </p>
                <div className="timingDays">
                  <ul>
                    <li>Mon-Fri: 9:00 AM - 7:00 PM</li>
                    <li>Saturday: 9:00 AM - 6:00 PM</li>
                    <li>Sunday: Closed</li>
                  </ul>
                </div>
                <button>Book Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OpenHour;
