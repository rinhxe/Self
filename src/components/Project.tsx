import React from "react";
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Selected Projects</h1>
        <div className="projects-grid">
            <article className="project">
                <div className="project-mark" aria-hidden="true">GODOT / STEAM</div>
                <a href="https://github.com/rinhxe/GodotSteam-Lobby" target="_blank" rel="noreferrer"><h2>GodotSteam Lobby</h2></a>
                <p>A Godot 4 scene scaffold for hosting and joining Steam lobbies, with player lists, chat, invites, and lobby management.</p>
                <a className="project-link" href="https://github.com/rinhxe/GodotSteam-Lobby" target="_blank" rel="noreferrer">View repository</a>
            </article>
            <article className="project">
                <div className="project-mark" aria-hidden="true">GODOT / VOICE</div>
                <a href="https://github.com/rinhxe/GodotSteamVoiceChat" target="_blank" rel="noreferrer"><h2>Godot Steam Voice Test</h2></a>
                <p>A Godot 4 project exploring Steam voice recording and playback alongside Steam lobbies and multiplayer transport.</p>
                <a className="project-link" href="https://github.com/rinhxe/GodotSteamVoiceChat" target="_blank" rel="noreferrer">View repository</a>
            </article>
            <article className="project">
                <div className="project-mark" aria-hidden="true">GODOT / ANDROID</div>
                <a href="https://github.com/rinhxe/Godot-Android-Plugin-Template-main" target="_blank" rel="noreferrer"><h2>Godot Android Plugin Template</h2></a>
                <p>A quickstart template for building Android plugins for Godot 4, with a demo project and a preconfigured Gradle build.</p>
                <a className="project-link" href="https://github.com/rinhxe/Godot-Android-Plugin-Template-main" target="_blank" rel="noreferrer">View repository</a>
            </article>
            <article className="project">
                <div className="project-mark" aria-hidden="true">UNITY / C#</div>
                <a href="https://github.com/rinhxe/rinxeLib" target="_blank" rel="noreferrer"><h2>rinxeLib</h2></a>
                <p>A small utility library for Unity, built in C#.</p>
                <a className="project-link" href="https://github.com/rinhxe/rinxeLib" target="_blank" rel="noreferrer">View repository</a>
            </article>
        </div>
    </div>
    );
}

export default Project;