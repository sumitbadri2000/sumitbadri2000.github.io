import "./Project.css";
import nykaa from "../../logo/nykaa.png";
import bepretty from "../../logo/bepretty.png";
import crew from "../../logo/crew.png";
import fabulous from "../../logo/fabulous.png";

function Project() {
  return (
    <div id="projects">
      <h1 className="project_h1">PROJECTS</h1>
      <div id="project">
        <div className="flexs">
          <div>
            <img className="img" src={fabulous} alt="fins" />
          </div>
          <div className="info">
            <h3 className="headings add">Fabulous Find</h3>
            <p className="headings">
              One brand, many companies, and many people that’s us in a
              nutshell. Spread all over the world, we have a passion for home
              furnishing and an inspiring shared vision.
            </p>
            <div className="tech">
              <p>Tech Stack - </p>
              <p className="color">
                HTML | CSS | JavaScript | React | Chakra-UI
              </p>
            </div>
            <div className="website">
              <a href="https://rococo-sawine-4218f1.netlify.app" target="blank">
                <button className="link">Deploy Link</button>
              </a>
              <a
                href="https://github.com/sumitbadri2000/ikea-clone"
                target="blank">
                <button className="link">Github</button>
              </a>
            </div>
          </div>
        </div>
        <div className="flexs">
          <div>
            <img className="img" src={nykaa} alt="nykaa" />
          </div>
          <div className="info">
            <h3 className="headings add">Nykaa</h3>
            <p className="headings">
              Nykaa is an Indian e-commerce company, founded by Falguni Nayar in
              2012 and headquartered in Mumbai. It sells beauty, wellness and
              fashion products across websites, mobile apps.
            </p>
            <div className="tech">
              <p>Tech Stack - </p>
              <p className="color">HTML | CSS | JavaScript</p>
            </div>
            <div className="website">
              <a href="https://nykac.vercel.app/" target="blank">
                <button className="link">Deploy Link</button>
              </a>
              <a
                href="https://github.com/mak-1997/groovy-airplane-6414/tree/main"
                target="blank">
                <button className="link">Github</button>
              </a>
            </div>
          </div>
        </div>
        <div className="flexs">
          <div>
            <img className="img" src={bepretty} alt="bepretty" />
          </div>
          <div className="info">
            <h3 className="headings add">BePreety</h3>
            <p className="headings">
              MyGlamm was founded in 2015 by Darpan Sanghvi as an at-home beauty
              salon service.In 2017, it was relaunched as an online cosmetic
              beauty company in India.
            </p>
            <div className="tech">
              <p>Tech Stack - </p>
              <p className="color">HTML| CSS | JavaScript</p>
            </div>
            <div className="website">
              <a
                href="https://fantastic-piroshki-8229c8.netlify.app/"
                target="blank">
                <button className="link">Deploy Link</button>
              </a>
              <a
                href="https://github.com/hariom722581343/glamorous-snails-6242"
                target="blank">
                <button className="link">Github</button>
              </a>
            </div>
          </div>
        </div>
        <div className="flexs">
          <div>
            <img className="img" src={crew} alt="crew" />
          </div>
          <div className="info">
            <h3 className="headings add">CrewStore</h3>
            <p className="headings">
              It's a Clone of J.Crew. J.Crew is an American multi-brand,
              specialty retailer. The company offers an assortment of women's,
              men's, and children's apparel and accessories.
            </p>
            <div className="tech">
              <p>Tech Stack - </p>
              <p className="color">
                HTML | CSS | JavaScript | React | Chakra-UI
              </p>
            </div>
            <div className="website">
              <a href="https://cute-elf-8e4002.netlify.app/" target="blank">
                <button className="link">Deploy Link</button>
              </a>
              <a
                href="https://github.com/sumitbadri2000/flowing-talk-2021"
                target="blank">
                <button className="link">Github</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
