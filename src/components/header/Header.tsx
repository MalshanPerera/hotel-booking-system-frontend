import { Fragment, useState } from 'react';
import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import styles from './Header.module.scss';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import DatePickerModel from '../../models/DatePickerModel';
import OptionsModel from '../../models/OptionsModel';
import { MathOperation, OptionTypes } from '../../helper/enums';
import OptionItem from '../optionItem/OptionItem';

interface HomeProps {
  type?: string;
}

const Header = ({ type }: HomeProps) => {
  const [openDatePicker, setOpenDatePicker] = useState<Boolean>(false);
  const [openOptions, setOpenOptions] = useState<Boolean>(false);

  const [date, setDate] = useState<DatePickerModel[]>([
    new DatePickerModel(new Date(), new Date(), 'selection'),
  ]);

  const [options, setOptions] = useState<OptionsModel>(
    new OptionsModel(1, 0, 1)
  );

  const handleOptions = (option: OptionTypes, operation: MathOperation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [option]: prev[option] + (operation === MathOperation.Add ? 1 : -1),
      };
    });
  };

  return (
    <div className={styles.header}>
      <div
        className={`${
          type?.includes('hotel')
            ? `${styles.headerContainer} ${styles.hotelsMode}`
            : styles.headerContainer
        }`}
      >
        <div className={styles.headerList}>
          <div className={`${styles.headerListItem} ${styles.active}`}>
            <FontAwesomeIcon icon={faBed} />
            <span>Stay</span>
          </div>
          <div className={styles.headerListItem}>
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className={styles.headerListItem}>
            <FontAwesomeIcon icon={faCar} />
            <span>Car Rentals</span>
          </div>
          <div className={styles.headerListItem}>
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className={styles.headerListItem}>
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport Taxis</span>
          </div>
        </div>
        {!type?.includes('hotel') && (
          <Fragment>
            <h1 className={styles.headerTitle}>
              A lifetime of discounts? It's Genius.
            </h1>
            <p className={styles.headerDescription}>
              Get rewards for your travels - unlock instant savings of 10% or
              more with a free Lamabooking account
            </p>
            <button className={styles.headerBtn}>Sign in / Register</button>
            <div className={styles.headerSearch}>
              <div className={styles.headerSearchItem}>
                <FontAwesomeIcon icon={faBed} className={styles.headerIcon} />
                <input
                  type='text'
                  placeholder='Where are you going?'
                  className={styles.headerSearchInput}
                ></input>
              </div>
              <div className={styles.headerSearchItem}>
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  className={styles.headerIcon}
                />
                <span
                  className={styles.headerSearchText}
                  onClick={() => {
                    setOpenDatePicker(!openDatePicker);
                    setOpenOptions(false);
                  }}
                >{`${format(date[0].startDate, 'MM/dd/yyy')} to ${format(
                  date[0].endDate,
                  'MM/dd/yyy'
                )}`}</span>
                {openDatePicker && (
                  <DateRange
                    onChange={(value) =>
                      setDate([value.selection as DatePickerModel])
                    }
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className={styles.datePicker}
                  />
                )}
              </div>
              <div className={styles.headerSearchItem}>
                <FontAwesomeIcon
                  icon={faPerson}
                  className={styles.headerIcon}
                />
                <span
                  className={styles.headerSearchText}
                  onClick={() => {
                    setOpenOptions(!openOptions);
                    setOpenDatePicker(false);
                  }}
                >
                  {`${options.adults}`} adult • {`${options.children}`} children
                  • {`${options.rooms}`} room
                </span>
                {openOptions && (
                  <div className={styles.options}>
                    <OptionItem
                      text='Adults'
                      count={options.adults}
                      onAdd={() =>
                        handleOptions(OptionTypes.Adults, MathOperation.Add)
                      }
                      onSubtract={() =>
                        handleOptions(
                          OptionTypes.Adults,
                          MathOperation.Subtract
                        )
                      }
                    />
                    <OptionItem
                      text='Children'
                      count={options.children}
                      onAdd={() =>
                        handleOptions(OptionTypes.Children, MathOperation.Add)
                      }
                      onSubtract={() =>
                        handleOptions(
                          OptionTypes.Children,
                          MathOperation.Subtract
                        )
                      }
                    />
                    <OptionItem
                      text='Rooms'
                      count={options.rooms}
                      onAdd={() =>
                        handleOptions(OptionTypes.Rooms, MathOperation.Add)
                      }
                      onSubtract={() =>
                        handleOptions(OptionTypes.Rooms, MathOperation.Subtract)
                      }
                    />
                  </div>
                )}
              </div>
              <div className={styles.headerSearchItem}>
                <button className={styles.headerSearchBtn}>Search</button>
              </div>
            </div>
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default Header;
