import styles from './FooterItemList.module.scss';

interface FooterItemListProps {
  items: string[];
}

const FooterItems = ({ items }: FooterItemListProps) => {
  return (
    <ul className={styles.fList}>
      {items.map((item, index) => {
        return (
          <li className={styles.fListItem} key={index}>
            {item}
          </li>
        );
      })}
    </ul>
  );
};

export default FooterItems;
