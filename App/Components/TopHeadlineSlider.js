import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Color from '../Shared/Color';
import GlobalApi from '../Services/GlobalApi';
import { useNavigation } from '@react-navigation/native';

export default function TopHeadlineSlider({newsList}) {
  
  const navi = useNavigation();

  return (
    <View style={{marginTop:25}}>
      <FlatList
        data={newsList}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item})=>(
          <TouchableOpacity onPress={()=>navi.navigate('read-news',{news:item})} style={{width:Dimensions.get('screen').width*0.80,marginRight:15}}>
            <Image source={{uri:item.urlToImage}}
            style={{height:Dimensions.get('screen').width*0.77,borderRadius:50}} />
            <Text numberOfLines={3} style={{marginTop:10, fontSize:19, fontWeight: 'bold', color: Color.c3}}>{item.title}</Text>
            <Text style= {{marginTop:5, color:Color.c0,}}> {item?.source?.name}</Text>
          </TouchableOpacity>
          
        )}
      />
    </View>
  );
}
  const styles = StyleSheet.create({  })

