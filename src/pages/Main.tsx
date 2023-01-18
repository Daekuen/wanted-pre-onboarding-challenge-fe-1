import { Route, Routes } from 'react-router-dom';
import SectionWrapper from '../components/common/SectionWrapper';
import MainUI from '../components/MainUI';

export default function Main() {
  return (
    <SectionWrapper>
      <Routes>
        <Route path="/" element={<MainUI />} />
      </Routes>
    </SectionWrapper>
  );
}
