import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <div className="container">

                <div className="section-title">
                    <h2>Contact</h2>
                    <p>برای همکاری و ارتباط با من می‌توانید از طریق راه‌های زیر اقدام کنید.</p>
                </div>

                <div className="row" data-aos="fade-in">

                    <div className="col-lg-5 d-flex align-items-stretch">
                        <div className="info" style={{ width: '100%', background: '#fff' }}>
                            <div className="address">
                                <i style={{ fontSize: '20px', color: '#149ddd', float: 'left', width: '44px', height: '44px', background: '#dff3fc', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%', transition: 'all 0.3s ease-in-out' }}><FaMapMarkerAlt /></i>
                                <h4 style={{ padding: '0 0 0 60px', fontSize: '22px', fontWeight: '600', marginBottom: '5px', color: '#050d18' }}>Location:</h4>
                                <p style={{ padding: '0 0 0 60px', marginBottom: '0', fontSize: '14px', color: '#173b6c' }}>Tehran, Iran</p>
                            </div>

                            <div className="email" style={{ marginTop: '40px' }}>
                                <i style={{ fontSize: '20px', color: '#149ddd', float: 'left', width: '44px', height: '44px', background: '#dff3fc', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%', transition: 'all 0.3s ease-in-out' }}><FaEnvelope /></i>
                                <h4 style={{ padding: '0 0 0 60px', fontSize: '22px', fontWeight: '600', marginBottom: '5px', color: '#050d18' }}>Email:</h4>
                                <p style={{ padding: '0 0 0 60px', marginBottom: '0', fontSize: '14px', color: '#173b6c' }}>info@hozhigraphicdesign.ir</p>
                            </div>

                            <div className="phone" style={{ marginTop: '40px' }}>
                                <i style={{ fontSize: '20px', color: '#149ddd', float: 'left', width: '44px', height: '44px', background: '#dff3fc', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%', transition: 'all 0.3s ease-in-out' }}><FaPhone /></i>
                                <h4 style={{ padding: '0 0 0 60px', fontSize: '22px', fontWeight: '600', marginBottom: '5px', color: '#050d18' }}>Call:</h4>
                                <p style={{ padding: '0 0 0 60px', marginBottom: '0', fontSize: '14px', color: '#173b6c' }}>+98 912 345 6789</p>
                            </div>

                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207371.9779491702!2d51.20973322079218!3d35.69701178550774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e00491ff3dcd9%3A0xf0b3697c567024bc!2sTehran%2C%20Tehran%20Province%2C%20Iran!5e0!3m2!1sen!2s!4v1626343567895!5m2!1sen!2s"
                                style={{ border: 0, width: '100%', height: '290px' }}
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </div>

                    </div>

                    <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                        <form action="#" className="php-email-form" style={{ width: '100%', padding: '30px', background: '#fff', boxShadow: '0 0 24px 0 rgba(0, 0, 0, 0.12)' }}>
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="name">Your Name</label>
                                    <input type="text" name="name" className="form-control" id="name" required style={{ borderRadius: 0, boxShadow: 'none', fontSize: '14px' }} />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="name">Your Email</label>
                                    <input type="email" className="form-control" name="email" id="email" required style={{ borderRadius: 0, boxShadow: 'none', fontSize: '14px' }} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Subject</label>
                                <input type="text" className="form-control" name="subject" id="subject" required style={{ borderRadius: 0, boxShadow: 'none', fontSize: '14px' }} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Message</label>
                                <textarea className="form-control" name="message" rows="10" required style={{ borderRadius: 0, boxShadow: 'none', fontSize: '14px' }}></textarea>
                            </div>
                            <div className="my-3">
                                <div className="loading">Loading</div>
                                <div className="error-message"></div>
                                <div className="sent-message">Your message has been sent. Thank you!</div>
                            </div>
                            <div className="text-center"><button type="submit" style={{ background: '#149ddd', border: 0, padding: '10px 24px', color: '#fff', transition: '0.4s', borderRadius: '4px' }}>Send Message</button></div>
                        </form>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Contact;
