import getCurrentTimezone from '../utils/getCurrentTimezone';
/** sport id 全列表 
 * 共有 Matt, Eric 源 
 * */
import event_type from '../assets/event_type.json';
/** sport id 全列表 key val 對換 */
function show_props(obj) {
  let result = {};

  for (var prop in obj) {
    result = {
      ...result,
      [obj[prop].toLowerCase()]: prop,
    }
  }

  return result;
}

/** Eric 源 */
const source = {
  soccer: '1',
  tennis: '2',
  cricket: '4'
}

/** 因為是打後端 api 需用 Eric 表 */
export const sport_ids = { ...show_props(event_type.en), ...source }
export const event_type_ids = localStorage.getItem('displaySports') ? localStorage.getItem('displaySports').split(',').filter(d => d) : Object.values(sport_ids).toString()

export const overallV2RequestBody = {
  event_type_ids,
  timeZone: getCurrentTimezone(),
}

export const overallV3RequestBody = {
  params: {
    event_type_id: localStorage.getItem('displaySports') ? localStorage.getItem('displaySports').split(',').filter(d => d) : [
      'soccer',
      'basketball',
      'tennis',
      'volleyball',
      'cricket',
      'baseball'
    ].map(d => sport_ids[d]),
  }
}

export const overallCountRequestBody = {
  event_type_ids,
}

export const nbaRequestBody = {
  params: {
    league_id: 'sr:tournament:132'
  }
}
