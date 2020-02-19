import React from 'react';
import {ScrollView, View} from 'react-native';
import {Header} from './header';
import {MainMenu} from './main-menu';
import {Recent} from './recent';
import GeneralStatusBarColor from "react-native-general-statusbar";

export class Home extends React.Component {
  render() {
    return (
      <View style={{backgroundColor: '#EEEEEE', flex: 1}}>
        <GeneralStatusBarColor
          backgroundColor="#103B97"
          barStyle="light-content"
        />
        <Header />
        <ScrollView style={{zIndex: -1}}>
        <MainMenu />
        <Recent />
        </ScrollView>
      </View>
    );
  }
}
