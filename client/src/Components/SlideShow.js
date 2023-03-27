import carousel1 from "../images/carousel-1.jpg";
import carousel2 from "../images/carousel-2.jpg";
import carousel3 from "../images/carousel-3.jpg";

function SlideShow() {
  return (
    <>
      {/* Slide Show */}
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <a href="#" className="appointBtn">
          Make Appointment
        </a>
        <ol class="carousel-indicators">
          <li
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
          ></li>
          <li
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
          ></li>
          <li
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
          ></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block slideImg" src={carousel1} alt="First slide" />

            <div class="carousel-caption">
              <p>Spa & Beauty Center</p>
              <h1>Message Treatment</h1>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img class="d-block slideImg" src={carousel2} alt="Second slide" />
            <div class="carousel-caption">
              <p>Spa & Beauty Center</p>
              <h1>Facial Treatment</h1>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img class="d-block slideImg" src={carousel3} alt="Third slide" />
            <div class="carousel-caption">
              <p>Spa & Beauty Center</p>
              <h1>Cellulite Treatment</h1>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </>
  );
}

export default SlideShow;
