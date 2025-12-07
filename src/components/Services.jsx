import React from 'react';
import { FaDesktop, FaCamera, FaPenNib, FaFileVideo, FaChalkboardTeacher, FaCode } from 'react-icons/fa';

const Services = () => {
    const services = [
        { icon: <FaDesktop />, title: 'Web Design', desc: 'طراحی وب‌سایت‌های مدرن و واکنش‌گرا با استفاده از جدیدترین تکنولوژی‌ها.' },
        { icon: <FaCode />, title: 'Web Development', desc: 'توسعه وب‌سایت‌های پویا و اپلیکیشن‌های تحت وب با React و Node.js.' },
        { icon: <FaCamera />, title: 'Photography', desc: 'عکاسی حرفه‌ای برای محصولات و پرتره.' },
        { icon: <FaFileVideo />, title: 'Video Editing', desc: 'تدوین ویدیو و ساخت تیزرهای تبلیغاتی با پریمیر و افتر افکت.' },
        { icon: <FaPenNib />, title: 'Graphic Design', desc: 'طراحی لوگو، کارت ویزیت، و هویت بصری برند.' },
        { icon: <FaChalkboardTeacher />, title: 'Consulting & Teaching', desc: 'مشاوره و آموزش در زمینه تولید محتوا و ابزارهای دیجیتال.' },
    ];

    return (
        <section id="services" className="services">
            <div className="container">

                <div className="section-title">
                    <h2>Services</h2>
                    <p>خدماتی که من ارائه می‌دهم.</p>
                </div>

                <div className="row">
                    {services.map((service, index) => (
                        <div className="col-lg-4 col-md-6 icon-box" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                            <div className="icon" style={{ float: 'left', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '54px', height: '54px', background: '#149ddd', borderRadius: '50%', transition: '0.5s', border: '1px solid #149ddd', color: '#fff', fontSize: '24px' }}>{service.icon}</div>
                            <div style={{ marginLeft: '80px' }}>
                                <h4 className="title" style={{ marginLeft: '0', fontWeight: '700', marginBottom: '15px', fontSize: '18px' }}><a href="#" style={{ color: '#343a40', textDecoration: 'none', transition: '0.3s' }}>{service.title}</a></h4>
                                <p className="description" style={{ marginLeft: '0', lineHeight: '24px', fontSize: '14px' }}>{service.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Services;
