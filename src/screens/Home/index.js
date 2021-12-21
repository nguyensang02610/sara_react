import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Alert,
  ScrollView,
  Dimensions
} from 'react-native';
import Icon1 from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Ionicons';
import Icon3 from 'react-native-vector-icons/Entypo';
import DataProduct from '../../Data/DataProduct';
import styles from './styles';
import { convertToNumberCommas } from '../../utilities/index';
const { height, width } = Dimensions.get('window');
const DataProducts = DataProduct;

let deviceWidth = Dimensions.get('window').width

const Home = ({ navigation }) => {
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        {/* view header */}
        <Image
          resizeMode="stretch"
          source={require('../../images/Avatar/homeScreenGreenCircle.png')}
          style={styles.ImageHeader}
        />
        <View style={{ marginTop: -210 }}>
          <View style={styles.ViewHeader}>
            <TouchableOpacity
              onPress={() => {
                Alert.alert('Thông báo!', 'Bạn có muốn đăng xuất', [
                  { text: 'Thoát' },
                  { text: 'Xác nhận', onPress: () => navigation.goBack() },
                ]);
              }}>
              <Icon3 name="menu" size={24} color="white" />
            </TouchableOpacity>
            <Text style={{ fontSize: 22, color: 'white', fontWeight: 'bold' }}>
              SARA COMESTIC
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ShoppingCart');
              }}>
              <Icon1 name="shoppingcart" size={30} color="white" />
            </TouchableOpacity>
          </View>

          {/* View ảnh banner */}
          <View style={{ marginTop: 10, marginBottom: 20, alignSelf: 'center' }}>
            <Image
              source={require('../../images/Avatar/openingScreenNil.png')}
              style={{ height: 210, width: deviceWidth }}
              resizeMode="stretch"
            />

          </View>
          {/* View tìm kiếm sản phẩm */}
          <View style={{marginBottom:10}}>
            <TouchableOpacity onPress={() => navigation.navigate('Search')}>
              <Text style={styles.TxtTextInput}>Tìm sản phẩm...</Text>
            </TouchableOpacity>
          </View>
          {/* View danh sách cách sách */}
          <View style={{ marginBottom: 20 }}>
            <View style={styles.ViewTitileProducts}>
              <Text style={{ fontWeight: 'bold', fontSize: 22 }}>Sản phẩm mới</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 15,
              }}>
              <View style={styles.ViewLine} />
              <View style={styles.ViewProducts}>
                <FlatList
                  data={DataProducts}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item, index }) => (
                    <TouchableOpacity
                      key={index}
                      opacity={1}
                      style={styles.ButtomDetail}
                      onPress={() => {
                        console.log(item);
                        navigation.navigate('Detail', { dataItem: item });
                      }}>
                      <Image
                        source={item.avatarImage}
                        style={styles.ViewImageProducts}
                      />
                      <Text numberOfLines={4} style={styles.ViewTitilePro}>
                        {item.nameProducts}
                      </Text>
                      <Text numberOfLines={1} style={styles.TxtAuthor}>
                        by {item.author}
                      </Text>
                      <Text numberOfLines={1} style={styles.TxtPrice}>
                        price: {convertToNumberCommas(item.price)} Đ
                      </Text>
                    </TouchableOpacity>
                  )}
                />
              </View>
            </View>
          </View>
          {/* View danh sách cách sách */}
          <View style={{ marginBottom: 30 }}>
            <View style={styles.ViewTitileProducts}>
              <Text style={{ fontWeight: 'bold', fontSize: 22 }}>Sản phẩm nổi bật</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 15,
              }}>
              <View style={styles.ViewLine} />
              <View style={styles.ViewProducts}>
                <FlatList
                  data={DataProducts}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item, index }) => (
                    <TouchableOpacity
                      key={index}
                      opacity={1}
                      style={styles.ButtomDetail}
                      onPress={() => {
                        console.log(item);
                        navigation.navigate('Detail', { dataItem: item });
                      }}>
                      <Image
                        source={item.avatarImage}
                        style={styles.ViewImageProducts}
                      />
                      <Text numberOfLines={4} style={styles.ViewTitilePro}>
                        {item.nameProducts}
                      </Text>
                      <Text numberOfLines={1} style={styles.TxtAuthor}>
                        by {item.author}
                      </Text>
                      <Text numberOfLines={1} style={styles.TxtPrice}>
                        price: {convertToNumberCommas(item.price)} Đ
                      </Text>
                    </TouchableOpacity>
                  )}
                />
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};
export default Home;
