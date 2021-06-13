import React, {useEffect, useState}  from 'react'
import JobPostingService from '../services/jobPostingService';

export default function JobPosting() {
    const [jobPostings, setJobPostings] = useState([])

    useEffect(() => {
        let jobPostingService = new JobPostingService();
        jobPostingService.getjobPosting().then(sonuc => setJobPostings(sonuc.data.data)
         );},[])

      
    
    return (
        <div>
             <section className="section section-md bg-gray-100">
        <div className="container">
          <div className="row row-40">
            <div className="col-12 text-center">
              <h3>Son Yayınlanan İş İlanları</h3>
            </div>
            <div className="col-12">
              <div className="table-job-offers-outer">
                <table className="table-job-offers table-responsive">
                  <tbody>
                  
                      {jobPostings.slice(0,3).map(jobPosting => (
                  
                  <tr key = {jobPosting.id}>
                      
                    <td className="table-job-offers-date"><span>{jobPosting.closedDate}</span></td>
                    <td className="table-job-offers-main">
                      
                      <article className="company-light">
                        <figure className="company-light-figure"><img className="company-light-image" src="images/company-1-45x45.png" alt="" width="45" height="45"/>
                        </figure>
                        <div className="company-light-main">
                          <h5 className="company-light-title"><a href="#">{jobPosting.jobPositionPosition}</a></h5>
                          <p className="text-color-default">{jobPosting.employerCompanyName}</p>
                        </div>
                      </article>
                    </td>
                    <td className="table-job-offers-meta">
                      <div className="object-inline"><span className="icon icon-sm text-primary mdi mdi-cash"></span><span>{jobPosting.minSalary} / {jobPosting.maxSalary} ₺ Ay</span></div>
                    </td>
                    <td className="table-job-offers-meta">
                      <div className="object-inline"><span className="icon icon-1 text-primary mdi mdi-map-marker"></span><span>{jobPosting.openPositionNumber}</span></div>
                    </td>
                    <td className="table-job-offers-badge"><span className="badge">Full Time</span></td>
                  </tr>
                  
                  ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-12 text-center"><a className="button button-lg button-primary-outline" href="#">Diğer İş İlanları</a></div>
          </div>
        </div>
      </section>
        </div>
    )
}
