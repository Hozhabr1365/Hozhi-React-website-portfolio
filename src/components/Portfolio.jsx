import React from 'react';

const Portfolio = () => {
    const images = [
        '/assets/img/Whisk_178abc182321bc2ad8b45402c85a5be8dr.png',
        '/assets/img/Whisk_199ee318ffd2aaf85bf467bb8913cad5dr.png',
        '/assets/img/Whisk_5c39068a3ca9a12a46e483dee6c55adadr.png',
        '/assets/img/Whisk_5umnxugn3ygnxmmytgdowewlzi2n00cmyewmti2.png',
        '/assets/img/Whisk_86c8a7c3d6d5cfc85f54c4a2ef123677dr.png',
        '/assets/img/Whisk_b20cdbb2a3e03258ab64c8505f6e02afdr.png',
        '/assets/img/Whisk_d670d8cf48e04fc8f634b597f4217e0edr.png',
        '/assets/img/Whisk_e5e7745a69f22119f44467e31e7fad10dr.png',
    ];

    return (
        <section id="portfolio" className="portfolio section-bg">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                    <h2>Portfolio</h2>
                    <p>نمونه کارهای انتخابی من.</p>
                </div>

                <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">
                    {images.map((img, index) => (
                        <div className="col-lg-4 col-md-6 portfolio-item" key={index} style={{ marginBottom: '30px' }}>
                            <div className="portfolio-wrap" style={{ boxShadow: '0px 0px 30px rgba(127, 137, 161, 0.25)', transition: '0.3s', borderRadius: '5px', overflow: 'hidden' }}>
                                <img src={img} className="img-fluid" alt="" style={{ width: '100%', height: 'auto' }} />
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Portfolio;
