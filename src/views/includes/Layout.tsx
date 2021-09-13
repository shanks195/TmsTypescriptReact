import React from 'react';
import Sidebar from 'views/components/layout/Sidebar';
import ContentWrapper from 'views/components/layout/ContentWrapper';

const Layout: React.FC = () => {

  return <React.Fragment>
    <Sidebar />
    <ContentWrapper />
  </React.Fragment>;

}

export default React.memo(Layout);