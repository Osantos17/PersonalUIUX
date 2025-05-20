import "./Projects.css";
import styled from "styled-components";

export function Projects() {

  const LogoContainerContent = styled.div`
    height: 90vh;
  `;

  return (
    <div className="logoContainerContent">
      <LogoContainerContent>
        <div className="logoContainer">
          <div className="container text-center">
            <div className="row justify-content-evenly">
              
              <div className="col-md-4 phone">
                <h5 className="title mt-2">- Forecast -</h5>
                <img className="img-fluid aframe" src="/assets/Aframe/ForecastNew.png" />
              </div>

      
              <div className="col-md-4 phone">
                <h5 className="title mt-2">- Map -</h5>
                <img className="img-fluid aframe" src="/assets/Aframe/NewMap.png" />
              </div>

              
              <div className="col-md-4 phone">
                <h5 className="title mt-2">- Local -</h5>
                <img className="img-fluid aframe" src="/assets/Aframe/LocalNew.png" />
              </div>
            </div>
          </div>
        </div>
      </LogoContainerContent>
    </div>
  );
}
