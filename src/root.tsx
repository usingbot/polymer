import React from 'react';
import {Composition} from 'remotion';
import {PolymerExplainer} from './video';

export const Root: React.FC = () => (
  <Composition
    id="PolymerExplainer"
    component={PolymerExplainer}
    durationInFrames={540}
    fps={30}
    width={1920}
    height={1080}
  />
);
