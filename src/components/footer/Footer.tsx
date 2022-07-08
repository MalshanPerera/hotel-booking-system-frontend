import FooterItemList from '../footerItemList/FooterItemList';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.fLists}>
        <FooterItemList
          items={[
            'Countries',
            'Regions',
            'Cities',
            'Districts',
            'Airports',
            'Hotels',
          ]}
        />
        <FooterItemList
          items={[
            'Homes',
            'Apartments',
            'Resorts',
            'Villas',
            'Hostels',
            'Guest Houses',
          ]}
        />
        <FooterItemList
          items={[
            'Unique Places to Stay',
            'Reviews',
            'Unpacked: Travel Articles',
            'Travel communities',
            'Seasonal and holiday deals',
          ]}
        />
        <FooterItemList
          items={[
            'Car Rental',
            'Flight Finder',
            'Restaurant Reservations',
            'Travel Agents',
          ]}
        />
        <FooterItemList
          items={[
            'Customer Service',
            'Partner Help',
            'Careers',
            'Sustainability',
            'Press Center',
            'Safety Resource Center',
            'Investor Relations',
            'Terms & conditions',
          ]}
        />
      </div>
      <div className={styles.fText}>Copyright © 2022 Lamabooking.</div>
    </div>
  );
};

export default Footer;
