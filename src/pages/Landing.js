import logo from "../assets/images/logo.svg";
import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            This is a relatively simple formula that puts your job goals or main
            keyword at the very front of your profile so it gets noticed
            immediately. This will get you more clicks from recruiters and
            hiring managers looking for the skill set you highlighted in this
            tracking app. Then, there’s an opportunity to include more keywords
            and show what you’re BEST at throughout the rest of your search.
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
