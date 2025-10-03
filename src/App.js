import React from 'react';
import './sass/app.sass';
import StoreProvider from './store/StoreProvider';
import Header from './components/Header';


function App() {
  return (
    <div>
      {/* Sprawdź, czy masz tu jakiś widoczny tekst! */}
      <StoreProvider>
        <Header />
      </StoreProvider>
      
    </div>
  );
}

export default App;