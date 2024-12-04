import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { StyledKioskLandPage } from './style';
import { t } from 'i18next'
import { apiSwitchLang } from '../../api/quoteAPI';
import { Link } from 'react-router-dom';

export default function KioskLandPage() {
  const [lang, setLang] = useState(localStorage.getItem('language') || 'en');
  const [enabled, setEnabled] = useState(false);
  const { isLoading, error, data, isFetching } = useQuery(["repoData", 'changeJwtLang', lang], () =>
    apiSwitchLang(lang).then((res) => res.data.token), { enabled: enabled }
  );

  const changeLang = (e, curLang) => {
    e.preventDefault();
    setLang(curLang);
    setEnabled(!enabled);
  };

  useEffect(() => {
    if (isLoading || isFetching || error || !data) return;
    if (localStorage.getItem('access_token') !== data) {
      localStorage.setItem('access_token', data);
      location.reload(true);
    }
  }, [data]);

  useEffect(() => {
    return () => setEnabled(false);
  }, []);


  return (
    <StyledKioskLandPage className='kiosk-land-page'>
      <div className='kiosk-container'>
        <div className='header'>
          <div className='title1-area'>
            <img
              className='title1-img'
              src={`${process.env.REACT_APP_IMG_ROOT}favicon/android-chrome-192x192.png`}
              alt="logo"
            />
            <h1 className='title1-text'>
              {t('LUCKY SPORTS')}
            </h1>
          </div>
          <div className='title2-area'>
            <h2 className='title2-text'>
              {t('Take the First Step Towards Winning - Bet Now')}
            </h2>
          </div>
        </div>
        <div className='banner'>
          <div className='banner-bg' />
        </div>
        <div className='button-group'>
          <Link
            to={'/special/ipl'}
          >
            <div className='button' >
              <img className='btn-bg' alt="popular" src={'https://sprodm.uni247.xyz/images-v3/KioskLandPage/popular3.png'} />
            </div>
          </Link>
          <Link
            to={'/live'}
          >
            <div className='button' >
              <img className='btn-bg' alt="live" src={`https://sprodm.uni247.xyz/images-v3/KioskLandPage/live_${localStorage.getItem('language')}2.png`} />
            </div>
          </Link>
          <Link
            to={'/category/soccer'}
          >
            <div className='button'>
              <div className='feat-icon'>
                <img src={`${process.env.REACT_APP_IMG_ROOT}Soccer_quicklink_v3.svg`} alt="soccer" />
              </div>
              <div className='sport-name'>
                {t('soccer')}
              </div>
            </div>
          </Link>
          <Link
            to={'/category/basketball'}
          >
            <div className='button'>
              <div className='feat-icon'>
                <img src={`${process.env.REACT_APP_IMG_ROOT}Basketball_quicklink_v3.svg`} alt="basketball" />
              </div>
              <div className='sport-name'>
                {t('basketball')}
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className='lang-group'>
        <div className={`lang-box ${localStorage.getItem('language') === 'en' ? 'active' : ''}`}
          onClick={(e) => {
            changeLang(e, 'en')
          }}
        >
          <span className='lang-icon'>
            <img src={`${process.env.REACT_APP_IMG_ROOT}flag/en.png`} alt="lang_en" />
          </span>
          <h2 className='lang-text'>
            {t('EN')}
          </h2>
        </div>
        <div className={`lang-box ${localStorage.getItem('language') === 'pt' ? 'active' : ''}`}
          onClick={(e) => {
            changeLang(e, 'pt')
          }}
        >
          <span className='lang-icon'>
            <img src={`${process.env.REACT_APP_IMG_ROOT}flag/pt.png`} alt="lang_pt" />
          </span>
          <h2 className='lang-text'>
            {t('PT')}
          </h2>
        </div>
      </div>
    </StyledKioskLandPage>
  )
}
