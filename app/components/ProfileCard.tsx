
import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import Colors from '../constants/Colors'
import Images from '../constants/Images'
import Fonts from '../constants/Fonts'

const ProfileCard = () => {

   const [rollNo,setRollNo] = useState("10246");
   const [name,setName] = useState("Alex Jhonson");
  const[group,setGroup] = useState("Computer Science");

   

  return (
    <View style={styles.innerStyle}>
      <View style={styles.textContainer}>
        <Text style={{color:Colors.WHITE_COLOR,fontSize:15}}>
         STUDENT ID {rollNo}
        </Text>

        <Text style={{color:Colors.WHITE_COLOR,fontSize:20,marginTop:responsiveHeight(0.5),fontWeight:"bold",fontStyle:'italic',fontFamily:Fonts.POPPINS_SEMI_BOLD}}>
          {name}
        </Text>

       <Text style={{color:Colors.WHITE_COLOR,marginTop:responsiveHeight(0.5)}}>
         Roll No 34363
       </Text>


        <View style={{height:responsiveHeight(4),width:responsiveWidth(35),marginTop:responsiveHeight(4),borderRadius:8,backgroundColor:Colors.Secondary_COLOR}}>

          <Text style={{color:Colors.PRIMARY_COLOR,marginHorizontal:3}}>
            {group}
          </Text>
        </View>
      </View>

      <Image source={Images.AnimatedPic}
       style={styles.profileImage}
       resizeMode='contain'
      />
    </View>
  )
}

export default ProfileCard

const styles = StyleSheet.create({

innerStyle:{
    height:responsiveHeight(30),
    padding:responsiveWidth(7),
    borderRadius:15,
    marginHorizontal:10,
    backgroundColor:Colors.PRIMARY_COLOR,
    borderColor:Colors.Secondary_COLOR,
    borderWidth:3,
    justifyContent:'space-between',
    flexDirection:'row',
    alignItems:'center'
  },
  textContainer:{
    flex:1
  },
  profileImage:{
    height:responsiveHeight(16),
    width:responsiveWidth(32),
    backgroundColor:Colors.WHITE_COLOR
},


})