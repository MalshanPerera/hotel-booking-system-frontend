import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import styles from './List.module.scss';

const List = () => {
  return (
    <div>
      <Navbar />
      <Header type='hotels' />
    </div>
  );
};

export default List;
