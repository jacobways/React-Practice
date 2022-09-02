import React, { Suspense } from 'react';
import './Lazy.scss';
// import Map from './Map';

const Map = React.lazy(() => import('./Map'));

const fallback = <div>Loading...</div>;

export default function Lazy() {
  return (
    <section className='container'>
      <Suspense fallback={fallback}>
        <Map />
      </Suspense>
    </section>
  );
}
