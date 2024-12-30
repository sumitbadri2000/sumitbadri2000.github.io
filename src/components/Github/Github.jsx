import GitHubCalendar from "react-github-calendar";
import "./Github.css";
function Github() {
  return (
    <div className="github">
      <div className="fdiv">
        <h1 className="center">GITHUB STATS</h1>
        <div className="stats">
          <a href="https://github.com/sumitbadri2000" target="black">
            <img
              className="img"
              alt=""
              src="https://github-readme-stats.vercel.app/api?username=sumitbadri2000&count_private=true&show_icons=true"
            />
          </a>
        </div>
      </div>
      <div className="sdiv">
        <h1 className="center">GITHUB CALENDAR</h1>
        <GitHubCalendar
          className="GitHubCalendar"
          username="sumitbadri2000"
          blockRadius={20}
          style={{ margin: "auto", marginTop: "10px"}}
          loading={false}
          blockSize={15}
          blockMargin={4}
          fontSize={14}
          hideColorLegend={true}
          showWeekdayLabels={true}
        />
      </div>
    </div>
  );
}

export default Github;
