import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

import Colors from '../constants/Colors';
import Images from '../constants/Images';
import { load } from '../utils/storage';
import KeyConstants from '../constants/KeyConstants';

export default function WelcomeScreen() {
  const navigation: any = useNavigation();

  useEffect(() => {
    const timer = setTimeout  (async () => {
      const hasSeenOnboarding = await load(KeyConstants.ONBOARDING_KEY);
      console.log('hasSeenOnboarding:', hasSeenOnboarding);
      if (hasSeenOnboarding) {
       navigation.navigate('BottomTab');
      }
      else{
        navigation.replace('OnBoarding');
      }
      //navigation.replace('OnBoarding');
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={Images.Newcolstudents}
        style={styles.backgroundImage}
        resizeMode="cover"
      />

      <View style={styles.overlay} />

      <View style={styles.logoContainer}>
        <Image 
          source={Images.GraduateStudents}
          style={styles.logo}
          resizeMode="contain" 
        />
      </View>
       

      <View style={styles.content}>
        <Text style={styles.badge}>Your future starts here</Text>
        <Text style={styles.appName}>Student Portal</Text>
        <Text style={styles.tagline}>Discover your next step with confidence</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.PRIMARY_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    width: responsiveWidth(100),
    height: responsiveHeight(100),
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 33, 71, 0.80)',
  },
  content: {
    zIndex: 1,
    alignItems: 'center',
    paddingHorizontal: 28,
  },
  badge: {
    color: '#E7E9FF',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 2,
    textTransform: 'uppercase',
    marginBottom: 12,
  },
  appName: {
    color: Colors.WHITE_COLOR,
    fontSize: 36,
    fontWeight: '800',
    letterSpacing: 1,
    textAlign: 'center',
    marginBottom: 10,
  },
  tagline: {
    color: '#F3F5FF',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '500',
    maxWidth: 290,
    lineHeight: 26,
  },
  logo: {
    width: 120,
    height: 120,
  },
  logoContainer: {
    width: 140,
    height: 140,
    
    marginTop: responsiveHeight(20),
    borderRadius: 70,
    zIndex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
});
