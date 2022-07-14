import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import { SearchProps } from '../../helper/interfaces';
import { format } from 'date-fns';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

import styles from './SearchedHotels.module.scss';
import { DateRange } from 'react-date-range';
import DatePickerModel from '../../models/DatePickerModel';
import OptionItem from '../../components/optionItem/OptionItem';
import { MathOperation, OptionTypes } from '../../helper/enums';
import OptionsModel from '../../models/OptionsModel';
import SearchedItem from '../../components/searchedItem/SearchedItem';

const SearchedHotels = () => {
  const location = useLocation();

  const { destination, date, options } = location.state as SearchProps;

  const [openDatePicker, setOpenDatePicker] = useState<Boolean>(false);
  const [openOptions, setOpenOptions] = useState<Boolean>(false);

  const [dateRange, setDateRange] = useState<DatePickerModel[]>([
    new DatePickerModel(new Date(), new Date(), 'selection'),
  ]);

  const [newOptions, setOptions] = useState<OptionsModel>(
    new OptionsModel(options.adults, options.children, options.rooms)
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
    <div>
      <Navbar />
      <Header type='hotels' />
      <div className={styles.searchedHotelsContainer}>
        <div className={styles.searchedHotelsWrapper}>
          <div className={styles.searchedHotelsSearch}>
            <div className={styles.searchedHotelsSearchTitle}>Search</div>
            <div className={styles.searchedItems}>
              <label>Destination</label>
              <input type='text' placeholder={destination} />
            </div>
            <div
              className={styles.searchedItems}
              onClick={() => {
                setOpenOptions(false);
                setOpenDatePicker(!openDatePicker);
              }}
            >
              <label>Check-in Date</label>
              <span>{`${format(date[0].startDate, 'MM/dd/yyy')} to ${format(
                date[0].endDate,
                'MM/dd/yyy'
              )}`}</span>
              {openDatePicker && (
                <DateRange
                  classNames={styles.datePicker}
                  onChange={(value) =>
                    setDateRange([value.selection as DatePickerModel])
                  }
                  moveRangeOnFirstSelection={false}
                  ranges={dateRange}
                  className={styles.datePicker}
                  minDate={new Date()}
                />
              )}
            </div>
            <div className={styles.searchedItems}>
              <label>Options</label>
              <span onClick={() => setOpenOptions(!openOptions)}>
                {newOptions.adults} adults • {newOptions.children} children •{' '}
                {newOptions.rooms} room
              </span>
              {openOptions && (
                <div className={styles.options}>
                  <OptionItem
                    text='Adults'
                    count={newOptions.adults}
                    onAdd={() =>
                      handleOptions(OptionTypes.Adults, MathOperation.Add)
                    }
                    onSubtract={() =>
                      handleOptions(OptionTypes.Adults, MathOperation.Subtract)
                    }
                  />
                  <OptionItem
                    text='Children'
                    count={newOptions.children}
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
                    count={newOptions.rooms}
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
            <button className={styles.searchBtn}>Search</button>
          </div>

          {/* Right Side */}
          <div className={styles.searchedHotelsResults}>
            <SearchedItem />
            <SearchedItem />
            <SearchedItem />
            <SearchedItem />
            <SearchedItem />
            <SearchedItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchedHotels;
