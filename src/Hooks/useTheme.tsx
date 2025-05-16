import {useWindowDimensions} from 'react-native';
import palette from '../Constants/Colors/Color';

const useTheme = () => {
  const windowDimensions = useWindowDimensions();

  return {
    DIMENSIONS: windowDimensions,
    COLORS: palette.light,
  };
};

export default useTheme;
