import React, { useEffect, useState } from 'react';

import useDetectDevelopTool from './hook/useDetectDevelopTool';
import RouteIndexV3 from './routes/indexV3';

export default function App() {
  // false &&
  //   process.env.NODE_ENV === 'production' &&
  //   useDetectDevelopTool();

  return <RouteIndexV3 />;
}
