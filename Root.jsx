import React from 'react';
import { Composition } from 'remotion';
import { ChickFilAVideo } from './ChickFilAVideo';

export const RemotionRoot = () => {
  return (
    <>
      <Composition
        id="ChickFilAVideo"
        component={ChickFilAVideo}
        durationInFrames={1710} // Total: 57 seconds at 30fps
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
