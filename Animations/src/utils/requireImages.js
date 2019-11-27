/* eslint-disable global-require */
export default function getIcon(type) {
  switch (type) {
    case 'sarcasmSmiley':
      return require('../../assets/sarcasmSmiley.png');
    case 'logoImage':
      return require('../../assets/logoImage.png');
    case 'marker':
      return require('../../assets/marker.png');
    case 'house':
      return require('../../assets/house.png');
    case 'secondMarker':
      return require('../../assets/secondMarker.png');
    case 'support':
      return require('../../assets/support.png');
    case 'card':
      return require('../../assets/card.png');
    case 'paypal':
      return require('../../assets/paypal.png');
    case 'taxi':
      return require('../../assets/taxi.png');
    case 'check':
      return require('../../assets/check.png');
    case 'cross':
      return require('../../assets/cross.png');
    case 'warning':
      return require('../../assets/warning.png');
    case 'food':
      return require('../../assets/food.png');
    case 'chef':
      return require('../../assets/chef.png');
    case 'user':
      return require('../../assets/user.png');
    case 'zoomLocation':
      return require('../../assets/zoomLocation.png');
    case 'foodMark':
      return require('../../assets/foodMark.png');
    case 'houseMark':
      return require('../../assets/houseMark.png');
    case 'razorpay':
      return require('../../assets/razorpay.png');
    case 'backArrow':
      return require('../../assets/backArrow.png');
    default:
      return {};
  }
}
