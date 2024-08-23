import styles from "../../app/page.module.css";
import Image from 'next/image'
import profilepic from "../../Images/logo.png"
import './index.scss'

export default function Navbar() {
    return (
        <>
            {/* <main className={styles.main}> */}
                <div className="nav">
                    <div className="nav_logo">
                        <Image
                            src={profilepic}
                            alt="Picture of the author"
                            width={160}
                            // height={100}
                        />
                    </div>
                    {/* <h2>Erum Rehman</h2> */}
                    <ul className="nav_list">
                        <li>Summer Deals</li>
                        <li>Waffles</li>
                        <li>Shakes</li>
                        <li>Specials</li>
                        <li >Classic Icecream</li>
                    </ul>
                </div>
            {/* </main> */}
        </>
    );
}


