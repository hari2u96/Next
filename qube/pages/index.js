import Image from 'next/image';
import styles from './index.module.scss';

function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.navbar}>
            <div className={styles.navbrand}>
              <Image
                alt={'logo'}
                src={'/images/logo.svg'}
                width={120}
                height={60} />
            </div>
            <div className={styles.nav1}>
              <ul className={styles.ul}>
                <li className={styles.li}>Homeee</li>
                <li className={styles.li}>Services</li>
                <li className={styles.li}>Datascience</li>
                <li className={styles.li}>Technologies</li>
                <li className={styles.li}>About us</li>
                <li className={styles.li}>Blog</li>
                <li className={styles.li}>Contact us</li>
              </ul>
            </div>
          </div>
        </header>
        <body className={styles.body}>
          <div className={styles.text}>
            <div className={styles.textline}>
              <h1 className={styles.h1}> Building real-world Enterprise solutions at big data scale</h1>
              <button className={styles.button}>Contact us</button>
            </div>
            <div className={styles.image}>
              <Image
                alt={'homebanner'}
                src={'/images/homebanner.svg'}
                width={540}
                height={421} />
            </div>
          </div>
        </body>
        <section className={styles.ourserver}>
          <div className={styles.our}>
            <h1 className={styles.h1}>Our Services</h1>
            <div className={styles.server}>
              <div className={styles.outerservice}>
                <div className={styles.box}>
                  <Image
                    alt={'web'}
                    src={'/images/web.svg'}
                    width={54}
                    height={50} />
                  <h4>Web Development</h4>
                  <p>Our team of web developers helps your business stand out of the crowd in the online marketplace by providing a brilliantly designed website.</p>
                </div>
              </div>
              <div className={styles.outerservice}>
                <div className={styles.box}>
                  <Image
                    alt={'pred'}
                    src={'/images/pred.svg'}
                    width={54}
                    height={50} />
                  <h4>Predictive Analysis</h4>
                  <p>Turn your Enterprise data into actionable insights and business intelligence. Predict outcomes, prevent failures & enable real-time actions.</p>
                </div>
              </div>
              <div className={styles.outerservice}>
                <div className={styles.box}>
                  <Image
                    alt={'big'}
                    src={'/images/big.svg'}
                    width={54}
                    height={50} />
                  <h4>Big Data Analytics</h4>
                  <p>Build robust Big Data architecture and manage your data on Cloud.Unlock business value and make intelligent business decisions quickly.</p>
                </div>
              </div>
              <div className={styles.outerservice}>
                <div className={styles.box}>
                  <Image
                    alt={'mob'}
                    src={'/images/mob.svg'}
                    width={54}
                    height={50} />
                  <h4>Mobile App Development</h4>
                  <p>Build robust Big Data architecture and manage your data on Cloud.Unlock business value and make intelligent business decisions quickly.</p>
                </div>
              </div>
              <div className={styles.outerservice}>
                <div className={styles.box}>
                  <Image
                    alt={'webd'}
                    src={'/images/webd.svg'}
                    width={54}
                    height={50} />
                  <h4>Web Design</h4>
                  <p>We can create pixel perfect and responsive web design for our client’s business website, so they can get more customers and generate leads.</p>
                </div>
              </div>
              <div className={styles.outerservice}>
                <div className={styles.box}>
                  <Image
                    alt={'graph'}
                    src={'/images/graph.svg'}
                    width={54}
                    height={50} />
                  <h4>Graphic Design</h4>
                  <p>Our designing team helps you enhance your design that will bring professionalism in the business image & optimize marketing.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.datascience}>
          <div className={styles.dscontainer}>
            <h2 className={styles.h2}>Data Science Service</h2>
            <div className={styles.datalist}>
              <div className={styles.dsleft}>
                <div className={styles.supply}>
                  <h4 className={styles.h4}>Supply Chain</h4>
                  <ul>
                    <li>Auto Replenishment & Consolidation Using ML</li>
                    <li>Reducing Stock Out Rate</li>
                    <li>Optimizing Holding Cost</li>
                  </ul>
                </div>
                <div className={styles.supply}>
                  <h4 className={styles.h4}>Big Data Services</h4>
                  <ul>
                    <li>Scalable Machine Learning Pipeline</li>
                    <li>Real-Time streaming Engine</li>
                    <li>Data Lake Using Hadoop Technologies</li>
                  </ul>
                </div>
              </div>
              <div className={styles.Image}> <Image
                alt={'datascience-banner'}
                src={`/images/datascience-banner.svg`}
                width={400}
                height={332} />
              </div>
              <div className={styles.dsright}>
                <div className={styles.supply}>
                  <h4 className={styles.h4}>Marketing</h4>
                  <ul>
                    <li>Spends Optimization across Marketing Channels</li>
                    <li>Customer Dormancy Rate Prediction</li>
                    <li>Customer Churn Prediction</li>
                    <li>Customer Intent Modeling</li>
                    <li>Cross-Sell and Up-sell campaigns using ML</li>
                  </ul>
                </div>
                <div className={styles.supply}>
                  <h4 className={styles.h4}>E-Commerce</h4>
                  <ul>
                    <li>Customer Journey Analysis</li>
                    <li>Recommendation Engine</li>
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </section>
        <section className={styles.outer}>
          <div className={styles.con}>
            <h3 className={styles.h3}>Demo Page</h3>
            <div className={styles.list}>
              <div className={styles.supp}>
                <h5 className={styles.h5}>Supply</h5>
                <ul>
                    <li>Auto Replenishment & Consolidation Using ML</li>
                    <li>Reducing Stock Out Rate</li>
                    <li>Optimizing Holding Cost</li>
                  </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home;