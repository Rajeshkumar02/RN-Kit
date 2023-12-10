import React from 'react';
import {TextStyle} from 'react-native';

export type TextI = {
  children: React.ReactNode;
  sx?: TextStyle;
  color?: string;
  fz?:
    | number
    | 'sm'
    | 'xs'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl'
    | '7xl'
    | '8xl'
    | '9xl';
  maxLine?: number;
  truncatePossition?: 'tail' | 'head';
};
