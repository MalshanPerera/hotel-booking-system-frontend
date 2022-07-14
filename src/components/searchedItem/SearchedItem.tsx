import styles from './SearchedItem.module.scss';

const SearchedItem = () => {
  return (
    <div className={styles.searchItem}>
      <img
        src='https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1'
        alt=''
        className={styles.searchItemImage}
      />
      <div className={styles.searchItemDescription}>
        <div className={styles.searchItemTitle}>Tower Street Apartments</div>
        <span className={styles.searchItemDistance}>500m from center</span>
        <span className={styles.searchItemTaxiOp}>Free airport taxi</span>
        <span className={styles.searchItemSubtitle}>
          Studio Apartment with Air conditioning
        </span>
        <span className={styles.searchItemFeatures}>
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className={styles.searchItemCancelOp}>Free cancellation </span>
        <span className={styles.searchItemCancelOpSubtitle}>
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className={styles.searchItemDetails}>
        <div className={styles.searchItemRating}>
          <div className={styles.searchItemReviewContainer}>
            <div className={styles.searchItemReviewsText}>Excellent</div>
            <div className={styles.searchItemReviews}>62 Reviews</div>
          </div>
          <button>8.9</button>
        </div>
        <div className={styles.searchItemDetailTexts}>
          <span className={styles.searchItemPrice}>$112</span>
          <span className={styles.searchItemTaxOp}>
            Includes taxes and fees
          </span>
          <button className={styles.searchItemCheckButton}>
            See availability
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchedItem;
