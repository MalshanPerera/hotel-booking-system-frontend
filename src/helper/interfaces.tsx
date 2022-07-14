/*
 * Only initialize the interfaces that are been used in more than one component
 */

import DatePickerModel from '../models/DatePickerModel';
import OptionsModel from '../models/OptionsModel';

export interface SearchProps {
  destination: string;
  date: DatePickerModel[];
  options: OptionsModel;
}
