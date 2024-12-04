export const hasScoreInEventInfo = (eventInfo) => {
  const { event_type_id: sportTypeId, status: eventStatus } = eventInfo || {};

  if (eventStatus === 'notstarted') return false;

  if (sportTypeId === '4') {
    return (
      !!eventInfo?.team_a?.score?.length || !!eventInfo?.team_b?.score?.length
    );
  }

  if (sportTypeId === '1' || sportTypeId === '2') {
    const teamAScoreArr = eventInfo?.team_a?.score
      ? Object.values(eventInfo?.team_a?.score)
      : [];
    const teamBScoreArr = eventInfo?.team_b?.score
      ? Object.values(eventInfo?.team_b?.score)
      : [];

    const isNoAScore = teamAScoreArr.every((e) => e === '');
    const isNoBScore = teamBScoreArr.every((e) => e === '');

    return !isNoAScore || !isNoBScore;
  }
};

export const getCricketFullScoreText = (eventInfo) => {
  const { event_type_id: sportTypeId } = eventInfo || {};
  if (sportTypeId !== '4') return {};

  const {
    team_a: { score: [a1 = {}, a2 = {}] = [] } = {},
    team_b: { score: [b1 = {}, b2 = {}] = [] } = {},
  } = eventInfo || {};

  const cricketFullScoreText = ({ runs = '', wickets = '', overs = '' }) => {
    if (!runs && !wickets && !overs) return '';
    return `${runs}-${wickets}(${overs})`;
  };

  return {
    a1: cricketFullScoreText(a1),
    a2: cricketFullScoreText(a2),
    b1: cricketFullScoreText(b1),
    b2: cricketFullScoreText(b2),
  };
};

export const getCricketRuns = (eventInfo) => {
  const { event_type_id: sportTypeId } = eventInfo || {};
  if (sportTypeId !== '4') return {};

  const {
    now_inning: nowInning,
    team_a: { score: [a1 = {}, a2 = {}] = [] } = {},
    team_b: { score: [b1 = {}, b2 = {}] = [] } = {},
  } = eventInfo || {};

  const { runs: a1Runs = 0 } = a1;
  const { runs: a2Runs = 0 } = a2;
  const { runs: b1Runs = 0 } = b1;
  const { runs: b2Runs = 0 } = b2;

  const runsForInning = new Map([
    ['a_1', [a1Runs, b1Runs]],
    ['b_1', [a1Runs, b1Runs]],
    ['a_2', [a2Runs, b2Runs]],
    ['b_2', [a2Runs, b2Runs]],
    ['', [0, 0]],
  ]);

  const [nowInningRunsA = 0, nowInningRunsB = 0] =
    runsForInning.get(nowInning) || [];

  return {
    nowInning,
    nowInningRunsA,
    nowInningRunsB,
    a1Runs,
    a2Runs,
    b1Runs,
    b2Runs,
  };
};

export const getSoccerScore = (eventInfo) => {
  const {
    team_a: { score: scoreA = {} } = {},
    team_b: { score: scoreB = {} } = {},
  } = eventInfo || {};

  const getTotalScore = (score) => {
    const { HT = 0, FT = 0, ET = 0, penalty = 0 } = score ?? {};

    if (FT || ET || penalty) return FT + ET + penalty;

    return HT;
  };

  return {
    totalScoreA: getTotalScore(scoreA),
    totalScoreB: getTotalScore(scoreB),
  };
};

export const getLeaderTeam = (teamAScore, teamBScore) => {
  if (teamAScore > teamBScore) return 'a';
  if (teamAScore < teamBScore) return 'b';
  if (teamAScore === teamBScore) return 'draw';
};

export const getTennisTotalScore = (eventInfo) => {
  const {
    team_a: { score: { total_score: totalScoreA = '' } = {} } = {},
    team_b: { score: { total_score: totalScoreB = '' } = {} } = {},
  } = eventInfo || {};

  return {
    totalScoreA,
    totalScoreB,
  };
};

export const getTennisScore = (eventInfo) => {
  const {
    team_a: {
      score: {
        total_score: totalScoreA = '',
        s1: s1A = '',
        s2: s2A = '',
        s3: s3A = '',
        s4: s4A = '',
        s5: s5A = '',
        game_score: gameScoreA = '',
      } = {},
    } = {},
    team_b: {
      score: {
        total_score: totalScoreB = '',
        s1: s1B = '',
        s2: s2B = '',
        s3: s3B = '',
        s4: s4B = '',
        s5: s5B = '',
        game_score: gameScoreB = '',
      } = {},
    } = {},
  } = eventInfo || {};

  return {
    totalScoreA,
    totalScoreB,
    s1A,
    s1B,
    s2A,
    s2B,
    s3A,
    s3B,
    s4A,
    s4B,
    s5A,
    s5B,
    gameScoreA,
    gameScoreB,
  };
};
