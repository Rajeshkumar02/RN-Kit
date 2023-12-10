import React from 'react';
import {TextStyle, ViewStyle} from 'react-native';

export type ButtonI = {
  children: string;
  color?: string;
  disabled?: boolean;
  radius?: number | 'sm' | 'md' | 'lg' | 'full';
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  justify?:
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'flex-end'
    | 'flex-start'
    | 'space-evenly';
  onClick?: () => void;
  sx?: {
    button?: ViewStyle;
    buttonText?: TextStyle;
  };
  onLongPress?:()=>void;
  variant?: 'filled' | 'light' | 'outline' | 'transparent' | 'link';
};
