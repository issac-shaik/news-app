import { View, Text, Image, TouchableOpacity, Share } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import Color from '../Shared/Color';
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { categoryList } from '../Components/CategoryTextSlider';

function ReadNews() {
  const news = useRoute().params.news;
  const navigation = useNavigation();
  useEffect(()=>{
    console.log(news)
  },[])

  const shareNews=()=>{
    Share.share({
      message:news.url
    })
  }
  return (
    <>
    <View style={{ flexDirection: 'row', justifyContent: 'left', paddingHorizontal: 0, backgroundColor: Color.c5 }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back-sharp" size={30} color="white" />
      </TouchableOpacity>
      <Text style={{ color: Color.c3, justifyContent: 'center', fontWeight: 'bold', fontSize: 20, marginLeft: 10, marginTop: 4 }}>Return</Text>
    </View>
    <ScrollView style={{ backgroundColor: Color.c5, flex: 1 }}>

        <Image source={{ uri: news.urlToImage }} style={{ width: '100%', height: 300, borderRadius: 20, marginTop: 30 }} />
        <Text style={{ marginTop: 10, fontSize: 22, fontWeight: 'bold', color: Color.c3 }}>{news.title}</Text>
        <Text style={{ marginTop: 10, color: Color.c0, fontSize: 16 }}>{news.source.name}</Text>
        <Text style={{ marginTop: 10, fontSize: 17, fontWeight: 'condensed', color: Color.c3, lineHeight: 27 }}>{news.description}</Text>
        <View style={{ flexDirection: 'row-reverse', justifyContent: 'space-between', paddingHorizontal: 60, marginTop: 30 }}>
          <TouchableOpacity onPress={() => shareNews()}>
            <Feather name="share-2" size={24} color="white" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => WebBrowser.openBrowserAsync(news.url)}>
            <Text style={{ color: Color.c1, fontSize: 16, fontWeight: 'bold' }}>Read More</Text>
          </TouchableOpacity>
        </View>
        <View>

        </View>
      </ScrollView></>
  )
}

export default ReadNews

// marginTop: 10, marginBottom: 20