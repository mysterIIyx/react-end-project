import React from 'react';
import './sass/app.sass';
import StoreProvider from './store/StoreProvider';


function App() {
  return (
    <div>
      {/* Sprawdź, czy masz tu jakiś widoczny tekst! */}
      <StoreProvider>
        <h1>APLIKACJA DZIAŁA!</h1>
      </StoreProvider>
      
    </div>
  );
}

export default App;