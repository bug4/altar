import React, { Suspense } from 'react';
import Spline from '@splinetool/react-spline';

export default function SplineBackground() {
  return (
    <div className="fixed inset-0 z-0 bg-black">
      <Suspense
        fallback={
          <div className="w-full h-full bg-black flex items-center justify-center">
            <div className="text-cyan-300 text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
              <p>Loading divine realm...</p>
            </div>
          </div>
        }
      >
        <Spline
          scene="https://prod.spline.design/LtZBVp23n9QbZ8Ld/scene.splinecode"
          className="w-full h-full"
        />
      </Suspense>
    </div>
  );
}