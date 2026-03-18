import { primaryColor } from '../utils/initialThemeColor';

const pixel = {
  b: '768px',
  c: '1440px',
  d: '1920px',
  e: '2048px',
  f: '3840px',
};

const theme = {
  pixel,
  backToTop: {
    text_backToTop_button: '#ddc38e',
    border_backToTop_button: '#ddc38e',
  },
  v3: {
    primary_color: primaryColor ? `#${primaryColor}` : '#fcc83c',
  },
};

export default theme;
