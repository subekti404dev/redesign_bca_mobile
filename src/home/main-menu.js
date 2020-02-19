import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import img from '../img';

export class MainMenu extends React.Component {
  menuFirstRow = [
    {
      label: 'Information',
      icon: img.mInfo,
    },
    {
      label: 'Transfer',
      icon: img.mTransfer,
    },
    {
      label: 'Payment',
      icon: img.mPayment,
    },
    {
      label: 'Cardless',
      icon: img.mCardless,
    },
  ];
  menuSecondRow = [
    {
      label: 'Commerce',
      icon: img.mCommerce,
    },
    {
      label: 'QR',
      icon: img.mQR,
    },
    {
      label: 'Flazz',
      icon: img.mFlazz,
    },
    {
      label: 'Other',
      icon: img.mOther,
    },
  ];
  render() {
    return (
      <View
        style={{
          backgroundColor: '#FFF',
          height: 250,
          elevation: 0,
          zIndex: -10,
          paddingTop: 50,
        }}>
        <View style={{flexDirection: 'row'}}>
          {this.menuFirstRow.map((data, index) => {
            return <Menu data={data} key={index} />;
          })}
        </View>
        <View style={{flexDirection: 'row'}}>
          {this.menuSecondRow.map((data, index) => {
            return <Menu data={data} key={index} />;
          })}
        </View>
      </View>
    );
  }
}

const Menu = props => {
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        padding: 10,
        alignItems: 'center',
      }}>
      <Image source={props.data.icon} style={{width: 50, height: 50}} />
      <Text style={{fontSize: 12}}>{props.data.label}</Text>
    </TouchableOpacity>
  );
};
