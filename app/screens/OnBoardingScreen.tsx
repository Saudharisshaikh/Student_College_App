import React, {useRef, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import Colors from '../constants/Colors';
import Images from '../constants/Images';
import CustomButton from '../components/CommonButton';
import { save } from '../utils/storage';
import KeyConstants from '../constants/KeyConstants';

const {width} = Dimensions.get('window');

const slides = [
  {
    id: '1',
    title: 'College life',
    subtitle: 'Discover the next big step in your journey',
    description:
      'Explore colleges, programs, and student communities that match your dreams and career goals.',
    image: Images.WelcomeBackground,
   tint: '#0E056B',
  },
  {
    id: '2',
    title: 'Career planning',
    subtitle: 'Build a roadmap that feels personal',
    description:
      'Track your academic goals, get recommendations, and plan the path that keeps you moving forward.',
    image: Images.OnBoardingImageTwo,
    tint: '#0E056B',
  },
  {
    id: '3',
    title: 'Stay connected',
    subtitle: 'Make learning and campus life easier',
    description:
      'Get updates, connect with peers, and access the tools you need to stay confident and inspired.',
    image: Images.Newcolstudents,
    tint: '#0E056B',
  },
];

const OnBoardingScreen = () => {
  const navigation: any = useNavigation();
  const flatListRef = useRef<FlatList>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const isLastSlide = activeIndex === slides.length - 1;

  const handleNext = async() => {
    if (isLastSlide) {

      await save(KeyConstants.ONBOARDING_KEY, true);
      navigation.reset({
        index: 0,
        routes: [{name: 'Login'}],
      });
      return;
    }

    const nextIndex = activeIndex + 1;
    flatListRef.current?.scrollToIndex({
      index: nextIndex,
      animated: true,
    });
    setActiveIndex(nextIndex);
  };

  const handleSkip = () => {
    navigation.reset({
      index: 0,
      routes: [{name: 'Login'}],
    });
  };

  const renderItem = ({item}: {item: (typeof slides)[number]}) => (
    <View style={[styles.slide, {width}]}>
      <View
        style={[
          styles.imageWrap,
          {
            backgroundColor: `${item.tint}22`,
            borderColor: `${item.tint}66`,
          },
        ]}>
        <Image source={item.image} style={styles.image} resizeMode="cover" />
      </View>

      <Text style={styles.eyebrow}>Student life</Text>
      <Text testID="onboarding-title" style={styles.title}>
        {item.title}
      </Text>
      <Text style={styles.subtitle}>{item.subtitle}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Pressable onPress={handleSkip} style={styles.skipButton}>
          <Text style={styles.skipText}>Skip</Text>
        </Pressable>
      </View>

      <FlatList
        ref={flatListRef}
        data={slides}
        keyExtractor={item => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        onMomentumScrollEnd={event => {
          const index = Math.round(event.nativeEvent.contentOffset.x / width);
          setActiveIndex(index);
        }}
      />

      <View style={styles.pagination}>
        {slides.map((item, index) => (
          <View
            key={item.id}
            style={[
              styles.dot,
              {
                width: index === activeIndex ? 28 : 10,
                backgroundColor:
                  index === activeIndex ? slides[index].tint : '#D9D5FF',
              },
            ]}
          />
        ))}
      </View>

      <View style={styles.footer}>
         <CustomButton 
          title={isLastSlide ? 'Get Started' : 'Continue'}
          onPress={handleNext}
          backgroundColor={Colors.PRIMARY_COLOR}
          textColor={Colors.WHITE_COLOR}
          width={responsiveWidth(50)}      
         />
          
      </View>
    </View>
  );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8FF',
  },
  topBar: {
    paddingHorizontal: 24,
    paddingTop: 52,
    paddingBottom: 8,
    alignItems: 'flex-end',
  },
  skipButton: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 20,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 6},
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 2,
  },
  skipText: {
    color: Colors.DARK_PRIMARY,
    fontSize: 14,
    fontWeight: '700',
  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 26,
  },
  imageWrap: {
    width: responsiveWidth(86),
    height: responsiveWidth(86),
    borderRadius: 36,
    borderWidth: 1,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 28,
    shadowColor: '#958cf5',
    shadowOffset: {width: 0, height: 24},
    shadowOpacity: 0.18,
    shadowRadius: 24,
    elevation: 10,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  eyebrow: {
    color: Colors.PRIMARY_COLOR,
    fontSize: 12,
    letterSpacing: 2,
    textTransform: 'uppercase',
    fontWeight: '700',
    marginBottom: 10,
  },
  title: {
    fontSize: 34,
    lineHeight: 41,
    fontWeight: '800',
    color: Colors.DARK_PRIMARY,
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.DARK_PRIMARY,
    textAlign: 'center',
    marginBottom: 12,
  },
  description: {
    fontSize: 15,
    lineHeight: 24,
    color: '#5E6280',
    textAlign: 'center',
    maxWidth: 320,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 18,
  },
  dot: {
    height: 10,
    borderRadius: 999,
    marginHorizontal: 5,
  },
  footer: {
    paddingHorizontal: 10,
    paddingBottom: 36,
    paddingTop: 8,
    alignItems: 'center',
  },
  primaryButton: {
    backgroundColor: Colors.PRIMARY_COLOR,
    borderRadius: 18,
    paddingVertical: 18,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#958cf5',
    shadowOffset: {width: 0, height: 14},
    shadowOpacity: 0.26,
    shadowRadius: 18,
    elevation: 8,
  },
  primaryText: {
    color: Colors.WHITE_COLOR,
    fontSize: 16,
    fontWeight: '800',
  },
});
