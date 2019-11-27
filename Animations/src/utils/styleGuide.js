import {widthRatio} from './stylesheet';

const themebackground1 = 'black';
const themebackground2 = '#008080';
const themebackground3 = '#19ADAD';
const themebackground4 = '#4BBD9C';
const themebackground5 = '#4A8E8E';
const themebackground6 = '#263F6F';
const themebackground7 = '#5076C0';
const bigShadow = {
  // shadowColor: '#000',
  // shadowOffset: { width: 5, height: 5 },
  // shadowOpacity: 0.4,
  // shadowRadius: 1.5,
  // elevation: 3,
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 4,
  },
  shadowOpacity: 0.3,
  shadowRadius: 4.65,
  elevation: 8,
};
const warningToast = {
  backgroundColor: '#f0ad4e',
  paddingHorizontal: widthRatio * 50,
};
const dangerToast = {
  backgroundColor: '#d9534f',
  paddingHorizontal: widthRatio * 50,
};
const successToast = {
  backgroundColor: '#5cb85c',
  paddingHorizontal: widthRatio * 50,
};
const toastTextStyle = {color: 'white', fontSize: 17};

const styleGuide = {
  secondaryColor: '#FFC300',
  primaryColor: '#50D6AE',
  themebackground: themebackground1,
  inputTextColor: 'white',
  bigShadow: bigShadow,
  carousel: {
    black: '#1a1917',
    gray: '#888888',
    background1: themebackground1,
    background2: themebackground2,
    background3: themebackground3,
    background4: themebackground4,
    background5: themebackground5,
    background6: themebackground6,
    background7: themebackground7,
  },
  warningToast: warningToast,
  dangerToast: dangerToast,
  successToast: successToast,
  toastTextStyle: toastTextStyle,
};

export default styleGuide;
