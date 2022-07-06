import styles from './OptionItem.module.scss';
type OptionParams = {
  text: string;
  count: number;
  onAdd: () => void;
  onSubtract: () => void;
};
const OptionItem = ({ text, count, onAdd, onSubtract }: OptionParams) => {
  return (
    <div className={styles.optionItem}>
      <span className='optionText'>{`${text}`}</span>
      <div className={styles.optionCounter}>
        <button
          className={styles.optionCounterBtn}
          disabled={text === 'Children' ? count <= 0 : count <= 1}
          onClick={onSubtract}
        >
          -
        </button>
        <span className='optionCounterNumber'>{`${count}`}</span>
        <button className={styles.optionCounterBtn} onClick={onAdd}>
          +
        </button>
      </div>
    </div>
  );
};

export default OptionItem;
