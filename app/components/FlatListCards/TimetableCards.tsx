import { View, Text } from 'react-native';
import React from 'react';

import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

import Fonts from '../../constants/Fonts';
import Colors from '../../constants/Colors';
import { TimetableEntry } from '../../constants/AllTypes';


// FIX 1:
// "Pros" was a typo.
// Props = Properties, so I changed TimetableCardPros -> TimetableCardProps.
interface TimetableCardProps {
  cardItems: TimetableEntry;
}


// FIX 2:
// Same logic as your original code.
// We receive "cardItems" from FlatList's renderItem.
const TimetableCards = ({ cardItems }: TimetableCardProps) => {

  // FIX 3:
  // Added this temporarily to check whether cardItems is actually
  // coming from FlatList.
  //
  // If console shows an object:
  // { time: "8:30", subject: "English", ... }
  //
  // then cardItems.time is valid.
  console.log('cardItems:', cardItems);

  return (
    <View
      style={{
        height: responsiveHeight(20),
        marginHorizontal: responsiveWidth(5),
        marginTop: responsiveHeight(3),
      }}
    >

      {/* 
        FIX 4:
        Your original code had several unnecessary nested Views.
        I simplified the structure so the card is easier to understand.
      */}
      <View
        style={{
          flex: 1,
          flexDirection: 'row',

          justifyContent: 'space-between',

          borderWidth: 1,
          borderColor: Colors.BLACK_COLOR,
          borderRadius: 5,

          // FIX 5:
          // Keeps content inside the rounded border.
          overflow: 'hidden',
        }}
      >

        {/* 
          FIX 6:
          Your original left line was:

          <View
            style={{
              backgroundColor: Colors.BLACK_COLOR,
              borderWidth: 1,
              borderColor: Colors.Secondary_COLOR,
              height: responsiveHeight(20)
            }}
          />

          I added an explicit width.

          Without a width/flex/child content, the View's width
          can effectively be 0.
        */}
        <View
          style={{
            width: responsiveWidth(1),
            backgroundColor: Colors.Secondary_COLOR,
          }}
        />


        {/* TIME SECTION */}

        <View
          style={{

            // FIX 7:
            // Instead of flex: 1, give the time section a fixed
            // percentage width.
            //
            // This prevents the time section from taking
            // unpredictable space.
            width: responsiveWidth(20),

            justifyContent: 'center',
            alignItems: 'center',
          }}
        >

          <Text
            style={{

              // FIX 8:
              // These properties were removed from your Text:
              //
              // justifyContent
              // alignItems
              // flexDirection
              //
              // Those properties are mainly useful for View/layout.
              // The parent View should control Text positioning.

              fontWeight: 'bold',
              fontSize: 15,
               color:Colors.PRIMARY_COLOR
            }}
          >
            {cardItems.time}
          </Text>

        </View>


        {/* DIVIDER */}

        <View
          style={{

            // FIX 9:
            // Instead of using borderWidth/borderColor,
            // a simple 1px wide View works better as a divider.
            width: 1,

            backgroundColor: Colors.BLACK_COLOR,

            // FIX 10:
            // 100% makes the divider fill the card height.
            height: '100%',
          }}
        />


        {/* SUBJECT / ROOM / TEACHER SECTION */}

        <View
          style={{

            // FIX 11:
            // flex: 1 allows this section to take all remaining
            // horizontal space after the time section.
            flex: 1,

            justifyContent: 'center',

            // FIX 12:
            // marginStart instead of making the content depend
            // on the previous flex arrangement.
            marginStart: responsiveWidth(4),
          }}
        >

          {/* SUBJECT */}

          <Text
            style={{
              fontSize: 22,
              fontFamily: Fonts.POPPINS_BOLD,
              fontWeight: 'bold',
               color:Colors.PRIMARY_COLOR
            }}
          >
            {cardItems.subject}
          </Text>


          {/* ROOM */}

          <Text
            style={{
              marginTop: responsiveHeight(1),
              fontSize: 15,
               color:Colors.PRIMARY_COLOR
            }}
          >
            {cardItems.room}
          </Text>


          {/* TEACHER */}

          <Text
            style={{
              marginTop: responsiveHeight(1),
              fontSize: 15,
              fontWeight: 'bold',
              color:Colors.PRIMARY_COLOR
            }}
          >
            {cardItems.teacher}
          </Text>

        </View>

      </View>

    </View>
  );
};

export default TimetableCards;