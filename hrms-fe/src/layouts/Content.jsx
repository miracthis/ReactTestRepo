import React from 'react'
import Employer from '../pages/Employer'
import JobPosition from '../pages/JobPosition'
import JobPosting from '../pages/JobPosting'
import Resume from '../pages/Resume'


export default function Content() {
    return (
        <div>
    <section className="section section-md bg-default text-center">
        <div className="container">
          <h3><span className="text-primary">Jobs</span>Factory'e Hoş Geldiniz</h3>
          <p className="text-spacing-05">Onaylanmış iş ilanı ve cv havuzumuzda hedefinize hızla ulaşın.</p>
          <div className="row row-50 justify-content-center align-items-center text-left">
            <div className="col-md-10 col-lg-6">
              <figure className="figure-responsive block-5"><img src="./assets/images/home-2-540x413.jpg" alt="" width="540" height="413"/>
              </figure>
            </div>
            <div className="col-md-10 col-lg-6">
              <div className="row row-50 row-xl-70">
                <div className="col-sm-6">
                  
                  <article className="box-line box-line_sm">
                    <div className="box-line-inner">
                      <div className="box-line-icon icon mercury-icon-group"></div>
                      <h5 className="box-line-title">Onaylanmış CV'ler</h5>
                    </div>
                  </article>
                </div>
                <div className="col-sm-6">
                  
                  <article className="box-line box-line_sm">
                    <div className="box-line-inner">
                      <div className="box-line-icon icon mercury-icon-partners"></div>
                      <h5 className="box-line-title">Anlaşmalı Kurumlar</h5>
                    </div>
                  </article>
                </div>
                <div className="col-sm-6">
                
                  <article className="box-line box-line_sm">
                    <div className="box-line-inner">
                      <div className="box-line-icon icon mercury-icon-chat"></div>
                      <h5 className="box-line-title">Canlı Destek</h5>
                    </div>
                  </article>
                </div>
                <div className="col-sm-6">
                  
                  <article className="box-line box-line_sm">
                    <div className="box-line-inner">
                      <div className="box-line-icon icon mercury-icon-target"></div>
                      <h5 className="box-line-title">Hedefe Uygun Sonuçlar</h5>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
   
    
      <JobPosition/>
      <JobPosting/>

     
      
      
   
      
      <section className="section section-md bg-default text-center">
        <div className="container">
          <h3>Yeni Kariyerine Hazır Mısın ?</h3>
          <ul className="list-linked">
            <li className="ll-item">
              <div className="icon ll-item-icon thin-icon-email-search">
                <svg className="ll-item-icon-inner" version="1.2" baseProfile="tiny" viewBox="-1 -1 102 102">
                  <circle cx="50" cy="50" r="50" fill="none" vectorEffect="non-scaling-stroke"></circle>
                </svg>
              </div>
              <div className="ll-item-main">
                <h5 className="ll-item-title"><a href="job-listing.html">Aradığın Pozisyonu Seç</a></h5>
                
              </div>
            </li>
            <li className="ll-item">
              <div className="icon ll-item-icon mercury-icon-target-2">
                <svg className="ll-item-icon-inner" version="1.2" baseProfile="tiny" viewBox="-1 -1 102 102">
                  <circle cx="50" cy="50" r="50" fill="none" vectorEffect="non-scaling-stroke"></circle>
                </svg>
              </div>
              <div className="ll-item-main">
                <h5 className="ll-item-title"><a href="job-details.html">Hedefini Belirle</a></h5>
                
              </div>
            </li>
            <li className="ll-item">
              <div className="icon ll-item-icon ll-item-icon-sm mercury-icon-e-mail-o">
                <svg className="ll-item-icon-inner" version="1.2" baseProfile="tiny" viewBox="-1 -1 102 102">
                  <circle cx="50" cy="50" r="50" fill="none" vectorEffect="non-scaling-stroke"></circle>
                </svg>
              </div>
              <div className="ll-item-main">
                <h5 className="ll-item-title"><a href="submit-resume.html">CV'ni Gönder</a></h5>
                
              </div>
            </li>
            <li className="ll-item">
              <div className="icon ll-item-icon mercury-icon-touch">
                <svg className="ll-item-icon-inner" version="1.2" baseProfile="tiny" viewBox="-1 -1 102 102">
                  <circle cx="50" cy="50" r="50" fill="none" vectorEffect="non-scaling-stroke"></circle>
                </svg>
              </div>
              <div className="ll-item-main"><a className="button button-sm button-primary-outline" href="#">Hemen Başla</a></div>
            </li>
          </ul>
        </div>
      </section>
      
     
    </div>
    )
}
