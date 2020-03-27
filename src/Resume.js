import React from 'react';
import Page from './Page';
import Footer from './Footer';

class Resume extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <main className="resumePage">
                    <article className="summary"><h2>Summary</h2>
                        <section className="summaryParagraph">
                            Full-stack web developer with a deep desire to learn new 
                            skills & broaden knowledge in every aspect.  Reliable, organized, 
                            & a great team player.  Positive attitude & wise time management. 
                        </section>
                        <aside></aside>
                    </article>
                    <article className="skills"><h2>Skills</h2>
                        <section>
                            <ul className="listOfSkills">
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Restful API's</li>
                                <li>React</li>
                                <li>JavaScript</li>
                                <li>MongoDB</li>
                                <li>Postman</li>
                                <li>Visual Studio Code</li>
                            </ul>
                        </section>
                    </article>
                    <article><h2>Projects</h2>
                        <section>
                            <h4>Nature's Marvels</h4>
                            <ul>
                                <li>Indexes healthy, natural products with nutritional and medical benefits to improve overall well-being</li>
                                <li>React, MongoDB, restful API, CSS, and HTML</li>
                            </ul>
                            <br></br>
                            <h4>Camping Checklist</h4>
                            <ul>
                                <li>A list of items separated into categories, so you won't forget anything for your next campout</li>
                                <li>JavaScript, CSS, and HTML</li>
                            </ul>
                            <br></br>
                            <h4>Portfolio</h4>
                            <ul>
                                <li>Showcases completed projects using different technologies</li>
                                <li>CSS, HTML, and Bootstrap</li>
                            </ul>
                        </section>
                    </article>    
                    <article className="experience"><h2>Work History</h2>
                        <section>
                            <div className="oakcrest">
                                <h4>Property Management Systems Inc. | Maintenance Manager | 
                                    Aug 2015 - present
                                </h4>
                                <ul>
                                    <li>
                                        Generate $24,000 of savings for the Homeowner’s association over 
                                        the last 3 years by analyzing and implementing a lighting upgrade 
                                        to the property
                                    </li>
                                    <li>
                                        Troubleshoot issues with equipment to diagnose the source of the 
                                        problem and initiate the needed repairs
                                    </li>
                                    <li>
                                        Design organized scheduling system to designate suggested 
                                        frequencies of preventative maintenance for future managers
                                    </li>
                                    <li>
                                        Create step-by-step standard operating procedures
                                    </li>
                                </ul>
                            </div>
                        </section>
                        <section>
                            <div className="ups">
                                <h4>UPS | Preloader | Sep 2014 – Jul 2018</h4>
                                <ul>
                                    <li>
                                        Recognized for increasing the number of packages scanned 
                                        per minute through attention to detail and speed 
                                    </li>
                                    <li>
                                        Diverted packages and prioritized actions to complete work in 
                                        a timely manner so deliveries would not be delayed
                                    </li>
                                    <li>
                                        Exhibited great work ethic and dependability to encourage co-workers
                                    </li>
                                </ul>
                            </div>
                        </section>
                        <section>
                            <div className="bigO">
                                <h4>Big O Tires | Tire Technician | Jan 2013 – May 2014</h4>
                                <ul>
                                    <li>
                                        Performed and suggested regular maintenance on vehicles at this 
                                        location when it was the #1 ranked Big O Tires in the nation 
                                        for sales
                                    </li>
                                    <li>
                                        Established and strengthened customer relations by driving customers 
                                        back to their residence and picking them up when their vehicle was 
                                        repaired
                                    </li>
                                    <li>
                                        Inspected vehicles for hazards and coordinated repairs for prompt 
                                        completion after approval of vehicle owner
                                    </li>
                                </ul>
                            </div>
                        </section>
                        <aside></aside>
                    </article>
                    <article className="volunteer"><h2>Volunteer Experience</h2>
                        <section>
                            <div className="redCross">
                                <h4>The American Red Cross | Volunteer | Mar 2019 – Nov 2019</h4>
                                <ul>
                                    <li>Deliver a "Be Red Cross Ready" presentation to Spanish speakers
                                        to inform participants about emergency preparedness
                                    </li>
                                    <li>
                                        Supervise a team of 8 volunteers as Block Captain during 
                                        “Sound the Alarm Campaign” to install free smoke alarms in 
                                        people’s homes, review emergency exit plans with them, and 
                                        test/replace batteries in their existing smoke alarm
                                    </li>
                                </ul>
                            </div>
                        </section>
                        <section>
                            <div className="laRegion">
                                <h4>La Region Hispana | District Leader | May 2013 – Aug 2013</h4>
                                <ul>
                                    <li>
                                        Planned activities for young adults from ages 18-31
                                    </li>
                                    <li>Volunteered as a district leader for this organization</li>
                                    <li>
                                        Learned how to be team-oriented and create plans in a group setting
                                    </li>
                                </ul>
                            </div>
                        </section>
                        <section>
                            <div className="chile">
                                <h4>LDS Mission in Chile | Missionary | Jan 2011 – Jan 2013</h4>
                                <ul>
                                    <li>
                                        Developed leadership skills by training new missionaries and 
                                        volunteering as a district leader for 1 year; evaluated goals 
                                        and progress of 7-8 volunteers in the district to offer suggestions 
                                        and assistance 
                                    </li>
                                    <li>
                                        Taught English classes to youth
                                    </li>
                                    <li>
                                        Learned leadership skills by training new missionaries & by
                                        leading groups of 7-8 people as a district leader for 1 year
                                    </li>
                                </ul>
                            </div>
                        </section>
                    </article>
                    <article><h2>Education/Certifications</h2>
                        <section>
                            <ul>
                                <li>
                                    Bachelor of Science in Business Management | Western Governor's 
                                    University | Salt Lake City, UT | Jan 2018
                                </li>
                                <li>
                                    Comp TIA Project+ Certification | Sep 2016
                                </li>
                                <li>
                                    Bilingual - Spanish
                                </li>
                            </ul>
                        </section>
                    </article>    
                </main>
                <Footer />
            </div>
        )
    }
}

export default Resume;