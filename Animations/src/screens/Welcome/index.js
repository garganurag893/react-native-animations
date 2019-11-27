import React, {PureComponent} from 'react';
import {View, Animated} from 'react-native';
import styles, {colors} from './style';
import getIcon from '../../utils/requireImages';
import LinearGradient from 'react-native-linear-gradient';

export default class Successful extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    this.animatedValue = new Animated.Value(0);
    this.animatedValue2 = new Animated.Value(0);
    this.timeOut = null;
  }

  componentDidMount() {
    this.animate();
    const {props} = this;
    const paymentStatus = props.navigation.getParam('paymentStatus');
    if (paymentStatus) {
      this.timeOut = setTimeout(() => {
        props.navigation.navigate('track');
      }, 3000);
    } else {
      this.timeOut = setTimeout(() => {
        props.navigation.goBack();
      }, 3000);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timeOut);
  }

  animate() {
    this.animatedValue.setValue(0);
    this.animatedValue2.setValue(0);
    Animated.parallel([
      Animated.timing(this.animatedValue, {
        toValue: 1,
        duration: 500,
        delay: 1000,
      }),
      Animated.timing(this.animatedValue2, {
        toValue: 1,
        duration: 1000,
      }),
    ]).start();
  }

  goBack = () => {
    const {props} = this;
    props.navigation.goBack();
  };

  render() {
    const scaleText = this.animatedValue2.interpolate({
      inputRange: [0, 1],
      outputRange: [0.5, 1],
    });
    const opacity = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 0.5, 1],
    });
    const {props} = this;
    const paymentStatus = props.navigation.getParam('paymentStatus');
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={[colors.background2, colors.background4]}
          startPoint={{x: 1, y: 0}}
          endPoint={{x: 0, y: 1}}
          style={styles.gradient}
        />
        <Animated.View style={[{transform: [{scale: scaleText}]}]}>
          <View style={styles.imageContainer}>
            <Animated.Image
              source={paymentStatus ? getIcon('check') : getIcon('cross')}
              resizeMode="contain"
              style={[styles.tickImage, {opacity}]}
            />
          </View>
        </Animated.View>
      </View>
    );
  }
}
