import service1 from "../images/service-1.jpg";
import service2 from "../images/service-2.jpg";
import service3 from "../images/service-3.jpg";
import service4 from "../images/service-4.jpg";
import service5 from "../images/service-5.jpg";
import service6 from "../images/service-6.jpg";

import axios from "axios";
import { useEffect, useState } from "react";

function Services() {
  const [appointment, SetAppointment] = useState("");
  const [isAppointmentConfrm, SetAppointmentConfirm] = useState(false);
  const [userDetail, setUserDetail] = useState({
    fullName: String,
    email: String,
    date: Date,
    time: String,
    service1: false,
    service2: false,
    service3: false
  });




  async function RegisterPress() {
    SetAppointment("Loading...")

    const res = await axios.post("/sendemail", {
      fullName: userDetail.fullName,
      email: userDetail.email,
      date: userDetail.date,
      time: userDetail.time,
      service1: userDetail.service1,
      service2: userDetail.service2,
      service3: userDetail.service3
    });

    if (res.status == 201) {
      SetAppointment("Appointment Confirm Successfully");
      SetAppointmentConfirm(true);
    } else {
      SetAppointment("Problem Occur While Appointment");
      SetAppointmentConfirm(false);
    }
  }

  function FormDetails(e) {
    setUserDetail({ ...userDetail, [e.target.name]: e.target.value });
  }

  function CheckBoxDetail(e){
    setUserDetail({ ...userDetail, [e.target.name]: e.target.checked });
  }



  return (
    <>
      {/* Services */}
      <div className="services">
        <h6>OUR SERVICES</h6>
        <h1>Spa & Beauty Services</h1>
        {/* Infinite Slider */}
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner carousel-inner-infinte">
            <div class="carousel-item active">
              <div class="cards-wrapper">
                <div class="card">
                  <img src={service1} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Service 1</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" class="btn btn-primary">
                      Make Order
                    </a>
                  </div>
                </div>
                <div class="card d-none d-md-block">
                  <img src={service2} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Service 2</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" class="btn btn-primary">
                      Make Order
                    </a>
                  </div>
                </div>
                <div class="card d-none d-md-block">
                  <img src={service3} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Service 3</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" class="btn btn-primary">
                      Make Order
                    </a>
                  </div>
                </div>
                <div class="card d-none d-md-block">
                  <img src={service4} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Service 4</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" class="btn btn-primary">
                      Make Order
                    </a>
                  </div>
                </div>
                <div class="card d-none d-md-block">
                  <img src={service5} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Service 5</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" class="btn btn-primary">
                      Make Order
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="cards-wrapper">
                <div class="card">
                  <img src={service6} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Service 6</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" class="btn btn-primary">
                      Make Order
                    </a>
                  </div>
                </div>
                <div class="card d-none d-md-block">
                  <img src={service1} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Service 1</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" class="btn btn-primary">
                      Make Order
                    </a>
                  </div>
                </div>
                <div class="card d-none d-md-block">
                  <img src={service2} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Service 2</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" class="btn btn-primary">
                      Make Order
                    </a>
                  </div>
                </div>
                <div class="card d-none d-md-block">
                  <img src={service3} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Service 3</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" class="btn btn-primary">
                      Make Order
                    </a>
                  </div>
                </div>
                <div class="card d-none d-md-block">
                  <img src={service4} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Service 4</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" class="btn btn-primary">
                      Make Order
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
        <div className="appointment">
          <div className="bg-image"></div>
          <div class="container form-container">
            <h1 class="form-title" >Make Appointment</h1>
            <form method="POST">
              <div class="main-user-info">
                <div class="user-input-box">
                  <label for="fullName">Full Name</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={userDetail.fullName}
                    onChange={FormDetails}
                    placeholder="Enter Full Name"
                  />
                </div>
                <div class="user-input-box">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={userDetail.email}
                    onChange={FormDetails}
                    placeholder="Enter Email"
                  />
                </div>
                <div class="user-input-box">
                  <label for="date">Date</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={userDetail.date}
                    onChange={FormDetails}
                    placeholder="Enter Appointment Date"
                  />
                </div>
                <div class="user-input-box">
                  <label for="time">Time</label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    value={userDetail.time}
                    onChange={FormDetails}
                    placeholder="Enter Time"
                  />
                </div>
              </div>
              <div className="servicesCheck">
                <h1>Services</h1>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox1"
                    name="service1"
                    value={userDetail.service1}
                    onChange={CheckBoxDetail}
                  />
                  <label class="form-check-label" for="inlineCheckbox1">
                    Service 1
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox2"
                    name="service2"
                    value={userDetail.service2}
                    onChange={CheckBoxDetail}
                  />
                  <label class="form-check-label" for="inlineCheckbox2">
                    Service 2
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox2"
                    name="service3"
                    value={userDetail.service3}
                    onChange={CheckBoxDetail}
                  />
                  <label class="form-check-label" for="inlineCheckbox2">
                    Service 3
                  </label>
                </div>
              </div>

              <div class="form-submit-btn">
                <input onClick={RegisterPress} type="button" value="Make Appointment" />
              </div>
              <h5 style={{marginTop: "20px", color: isAppointmentConfrm? 'yellow':'red'}}>{appointment}</h5>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
