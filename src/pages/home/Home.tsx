import EmailContainer from '../../components/emailContainer/EmailContainer';
import Featured from '../../components/featured/Featured';
import FeaturedProperty from '../../components/featuredProperty/FeaturedProperty';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import Property from '../../components/property/Property';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className={styles.homeContainer}>
        <Featured />
        <h1 className={styles.homeTitle}>Browse by property type</h1>
        <Property />
        <h1 className={styles.homeTitle}>Homes guests love</h1>
        <FeaturedProperty />
      </div>
      <EmailContainer />
      <Footer />
    </div>
  );
};

export default Home;
