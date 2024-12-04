import isCricketTimezone from './isCricketTimezone';
import { useSelector } from 'react-redux';
import { selectQuote } from '../reducers/quote';
import useDecodeToken from '../hook/useDecodeToken';
import {
  selectV3Controller,
} from '../reducers/v3Controller';

export default function isLangHindi() {
  const { user_id } = useDecodeToken();
  const { currency } = useSelector(selectQuote);
  const { guestMode } = useSelector(selectV3Controller);
  const lang = localStorage.getItem('language') ?? 'en'

  const langHindi = (!guestMode) && (['INR', 'BDT', 'PKR'].includes(currency) || lang === 'bd');
  return langHindi || isCricketTimezone();
}