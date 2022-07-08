import FooterItem from '../footerItemList/FooterItemList';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.fLists}>
        <FooterItem
          items={[
            'Countries',
            'Regions',
            'Cities',
            'Districts',
            'Airports',
            'Hotels',
          ]}
        />
        <FooterItem
          items={[
            'Homes',
            'Apartments',
            'Resorts',
            'Villas',
            'Hostels',
            'Guest Houses',
          ]}
        />
        <FooterItem
          items={[
            'Unique Places to Stay',
            'Reviews',
            'Unpacked: Travel Articles',
            'Travel communities',
            'Seasonal and holiday deals',
          ]}
        />
        <FooterItem
          items={[
            'Car Rental',
            'Flight Finder',
            'Restaurant Reservations',
            'Travel Agents',
          ]}
        />
        <FooterItem
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
      <div className='fText'>Copyright © 2022 Lamabooking.</div>
    </div>
  );
};

export default Footer;
