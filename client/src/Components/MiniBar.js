function MiniBar() {
  return (
    <>
      {/* // MiniBar */}
      <div className="miniBar">
        <div className="info">
          <i className="fa-solid fa-phone phoneLogo"></i>
          <p>073 0838 1217</p>
          <i className="fa fa-envelope"></i>
          <p>info@example.com</p>
        </div>

        <div className="socialIcons">
          <a href="#">
            <i class="fa-brands fa-facebook-f"></i>
          </a>
          <a href="#">
            <i class="fa-brands fa-twitter"></i>
          </a>
          <a href="#">
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a href="#">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a href="#">
            <i class="fa-brands fa-youtube"></i>
          </a>
        </div>
      </div>
    </>
  );
}

export default MiniBar;
