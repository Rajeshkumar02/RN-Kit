import metrics from './metrics';

//Font Weight
export type FontWeightI = 'light' | 'regular' | 'medium' | 'bold' | 'full';

export const weight: Record<
  FontWeightI,
  '300' | '400' | '500' | '700' | '900'
> = {
  light: '300',
  regular: '400',
  medium: '500',
  bold: '700',
  full: '900',
};

//Font size
export const FontSize = (percentage: number) => {
  const height = metrics.screenHeight;
  const width = metrics.screenWidth;
  const min = Math.min(width, height);
  return min * (percentage / 100);
};

//Border Radius

export type RadiusI = 'sm' | 'md' | 'lg' | 'full';

export const radius: Record<RadiusI, number> = {
  sm: 5,
  md: 10,
  lg: 15,
  full: 9999,
};
