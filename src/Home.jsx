import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import "./Home.css"
import { useState } from "react"
import { AboutMe } from "./paths/AboutMe.jsx"
import { Experience } from "./paths/Experience.jsx"
import { Interests } from "./paths/Interests.jsx"
import { Projects } from "./paths/Projects.jsx"

export function Home () {

  const [ showCopyMessage, setShowCopyMessage ] = useState(false);

  const [ clickControl, setClickControl ] = useState ({
    aboutMe: true,
    projects: false,
    experience: false,
    interests: false
  })

  const toggleOpen = (open) => {
    setClickControl((index) => ({
      ...Object.fromEntries(Object.keys(index).map((key) => [key, false])),
      [open]: true
    }))
  }

  const copyText = () => { 
    navigator.clipboard.writeText ("Santos.Orlando17@gmail.com"); 
    setShowCopyMessage(true);

    setTimeout (() => {
      setShowCopyMessage(false);
    }, 1000)
  }; 

  const AboutMeContent = styled.div`
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  `;

  const ExperienceContent = styled.div`
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  `;

  const InterestContent = styled.div`
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  `;

  const ProjectContent = styled.div`
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  `;

  return (
    <div>
      <div className="homeBackground">
        <div className='backgroundContainer'>
          <div className="leftBackground">
            <div className="selected ">
              <div className="indexHeader row align-items-start">
                <button onClick={() => toggleOpen ("aboutMe")} className="index col-3 col-sm-3"><span>ABOUT ME</span></button>
                <button onClick = {() => toggleOpen ("projects")} className="index projects col-3 col-sm-3"><span>MOBILE APP</span></button>
                <button onClick={() => toggleOpen ("experience")} className="index experience col-3 col-sm-3"><span>EXPERIENCE</span></button>
                <button onClick={() => toggleOpen ("interests")} className="index col-3 col-sm-3"><span>DESIGNS</span></button>
              </div>
            </div>
            <div className="homeLine"></div>
            <div className="detailBody">
              {clickControl.aboutMe && (
              <div className='myAboutMe'>
                <h6>ABOUT ME</h6>
                <p>
                  My journey began in Architecture, where I was captivated by the creativity of transforming ideas into built form. With a passion for drawing and design, I found joy in sketching and bringing concepts to life, both on paper and through digital tools.

                  <br /><br />

                  As an Architectural Designer, I collaborated closely with teams throughout the building design process. I contributed to renderings and design packages for planning departments, helping to clearly and effectively communicate design intent. During this time, I developed a strong interest in the technological side of design. I became highly proficient in Autodesk Revit, mastering its capabilities and exploring how automation could streamline architectural workflows.

                  <br /><br />

                  Driven by a passion project, I enrolled at Actualize, where I discovered that my love for design translated seamlessly into the digital space. Combining my new technical skills with my lifelong love of surfing, I created A-Frame, a user-friendly surf forecast app.

                  <br /><br />

                  Today, I’m transitioning into a career in UI/UX design, where I aim to blend architectural thinking, technical problem-solving, and collaborative skills to craft seamless and impactful digital experiences.
                </p> 

              <div className="mySitesContainer">
              <h5 className="mySites">MY SITES</h5>
              <div className="container text-start">
                <div className="myLinks row">
                  <div className="col-3 col-sm-3">
                    <a href='https://github.com/Osantos17'><img className="connection git" src="/assets/git.png" alt="GitHub" /></a>
                  </div>
                  <div className="col-3 col-sm-3">
                    <a href='https://apps.apple.com/us/app/a-frame-surf-forecast/id6741837362'><img className="connection link" src="/assets/AFrame.png" alt="AFrame" /></a>
                  </div>
                  <div className="col-3 col-sm-3">
                    <a href='https://linkedin.com/in/orlandosantos17'><img className="connection link" src="/assets/linkedin.png" alt="LinkedIn" /></a>
                  </div>
                  <div className="col-3 col-sm-3">
                    <span className="gmail" onClick={copyText}><img className="connection gmailIcon" src="/assets/gmail.png" alt="Gmail" /></span>
                  </div>
                </div>
              </div>

              {showCopyMessage && (
                  <div className="copiedAlert">Copied!</div>
                )} 
            </div>  


              </div>)}
              {clickControl.projects && (
              <div className="myapps">
                <h6>A-FRAME</h6>
                <p>A-Frame Surf Forecast is my passion project, now live on iOS and soon to be out on android as well. Developed using TypeScript, Python, React Native, Expo Go, and Tailwind, the app was born from my love of surfing and a desire to create a more user-friendly forecasting tool for the surf community. Based off of feedback I am currently adding a favorites page and a new swell and wind condition for greater forecast accuracy. With plans to expand to Australia I have also added a conversion from imperial to metric units.
                <br /><br />
                FORECAST 
                <br />
                This layout is what originally inspired me to create and publish the app. By aligning the surf data and rating vertically to the tide graph , users can quickly absorb all the essentials without needing to scroll. The interface provides a full 7-day forecast and enables effortless swiping between nearby surf, making it easy to compare conditions across nearby locations. The result is a streamlined, intuitive experience that keeps everything surfers need in one clean, connected view.
                <br /><br />
                MAP
                <br />
                Using geolocation, A-Frame displays nearby surf spots directly on the map. Tapping a location opens a bottom sheet that surfaces all the essential forecast data surfers need to make informed decisions. From within the bottom sheet, users can also seamlessly swipe or click through nearby locations—making it easy to compare conditions without leaving the view.
                <br /><br />
                LOCAL
                <br />
                Using a 50-mile radius, this feature filters surf locations by overall rating and displays their distance and cardinal direction relative to your current location. It also includes a quick link to open directions in your maps app. Whether you're checking local spots at home or exploring new breaks on a surf trip, it's an easy way to view all surfable locations at a glance.
                </p>
              </div> )}
              {clickControl.experience && (
              <div className='myExperience'>
                <h6>EXPERIENCE</h6>
                <p>
                Leading everything from the logo to the interface taught me how closely designers and developers need to work together. Turning complex surf data into simple visuals showed me how powerful clear, intuitive design can be. Building interactive charts and a mobile-first layout helped me get a real feel for responsive UI and how people use data on their phones.
                <br /><br />
                Building custom Revit plugins gave me hands-on experience designing with real users in mind. I worked closely with testers to figure out which tools were actually helpful and how to lay them out in a way that made sense. I also worked with our IT team during a systems update to get everything implemented. I had to guide them through where files needed to go and how to set things up so the tools would work properly in our workflows.
                <br /><br />
                Working as a designer gave me a strong foundation in visual communication and cross-team collaboration. I spent a lot of time creating detailed design layouts and presentation packages that translated complex building ideas into something clear and easy to understand. Overseeing renderings and sketches taught me how to guide visual direction and maintain consistency across a project.

                </p>
                
              </div>)}
              {clickControl.interests && (
              <div className="myinterests">
                <h6 className="projectName">SOUTHLINE</h6>
                <p> 
                  Having six 6-7 Story Office/Tech/Life Science buildings, 3 garages, and an amenities building. Phase 1 only consisted of two buildings, amenities, and a parking garage. While coordinating phase 1, we still needed to consider the future phases. For this project, I set up project and site coordinates, the modeling approach for the office buildings, loading/maintaining all families, and many other Revit duties. Throughout the lifespan of this project, I would spend most of my time in BIM 360 coordinating uploads and consumption, folder structure, and permissions.
                </p>
                <h6 className="projectName">HARBOR VIEW</h6>
                <p> 
                  This site contains three 6-7 story buildings, a garage, and an amenities building. I took on the usual BIM tasks of setting up the site coordinates and coordinating that with consultants, BIM 360 set up, and selecting teams for each structure. The design of these buildings had a lot of curvature compared to typical buildings, so a lot of my time for this campus was spent ensuring accuracy and assisting the teams. A highlight of mine is creating an accurate 3D exterior pattern which consisted of 4 patterns, 3 colors on a curved surface; I managed to achieve this with a railing. 
                </p>
                <h6 className="projectName">WOODWORKING</h6>
                <p> 
                What brings me the greatest joy in woodworking is creating pieces that are both visually pleasing and highly functional. Every detail must be designed perfectly because once the first cut is made, there’s no turning back. Crafting my son’s crib from a walnut slab was by far my proudest—and most challenging—project, but I truly enjoy every build I take on. Some projects focus more on function than elaborate design, yet the careful planning and forethought required before making any cut remain the same for every piece.
                </p>
              </div> )}
            </div>
           
          </div>
          <div className='rightBackground'>
              {clickControl.aboutMe && (
              <AboutMeContent>
                <AboutMe />
              </AboutMeContent>
              )}
              {clickControl.experience && (
              <ExperienceContent>
                <Experience />
              </ExperienceContent>
              )}
              {clickControl.interests && (
              <InterestContent>
                <Interests />
              </InterestContent>
              )}
              {clickControl.projects && (
              <ProjectContent>
                <Projects />
              </ProjectContent>
              )}
          </div> 
        </div>
      </div>
    </div>
  )
}