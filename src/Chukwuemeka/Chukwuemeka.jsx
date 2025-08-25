import React, { useState } from 'react';
import style from './Chukwuemeka.module.css'

function handleSubmit(e) {
    const form = document.getElementById('form');
    e.preventDefault();
    fetch('https://script.google.com/macros/s/AKfycbysvnzmMq6bYLPUybzJvZd96PSQGZEfiy5vdL1NmrGQrc10FAL88apq8vo_8hg-Dy3HIA/exec', {
      method: 'POST',
      body: new FormData(form)
    })
    .then(res => res.text())
    .then(data => alert(data))
    .catch(err => alert('Error: ' + err));
    form.reset();
}
export default function Chukwuemeka() {
    
    const [activeTab, setActiveTab] = useState('experience');
  return (
    <div className={style.emeka_container}>

       <div className={style.header} id='Header'>
            <nav className={style.navbar}>
                <div className={style.logo}>Chukwuemeka</div>
                <ul>
                    <li><a href="#About">About</a></li>
                    <li><a href="#Skills">Skills</a></li>
                    <li><a href="#Projects">Projects</a></li>
                    <li><a href="#Contact">Contact</a></li>
                </ul>
            </nav>
            <section className={style.home}>
                <div className={style.home_info}>
                    <h1>Chukwuemeka Gerald, Olelewe</h1>
                    <h2>Hi, I'm a <span>Fullstack Developer</span></h2>
                    <p>
                        Hello! I'm a passionate web developer and computer programmer with about two years of experience 
                        creating beautiful and functional websites. I love turning complex problems into simple, 
                        elegant solutions
                    </p>
                    <div className={style.btn_sci}>
                        <a href="#" className={style.btn}>Download CV</a>
                        <div className={style.sci}>
                            <a href="https://github.com/OLELEWEEMEKA" target='_blank'><box-icon type="logo" name="github" className={style.box_icon}></box-icon></a>
                            <a href="https://www.linkedin.com/in/chukwuemeka-olelewe-7747b0323/" target='_blank'><box-icon type="logo" name="linkedin" className={style.box_icon}></box-icon></a>
                            <a href="https://www.facebook.com/chukwuemeka.olelewe.2025" target='_blank'><box-icon type="logo" name="facebook" className={style.box_icon}></box-icon></a>
                            <a href="https://www.youtube.com/@ChukwuemekaOlelewe" target='_blank'><box-icon type="logo" name="youtube" className={style.box_icon}></box-icon></a>
                        </div>        
                    </div>
                </div>
                <div className={style.home_img}>
                    <div className={style.img_box}>
                        <div  className={style.img_item}>
                            <img src="Chukwuemeka.jpg" alt="mypic" />
                        </div>
                    </div>
                </div>
            </section>
        </div> 
        <div className={style.main}>
            <div className="scroll_btn">
                <a href="#Header" className={style.scroll_btn}>
                    <box-icon name='chevron-up' className={style.scroll_icon}></box-icon>
                </a>
            </div>

            <div className={style.main_about} id='About'>
                <section className={style.about}>
                    <div className={style.about_info}>
                        <h1>About</h1>
                        <p>
                            Hello! I'm Olelewe Chukwuemeka, and I am a dedicated and versatile Full Stack Developer. 
                            I possess a strong passion for building modern, responsive, and efficient web applications. I specialize in both frontend and backend development, allowing me to create complete solutions - from the visual design that users interact with, 
                            to the powerful logic and data handling that makes everything work behind the scenes.
                        </p>
                        <div className={style.tab_titles}>
                            <p
                                    className={`${style.tab_link} ${activeTab === 'experience' ? style.active_link : ''}`}
                                    onClick={() => setActiveTab('experience')}
                                >
                                    Experience
                                </p>
                                <p
                                    className={`${style.tab_link} ${activeTab === 'education' ? style.active_link : ''}`}
                                    onClick={() => setActiveTab('education')}
                                >
                                    Education
                                </p>
                            </div>
                            <div
                                className={`${style.tab_contents} ${activeTab === 'experience' ? style.active_tab : ''}`}
                                id="experience"
                                style={{ display: activeTab === 'experience' ? 'block' : 'none' }}
                            >
                                <ul>
                                    <li><span>2024 - Current</span><br />Backend Development</li>
                                    <li><span>2022-2023</span><br />Frontend Development</li>
                                    <li><span>2021-2022</span><br />UI/UX</li>
                                </ul>
                            </div>
                            <div
                                className={`${style.tab_contents} ${activeTab === 'education' ? style.active_tab : ''}`}
                                id='education'
                                style={{ display: activeTab === 'education' ? 'block' : 'none' }}
                            >
                                <ul>
                                    <li><span>2013-2015</span><br />Nursery School at University Staff School, Nsukka</li>
                                    <li><span>2015-2022</span><br />Primary School at University Staff School, Nsukka</li>
                                    <li><span>2022 - Current</span><br />Secondary School at University Secondary School, Nsukka</li>
                                </ul>
                            </div>
                    </div>
                    <div className={style.about_img}>
                        <img src="Chukwuemeka2.jpg" alt="mypic" />
                    </div>
                </section>
            </div>

            <div className={style.main_skills} id='Skills'>
                <section className={style.skills}>
                    <h1>Skills</h1>
                    <div className={style.skills_list}>
                        <div className={style.skill_item}>
                            <h2>HTML</h2>
                            <div className={style.skill_bar}>   
                                <div className={style.skill_progress} style={{ width: '90%' }}></div>
                            </div>
                        </div>
                        <div className={style.skill_item}>
                            <h2>CSS</h2>
                            <div className={style.skill_bar}>
                                <div className={style.skill_progress} style={{ width: '85%' }}></div>
                            </div>
                        </div>
                        <div className={style.skill_item}>
                            <h2>JavaScript</h2>
                            <div className={style.skill_bar}>
                                <div className={style.skill_progress} style={{ width: '80%' }}></div>
                            </div>
                        </div>
                        <div className={style.skill_item}>
                            <h2>React</h2>
                            <div className={style.skill_bar}>
                                <div className={style.skill_progress} style={{ width: '75%' }}></div>
                            </div>
                        </div>
                        <div className={style.skill_item}>
                            <h2>C++</h2>
                            <div className={style.skill_bar}>
                                <div className={style.skill_progress} style={{ width: '70%' }}></div>
                            </div>
                        </div>
                        <div className={style.skill_item}>
                            <h2>Python</h2>
                            <div className={style.skill_bar}>
                                <div className={style.skill_progress} style={{ width: '60%' }}></div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        
            <div className={style.main_projects} id='Projects'>
                <section className={style.projects}>
                    <h1>Projects</h1>
                    <div className={style.project_list}>    
                        <div className={style.project_item}>
                            <img src="carpic.jfif" alt="Project 1" />
                            <h2>Car Game</h2>
                            <p>A fast-paced 2D car game where you dodge traffic.</p>
                            <a href="https://oleleweemeka.github.io/Car_Game/" target='_' className={style.project_link}>View Project</a>
                        </div>
                        <div className={style.project_item}>
                            <img src="calculatorpic.jfif" alt="Project 2" />
                            <h2>JS Calculator</h2>
                            <p>A minimalist, responsive calculator that handles basic arithmetic.</p>
                            <a href="https://oleleweemeka.github.io/JS-Calculator/" target='_' className={style.project_link}>View Project</a>
                        </div>
                        <div className={style.project_item}>
                            <img src="rpsgamepic.png" alt="Project 3" />
                            <h2>Rock Paper Scissors</h2>
                            <p>A quick, addictive game versus a smart computer opponent.</p>
                            <a href="https://oleleweemeka.github.io/Rock-paper-scissors/" target='_blank' className={style.project_link}>View Project</a>
                        </div>
                    </div>
                </section>
            </div>

            <div className={style.main_contact} id='Contact'>
                <h1>Contact</h1>
                <section className={style.contact}>
                    
                    <div className={style.talk}>
                        <h2>Lets Talk</h2>
                        <p>I’m open to new opportunities in both frontend and backend development. 
                            From building clean and responsive interfaces to crafting reliable backend systems, 
                            I enjoy creating digital solutions that truly work. If you’re hiring or looking to collaborate, let’s connect.</p>  
                        <ul>
                            <a href="mailto:emekaolelewe11@gmail.com" className={style.tallink}>
                                <li>
                                    <box-icon name="envelope" type="solid" className={style.talsci}></box-icon>
                                    emekaolelewe11@gmail.com
                                </li>
                            </a>
                            <a href='tel:+2348034961625' className={style.tallink}>
                                <li>
                                    <box-icon name="phone" type="solid" className={style.talsci}></box-icon>
                                    +234-803-496-1625
                                </li>
                            </a>

                                <li>
                                    <box-icon name="map" type="solid" className={style.talsci}></box-icon>
                                    Enugu, Nigeria
                                </li>

                        </ul>
                        <div className={style.btn_sci}>
                            <div className={style.sci}>
                                <a href="https://github.com/OLELEWEEMEKA" target='_blank'><box-icon type="logo" name="github" className={style.box_icon}></box-icon></a>
                                <a href="https://www.linkedin.com/in/chukwuemeka-olelewe-7747b0323/" target='_blank'><box-icon type="logo" name="linkedin" className={style.box_icon}></box-icon></a>
                                <a href="https://www.facebook.com/chukwuemeka.olelewe.2025" target='_blank'><box-icon type="logo" name="facebook" className={style.box_icon}></box-icon></a>
                                <a href="https://www.youtube.com/@ChukwuemekaOlelewe" target='_blank'><box-icon type="logo" name="youtube" className={style.box_icon}></box-icon></a>
                            </div>

                        </div>
                           
                    </div>
                    <form className={style.contact_form} id='form' onSubmit={handleSubmit}>
                        <div className={style.form_group}>
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="Name" required />
                        </div>
                        <div className={style.form_group}>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="Email" required />
                        </div>
                        <div className={style.form_group}>
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="Message" rows="5"></textarea>
                        </div>
                        <button type="submit" className={style.submit_btn}>Send Message</button>
                    </form>
                </section>
            </div>
            <footer className={style.footer}>
                <div>
                <p>&copy; 2025 Chukwuemeka Olelewe. All rights reserved.</p>
                    <div className={style.footer_sci}>
                        <a href="https://github.com/OLELEWEEMEKA" target='_blank'><box-icon type="logo" name="github" className={style.box_icon}></box-icon></a>
                        <a href="https://www.linkedin.com/in/chukwuemeka-olelewe-7747b0323/" target='_blank'><box-icon type="logo" name="linkedin" className={style.box_icon}></box-icon></a>
                        <a href="https://www.facebook.com/chukwuemeka.olelewe.2025" target='_blank'><box-icon type="logo" name="facebook" className={style.box_icon}></box-icon></a>
                        <a href="https://www.youtube.com/@ChukwuemekaOlelewe" target='_blank'><box-icon type="logo" name="youtube" className={style.box_icon}></box-icon></a>
                    </div>
                </div>
                <a href='/portfolio'><button className={style.back_btn}>Go Back</button></a>
            </footer>
        </div>
    </div>
  )
}
