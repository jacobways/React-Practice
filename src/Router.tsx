import { Route, Routes } from 'react-router-dom';
import Focus from './pages/Focus/Focus';

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="focus" element={
          <Focus />
        } />
      </Routes>
    </>
  );
}
