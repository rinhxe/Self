import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faGamepad, faMobileScreenButton } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="approach">
      <div className="items-container">
        <h1>How I Build</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGamepad} />}
          >
            <h3 className="vertical-timeline-element-title">Playful, connected experiences</h3>
            <p>
              I enjoy building games and applications that bring people together, from gameplay experiments to Steam-connected prototypes.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faMobileScreenButton} />}
          >
            <h3 className="vertical-timeline-element-title">Cross-platform by design</h3>
            <p>
              I work across game, mobile, and web technologies to build useful applications for different platforms.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faCode} />}
          >
            <h3 className="vertical-timeline-element-title">Clean, maintainable code</h3>
            <p>
              I value thoughtful architecture, performance, and code that is easy to understand and extend.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;