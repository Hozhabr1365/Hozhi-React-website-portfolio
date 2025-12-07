import React from 'react';
import { FaChevronRight } from 'react-icons/fa';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                    <h2>About</h2>
                    <p>
                        من هُژی هستم، مهندس نرم‌افزار و تولیدکننده محتوا. در کانال یوتیوبم (HozhiLearn) در مورد ابزارهایی صحبت می‌کنم که می‌تونه به رشد مالی و کاری شما کمک کنه. هدف من اشتراک‌گذاری دانش و تجربه برای موفقیت شماست.
                    </p>
                </div>

                <div className="row">
                    <div className="col-lg-4" data-aos="fade-right">
                        <img src="/assets/img/Untitled project-Layer 1.png" className="img-fluid" alt="Profile" />
                    </div>
                    <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                        <h3>UI/UX Designer &amp; Web Developer.</h3>
                        <p className="fst-italic">
                            طراح رابط کاربری و توسعه‌دهنده وب با اشتیاق به خلق تجربه‌های دیجیتال جذاب.
                        </p>
                        <div className="row">
                            <div className="col-lg-6">
                                <ul>
                                    <li><FaChevronRight className="text-primary" /> <strong>Website:</strong> <span>www.youtube.com/@HozhiLearn</span></li>
                                    <li><FaChevronRight className="text-primary" /> <strong>Phone:</strong> <span>+98 912 345 6789</span></li>
                                    <li><FaChevronRight className="text-primary" /> <strong>City:</strong> <span>Tehran, Iran</span></li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <ul>
                                    <li><FaChevronRight className="text-primary" /> <strong>Age:</strong> <span>30</span></li>
                                    <li><FaChevronRight className="text-primary" /> <strong>Degree:</strong> <span>Master</span></li>
                                    <li><FaChevronRight className="text-primary" /> <strong>Email:</strong> <span>info@hozhigraphicdesign.ir</span></li>
                                </ul>
                            </div>
                        </div>
                        <p>
                            با تجربه در زمینه‌های مختلف گرافیک و برنامه‌نویسی، من به شما کمک می‌کنم تا ایده‌های خود را به واقعیت تبدیل کنید. از طراحی لوگو تا ساخت وب‌سایت‌های مدرن.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;
