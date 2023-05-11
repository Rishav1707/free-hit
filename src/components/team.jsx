import con1 from "../images/4.png";
import con2 from "../images/1.png";
import con3 from "../images/3.png";
import con4 from "../images/coworking.png";

const Team = () => {
  return (
    <section class="team">
      <div class="center">
        <h1>Our Beloved contributors</h1>
      </div>

      <div class="team-content">
        <div class="box">
          <img src={con1} />
          <h3>Abshiek k</h3>
          <h5>Designer</h5>
          <div class="icons">
            <a href="https://twitter.com/bobsstwt"><i class="ri-twitter-fill"></i></a>
            <a href="https://github.com/bobbyy16"><i class="ri-github-fill"></i></a>
            <a href="https://www.linkedin.com/in/abhishek-k-7597771ba/"><i class="ri-linkedin-fill"></i></a>
          </div>
        </div>

        <div class="box">
          <img src={con2} />
          <h3>Priyankar</h3>
          <h5>Developer</h5>
          <div class="icons">
            <a href="https://twitter.com/Priyankarpal"><i class="ri-twitter-fill"></i></a>
            <a href="https://github.com/priyankarpal"><i class="ri-github-fill"></i></a>
            <a href="https://www.linkedin.com/in/priyankarpal/"><i class="ri-linkedin-fill"></i></a>
          </div>
        </div>

        <div class="box">
          <img src={con3} />
          <h3>Jason Dsouza</h3>
          <h5>Developer</h5>
          <div class="icons">
            <a href="https://twitter.com/_Jason_Dsouza"><i class="ri-twitter-fill"></i></a>
            <a href="http://github.com/JasonDsouza212"><i class="ri-github-fill"></i></a>
            <a href="https://www.linkedin.com/in/jason-dsouza-130b421ba/"><i class="ri-linkedin-fill"></i></a>
          </div>
        </div>

        <div class="box">
          <img src={con4} />
          <h3> Open-Source</h3>
          <h5>Community</h5>
          <div class="icons">
            <a href="https://github.com/JasonDsouza212/free-hit/graphs/contributors"><i class="ri-github-fill"></i></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;