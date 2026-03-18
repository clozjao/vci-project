import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { Suspense, useEffect } from 'react';
// const Security = React.lazy(() => import('../pages/Security/Security'));
import MainContainerPC from '../components/MainContainPC/MainContainPC';
import CenterSidebarPC from '../components/CenterSidebarPC/CenterSideBar';
import Tabs from '../components/VciComponents/VciTabs.jsx';
import Vci from '../pages/Vci/vci.jsx';

export default function RouteIndexV3() {
  const loader = (children) => {
    return <Suspense>{children}</Suspense>;
  };

  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}
