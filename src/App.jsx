import React from 'react';
import {
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from 'react-router';
import MainContainerPC from './components/MainContainPC/MainContainPC';
import CenterSidebarPC from './components/CenterSidebarPC/CenterSideBar';
import Tabs from './components/VciComponents/VciTabs.jsx';
import Vci from './pages/Vci/vci.jsx';

function VciLayout() {
  return (
    <MainContainerPC className="displayPCTopContainer">
      <CenterSidebarPC className="CenterSidebarPC">
        <div className="main-area">
          <div className="right-area">
            <Outlet />
            <Tabs />
          </div>
        </div>
      </CenterSidebarPC>
    </MainContainerPC>
  );
}

const router = createBrowserRouter([
  {
    element: <VciLayout />,
    children: [
      {
        index: true,
        element: <Vci />,
      },
      {
        path: '*',
        element: <Vci />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
