import { Route, Routes } from 'react-router-dom';
import MainUI from '../components/MainUI';
import SignUpIn from '../components/SignUp-In';

export default function Main() {
  return (
    <section className="flex flex-col max-w-2xl h-[800px] items-center justify-center m-auto bg-green-600 text-gray-200 mt-10 rounded-md relative">
      <div className="flex text-6xl mb-20 py-2 font-bold justify-center border-solid border-b-2 border-gray-200 absolute top-10">
        <h1>Todo List</h1>
      </div>
      <Routes>
        <Route path="/" element={<MainUI />} />
        <Route
          path="/auth/signup"
          element={<SignUpIn title="SIGN UP" type="create" />}
        />
        <Route
          path="/auth/login"
          element={<SignUpIn title="LOGIN" type="login" />}
        />
      </Routes>
    </section>
  );
}
