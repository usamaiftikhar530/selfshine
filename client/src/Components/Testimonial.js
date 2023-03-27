import testimonial from "../images/testimonial.jpg";
import testimonial1 from "../images/testimonial-1.jpg";
import testimonial2 from "../images/testimonial-2.jpg";
import testimonial3 from "../images/testimonial-3.jpg";

function Testimonial() {
  return (
    <>
      {/* Testimonial*/}
      <div className="testimonial">
        <div class="container">
          <div class="row">
            <div class="col-md">
              <img src={testimonial} alt="" />
            </div>
            <div class="col-md clientsReview">
              <div className="clientContent">
                <h6>TESTIMONIAL</h6>
                <h1>What Our Client Say!</h1>
                <div
                  id="carouselExampleControls2"
                  class="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div class="carousel-inner carousel-inner-infinte">
                    <div class="carousel-item active">
                      <div class="cards-wrapper">
                        <div class="card">
                          <img
                            src={testimonial1}
                            class="card-img-top"
                            alt="..."
                          />
                          <i class="fa-solid fa-quote-left fa-rotate-180"></i>
                          <div class="card-body">
                            <h5 class="card-title">Client Name</h5>
                            <p>
                              Lorem ipsum dolor sit, amet consectetur
                              adipisicing elit. Maxime provident corrupti
                              similique quia doloribus officia blanditiis, fugit
                              iste dolor.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <div class="cards-wrapper">
                        <div class="card">
                          <img
                            src={testimonial2}
                            class="card-img-top"
                            alt="..."
                          />
                          <i class="fa-solid fa-quote-left fa-rotate-180"></i>
                          <div class="card-body">
                            <h5 class="card-title">Client Name</h5>
                            <p>
                              Lorem ipsum dolor sit, amet consectetur
                              adipisicing elit. Maxime provident corrupti
                              similique quia doloribus officia blanditiis, fugit
                              iste dolor.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <div class="cards-wrapper">
                        <div class="card">
                          <img
                            src={testimonial3}
                            class="card-img-top"
                            alt="..."
                          />
                          <i class="fa-solid fa-quote-left fa-rotate-180"></i>
                          <div class="card-body">
                            <h5 class="card-title">Client Name</h5>
                            <p>
                              Lorem ipsum dolor sit, amet consectetur
                              adipisicing elit. Maxime provident corrupti
                              similique quia doloribus officia blanditiis, fugit
                              iste dolor.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a
                    class="carousel-control-prev"
                    href="#carouselExampleControls2"
                    role="button"
                    data-bs-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a
                    class="carousel-control-next"
                    href="#carouselExampleControls2"
                    role="button"
                    data-bs-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="sr-only">Next</span>
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

export default Testimonial;
