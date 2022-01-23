import { Oval, Triangle  } from  'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

interface SpinnerLoader {
  color?: string;
  loading: boolean;
  width?: number;
  height?: number
}

export function SpinnerLoader({ 
  loading, 
  color = 'var(--blue)', 
  width = 50,
  height = 50
}: SpinnerLoader) {
  if (!loading) return null;

  return (
    <Triangle 
      width={width}
      height={height}
      color={color}
    />
  );
}