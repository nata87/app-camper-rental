import React, { useState } from 'react';
import styles from './BookNow.module.css';

const BookNow = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    comment: '',
  });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: '',
      email: '',
      date: '',
      comment: '',
    });
  };

  return (
    <div className={styles.bookNowWrapper}>
      <div className={styles.bookNowInfo}>
        <h2 className={styles.bookTitle}>Book your campervan now</h2>
        <h3 className={styles.bookSubTitle}>
          Stay connected! We are always ready to help you.
        </h3>
      </div>

      <form className={styles.bookNowForm} onSubmit={handleSubmit}>
        <label className={styles.bookNowLabel}>
          <input
            className={styles.bookNowInput}
            pattern="^[a-zA-Zа-яА-Я]+(([' ][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </label>

        <label className={styles.bookNowLabel}>
          <input
            className={styles.bookNowInput}
            pattern="/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/"
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </label>

        <label className={styles.bookNowLabel}>
          <input
            className={styles.bookNowInput}
            min="2024-01-01"
            max="2099-04-20"
            type="date"
            id="date"
            name="date"
            placeholder="Booking date"
            value={formData.date}
            onChange={handleInputChange}
            required
          />
        </label>

        <label className={styles.bookNowLabel}>
          <textarea
            className={styles.bookNowTextarea}
            pattern="^[a-zA-Zа-яА-Я]+(([' ][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            id="comment"
            name="comment"
            rows="5"
            placeholder="Comment"
            value={formData.comment}
            onChange={handleInputChange}
            required
          />
        </label>

        <button className={styles.button} type="submit" size="small">
          Submit
        </button>
      </form>
    </div>
  );
};

export default BookNow;
