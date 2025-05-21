import "./Experience.css"
import styled from "styled-components";

export function Experience () {

  const Experience = styled.div`
    height: 80vh;
    overflow-y: scroll;
    overflow-x: hidden;
  `;


  return(
    <div className="experienceContainer">
      <div className="experiencePage">
        <Experience>
        <div className="skills ">
          <h5 className="resumeHeader">SKILLS</h5>
          <div className="horizontalLine"></div>
          <div className="skillsBody">
          <span className="skillsLine">
           <strong className="bodyHeaader">LANGUAGES: </strong>Typescript, Javascript, Python, HTML, CSS</span>
            <br />
            <span className="skillsLine"><strong className="bodyHeaader">FRAMEWORK/LIBRARIES: </strong>React Native, React, Expo Go, Tailwind, Bootstrap</span>
            <br />
            <span className="skillsLine"><strong className="bodyHeaader">DATABASE/TOOLS: </strong>Postgres, APIs, Git, GitHub, Heroku, Vite, Node.js</span>
          </div>  
        </div>
        <div className="education">
          <h5 className="resumeHeader">EDUCATION</h5>
          <div className="horizontalLine"></div>
          <div className = "educationBody">
            <div className="bootcamp row">
              <div className="bodyHeaader col-auto me-auto">ACTUALIZE CODING BOOTCAMP | CERTIFICATE IN FULL STACK WEB DEVELOPMENT</div>
              <div className="dates col-auto">Jul 2023 - Oct 2023</div>
            </div>
            <div className="details">
            A four-month full-stack web development bootcamp. Core technologies included Javascript, Ruby, Rails, and React.js. Special emphasis on API-driven development, version control with Git, professional tooling, team collaboration, and continual learning.
            </div>
            <div className="row">
              <div className="bodyHeaader col-auto me-auto">
                UNIVERSITY OF SAN FRANCISCO | BACHELOR OF ARTS IN ARCHITECTURE AND COMMUNITY DESIGN
              </div>
              <div className="dates col-auto">
                2014
              </div>
            </div>
          </div>  
        </div>
        <div className="employment">
          <h5 className="resumeHeader">EMPLOYMENT</h5>
          <div className="horizontalLine"></div>
          <div className="employmentBody ">
            <div className="row">
            <div className="desEmployment row ">
                <div className="bodyHeaader col-auto me-auto">
                  A-FRAME: SURF FORECAST
                </div>
              <div className="dates col-auto">
                Feb 2025 - Current
              </div>
            </div>
            <div className="drafter row">
              <div className="bodyHeader2 col-auto me-auto">
                FOUNDER & DEVELOPER
              </div> 
            </div>  
            <div className="DES">
              <div className="desDetails">
                - Created full visual identity, including logo, typography, color palette, and layout< br />
                - Developed a dynamic rating system that adjusts based on wind and swell direction/strength< br />
                - Prioritized user clarity by simplifying complex surf data into digestible visuals< br />
                - Built interactive tide and swell charts using Skia and D3.js optimized for mobile UX< br />
                - Coded the app using React Native, TypeScript, and a Python backend< br />
                - Integrated Apple Maps, API data, and custom components like bottom sheets< br />
                - Managed data with PostgreSQL and Postico, deployed with Heroku< br />
                - Used Git for version control and collaborative development workflows< br />
              </div>
            </div>
              <div className="desEmployment row ">
                <div className="bodyHeaader col-auto me-auto">
                  BDE ARCHITECTS
                </div>
              <div className="dates col-auto">
                April 2024 - Current
              </div>
            </div>
            <div className="drafter row">
              <div className="bodyHeader2 col-auto me-auto">
                BIM SPECIALIST
              </div> 
            </div>  
            <div className="DES">
              <div className="desDetails">
                - Developed custom Revit plugins using IronPython and pyRevit to streamline modeling workflows< br />
                - Partnered with IT to roll out plugins office-wide, ensuring compatibility and performance< br />
                - Collaborated directly with architecture staff to gather feedback and identify automation needs< br />
                - Led efforts to expand and organize the Revit Family Library, prioritizing usability and visual consistency< br />
                - Supported interior design workflows, with a focus on multi-family residential projects< br />
                - Provided cross-team support and training, helping teams adopt tools more effectively< br />
                - Maintained BIM 360 models and coordinated project data across departments< br />
              </div>
            </div>
          </div>
            <div className="desEmployment row ">
              <div className="bodyHeaader col-auto me-auto">
                DES ARCHITECTS + ENGINEERS
              </div>
              <div className="dates col-auto">
                Jan 2017 - Jun 2023
              </div>
            </div>
            <div className="drafter row">
              <div className="bodyHeader2 col-auto me-auto">
                LEAD DRAFTER | BIM COORDINATOR
              </div> 
              <div className="dates col-auto">
                Jan 2020
              </div>
            </div>  
            <div className="DES">
              <div className="desDetails">
                - Created and maintained Revit models for core & shell commercial buildings up to LOD 350< br />
                - Led QC for Revit families, templates, and plug-ins across Architecture, Interiors, and Structural teams< br />
                - Delivered monthly internal Revit training sessions to a 150+ person office< br />
                - Converted as-builts into Revit from blueprints, AutoCAD, and SketchUp sources< br />
                - Coordinated with MEP/Civil consultants to ensure accurate model integration< br />
                - Performed MEP clash detection using Navisworks, flagging and resolving coordination issues< br />
                - Managed BIM 360 worksharing and supported technical troubleshooting across offices< br />
              </div>
              <div className="designer row">   
                <div className="bodyHeader2 col-auto me-auto">
                  DESIGNER
                </div> 
                <div className="dates col-auto">
                  Jan 2017
                </div>
              </div>
              <div className="desDetails">
                - Design multi-page layouts for city/clients showing Architectural design intent<br />
                - Collaborate with clients to establish a design direction<br />
                - Directly oversaw the renderings produced by the graphics team<br />
                - Sketch, brainstorm and critique with design team<br />
              </div>
            </div>  
            <div className="row">
              <strong className="bodyHeaader col-auto me-auto">
                CSDA DESIGN GROUP
              </strong> 
              <div className="dates col-auto">
                Jun 2014 - Dec 2017
              </div>
            </div>
            <div className="CSDA">
              <div className="desDetails">
                - Research and implement add-ins for Revit users<br />
                - Generate 3-D building from illustrations and concepts<br />
              </div>
            </div>  
          </div>
        </div>
        </Experience>
      </div>  
    </div>
  )
}