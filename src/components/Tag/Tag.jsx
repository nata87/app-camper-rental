import styles from './Tag.module.css';

const Tag = ({ Icon, data = null, text = '' }) => {
  return (
    <li className={styles.infoItem}>
      <Icon style={{ marginRight: '8px' }} />
      {data} {text}
    </li>
  );
};

export default Tag;
