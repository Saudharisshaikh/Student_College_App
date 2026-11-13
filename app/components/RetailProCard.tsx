import React from 'react';
import { View, Text, Image, StyleSheet, Pressable, Linking } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Colors from '../constants/Colors';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const RetailProCard = () => {

  const driveUrl =
  'https://drive.google.com/file/d/18S3qZdD87c6yIoOuurHFFIu9yO1G47wG/view';
  return (
  <LinearGradient
   colors={[
    '#002147',
    '#8FB8D8',
    '#D9ECF7',
    '#FFFFFF',
  ]}
  locations={[0, 0.25, 0.55, 1]}
  start={{ x: 0, y: 0 }}
  end={{ x: 1, y: 1 }}
  style={styles.gradientCard}
>
  <View style={styles.content}>

    <View style={{ height: 20 }} />

    <Text style={styles.title}>
      Latest Updates
    </Text>

    <Text style={{paddingHorizontal:responsiveWidth(3),
      paddingVertical:responsiveHeight(1),}}> Download link for New Computer Science XI Book:  </Text>

<Pressable onPress={()=>{ Linking.openURL(driveUrl)}}
>

<Text
  style={{
    color: '#1565C0',
    textDecorationLine: 'underline',
    paddingStart:responsiveWidth(4)
  }}
 
>
  {driveUrl}
</Text>
</Pressable>


  </View>
</LinearGradient>
  );
};

export default RetailProCard;

const styles = StyleSheet.create({
  gradientCard: {
    width: '100%',
    height: 250,
    borderRadius: 20,
    overflow: 'hidden',

    
  },

  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  appImage: {
    width: 100,
    height: 100,
    marginTop: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color:Colors.PRIMARY_COLOR,
    
  },
});