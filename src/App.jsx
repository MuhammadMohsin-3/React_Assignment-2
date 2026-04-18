import "./App.css";

function App() {
  const developers = [
    {
      id: 1,
      name: "Mohsin kahn",
      profession: "Frontend Developer",
      experience: 2,
      bio: "Building smooth and modern UI experiences with React.",
      skills: ["HTML", "CSS", "JavaScript", "React"],
      img: "https://api.dicebear.com/7.x/adventurer/svg?seed=Zeeshan",
      btnColor: "#6c5ce7"
    },
    {
      id: 2,
      name: "Faiz khan",
      profession: "UI/UX Designer",
      experience: 3,
      bio: "Designing clean, user-friendly and modern interfaces.",
      skills: ["Figma", "Tailwind", "React", "Next.js"],
      img: "https://api.dicebear.com/7.x/adventurer/svg?seed=Ali",
      btnColor: "#00b894"
    },
    {
      id: 3,
      name: "Fawad khan",
      profession: "Full Stack Developer",
      experience: 5,
      bio: "Creating scalable backend systems with modern tech.",
      skills: ["Node.js", "MongoDB", "React", "Express"],
      img: "https://api.dicebear.com/7.x/adventurer/svg?seed=Sara",
      btnColor: "#d63031"
    }
  ];

  return (
    <>
      <header className="header">
        <h1>Dev Network</h1>
        <p>Meet Our Professional Team</p>
      </header>

      <div className="container">
        {developers.map((dev) => (
          <div className="profile-card" key={dev.id}>
            <img src={dev.img} alt={dev.name} className="profile-image" />

            <h2>{dev.name}</h2>
            <p className="role">{dev.profession}</p>
            <p className="exp">{dev.experience}+ Years Experience</p>

            <p className="bio">{dev.bio}</p>

            <div className="skills">
              {dev.skills.map((skill, index) => (
                <span key={index}>{skill}</span>
              ))}
            </div>

            <button style={{ background: dev.btnColor }}>
              Contact {dev.name.split(" ")[0]}
            </button>
          </div>
        ))}
      </div>

      <footer className="footer">
        <p>© 2026 Dev Network</p>
      </footer>
    </>
  );
}

export default App;