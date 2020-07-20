import React from 'react';
import { Image } from 'react-native';
import Colors from '../../constants/Colors';
import { useEffect, useState } from 'react';

interface Props {
  color: String;
}

export const PokemonIcon: React.FC<Props> = ({ color }) => {
  const activeIconPath = require('../../assets/images/pokemon_icon.png');
  const inactiveIconPath = require('../../assets/images/pokemon_icon_inactive.png');
  const [selectedIcon, setSelectedIcon] = useState<String>(activeIconPath);
  
  useEffect(()=> {
    const oi = color === Colors.light.tint ? activeIconPath : inactiveIconPath;
    setSelectedIcon(oi);
  }, []);

  return (
    <Image
      source={selectedIcon}
      fadeDuration={0}
      style={{width: 30, height: 30}}
    />
  );
}