import pricing from "../images/pricing.jpg";

function Pricing() {
  return (
    <>
      {/* Price Plan */}
      <div className="pricePlan">
        <div class="container">
          <div class="row">
            <div class="col-md">
              <img src={pricing} alt="" />
            </div>
            <div class="col-md pricingList">
              <div className="priceContent">
                <div
                  id="carouselExampleControls3"
                  class="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div class="carousel-inner carousel-inner-infinte">
                    <div class="carousel-item active">
                      <div class="cards-wrapper">
                        <div class="card">
                          <div class="card-body">
                            <h5 class="card-title">
                              $ <span>49</span>/Mo
                            </h5>
                            <h4>BASIC PLAN</h4>
                            <hr />
                            <div className="item">
                              <i class="fa-solid fa-check"></i>
                              <p>Full Body Message</p>
                            </div>
                            <div className="item">
                              <i class="fa-solid fa-check"></i>
                              <p>Deep Tissue Message</p>
                            </div>
                            <div className="item">
                              <i class="fa-solid fa-check"></i>
                              <p>Hot Stone Message</p>
                            </div>
                            <div className="item">
                              <i class="fa-solid fa-check"></i>
                              <p>Tissue Body Polish</p>
                            </div>
                            <div className="item">
                              <i class="fa-solid fa-check"></i>
                              <p>Foot & Nail Care </p>
                            </div>
                            <button>Order Now</button>
                          </div>
                        </div>
                        <div class="card">
                          <div class="card-body">
                            <h5 class="card-title">
                              $ <span>99</span>/Mo
                            </h5>
                            <h4>FAMILY PLAN</h4>
                            <hr />
                            <div className="item">
                              <i class="fa-solid fa-check"></i>
                              <p>Full Body Message</p>
                            </div>
                            <div className="item">
                              <i class="fa-solid fa-check"></i>
                              <p>Deep Tissue Message</p>
                            </div>
                            <div className="item">
                              <i class="fa-solid fa-check"></i>
                              <p>Hot Stone Message</p>
                            </div>
                            <div className="item">
                              <i class="fa-solid fa-check"></i>
                              <p>Tissue Body Polish</p>
                            </div>
                            <div className="item">
                              <i class="fa-solid fa-check"></i>
                              <p>Foot & Nail Care </p>
                            </div>
                            <button>Order Now</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <div class="cards-wrapper">
                        <div class="card">
                          <div class="card-body">
                            <h5 class="card-title">
                              $ <span>149</span>/Mo
                            </h5>
                            <h4>VIP PLAN</h4>
                            <hr />
                            <div className="item">
                              <i class="fa-solid fa-check"></i>
                              <p>Full Body Message</p>
                            </div>
                            <div className="item">
                              <i class="fa-solid fa-check"></i>
                              <p>Deep Tissue Message</p>
                            </div>
                            <div className="item">
                              <i class="fa-solid fa-check"></i>
                              <p>Hot Stone Message</p>
                            </div>
                            <div className="item">
                              <i class="fa-solid fa-check"></i>
                              <p>Tissue Body Polish</p>
                            </div>
                            <div className="item">
                              <i class="fa-solid fa-check"></i>
                              <p>Foot & Nail Care </p>
                            </div>
                            <button>Order Now</button>
                          </div>
                        </div>
                        <div class="card">
                          <div class="card-body">
                            <h5 class="card-title">
                              $ <span>49</span>/Mo
                            </h5>
                            <h4>BASIC PLAN</h4>
                            <hr />
                            <div className="item">
                              <i class="fa-solid fa-check"></i>
                              <p>Full Body Message</p>
                            </div>
                            <div className="item">
                              <i class="fa-solid fa-check"></i>
                              <p>Deep Tissue Message</p>
                            </div>
                            <div className="item">
                              <i class="fa-solid fa-check"></i>
                              <p>Hot Stone Message</p>
                            </div>
                            <div className="item">
                              <i class="fa-solid fa-check"></i>
                              <p>Tissue Body Polish</p>
                            </div>
                            <div className="item">
                              <i class="fa-solid fa-check"></i>
                              <p>Foot & Nail Care </p>
                            </div>
                            <button>Order Now</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a
                    class="carousel-control-prev"
                    href="#carouselExampleControls3"
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
                    href="#carouselExampleControls3"
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

export default Pricing;
