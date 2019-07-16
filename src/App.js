import React from 'react';
import Header from './components/shared/Header/headerComponent';
import Footer from './components/shared/Footer/footerComponent';
import Todo from './components/Todo/todoComponent';

function App() {
  return (
   <div>
     <Header />
     <Todo />
     <Footer />
   </div>
  );
}

export default App;
