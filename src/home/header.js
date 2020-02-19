import React from 'react';
import {
  View,
  Image,
  Text,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import img from '../img';

export class Header extends React.Component {
  quickAccess = [
    {
      label: 'Cardless Withdraw',
      icon: img.bcaWithdraw,
    },
    {
      label: 'Transfer Virtual Account',
      icon: img.bcaVA,
    },
    {
      label: 'History Transaction',
      icon: img.bcaHistory,
    },
  ];
  render() {
    return (
      <View style={{backgroundColor: '#FFF', height: 170, elevation: 0}}>
        <ImageBackground
          source={img.bcaBG}
          style={{flex: 1, paddingHorizontal: 20, paddingTop: 30}}
          borderBottomLeftRadius={20}
          borderBottomRightRadius={20}>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 1}}>
              <Image source={img.bcaLogo} style={{width: 130, height: 35}} />
            </View>
            <TouchableOpacity style={{flex: 1, alignItems: 'flex-end'}}>
              <Image source={img.bcaNotif} style={{width: 25, height: 25}} />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={{color: '#FFF'}}>Balance</Text>
            <Text style={{color: '#FFF', fontSize: 20, fontWeight: 'bold'}}>
              Rp 300.000
            </Text>
          </View>
        </ImageBackground>
        <View
          style={{
            backgroundColor: '#FFF',
            width: '90%',
            height: 80,
            position: 'absolute',
            alignSelf: 'center',
            bottom: -35,
            borderRadius: 15,
            elevation: 10,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 5,
            },
            shadowOpacity: 0.34,
            shadowRadius: 6.27,
            flexDirection: 'row',
            paddingHorizontal: 10
          }}>
          {this.quickAccess.map((data, index) => {
            return <QuickAccess data={data} key={index} />;
          })}
        </View>
      </View>
    );
  }
}

const QuickAccess = props => {
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image source={props.data.icon} style={{width: 45, height: 45}} />
      <View style={{width: 80}}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 10,
            top: -5,
            color: '#113B97',
          }}>
          {props.data.label}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
