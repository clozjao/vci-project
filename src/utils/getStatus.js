import match_status from '../assets/match_status.json';

export const getUofMatchStatus = (matchStatus) => {
  const {
    match_status_descriptions: { match_status: matchStatusList },
  } = match_status;

  const { '-description': description = '' } =
    matchStatusList.find(({ '-id': id }) => {
      return id === matchStatus;
    }) || {};

  return description;
};
