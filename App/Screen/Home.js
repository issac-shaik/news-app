import { View, Text, StyleSheet, ScrollView, ActivityIndicator, Dimensions } from 'react-native';
import React, { useEffect, useState } from 'react';
import CategoryTextSlider from '../Components/CategoryTextSlider';
import Color from '../Shared/Color';
import { MaterialIcons } from '@expo/vector-icons';
import TopHeadlineSlider from '../Components/TopHeadlineSlider';
import HeadlineList from '../Components/HeadlineList';
import GlobalApi from '../Services/GlobalApi';

export default function Home() {
  const [newsList,setNewsList] = useState([])
  const [newsListInd,setNewsListInd] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(()=> {
    getTopHeadlineInd();
    getNewsByCategory('latest');
  },[])

  const getNewsByCategory = async(category) => {
    setLoading(true);
    const result=(await GlobalApi.getByCategory(category)).data;
    setNewsList(result.articles)
    setLoading(false);
  }

  const getTopHeadline = async() => {
    const result=(await GlobalApi.getTopHeadline).data;
    // console.log(result);
    setNewsList(result.articles)
  }

  const getTopHeadlineInd = async() => {
    const resultInd=(await GlobalApi.getTopHeadlineInd).data;
    // console.log(resultInd);
    setNewsListInd(resultInd.articles)
  }
  return (
    <ScrollView style={{backgroundColor: 'black'}}>    
    
      <View style={{display:'flex', flexDirection:'row',  justifyContent: 'left', alignItems: 'center'}}>
        <Text style={styles.appName}>Bolt Feed</Text>
        <MaterialIcons name="bolt" size={30} color="yellow" />

      </View>
      {/* Category List */}
      <CategoryTextSlider selectCategory={(category)=>getNewsByCategory(category)}/>
      {loading?<ActivityIndicator style={{marginTop:Dimensions.get('screen').height*0.40}} size={'large'} color={Color.c2} />:
    <View>
      {/* Top Headline Slider */}
      <TopHeadlineSlider newsList={newsList}/>
      {/* Headline List */}
      <HeadlineList newsListInd={newsListInd}/>
      </View>
  }
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  appName:{
    // fontFamily: 'Brush Script MT', 
    fontSize: 25,
    color: '#dadae8',
    fontWeight: 'bold'
  },
});