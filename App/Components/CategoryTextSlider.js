import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Color from '../Shared/Color';

export default function CategoryTextSlider({selectCategory}) {

  const [active,setActive] = useState(1)
  const categoryList=[
    {
      id:1,
      name: 'Latest'
    },
    {
      id:2,
      name: 'World'
    },
    {
      id:3,
      name: 'Business'
    },
    {
      id:4,
      name: 'Sport'
    },
    {
      id:5,
      name: 'Life'
    },
    {
      id:6,
      name: 'Movies'
    },
    {
      id:7,
      name: 'Anime'
    },
    {
      id:8,
      name: 'TV Shows'
    },
    {
      id:9,
      name: 'Gaming'
    },
  ]

  const onCategoryClick=(id)=>{
    setActive((id))
  }


  return (
    <View style={{marginTop:20}}>
      <FlatList 
        data = {categoryList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem = {
          ({item}) => (
          <TouchableOpacity onPress={()=>{onCategoryClick(item.id);
          selectCategory(item.name)}}>
            <Text style={
              item.id==active?styles.selectText 
              :styles.unselectText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

    const styles = StyleSheet.create({
      unselectText: {
        marginRight:10,
        color: 'white',
        fontSize:20,
        fontWeight:'800',
        color:Color.c1
      },
      selectText: {
        marginRight:10,
        color: 'white',
        fontSize:20,
        fontWeight:'900',
        color:Color.c0
      },
    });


