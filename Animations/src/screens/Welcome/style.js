import {StyleSheet} from 'react-native';
import styleGuide from '../../utils/styleGuide';
import {heightRatio, widthRatio} from '../../utils/stylesheet';

export const colors = styleGuide.carousel;

export default StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: colors.background1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
  },
  imageContainer: {
    width: widthRatio * 270,
    height: widthRatio * 270,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    ...styleGuide.bigShadow,
  },
  tickImage: {
    width: heightRatio * 120,
    height: heightRatio * 130,
  },
  text: {
    fontSize: heightRatio * 20,
    fontWeight: '200',
  },
});
