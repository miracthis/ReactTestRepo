import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import EmployerService from "../services/employerService"
import {getEmployers} from "../actions"

function Employer(props) {
    // const [employers, setEmployers] = useState([])

    useEffect(() => {

        props.getEmployers();
        // let employerService = new EmployerService();
        // employerService.getEmployer().then(sonuc => setEmployers(sonuc.data.data));
    }, [])
    return (
        <div>
            <section className="section breadcrumbs-custom">
                <div className="breadcrumbs-custom-main bg-image bg-primary">
                    <div className="container">
                        <h3 className="breadcrumbs-custom-title">Job Listing</h3>
                    </div>
                </div>
                <div className="breadcrumbs-custom-aside">
                    <div className="container">
                        <ul className="breadcrumbs-custom-path">
                            <li><a href="index.html">Home</a></li>
                            <li><a href="#">For Candidates</a></li>
                            <li className="active">Job Listing</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="section section-md">
                <div className="container">
                    <form className="form-layout-search form-lg">
                        <div className="form-wrap form-wrap-icon">
                            <input className="form-input" id="form-employer" type="text" name="employer" data-constraints="@Required" />
                            <label className="form-label" >Search Keywords</label><span className="icon fl-bigmug-line-search74"></span>
                        </div>
                        <div className="form-wrap form-wrap-icon form-wrap-select">

                            <select className="form-input select" id="form-region" data-placeholder="All Regions" name="region" data-minimum-results-for-search="Infinity" data-constraints="@Selected">
                                <option label="All Regions"></option>
                                <option value="1">Seattle</option>
                                <option value="2">Miami</option>
                                <option value="3">Chicago</option>
                            </select><span className="icon fl-bigmug-line-big104"></span>
                        </div>
                        <div className="form-wrap form-wrap-button">
                            <button className="button button-lg button-primary" type="submit">Search</button>
                        </div>
                    </form>
                

                <div className="row row-50 flex-lg-row-reverse">
                    <div className="col-lg-4 col-xl-3">
                        <div className="row row-30">
                            <div className="col-sm-6 col-lg-12">
                                <p className="heading-8">Date posted</p>
                                <hr />
                                <ul className="list list-xs">
                                    <li>
                                        <label className="checkbox">
                                            <input name="date-posted-checkbox-1" value="checkbox-1" type="checkbox" />Last Hour
                                        </label>
                                    </li>
                                    <li>
                                        <label className="checkbox">
                                            <input name="date-posted-checkbox-2" value="checkbox-2" type="checkbox" />Last 24 hours
                                        </label>
                                    </li>
                                    <li>
                                        <label className="checkbox">
                                            <input name="date-posted-checkbox-3" value="checkbox-3" type="checkbox" />Last 7 days
                                        </label>
                                    </li>
                                    <li>
                                        <label className="checkbox">
                                            <input name="date-posted-checkbox-4" value="checkbox-4" type="checkbox" />Last 30 days
                                        </label>
                                    </li>
                                </ul>

                            </div>
                            <div className="col-sm-6 col-lg-12">
                                <p className="heading-8">Vacancy Type</p>
                                <hr />
                                <ul className="list list-xs">
                                    <li>
                                        <label className="checkbox checkbox_info text-tertiary">
                                            <input name="vacancy-type-checkbox-1" value="checkbox-1" type="checkbox" />Freelance<span className="checkbox-meta">35</span>
                                        </label>
                                    </li>
                                    <li>
                                        <label className="checkbox checkbox_info text-primary">
                                            <input name="vacancy-type-checkbox-2" value="checkbox-2" type="checkbox" />Full Time<span className="checkbox-meta">25</span>
                                        </label>
                                    </li>
                                    <li>
                                        <label className="checkbox checkbox_info text-secondary">
                                            <input name="vacancy-type-checkbox-3" value="checkbox-3" type="checkbox" />Part Time<span className="checkbox-meta">55</span>
                                        </label>
                                    </li>
                                    <li>
                                        <label className="checkbox checkbox_info text-blue-11">
                                            <input name="vacancy-type-checkbox-4" value="checkbox-4" type="checkbox" />Internship<span className="checkbox-meta">55</span>
                                        </label>
                                    </li>
                                </ul>
                            </div>


                            <div className="col-sm-6 col-lg-12">
                                <p className="heading-8">Speciality</p>
                                <hr />
                                <div className="form-wrap form-wrap-select form-filled">

                                    <select className="form-input select" name="speciality" data-minimum-results-for-search="Infinity" data-constraints="@Selected" data-placeholder="Select a speciality" data-dropdown-className="select2-dropdown-filled">
                                        <option label="Select a speciality"></option>
                                        <option value="1">Web Design</option>
                                        <option value="2">Development</option>
                                        <option value="3">Marketing</option>
                                        <option value="4">Illustration</option>
                                    </select>
                                </div>
                                <ul className="list list-xs">
                                    <li>
                                        <label className="checkbox checkbox_info">
                                            <input name="category-checkbox-1" value="checkbox-1" type="checkbox" />Web Design<span className="checkbox-meta">23</span>
                                        </label>
                                    </li>
                                    <li>
                                        <label className="checkbox checkbox_info">
                                            <input name="category-checkbox-2" value="checkbox-2" type="checkbox" />Illustrator<span className="checkbox-meta">47</span>
                                        </label>
                                    </li>
                                    <li>
                                        <label className="checkbox checkbox_info">
                                            <input name="category-checkbox-3" value="checkbox-3" type="checkbox" />Art Director<span className="checkbox-meta">67</span>
                                        </label>
                                    </li>
                                    <li>
                                        <label className="checkbox checkbox_info">
                                            <input name="category-checkbox-4" value="checkbox-4" type="checkbox" />UX Design<span className="checkbox-meta">35</span>
                                        </label>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-sm-6 col-lg-12">
                                <p className="heading-8">Filter by Salary</p>
                                <hr />
                                <ul className="list list-xs">
                                    <li>
                                        <label className="checkbox checkbox_info">
                                            <input name="salary-checkbox-1" value="checkbox-1" type="checkbox" />$0 - $1000<span className="checkbox-meta">100</span>
                                        </label>
                                    </li>
                                    <li>
                                        <label className="checkbox checkbox_info">
                                            <input name="salary-checkbox-2" value="checkbox-2" type="checkbox" />$1000 - $5000<span className="checkbox-meta">73</span>
                                        </label>
                                    </li>
                                    <li>
                                        <label className="checkbox checkbox_info">
                                            <input name="salary-checkbox-3" value="checkbox-3" type="checkbox" />$5000 - $20000<span className="checkbox-meta">55</span>
                                        </label>
                                    </li>
                                    <li>
                                        <label className="checkbox checkbox_info">
                                            <input name="salary-checkbox-4" value="checkbox-4" type="checkbox" />$2000 - $50000<span className="checkbox-meta">35</span>
                                        </label>
                                    </li>
                                    <li>
                                        <label className="checkbox checkbox_info">
                                            <input name="salary-checkbox-5" value="checkbox-5" type="checkbox" />$50000+<span className="checkbox-meta">15</span>
                                        </label>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>

                    <div className="col-lg-8 col-xl-9">
                        <table className="table-job-listing table-responsive">
                            
                        {props.employers.map( (employer) => 
                            <tr key={employer.id}>
                                <td className="table-job-listing-main">
                                    
                                    <article className="company-minimal">
                                        <figure className="company-minimal-figure"><img className="company-minimal-image" src="images/company-1-45x45.png" alt="" width="45" height="45" />
                                        </figure>
                                        <div className="company-minimal-main">
                                            <h5 className="company-minimal-title"><a href="job-details.html">{employer.companyName}</a></h5>
                                            <p>StarArt, New York, NY, USA</p>
                                        </div>
                                    </article>
                                </td>
                                <td className="table-job-listing-date"><span>1 day ago</span></td>
                                <td className="table-job-listing-badge"><span className="badge">Full Time</span></td>
                            </tr>
                           )}
                        </table>

                        <nav className="pagination-outer text-center" aria-label="Page navigation">
                            <div className="pagination">
                                <div className="page-item page-item-control"><a className="page-link" href="#" aria-label="Previous">Prev</a></div>
                                <div className="page-item"><a className="page-link" href="#">1</a></div>
                                <div className="page-item"><a className="page-link" href="#">2</a></div>
                                <div className="page-item active"><span className="page-link">3</span></div>
                                <div className="page-item"><a className="page-link" href="#">4</a></div>
                                <div className="page-item page-item-control"><a className="page-link" href="#" aria-label="Next">Next</a></div>
                            </div>
                        </nav>
                    </div>
                </div>
                </div>
            </section>
            
        </div>


    )
}

const mapStateToProps = state => {
return{
    employers: state.employers
}

}

export default connect(mapStateToProps, {getEmployers})(Employer)