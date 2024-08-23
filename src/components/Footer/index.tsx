import styles from "../../app/page.module.css";
import Image from 'next/image'
import './index.scss'
import profile from "../../Images/logo.png"

export default function Footer() {
    return (
        <>
            <main className={styles.main}>

                <div className='footer'>
                    <div className='container-footer'>
                        <div className='footer-contact'>
                            <div className="footer-heading">
                                <Image
                                    src={profile}
                                    alt="Picture of the author"
                            width={160}

                                />
                                {/* <h3 className='abt-heading'>Erum Rehman</h3> */}
                            </div>
                                <p>a passionate Mern Stack Developer on a mission to craft immersive digital experiences.
                                    I thrive in turning ideas into polished, user-friendly websites and applications.</p>
                            <div className='contact-div'>
                                <div className='mail'>
                                    erumr0443@gmail.com
                                </div>
                            </div>
                        </div>
                        <div className='rules'>
                            <h2>Quick Link</h2>
                            <ul className='terms'>
                                <li>About</li>
                                <li>Services</li>
                                <li>Projects</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                        <div className='rules'>
                            <h2>Follow My</h2>
                            <ul className='terms'>
                                <li>Github</li>
                                <li>LinkedIn</li>

                            </ul>
                        </div>

                    </div>
                    <div className='copyright'>
                        <h4>Copyright 2024</h4>
                        <p>erumr0443@gmail.com  | All rights reserved</p></div>
                </div>


            </main>
        </>
    );
}


