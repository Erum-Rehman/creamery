import styles from "../../app/page.module.css";
import './index.scss'
import ButnField from "../Button";

export default function Home() {
    return (
        <>
            <main className={styles.main}>
                <div className="container-img">
                    <div className="img">
                        <div className="overlay">
                            <h4 >Flavours Of Joyfullness</h4>
                            <p>Fresh and tangy, our original cream cheese spread alternative goes on easy and tastes even better.</p>
                            <ButnField className="shop-butn2" title="Shop Now"/>                                
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}


