import React from 'react';

const Skills = () => {
    const skills = [
        { name: 'HTML', val: 100 },
        { name: 'CSS', val: 90 },
        { name: 'JavaScript', val: 75 },
        { name: 'PHP', val: 80 },
        { name: 'WordPress', val: 90 },
        { name: 'Photoshop', val: 95 },
    ];

    return (
        <section id="skills" className="skills section-bg">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                    <h2>Skills</h2>
                    <p>مهارت‌های فنی و تخصصی من در زمینه وب و گرافیک.</p>
                </div>

                <div className="row skills-content">
                    <div className="col-lg-6">
                        {skills.slice(0, 3).map((skill, index) => (
                            <div className="progress" key={index} style={{ height: '60px', display: 'block', background: 'none', borderRadius: 0 }}>
                                <span className="skill" style={{ padding: '10px 0', margin: '0 0 6px 0', textTransform: 'uppercase', display: 'block', fontWeight: 600, fontFamily: 'Poppins, sans-serif', color: '#050d18' }}>
                                    {skill.name} <i className="val" style={{ float: 'right', fontStyle: 'normal' }}>{skill.val}%</i>
                                </span>
                                <div className="progress-bar-wrap" style={{ background: '#dce8f8', height: '10px' }}>
                                    <div
                                        className="progress-bar"
                                        role="progressbar"
                                        aria-valuenow={skill.val}
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                        style={{ width: `${skill.val}%`, height: '10px', backgroundColor: '#149ddd' }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="col-lg-6">
                        {skills.slice(3).map((skill, index) => (
                            <div className="progress" key={index} style={{ height: '60px', display: 'block', background: 'none', borderRadius: 0 }}>
                                <span className="skill" style={{ padding: '10px 0', margin: '0 0 6px 0', textTransform: 'uppercase', display: 'block', fontWeight: 600, fontFamily: 'Poppins, sans-serif', color: '#050d18' }}>
                                    {skill.name} <i className="val" style={{ float: 'right', fontStyle: 'normal' }}>{skill.val}%</i>
                                </span>
                                <div className="progress-bar-wrap" style={{ background: '#dce8f8', height: '10px' }}>
                                    <div
                                        className="progress-bar"
                                        role="progressbar"
                                        aria-valuenow={skill.val}
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                        style={{ width: `${skill.val}%`, height: '10px', backgroundColor: '#149ddd' }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Skills;
