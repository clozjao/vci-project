import React from 'react';
import StyleDevelopToolMode, {
  NotificationDevelopToolModePic,
} from '../../components/Notification/DevelopToolMode/StyleDevelopToolMode';
import StyleSecurity from './StyleSecurity';

const Security = () => {
  return (
    <StyleSecurity>
      <StyleDevelopToolMode className="developToolMode-mask">
        <NotificationDevelopToolModePic />
      </StyleDevelopToolMode>
    </StyleSecurity>
  );
};

export default Security;
