import team1 from "../images/team-1.jpg";
import team2 from "../images/team-2.jpg";
import team3 from "../images/team-3.jpg";
import team4 from "../images/team-4.jpg";

function OurTeam() {
  return (
    <>
      {/* Spa Team */}
      <div className="spaTeam">
        <h6>SPA SPECIALIST</h6>
        <h1>Spa & Beauty Specialist</h1>
        <div class="container">
          <div class="row">
            <div class="col-md teamMember">
              <img src={team1} alt="" />
              <div className="content">
                <h4>OLIVIA MIA</h4>
                <h5>Spa & Beauty Expert</h5>
              </div>
            </div>
            <div class="col-md teamMember">
              <img src={team2} alt="" />
              <div className="content">
                <h4>CORY BROWN</h4>
                <h5>Spa & Beauty Expert</h5>
              </div>
            </div>
            <div class="col-md teamMember">
              <img src={team3} alt="" />
              <div className="content">
                <h4>ELIZABETH</h4>
                <h5>Spa & Beauty Expert</h5>
              </div>
            </div>
            <div class="col-md teamMember">
              <img src={team4} alt="" />
              <div className="content">
                <h4>KELLY WALKE</h4>
                <h5>Spa & Beauty Expert</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurTeam;
