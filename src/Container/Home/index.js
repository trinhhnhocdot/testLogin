import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Image, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import Icon from "react-native-vector-icons/FontAwesome";
import axios from 'axios';
import { API_PRODUCT } from '../../Api/Helper';

const Home = ({ navigation }) => {
  const [data, setdata] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  // const [checkimg, setcheckimg] = useState('')
  const getListProduct = async () => {
    try {
      const response = await axios.get(API_PRODUCT)
        .then(
          (response) => {
            setdata(response.data)
            // console.log('data', response.data);
            setIsLoading(false)
          }
        )

    } catch (error) {
      console.error('Lỗi khi lấy dữ liệu:', error);
    }
  }

  useEffect(() => {
    getListProduct();
  }, [])


  const render_item = ({ item }) => {
    return (

      <View style={styles.rendercontainer}>
        {/* <Image source={{uri:'https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fd%2Fd1%2FImage_not_available.png%2F640px-Image_not_available.png&tbnid=ZhsHZdwRcvHOnM&vet=12ahUKEwj9n-W_yKSBAxV8b_UHHQ8nDr8QMygAegQIARBM..i&imgrefurl=https%3A%2F%2Fen.m.wikipedia.org%2Fwiki%2FFile%3AImage_not_available.png&docid=-JOb9GcVsZG04M&w=640&h=384&q=not%20image&ved=2ahUKEwj9n-W_yKSBAxV8b_UHHQ8nDr8QMygAegQIARBM'}} /> */}
        <View style={styles.viewImage}>
          <Image
            style={{ width: 100, height: 45, marginHorizontal: 10 }}
            source={{ uri: item?.image ?? 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png'}}
          />

        </View>
        <View style={styles.viewText}>
          <Text numberOfLines={2} style={styles.title}>{`${item?.title}`}</Text>
          <Text style={styles.author}>{`${item?.author || 'null'}`}</Text>
          <TouchableOpacity>
            <Text style={styles.textbtn}>Bắt đầu học ngay </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }


  StatusBar.setBackgroundColor('#18DBFB');
  return (
    <View style={{ flex: 1 }}>

      <View style={styles.statusbarst}>
        <View style={styles.textContainer}>
          <Text style={styles.textstatus}>Khóa học của tôi </Text>
        </View>
        <TouchableOpacity style={styles.iconContainer}
          onPress={() => { navigation.navigate('Account') }}
        >
          <Icon name={"gear"} size={23} color={'white'} />
        </TouchableOpacity>
      </View>



      {isLoading ? ( // Kiểm tra xem dữ liệu có đang được tải hay không 
        <View style={styles.imgContainer}>
          <Image
            style={styles.imgnodata}
            source={require('../../Asset/Image/nodata.jpg')}
          />
          <Text style={styles.textnodata}>Bạn chưa có khóa học nào </Text>
        </View>
      ) : (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={render_item}
          />
        </View>

      )}
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  statusbarst: {
    width: '100%',
    height: 40,
    backgroundColor: '#18DBFB',
    flexDirection: 'row',
    alignItems: 'center',

  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
  },
  textstatus: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  iconContainer: {
    padding: 6,
    position: 'absolute',
    right: 10,

  },
  imgContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imgnodata: {
    height: 150,
    width: 150,
    borderRadius: 50
  },
  textnodata: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 20
  },
  rendercontainer: {
    width: '100%',
    flexDirection: 'row',
    marginVertical: 7

  },
  viewImage: {
    width: '35%',
    justifyContent: 'center'
  },
  viewText: {
    width: '65%',
  },
  title: {
    fontWeight: '800',
    color: 'black'
  },
  author: {
    marginVertical: 7
  },
  textbtn: {
    color: '#18DBFB',
    fontWeight: 'bold',
    fontSize: 15,

  }
})
