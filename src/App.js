import React from 'react';
import AppContent from './component/AppContent';
import AppHeader from './component/AppHeader';
import PageTitle from './component/PageTitle';
import styles from './styles/modules/app.module.scss';

function App() {
  return (
    <div className="container">
      <PageTitle>TODO LIST</PageTitle>
      <div className={styles.app__wrapper}>
        <AppHeader />
        <AppContent />
      </div>
    </div>
  );
}

export default App;
