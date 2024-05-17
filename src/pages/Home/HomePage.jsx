import { homePage } from 'data/pages';
import styles from './HomePage.module.css';
import image_1 from '../../images/image-1.jpg';
import image_2 from '../../images/image-2.jpg';
import image_3 from '../../images/image-3.jpg';
import image_4 from '../../images/image-4.jpg';
import image_5 from '../../images/image-5.jpg';
import image_6 from '../../images/image-6.jpg';

const HomePage = () => {
  return (
    <div className={styles.homeContainer}>
      <section>
        <p>{homePage.description}</p>
        <div className={styles.imageGroup}>
          <img className={styles.image} src={image_1} alt="camper" />
          <img className={styles.image} src={image_2} alt="camper" />
        </div>
      </section>
      <hr color="#e44848" />
      <section>
        <p>
          {homePage.campers.text}
          <ul>
            {homePage.campers.list.map(({ title, text }) => {
              return (
                <li key={title}>
                  <b>{title}</b>
                  {text}
                </li>
              );
            })}
          </ul>
        </p>
        <div className={styles.imageGroup}>
          <img className={styles.image} src={image_3} alt="camper" />
          <img className={styles.image} src={image_4} alt="camper" />
        </div>
      </section>
      <hr color="#e44848" />
      <section>
        <p>
          {homePage.services.text}
          <ul>
            {homePage.services.list.map(({ title, text }) => {
              return (
                <li key={title}>
                  <b>{title}</b>
                  {text}
                </li>
              );
            })}
          </ul>
        </p>
        <div className={styles.imageGroup}>
          <img className={styles.image} src={image_5} alt="camper" />
          <img className={styles.image} src={image_6} alt="camper" />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
