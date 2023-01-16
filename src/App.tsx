import React, { Suspense, useLayoutEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Header from './components/Header';
import Main from './pages/Main';
import TodoList from './pages/TodoList';
import Loading from './components/Loading';

const queryClient = new QueryClient();

function App() {
  const [isLogin, setIsLogin] = useState(false);

  useLayoutEffect(() => {
    if (!localStorage.getItem('token')) return;

    setIsLogin(true);
  }, []);

  console.log(isLogin);
  return (
    <React.Fragment>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Header isLogin={isLogin} setIsLogin={setIsLogin} />
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/*" element={isLogin ? <TodoList /> : <Main />} />
              <Route path="/todo/:id" element={<TodoList />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </React.Fragment>
  );
}

export default App;
