import {View, Text, Pressable, Image} from 'react-native';
import React from 'react';
import Colors from '../constants/Colors';
import { useNavigation } from '@react-navigation/native';
import Images from '../constants/Images';
import Fonts from '../constants/Fonts';

type TopBarProps = {
  title: string;
};

const TopBar = ({title}: TopBarProps) => {
    const navigation = useNavigation();
    return (
    <View style={{
        flexDirection:'row',
        height:60,backgroundColor: 
    Colors.WHITE_COLOR,alignItems:'center',
    elevation:10,
    borderRadius:2
     
    }}>
       
      <Pressable
        onPress={() => {
        navigation.goBack();
        }}
        style={{padding: 12}}>
        <Image source={Images.BackArrowIcon} resizeMode='contain'/>
      </Pressable>

      <Text style={{fontSize:22, color:Colors.PRIMARY_COLOR,fontWeight:'bold',fontFamily:Fonts.POPPINS_BOLD}}>{title}</Text>
    </View>
  )
}

export default TopBar;