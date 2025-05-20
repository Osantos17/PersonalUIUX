import './Interests.css'
import styled from "styled-components";

export function Interests() {
  const SouthlineContent = styled.div`
    height: 25vh;
    width: 90%;
    overflow-x: scroll;
  `;

  const HarborViewContent = styled.div`
    height: 25vh;
    width: 90%;
    overflow-x: scroll;
  `;

  const MT2Content = styled.div`
  height: 25vh;
  width: 90%;
  overflow-x: scroll;
  `;

  return (
    <div className="interestsContainer">
      <div className="containerSouthline">
        <SouthlineContent>
          <div className="imagesContainer">
            {/* <h3 className="imgCategory">SOUTHLINE</h3> */}
            <img className="images" src="/assets/Southline/SL-Cover.png" alt="Cover" />
            <img className="images" src="/assets/Southline/SL-Site-Plan.png" alt="Site" />
            <img className="images" src="/assets/Southline/SL-B1.png" alt="B1" />
            <img className="images" src="/assets/Southline/SL-B1-2.png" alt="B1" />
            <img className="images" src="/assets/Southline/SL-Night.png" alt="Night" />
          </div>
        </SouthlineContent>
      </div>
      <div className="containerHarborView"> 
        <HarborViewContent>
          <div className="imagesContainer">
            {/* <h3 className="imgCategory">HARBOR VIEW</h3> */}
            <img className="images" src="/assets/HarborView/HV-Cover.png" alt="Cover" />
            <img className="images" src="/assets/HarborView/HV-Info.png" alt="Info" />
            <img className="images" src="/assets/HarborView/HV-Site.png" alt="Site" />
            <img className="images" src="/assets/HarborView/HV-Amenities.png" alt="Amenities" />
            <img className="images" src="/assets/HarborView/HV-Bird.png" alt="Bird" />
            <img className="images" src="/assets/HarborView/HV-Roof.png" alt="Roof" />
          </div>
        </HarborViewContent>
      </div>
      <div className="containerMT2"> 
        <MT2Content>
          <div className="imagesContainer">
            {/* <h3 className="imgCategory">MOFFETT TOWERS</h3> */}
            <img className="images" src="/assets/Woodworking/Crib.jpg" alt="Crib" />
            <img className="images" src="/assets/Woodworking/Coop.jpg" alt="Coop" />
            <img className="images" src="/assets/Woodworking/ToddleTower.jpg" alt="Tower" />
            <img className="images" src="/assets/Woodworking/FirePit.jpg" alt="Fire" />
            <img className="images" src="/assets/Woodworking/Wine.jpg" alt="Wind" />
            <img className="images" src="/assets/Woodworking/Changing.jpg" alt="Change" />
          </div>
        </MT2Content>
      </div>  
    </div>
  );
}
