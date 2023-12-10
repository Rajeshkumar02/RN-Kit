import React from 'react';
import {TextStyle, ViewStyle} from 'react-native';

export type InputI = {
  value?: any;
  onChange?: (e: any) => void;
  placeholder?: string;
  error?: string;
  inputType?: 'default' | 'icon' | 'password';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  leftIconFunc?: () => void;
  rightIconFunc?: () => void;
  variant?: 'outlined' | 'underline' | 'unstyled';
  label?: string;
  inputProps?: InputPropsI;
  sx?: {
    input?: ViewStyle;
    label?: TextStyle;
    errorText?: TextStyle;
    errorInputbox?: ViewStyle;
  };
};

type InputPropsI = {
  keyboardType?:
    | 'default'
    | 'number-pad'
    | 'decimal-pad'
    | 'numeric'
    | 'email-address'
    | 'phone-pad';
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  autoCorrect?: boolean;
  secureTextEntry?: boolean;
  maxLength?: number;
  multiline?: boolean;
  numberOfLines?: number;
  onFocus?: () => void;
  onBlur?: () => void;
  onSubmitEditing?: () => void;
  returnKeyType?: 'done' | 'go' | 'next' | 'search' | 'send';
  placeholderTextColor?: string;
  editable?: boolean;
};
