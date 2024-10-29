export default function Resume() {
  return (
    <div className="background">
    <h1>Resume</h1>

    <a href="public/Resume.pdf" download className="download-link">
      Download Resume
    </a>

    <h3 className="skillz">Proficiencies: </h3>

    <ul className="skillz">
      <li>HTML</li>
      <li>Basic Javascript and Typescript</li>
      <li>Command Line Applications</li>
      <li>SQL Databases</li>
    </ul>
  </div>
  );
}
