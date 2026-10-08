import React from "react";
import '../assets/styles/Project.scss';

const projects = [
    {
        name: "Hangul Typing Tale",
        image: "/projects/hangul-typing-tale.jpg",
        role: "Lead Developer",
        status: "Released",
        engine: "Unity · C#",
        links: [
            { label: "Steam", url: "https://store.steampowered.com/app/3320380/Hangul_Typing_Tale/" },
            { label: "App Store", url: "https://apps.apple.com/us/app/hangul-typing-tale/id6737801764" },
        ],
        description: "A story-driven typing game that teaches Korean through 10+ chapters, four mini-games, boss fights, and a virtual keyboard.",
        highlights: ["Android, iOS, PC & macOS", "Five languages", "Unicode Korean input and handwriting recognition"],
    },
    {
        name: "Cat Boxing",
        image: "/projects/cat-boxing.jpg",
        role: "Lead Developer",
        status: "Released",
        engine: "Godot · GDScript",
        links: [],
        description: "A relaxing puzzle game about fitting adorable cats into tight spaces, with procedurally generated levels.",
        highlights: ["Procedural puzzles", "Eight cat and box styles", "In-app purchases and ads"],
    },
    {
        name: "Tempo Rally",
        image: "/projects/tempo-rally.jpg",
        role: "Lead Developer",
        status: "Prototype",
        engine: "Godot · GDScript",
        links: [],
        description: "A fast-paced punk rock rhythm game with a built-in map editor and community-made levels.",
        highlights: ["Song BPM detection", "Custom map import and export", "Two-player split-screen"],
    },
    {
        name: "Sa Hinh 3D",
        image: "/projects/sa-hinh-3d.jpg",
        role: "Lead Developer",
        status: "Released",
        engine: "Godot · GDScript",
        links: [
            { label: "App Store", url: "https://apps.apple.com/tw/app/h%E1%BB%8Dc-l%C3%A1i-sa-hinh-3d/id6748861501" },
        ],
        description: "A mobile driving simulator for practicing Vietnam's B1 license test across 11 real-world scenarios.",
        highlights: ["Automatic transmission simulation", "Optimized for mobile", "Lightweight web version"],
    },
    {
        name: "Van Meowsing",
        image: "/projects/van-meowsing.jpg",
        role: "Lead Developer",
        status: "Prototype",
        engine: "Godot · GDScript",
        links: [],
        description: "A roguelite bullet-heaven prototype starring a Victorian cat hunter battling a plague of mice.",
        highlights: ["Modular weapon building", "Dynamic hit effects", "Procedural item stats"],
    },
];

const gameJams = [
    { name: "Bubble It Out", image: "/projects/bubble-it-out.jpg", description: "A short narrative game about a little Tomacaro navigating a conversation between two strangers.", url: "https://vitsoonyoung.itch.io/bubble-it-out" },
    { name: "Slap Ashes", image: "/projects/slap-ashes.jpg", description: "A three-day game jam game about four vegetables searching for meaning on stage.", url: "https://vitsoonyoung.itch.io/slap-ashes" },
];

function Project() {
    return (
        <section className="projects-container" id="projects" aria-labelledby="projects-heading">
            <div className="projects-heading">
                <span className="projects-eyebrow">Selected work</span>
                <h1 id="projects-heading">Games I’ve Built</h1>
                <p>From released mobile games to prototypes and work in progress. I was the lead developer on every project shown here.</p>
            </div>
            <div className="projects-grid">
                {projects.map((project) => (
                    <article className="project-card" key={project.name}>
                        <img className="project-image" src={project.image} alt={`${project.name} gameplay`} loading="lazy" />
                        <div className="project-card-topline">
                            <span className="project-status">{project.status}</span>
                            <span className="project-engine">{project.engine}</span>
                        </div>
                        <h2>{project.name}</h2>
                        <p className="project-description">{project.description}</p>
                        <ul>{project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
                        {project.links.length > 0 && (
                            <div className="project-links" aria-label={`${project.name} stores`}>
                                {project.links.map((link) => <a href={link.url} target="_blank" rel="noreferrer" key={link.label}>{link.label} ↗</a>)}
                            </div>
                        )}
                        <span className="project-role">{project.role}</span>
                    </article>
                ))}
            </div>
            <div className="game-jams">
                <h2>Game Jam Projects</h2>
                <div className="game-jam-grid">
                    {gameJams.map((game) => (
                        <a className="game-jam-card" href={game.url} target="_blank" rel="noreferrer" key={game.name}>
                            <img className="project-image game-jam-image" src={game.image} alt={`${game.name} gameplay`} loading="lazy" />
                            <span className="game-jam-link">Play on itch.io ↗</span>
                            <h3>{game.name}</h3>
                            <p>{game.description}</p>
                            <span className="project-role">Lead Developer</span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Project;
