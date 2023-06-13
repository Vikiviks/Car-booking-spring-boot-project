import "../components/bookingconform.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
function Conform() {
  
  return (
    <>
      <div>
        <Link to="/" style={{ marginLeft: "10px" }}>
          <ArrowBackIcon />
        </Link>
      </div>
      <div  className="allcodepen">
        <div></div>

        <aside class="profile-card">
          <header>
            <a target="_blank" href="#">
              <img
                src="http://lorempixel.com/150/150/people/"
                class="hoverZoomLink"
              />
            </a>

            <h1 id="h1">Booking Conformed</h1>

            <h2 id="h2">Status:Success</h2>
          </header>

          <div class="profile-bio">
            <p>
             Thankyou for booking in CarVault.Smile with crossing miles❤️
            </p>
              <button id="last"><Link to="/home"  style={{color:'white'}} >back</Link></button>
          </div>

          <ul class="profile-social-links">
            <li>
              <a target="_blank" href="https://www.facebook.com/creativedonut">
                <i class="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a target="_blank" href="https://twitter.com/dropyourbass">
                <i class="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a target="_blank" href="https://github.com/vipulsaxena">
                <i class="fa fa-github"></i>
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.behance.net/vipulsaxena">
                <i class="fa fa-behance"></i>
              </a>
            </li>
          </ul>
        </aside>
      </div>
    </>
  );
}
export default Conform;
