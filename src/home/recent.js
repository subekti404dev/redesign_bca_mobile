import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import img from '../img';

export class Recent extends React.Component {
  recent = [
    {
      date: '18 January 2020',
      name: 'Imanuel Urip Subekti',
      bankName: 'BCA',
      bankAccount: '0888877625',
      amount: 'Rp 200.000',
      type: 'in',
    },
    {
      date: '17 January 2020',
      name: 'Tokopedia',
      bankName: 'BNI',
      bankAccount: '878877625',
      amount: 'Rp 70.000',
      type: 'out',
    },
    {
      date: '15 January 2020',
      name: 'Topup OVO',
      bankName: '',
      bankAccount: '0888877625',
      amount: 'Rp 100.000',
      type: 'out',
    },
    {
      date: '15 January 2020',
      name: 'Topup Gopay',
      bankName: '',
      bankAccount: '0888877625',
      amount: 'Rp 1.200.000',
      type: 'out',
    },
    {
      date: '10 January 2020',
      name: 'Imanuel Urip Subekti',
      bankName: 'BCA',
      bankAccount: '0888877625',
      amount: 'Rp 150.000',
      type: 'in',
    },

  ];
  render() {
    return (
      <View style={{backgroundColor: '#FFF', height: 410, marginTop: 10}}>
        <View
          style={{
            flexDirection: 'row',
            padding: 10,
            alignItems: 'center',
            // flex: 1,
          }}>
          <View style={{flex: 2}}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
              Recent Transaction
            </Text>
          </View>
          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <Text style={{color: '#113B97', fontSize: 16, fontWeight: 'bold'}}>
              {'More >>'}
            </Text>
          </View>
        </View>
        <View style={{ height: 350, paddingHorizontal: 10}}>
          {this.recent.map((data, index) => {
            return <Transaction data={data} key={index} />;
          })}
        </View>
      </View>
    );
  }
}

const Transaction = props => {
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        height: 100,
        borderBottomColor: '#EEE',
        borderBottomWidth: 0.5,
        paddingVertical: 10,
        backgroundColor: '#FFF'
      }}>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{flex: 1}}>
          <Text style={{color: '#5E5E5E', fontSize: 10}}>{props.data.date}</Text>
          <Text style={{color: '#3B3B3B', fontWeight: 'bold'}}>
            {props.data.name}
          </Text>
          <Text
            style={{
              color: '#8A8A8A',
            }}>{`${props.data.bankName} ${props.data.bankAccount}`}</Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Text
            style={{
              color: props.data.type === 'in' ? '#67B572' : '#C14944',
              fontWeight: 'bold',
            }}>
            {props.data.amount}
          </Text>
          <Image
            source={props.data.type === 'in' ? img.in : img.out}
            style={{width: 20, height: 20}}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};
