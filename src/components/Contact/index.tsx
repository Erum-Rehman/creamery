import styles from "../../app/page.module.css";
import './index.scss'

export default function Contact() {
    return (
        <>
            <main className={styles.main}>

                <div className='Contact'>
                    <div className='container-contact'>
                        <div className='contact'>
                            <div className="contact-heading">
                                <h2 className='contact-head'>Get In Touch</h2>
                            </div>
                            <p>{` Need help with your next web project or have a question about my services? Feel free to get in touch using the contact form. Whether you're looking to build a new website, revamp an
                                existing one, or collaborate on a project, I'm here to help bring your ideas to life.
                                Looking forward to hearing from you!`}</p>
                            <div className='contact-div'>
                                <div className='mail'>
                                    erumr0443@gmail.com
                                </div>
                            </div>
                        </div>
                        <div className='main-container'>
                        <form className="contact-container" method="POST">
                            <div className="contact-cell">
                                 <label>Your Name</label><br />
                                 <input
                                     type="text" name="name"
                                     placeholder="enter your name"
                                        //  value={user.name}
                                     required
                                    //   onChange={getUserData}
                                     className="contact-field"
                                 />
                             </div>
                             <div className="contact-cell">
                                 <label>Your Email</label><br />
                                 <input
                                     type="email" name="email"
                                     placeholder="enter your email"
                                    //   value={user.email} required
                                    //   onChange={getUserData}
                                     className="contact-field"
                                 />
                             </div>
                             <div className="contact-cell">
                                 <label>Your Messages</label><br />
                                 <textarea
                                     name="message"
                                     className="contact-msg"
                                //   value={user.message} required
                                //   onChange={getUserData}
                                 ></textarea>
                             </div>
                             {/* <Button id="button-addon2" className='msg-btn' onClick={postData}>
                         Send Message
                     </Button> */}
                         </form>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}


