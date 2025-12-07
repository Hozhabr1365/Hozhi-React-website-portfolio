import React from 'react';

const Resume = () => {
    return (
        <section id="resume" className="resume">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                    <h2>Resume</h2>
                    <p>تجربیات کاری و تحصیلی من در طول سال‌های فعالیت حرفه‌ای.</p>
                </div>

                <div className="row">
                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                        <h3 className="resume-title">Sumary</h3>
                        <div className="resume-item pb-0">
                            <h4>Mohammad Hozhabri</h4>
                            <p><em>Inovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.</em></p>
                            <ul>
                                <li>Tehran, Iran</li>
                                <li>(123) 456-7891</li>
                                <li>info@hozhigraphicdesign.ir</li>
                            </ul>
                        </div>

                        <h3 className="resume-title">Education</h3>
                        <div className="resume-item">
                            <h4>Master of Fine Arts &amp; Graphic Design</h4>
                            <h5>2015 - 2016</h5>
                            <p><em>Rochester Institute of Technology, Rochester, NY</em></p>
                            <p>Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend</p>
                        </div>
                    </div>
                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                        <h3 className="resume-title">Professional Experience</h3>
                        <div className="resume-item">
                            <h4>Senior Graphic Design Specialist</h4>
                            <h5>2019 - Present</h5>
                            <p><em>Experion, New York, NY </em></p>
                            <ul>
                                <li>Lead in the design, development, and implementation of the graphic, layout, and production communication materials</li>
                                <li>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project. </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Resume;
