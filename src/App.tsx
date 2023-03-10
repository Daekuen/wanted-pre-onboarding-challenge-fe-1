import React, { Suspense, useLayoutEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Main from './pages/Main';
import TodoList from './pages/TodoList';
import Loading from './components/Loading';
import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';
import AuthValidate from './components/common/AuthValidate';
import Header from './components/header/Header';

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
          <Header />
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route
                path="/"
                element={
                  <AuthValidate>
                    <Main />
                  </AuthValidate>
                }
              />
              <Route
                path="/auth/signup"
                element={
                  <AuthValidate>
                    <SignUp />
                  </AuthValidate>
                }
              />
              <Route
                path="/auth/login"
                element={
                  <AuthValidate>
                    <Login />
                  </AuthValidate>
                }
              />
              <Route path="/todos" element={<TodoList />}>
                <Route path="id" element={<TodoList />} />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </React.Fragment>
  );
}

export default App;
