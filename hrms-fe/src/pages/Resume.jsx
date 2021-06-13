import React, { useEffect, useState } from "react";
import ResumeService from "../services/resumeService";

export default function Resume() {
  const [resumes, setResumes] = useState([]);

  useEffect(() => {
    let resumeService = new ResumeService();
    resumeService.getResumes().then((result) => setResumes(result.data.data));
  }, []);

  return (
    
      <section className="section section-sm bg-default">
        <div className="container">
          <h3 className="text-center">Son Eklenen CV'ler</h3>

          <div
            className="owl-carousel owl-carousel-profile"
            data-items="1"
            data-sm-items="2"
            data-md-items="3"
            data-lg-items="4"
            data-dots="true"
            data-nav="false"
            data-stage-padding="0"
            data-loop="false"
            data-fade="true"
            data-margin="30"
            data-mouse-drag="false"
          >
             
            {resumes.slice(0, 3).map((resume) => (
              <div key={resume.id}>
                <a
                  className="owl-carousel-profile profile-classic"
                  href="resume-page.html"
                >
                  <figure className="profile-classic-figure">
                    <img
                      className="profile-classic-image"
                      src={resume.photo}
                      alt=""
                      width="266"
                      height="219"
                    />
                  </figure>
                  <div className="profile-classic-main">
                    <h5 className="profile-classic-name">
                      {resume.candidateName + " " + resume.candidateSurname}
                    </h5>
                    <ul className="profile-classic-list">
                      <li>Son Pozisyonlar</li>
                      {resume.jobExperiences.slice(0, 1).map((exp) => (
                        <li key={exp.id}>
                          <span className="icon mdi mdi-account"></span>
                          <span>{exp.jobPosition.position}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </a>
              </div>
            ))}
            </div>
          </div>
        
      </section>
    
  );
}
