import { View, Text, StyleSheet, FlatList, Pressable, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Colors from '../constants/Colors'
import ProfileCard from '../components/ProfileCard'
import Fonts from '../constants/Fonts'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import TimetableCards from '../components/FlatListCards/TimetableCards'
import { TimetableEntry } from '../constants/AllTypes'
import RetailProCard from '../components/RetailProCard'

const HomeScreen = () => {

 // const [name,setName] = useState("Alex")
  const timetableData:TimetableEntry[] =[
    {time:'8:30 AM',subject:'English',class:'XI',room:'Room No 1',teacher:'Prof.Wasif'},
    {time:'9:10 AM',subject:'Computer Science',class:'XI',room:'Room No 1',teacher:'Prof.Saud'},
    {time:'9:50 AM',subject:'Physics',class:'XI',room:'Room No 1',teacher:'Prof.Habib'},
    {time:'10:30 AM',subject:'Math',class:'XI',room:'Room No 1',teacher:'Prof.Asim'},
    {time:'11:10 AM',subject:'Urdu',class:'XI',room:'Room No 1',teacher:'Prof.Imran Qureshi'},
    {time:'11:50 AM',subject:'Pak.Studies',class:'XI',room:'Room No 1',teacher:'Prof.Ammar'},
    {time:'12:30 PM',subject:'Labs',class:'XI',room:'Computer/Physics Lab',teacher:'Prof.Saud/Habib'}
  
  ]

  return (
    <ScrollView style={{backgroundColor:Colors.WHITE_COLOR,flex:1}}>
      <View style={{marginBottom:20,justifyContent:'center',alignSelf:'center',marginTop:responsiveHeight(3)}}>

        <Text style={styles.nameTextStyle}>
          Have Good Day, {"Alex"}.
        </Text>

        <Text>
          You have 5 classes today. Please check your schedule.
        </Text>

      </View>
     <ProfileCard/>

     <View
     style={{flexDirection:'row',justifyContent:'space-between',
      marginHorizontal:responsiveWidth(5), marginTop:responsiveHeight(2)
     }}
     > 
      <Text style={{fontFamily:Fonts.POPPINS_SEMI_BOLD,fontWeight:'700',fontSize:18,color:Colors.PRIMARY_COLOR}}>
      Today's Class XI Time Table
     </Text>

      <Pressable 
      onPress={()=>{console.log("Hello")}}
       >
        <Text>
          View Full
        </Text>
        </Pressable>
         </View>

    
     
  <View style={{ height: responsiveHeight(35) }}>
  <FlatList
    data={timetableData}
    keyExtractor={(item) => item.time}
    renderItem={({ item }) => <TimetableCards cardItems={item} />}
    nestedScrollEnabled={true}
  />
</View>

      <View style={{marginVertical:responsiveHeight(2),marginHorizontal:responsiveWidth(3),justifyContent:'center'}}>

   <RetailProCard/>

      </View>



    
      

    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  nameText:{
    fontWeight:'bold',
    fontFamily:Fonts.POPPINS_BOLD
  },
  nameTextStyle:{
    fontSize:24,
    fontFamily:Fonts.POPPINS_EXTRA_BOLD,
    fontWeight:'bold',
    color:Colors.PRIMARY_COLOR

  }

})