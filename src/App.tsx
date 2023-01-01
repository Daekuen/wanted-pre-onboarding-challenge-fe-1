import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import Header from './components/Header';
import Main from './pages/Main';
import TodoList from './pages/TodoList';

function App() {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const queryClient = new QueryClient();

  useEffect(() => {
    if (!localStorage.getItem('token')) return;

    setIsLogin(true);
  }, [isLogin]);

  return (
    <React.Fragment>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Header isLogin={isLogin} setIsLogin={setIsLogin} />
          <Routes>
            <Route path="/*" element={isLogin ? <TodoList /> : <Main />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </React.Fragment>
  );
}

export default App;
