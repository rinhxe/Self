import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad, faMobileScreenButton, faServer } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const gameTechnologies = [
    "Godot 4",
    "Unity",
];

const mobileTechnologies = [
    "React Native",
    "Flutter",
    "Dart",
    "Kotlin",
    "Java",
];

const backendTechnologies = [
    "TypeScript",
    "Node.js",
    "Firebase",
    "PostgreSQL",
    "MongoDB",
    "GitHub Actions",
    "Linux",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faGamepad} size="3x"/>
                    <h3>Game Development</h3>
                    <p>Building interactive game experiences and exploring gameplay systems with Godot 4 and Unity.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {gameTechnologies.map((label) => (
                            <Chip key={label} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faMobileScreenButton} size="3x"/>
                    <h3>Mobile &amp; Cross-platform Apps</h3>
                    <p>Creating apps across mobile platforms with a focus on practical features, performance, and maintainable code.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {mobileTechnologies.map((label) => (
                            <Chip key={label} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faServer} size="3x"/>
                    <h3>Backend &amp; Connected Apps</h3>
                    <p>Connecting applications to reliable services and data with clean architecture and an emphasis on useful, connected experiences.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {backendTechnologies.map((label) => (
                            <Chip key={label} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;