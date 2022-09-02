import { Route, Routes } from 'react-router-dom';
import Focus from './pages/Focus/Focus';
import Lazy from './pages/lazy/Lazy';
import MousePointerEvent from './pages/MousePointerEvent/MousePointerEvent';

export default function Router() {
  return (
    <>
      <Routes>
        <Route path='focus' element={<Focus />} />
        <Route path='mouse' element={<MousePointerEvent />} />
        <Route path='lazy' element={<Lazy />} />
      </Routes>
    </>
  );
}
