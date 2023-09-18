import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'
import Color from '../Shared/Color'
import { useNavigation } from '@react-navigation/native';

const HeadlineList = ({ newsListInd }) => {

  const navi = useNavigation();

  return (
    <ScrollView>
      <Text style={{color:Color.c7, fontSize: 20, fontWeight: 'bold', paddingTop: 20}}>
            Trending News in India
          </Text>
      {newsListInd.map((item, index) => (
        <View key={index}>
          <View style={{ height: 1, backgroundColor: Color.c4, marginTop: 10, marginLeft: 10, marginRight: 10 }}></View>
          
          <TouchableOpacity
            onPress={() => navi.navigate('read-news', { news: item })}
            style={{ marginTop: 15, display: 'flex', flexDirection: 'row' }}>
            <Image source={{ uri: item.urlToImage }}
              style={{ width: 130, height: 130, borderRadius: 15 }}
            />
            <View style={{ marginRight: 130, marginLeft: 10 }}>
              <Text numberOfLines={4} style={{ color: Color.c3, fontSize: 13, fontWeight: 'bold' }}>
                {item.title}
              </Text>
              <Text style={{ color: Color.c0, marginTop: 6 }}>
                {item?.source?.name}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  )
}

export default HeadlineList
