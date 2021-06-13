import React, { useState, useEffect } from "react";
import JobPositionService from "../services/jobPosition";

export default function JobPosition() {
  const [jobPositions, setJobPositions] = useState([]);

  useEffect(() => {
    let jobPositionService = new JobPositionService();
    jobPositionService.getjobPosition().then((sonuc) => {
      setJobPositions(sonuc.data.data);
    });
  }, []);

  return (
    <div>
      <div>
        <section className="section section-md bg-default text-center">
          <div className="container container-fullwidth">
            <h3>Popüler Pozisyonlar</h3>
            <div
              className="owl-carousel owl-carousel-stretch"
              data-dots="true"
              data-nav="false"
              data-stage-padding="1"
              data-loop="false"
              data-margin="26"
              data-md-margin="20"
              data-lg-margin="26"
              data-autoplay="false"
              data-autoplay-timeout="3500"
              data-mouse-drag="false"
            >
             <div className="owl-stage-outer">
             <div className="owl-stage" style={{transform: "translate3d(0px, 0px, 0px)", transition: "all 0s ease 0s"}}>
                {jobPositions.map((jobPosition) => (
                    
                    <div key={jobPosition.id} className="owl-item" style={{width: "500px", marginRight: "26px"}}><a className="box-creative" href="#">
                    <div className="box-creative-inner">
                      <div className="icon box-creative-icon mercury-icon-calc"></div>
                      <p className="box-creative-title">{jobPosition.position}</p>
                      <p>Açık Pozisyon Sayısı: </p>
                    </div>
                    <div className="box-creative-dummy"></div></a></div>
                ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
