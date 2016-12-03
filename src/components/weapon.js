import React from 'react';
import {Image} from 'react-native';

export default function Weapon ({triggered, ...props}) {
  return (
    <Image
      source={triggered ?
        require('../assets/images/handgun-triggered.png') :
        require('../assets/images/handgun.png')
      }
      {...props}
    />
  );
}
