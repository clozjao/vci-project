import getCurrentTimezone from './getCurrentTimezone';

const cricketTimezone = [
  'Asia/Kolkata', // 印度
  'Asia/Calcutta', // 印度
  'Asia/Dubai', // 阿拉伯聯合大公國
  'Asia/Karachi', // 巴基斯坦
  'Asia/Colombo', // 斯里蘭卡
  'Asia/Kolkata(Asia/Calcutta)', // 印度
  'Asia/Dhaka' // 孟加拉
];

export default function isCricketTimezone() {
  return cricketTimezone.includes(getCurrentTimezone());
}