import React,{useRef, useEffect} from 'react';
import Swiper from 'react-native-swiper';

import OnboardingScreenOne from './onboardingScreenOne';
import OnboardingScreenTwo from './onboardingScreenTwo';
import OnboardingScreenThree from './onboardingScreenThree';
import OnboardingScreenFour from './onboardingScreenFour';
import OnboardingScreenFive from './onboardingScreenFive';
import OnboardingScreenSix from './onboardingScreenSix';

const OnboardingSwiper = props => {
  const swiperRef = useRef();
  useEffect(() => {
    console.log(swiperRef.current)
  },[]);
  const handleNext = props => {
    swiperRef.current.scrollBy(1)
  }
  return (
  <Swiper ref={swiperRef} showsPagination={false}>
    <OnboardingScreenOne 
      goNext={handleNext} 
    />
    <OnboardingScreenTwo 
      goNext={handleNext} 
    />
    <OnboardingScreenThree 
      goNext={handleNext}
    />
    <OnboardingScreenFour 
      goNext={handleNext}
    />
    <OnboardingScreenFive 
      goNext={handleNext}
    />
    <OnboardingScreenSix 
      {...props}
      goNext={handleNext}
    />
  </Swiper>
  )
}

OnboardingSwiper.navigationOptions = {
  header: null
}

export default OnboardingSwiper;