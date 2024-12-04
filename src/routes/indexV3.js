import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import React, { Suspense, useEffect } from 'react';
// const Security = React.lazy(() => import('../pages/Security/Security'));
import { WIDGET_MODE } from '../utils/env';
import MainContainerPC from '../components/MainContainPC/MainContainPC';
import CenterSidebarPC from '../components/CenterSidebarPC/CenterSideBar';
import Tabs from '../components/VciComponents/VciTabs';
import Vci from '../pages/Vci/vci';

export default function RouteIndexV3() {
  const Router = WIDGET_MODE === 'on' ? HashRouter : BrowserRouter;

  const loader = (children) => {
    return <Suspense>{children}</Suspense>;
  };

  return (
    <Router>
      <MainContainerPC className={'displayPCTopContainer'}>
        <CenterSidebarPC className="CenterSidebarPC">
          <div className="main-area">
            <div className="right-area">
                <Routes>
                  {/* <Route path="security" element={loader(<Security />)} /> */}
                  <Route path="/" element={<Vci />} />
                  <Route path="*" element={<Vci />}>
                  </Route>
                </Routes>
                <Tabs />
            </div>
          </div>
        </CenterSidebarPC>
      </MainContainerPC>
    </Router>
  );
}
