import ReactStars from 'react-rating-stars-component';
import styles from './CamperReviews.module.css';
import BookNow from 'components/BookNow/BookNow';

const CamperReviews = ({ reviews }) => {
  return (
    <div className={styles.container}>
      <section style={{ width: '48%' }}>
        {reviews.length ? (
          <div className={styles.reviewList}>
            {reviews.map(
              ({ reviewer_name, reviewer_rating, comment }, index) => {
                return (
                  <div key={index}>
                    <div className={styles.reviewInfo}>
                      <div className={styles.reviewAvatar}>
                        <h2 className={styles.reviewAvatarName}>
                          {reviewer_name[0]}
                        </h2>
                      </div>
                      <div>
                        <p className={styles.reviewName}>{reviewer_name}</p>
                        <ReactStars
                          size={20}
                          value={reviewer_rating}
                          edit={false}
                        />
                      </div>
                    </div>
                    <div>
                      <p className={styles.reviewComment}>{comment}</p>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        ) : (
          <div>Mo reviews</div>
        )}
      </section>
      <section style={{ width: '48%' }}>
        <BookNow />
      </section>
    </div>
  );
};

export default CamperReviews;
