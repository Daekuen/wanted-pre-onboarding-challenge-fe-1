import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Header from './components/Header';
import Main from './pages/Main';
import TodoList from './pages/TodoList';

const queryClient = new QueryClient();

function App() {
  const [isLogin, setIsLogin] = useState<boolean>(false);

  useEffect(() => {
    if (!localStorage.getItem('token')) return;

    setIsLogin(true);
  }, [isLogin]);

  console.log(isLogin);
  return (
    <React.Fragment>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Header isLogin={isLogin} setIsLogin={setIsLogin} />
          <Routes>
            <Route path="/*" element={isLogin ? <TodoList /> : <Main />} />
          </Routes>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </React.Fragment>
  );
}

export default App;
