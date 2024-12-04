export default function getCurrentTimezone() {
  return new Intl.DateTimeFormat().resolvedOptions().timeZone;
}