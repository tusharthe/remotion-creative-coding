import React from 'react';
import { MyComposition as Episode1Composition } from '../episodes/1/Composition';

export interface Episode {
    id: string;
    component: React.FC<any>;
    durationInFrames: number;
    fps: number;
    width: number;
    height: number;
}

export const episodes: Episode[] = [
    {
        id: "Episode-1-Intro",
        component: Episode1Composition,
        durationInFrames: 2610,
        fps: 30,
        width: 1920,
        height: 1080,
    }
];
