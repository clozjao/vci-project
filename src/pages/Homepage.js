import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import EventList from '../components/EventList/EventList';
import { selectQuote } from '../reducers/quote';
import useGetHomepageData from '../hook/SportMatchesList/useGetHomepageData';
import isCricketTimezone from '../utils/isCricketTimezone';
import useDecodeToken from '../hook/useDecodeToken';
import { StyledInplay, StyledFilter } from './Live/style';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ReactComponent as StyleGoBackIcon } from '../assets/images/PrimaryColorIcon/v3_market_header_back.svg';
import useBurger from '../hook/burger/useBurger';
import useGetSportV3 from '../hook/Event/useGetSportV3';
import {
  selectV3Controller,
} from '../reducers/v3Controller';

export default function Homepage() {
  const { homepageData, totalInPlayCount } = useGetHomepageData();
  const { currency } = useSelector(selectQuote);
  const { t } = useTranslation();
  const { categoryInfo } = useBurger();
  const { overallMatchesCount } = useSelector(selectQuote);
  const name = categoryInfo.map(d => d.name).find(d => useGetSportV3(d, overallMatchesCount)[0]?.inplay)

  let sportNameList = [
    'soccer',
    'volleyball',
    'tennis',
    'basketball',
    'cricket'
  ];
  //針對地區排序體育順序
  const moveBall = (ball) => {
    sportNameList.pop()
    sportNameList.unshift(ball);
  };
  //GST 或 IST 板球拉到前方
  if (isCricketTimezone()) {
    moveBall('cricket');
  }
  const { user_id } = useDecodeToken();
  //by region  設定

  const HindiTimeZone = [
    'Asia/Kolkata',
    'Asia/Calcutta',
    'Asia/Dubai',
    'Asia/Karachi',
    'Asia/Colombo',
    'Asia/Kolkata(Asia/Calcutta)',
    'Asia/Dubai',
  ]
  const curTimeZone = new Intl.DateTimeFormat().resolvedOptions().timeZone
  const { guestMode } = useSelector(selectV3Controller);

  if (guestMode) {
    if (HindiTimeZone.includes(curTimeZone)) {
      moveBall('cricket');
    }
  } else {
    if (currency === 'INR') {
      moveBall('cricket');
    }
  }

  return (
    <main className="ck-main-container">
      <>
        {/* 首頁event list */}
        <StyledFilter>
          <div className="filter-btn">
            <div className="text">{t('inplay')}</div>
          </div>
          <Link
            to={`/live/${name ?? ''}`}
          >
            <StyledInplay>
              <p className='inplay-text num'>{totalInPlayCount}</p>
              <p className='inplay-text btn-text'>{t('events')}</p>
              <StyleGoBackIcon className="go-back-icon" />
            </StyledInplay>
          </Link>
        </StyledFilter>
        {sportNameList.map((v, i) => {
          if (!homepageData[v].filter(d => d.status === 'started')?.length) return;
          return <div key={i}>
            <EventList matcheslist={homepageData[v].filter(d => d.status === 'started')} key={`started_${v}`} />
          </div>;
        })}
        <StyledFilter>
          <div className="filter-btn">
            <div className="text">{t('upcoming')}</div>
          </div>
        </StyledFilter>
        {sportNameList.map((v) => {
          if (!homepageData[v].filter(d => d.status !== 'started')?.length) return;
          return <EventList matcheslist={homepageData[v].filter(d => d.status !== 'started')} key={`notstarted_${v}`} />;
        })}
        {/* {sportNameList.map((v) => {
          if (!homepageData[v]?.length) return;
          return <EventList matcheslist={homepageData[v]} key={v} />;
        })} */}
      </>
    </main>
  );
}
