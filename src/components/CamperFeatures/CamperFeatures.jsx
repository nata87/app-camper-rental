import { ReactComponent as Adult } from '../../icons/adult.svg';
import { ReactComponent as Air } from '../../icons/air.svg';
import { ReactComponent as Transmission } from '../../icons/transmission.svg';
import { ReactComponent as Benz } from '../../icons/benz.svg';
import { ReactComponent as Kitchen } from '../../icons/kitchen.svg';
import { ReactComponent as Beds } from '../../icons/beds.svg';
import { ReactComponent as Wind } from '../../icons/wind.svg';
import { ReactComponent as Bathroom } from '../../icons/bathroom.svg';
import { ReactComponent as Children } from '../../icons/children.svg';
import { ReactComponent as Gas } from '../../icons/gas.svg';
import { ReactComponent as Microwave } from '../../icons/microwave.svg';
import { ReactComponent as Toilet } from '../../icons/toilet.svg';
import { ReactComponent as Water } from '../../icons/water.svg';
import { ReactComponent as Cd } from '../../icons/cd.svg';
import { ReactComponent as Hob } from '../../icons/hob.svg';
import { ReactComponent as TV } from '../../icons/tv.svg';
import { ReactComponent as Freezer } from '../../icons/freezer.svg';
import { ReactComponent as Radio } from '../../icons/radio.svg';

import styles from './CamperFeatures.module.css';
import Tag from 'components/Tag/Tag';
import BookNow from 'components/BookNow/BookNow';

const CamperFeatures = ({ data }) => {
  const {
    adults,
    transmission,
    details,
    children,
    engine,
    form,
    length,
    width,
    height,
    tank,
    consumption,
  } = data;

  const capitalizeFirst = str => str.charAt(0).toUpperCase() + str.slice(1);
  return (
    <div className={styles.container}>
      <section style={{ width: '48%' }}>
        <div className={styles.list}>
          <Tag Icon={Adult} data={adults} text="adults" />
          <Tag Icon={Transmission} data={transmission} />
          {details.airConditioner && <Tag Icon={Wind} text="AC" />}
          <Tag Icon={Benz} text={engine} />
          {details.kitchen && <Tag Icon={Kitchen} text="kitchen" />}
          {details.beds && <Tag Icon={Beds} data={details.beds} text="beds" />}
          {details.airConditioner && (
            <Tag
              Icon={Air}
              data={details.airConditioner}
              text="air conditioner"
            />
          )}
          {details.CD && <Tag Icon={Cd} text="CD" />}
          {details.radio && (
            <Tag Icon={Radio} data={details.radio} text="Radio" />
          )}
          {details.bathroom && (
            <Tag Icon={Bathroom} data={details.bathroom} text="bathroom" />
          )}
          {details.children && (
            <Tag Icon={Children} data={children} text="children" />
          )}
          {details.gas && <Tag Icon={Gas} data={details.gas} text="gas" />}
          {details.microwave && (
            <Tag Icon={Microwave} data={details.microwave} text="microwave" />
          )}
          {details.toilet && (
            <Tag Icon={Toilet} data={details.toilet} text="toilet" />
          )}
          {details.water && (
            <Tag Icon={Water} data={details.water} text="water" />
          )}
          {details.hob && <Tag Icon={Hob} data={details.hob} text="hob" />}
          {details.TV && <Tag Icon={TV} data={details.TV} text="TV" />}
          {details.freezer && (
            <Tag Icon={Freezer} data={details.freezer} text="freezer" />
          )}
        </div>
        <div className={styles.details}>
          <h2 className={styles.detailsTitle}>Vehicle details</h2>
          <hr />
          <ul className={styles.detailsList}>
            <li className={styles.detailsListItem}>
              <span className={styles.detailsListItemName}>Form</span>
              <span className={styles.detailsListItemName}>
                {capitalizeFirst(form)}
              </span>
            </li>
            <li className={styles.detailsListItem}>
              <span className={styles.detailsListItemName}>Length</span>
              <span className={styles.detailsListItemName}>
                {capitalizeFirst(length)}
              </span>
            </li>
            <li className={styles.detailsListItem}>
              <span className={styles.detailsListItemName}>Width</span>
              <span className={styles.detailsListItemName}>
                {capitalizeFirst(width)}
              </span>
            </li>
            <li className={styles.detailsListItem}>
              <span className={styles.detailsListItemName}>Height</span>
              <span className={styles.detailsListItemName}>
                {capitalizeFirst(height)}
              </span>
            </li>
            <li className={styles.detailsListItem}>
              <span className={styles.detailsListItemName}>Tank</span>
              <span className={styles.detailsListItemName}>
                {capitalizeFirst(tank)}
              </span>
            </li>
            <li className={styles.detailsListItem}>
              <span className={styles.detailsListItemName}>Consumption</span>
              <span className={styles.detailsListItemName}>
                {capitalizeFirst(consumption)}
              </span>
            </li>
          </ul>
        </div>
      </section>
      <section style={{ width: '48%' }}>
        <BookNow />
      </section>
    </div>
  );
};

export default CamperFeatures;
