import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  Button,
} from 'react-native';

const MenuBaca = ({navigation}) => {
  const Data = [
    {
      id: 1,
      komik:
        'https://raw.githubusercontent.com/NuryaFahruRosyidin2406/images/main/SakamotoDaysChapter01/1.png?token=GHSAT0AAAAAABPHGJX5CJBN2H3PLIST7AUQYPKYXNA',
    },
    {
      id: 2,
      komik:
        'https://raw.githubusercontent.com/NuryaFahruRosyidin2406/images/main/SakamotoDaysChapter01/2.png?token=GHSAT0AAAAAABPHGJX52ZHBL5BCW3I3XULAYPKYW3Q',
    },
    {
      id: 3,
      komik:
        'https://raw.githubusercontent.com/NuryaFahruRosyidin2406/images/main/SakamotoDaysChapter01/3.png?token=GHSAT0AAAAAABPHGJX5JDSDPTEDOMTNFBE2YPLVMUA',
    },
    {
      id: 4,
      komik:
        'https://raw.githubusercontent.com/NuryaFahruRosyidin2406/images/main/SakamotoDaysChapter01/4.png?token=GHSAT0AAAAAABPHGJX5AVN6JPSUW2OQ7XKSYPLVP5A',
    },
    {
      id: 5,
      komik:
        'https://raw.githubusercontent.com/NuryaFahruRosyidin2406/images/main/SakamotoDaysChapter01/5.png?token=GHSAT0AAAAAABPHGJX5Y55PEHRSGAPLUAPMYPLVQJA',
    },
    {
      id: 6,
      komik:
        'https://raw.githubusercontent.com/NuryaFahruRosyidin2406/images/main/SakamotoDaysChapter01/6.png?token=GHSAT0AAAAAABPHGJX4ZSUDDMO7O7Q4DYOGYPLVQWQ',
    },
    {
      id: 7,
      komik:
        'https://raw.githubusercontent.com/NuryaFahruRosyidin2406/images/main/SakamotoDaysChapter01/7.png?token=GHSAT0AAAAAABPHGJX4LN4EPW4H6LZG26C2YPLVSXQ',
    },
    {
      id: 8,
      komik:
        'https://raw.githubusercontent.com/NuryaFahruRosyidin2406/images/main/SakamotoDaysChapter01/8.png?token=GHSAT0AAAAAABPHGJX5BBIBYVTOT6JG4WH2YPLVTCQ',
    },
    {
      id: 9,
      komik:
        'https://raw.githubusercontent.com/NuryaFahruRosyidin2406/images/main/SakamotoDaysChapter01/9.png?token=GHSAT0AAAAAABPHGJX42IKNGQHXM4G5BM6YYPLVTPQ',
    },
    {
      id: 10,
      komik:
        'https://raw.githubusercontent.com/NuryaFahruRosyidin2406/images/main/SakamotoDaysChapter01/10.png?token=GHSAT0AAAAAABPHGJX5N6F2PRJK3OZBZNJ6YPLVT3Q',
    },
    {
      id: 11,
      komik:
        'https://raw.githubusercontent.com/NuryaFahruRosyidin2406/images/main/SakamotoDaysChapter01/11.png?token=GHSAT0AAAAAABPHGJX4LJ2WWKRCS7ZQ45IMYPLVUGA',
    },
    {
      id: 12,
      komik:
        'https://raw.githubusercontent.com/NuryaFahruRosyidin2406/images/main/SakamotoDaysChapter01/12.png?token=GHSAT0AAAAAABPHGJX4AH7RRFNMNGRZL2NCYPLVURQ',
    },
    {
      id: 13,
      komik:
        'https://raw.githubusercontent.com/NuryaFahruRosyidin2406/images/main/SakamotoDaysChapter01/13.png?token=GHSAT0AAAAAABPHGJX5JQEOG2ZKZXHKHQNIYPLVVVQ',
    },
    {
      id: 14,
      komik:
        'https://raw.githubusercontent.com/NuryaFahruRosyidin2406/images/main/SakamotoDaysChapter01/14.png?token=GHSAT0AAAAAABPHGJX5AZHM67NEP2JVC5DSYPLVWAQ',
    },
    {
      id: 15,
      komik:
        'https://raw.githubusercontent.com/NuryaFahruRosyidin2406/images/main/SakamotoDaysChapter01/15.png?token=GHSAT0AAAAAABPHGJX5XGSFXDXXWY6AL5Q4YPLVWKA',
    },
    {
      id: 16,
      komik:
        'https://raw.githubusercontent.com/NuryaFahruRosyidin2406/images/main/SakamotoDaysChapter01/16.png?token=GHSAT0AAAAAABPHGJX5YGMXH62Z4WFM7HVYYPLVWVQ',
    },
    {
      id: 17,
      komik:
        'https://raw.githubusercontent.com/NuryaFahruRosyidin2406/images/main/SakamotoDaysChapter01/17.png?token=GHSAT0AAAAAABPHGJX5TUF4XBQNWSO3XBVWYPLVXCA',
    },
    {
      id: 18,
      komik:
        'https://raw.githubusercontent.com/NuryaFahruRosyidin2406/images/main/SakamotoDaysChapter01/18.png?token=GHSAT0AAAAAABPHGJX4IAF7AZLDLKUFYCPCYPLVXNQ',
    },
    {
      id: 19,
      komik:
        'https://raw.githubusercontent.com/NuryaFahruRosyidin2406/images/main/SakamotoDaysChapter01/19.png?token=GHSAT0AAAAAABPHGJX4NNQHLYFGOKPT2PMWYPLV2HQ',
    },
    {
      id: 20,
      komik:
        'https://raw.githubusercontent.com/NuryaFahruRosyidin2406/images/main/SakamotoDaysChapter01/20.png?token=GHSAT0AAAAAABPHGJX5SMFHWJA65UDXVTSEYPLV2RA',
    },
    {
      id: 21,
      komik:
        'https://raw.githubusercontent.com/NuryaFahruRosyidin2406/images/main/SakamotoDaysChapter01/21.png?token=GHSAT0AAAAAABPHGJX5CX7OWSXBWBICSG4EYPLV24A',
    },
    {
      id: 22,
      komik:
        'https://raw.githubusercontent.com/NuryaFahruRosyidin2406/images/main/SakamotoDaysChapter01/22.png?token=GHSAT0AAAAAABPHGJX47DA6SPDCZ7DG5D5UYPLV26A',
    },
    {
      id: 23,
      komik:
        'https://raw.githubusercontent.com/NuryaFahruRosyidin2406/images/main/SakamotoDaysChapter01/23.png?token=GHSAT0AAAAAABPHGJX5KNDCOS45LPTFTYOEYPLV27Q',
    },
    {
      id: 24,
      komik:
        'https://raw.githubusercontent.com/NuryaFahruRosyidin2406/images/main/SakamotoDaysChapter01/24.png?token=GHSAT0AAAAAABPHGJX5HZWV2AFBXUM2PE54YPLV32Q',
    },
    {
      id: 25,
      komik:
        'https://raw.githubusercontent.com/NuryaFahruRosyidin2406/images/main/SakamotoDaysChapter01/25.png?token=GHSAT0AAAAAABPHGJX4JW5AKSFUTCQGH27MYPLV5CA',
    },
    {
      id: 26,
      komik:
        'https://raw.githubusercontent.com/NuryaFahruRosyidin2406/images/main/SakamotoDaysChapter01/26.png?token=GHSAT0AAAAAABPHGJX4QCH6Y2ALQNI6YGQWYPLV5DA',
    },
    {
      id: 27,
      komik:
        'https://raw.githubusercontent.com/NuryaFahruRosyidin2406/images/main/SakamotoDaysChapter01/27.png?token=GHSAT0AAAAAABPHGJX5IG44THW2UPJ43SOSYPLV5EQ',
    },
    {
      id: 28,
      komik:
        'https://raw.githubusercontent.com/NuryaFahruRosyidin2406/images/main/SakamotoDaysChapter01/28.png?token=GHSAT0AAAAAABPHGJX4AGXFEDPIE5BYAQNMYPLV5FQ',
    },
    {
      id: 29,
      komik:
        'https://raw.githubusercontent.com/NuryaFahruRosyidin2406/images/main/SakamotoDaysChapter01/29.png?token=GHSAT0AAAAAABPHGJX5VDS6BVPQOGSMUZXYYPLV5GQ',
    },
    {
      id: 30,
      komik:
        'https://raw.githubusercontent.com/NuryaFahruRosyidin2406/images/main/SakamotoDaysChapter01/30.png?token=GHSAT0AAAAAABPHGJX4SE75LMESWYOIVEYGYPLV5IA',
    },
    {
      id: 31,
      komik:
        'https://raw.githubusercontent.com/NuryaFahruRosyidin2406/images/main/SakamotoDaysChapter01/31.png?token=GHSAT0AAAAAABPHGJX5NQJUKX43AKDOFNFSYPLV73A',
    },
    {
      id: 32,
      komik:
        'https://raw.githubusercontent.com/NuryaFahruRosyidin2406/images/main/SakamotoDaysChapter01/32.png?token=GHSAT0AAAAAABPHGJX5ZJINJTSJZ3O6RYVGYPLV74Q',
    },
    {
      id: 33,
      komik:
        'https://raw.githubusercontent.com/NuryaFahruRosyidin2406/images/main/SakamotoDaysChapter01/33.png?token=GHSAT0AAAAAABPHGJX4QV4ENZ2G4HVEOBIKYPLV75Q',
    },
    {
      id: 34,
      komik:
        'https://raw.githubusercontent.com/NuryaFahruRosyidin2406/images/main/SakamotoDaysChapter01/34.png?token=GHSAT0AAAAAABPHGJX5M64L2CJPC7SDRTLEYPLV76Q',
    },
    {
      id: 35,
      komik:
        'https://raw.githubusercontent.com/NuryaFahruRosyidin2406/images/main/SakamotoDaysChapter01/35.png?token=GHSAT0AAAAAABPHGJX52273ZBFPFCQPSTL4YPLWAAA',
    },
    {
      id: 36,
      komik:
        'https://raw.githubusercontent.com/NuryaFahruRosyidin2406/images/main/SakamotoDaysChapter01/36.png?token=GHSAT0AAAAAABPHGJX5QZHXRDSERSPI2BM6YPLWABA',
    },
    {
      id: 37,
      komik:
        'https://raw.githubusercontent.com/NuryaFahruRosyidin2406/images/main/SakamotoDaysChapter01/37.png?token=GHSAT0AAAAAABPHGJX5SMLFPEO2OERYB43KYPLWCNA',
    },
    {
      id: 38,
      komik:
        'https://raw.githubusercontent.com/NuryaFahruRosyidin2406/images/main/SakamotoDaysChapter01/38.png?token=GHSAT0AAAAAABPHGJX5LOI33NWW7C6NQY36YPLWCOA',
    },
    {
      id: 39,
      komik:
        'https://raw.githubusercontent.com/NuryaFahruRosyidin2406/images/main/SakamotoDaysChapter01/39.png?token=GHSAT0AAAAAABPHGJX4LSKXA2U3BT4FHENQYPLWCPQ',
    },
    {
      id: 40,
      komik:
        'https://raw.githubusercontent.com/NuryaFahruRosyidin2406/images/main/SakamotoDaysChapter01/40.png?token=GHSAT0AAAAAABPHGJX5GNS7IJZ6U223IINWYPLWCQQ',
    },
    {
      id: 41,
      komik:
        'https://raw.githubusercontent.com/NuryaFahruRosyidin2406/images/main/SakamotoDaysChapter01/41.png?token=GHSAT0AAAAAABPHGJX5H7MQHNQSCIRECI7SYPLWCRQ',
    },
    {
      id: 42,
      komik:
        'https://raw.githubusercontent.com/NuryaFahruRosyidin2406/images/main/SakamotoDaysChapter01/42.png?token=GHSAT0AAAAAABPHGJX5UCBTOOVOEXRZ7F5GYPLWCSQ',
    },
    {
      id: 43,
      komik:
        'https://raw.githubusercontent.com/NuryaFahruRosyidin2406/images/main/SakamotoDaysChapter01/43.png?token=GHSAT0AAAAAABPHGJX4R3U3L6AGJAT4K6GWYPLWFDQ',
    },
    {
      id: 44,
      komik:
        'https://raw.githubusercontent.com/NuryaFahruRosyidin2406/images/main/SakamotoDaysChapter01/44.png?token=GHSAT0AAAAAABPHGJX4VDQA4TBQNTAYXTY4YPLWFFA',
    },
    {
      id: 45,
      komik:
        'https://raw.githubusercontent.com/NuryaFahruRosyidin2406/images/main/SakamotoDaysChapter01/45.png?token=GHSAT0AAAAAABPHGJX4A4EYH47IMOH6TWVSYPLWFGQ',
    },
    {
      id: 46,
      komik:
        'https://raw.githubusercontent.com/NuryaFahruRosyidin2406/images/main/SakamotoDaysChapter01/46.png?token=GHSAT0AAAAAABPHGJX5ORJVUM3CWZNDVQHSYPLWFIA',
    },
    {
      id: 47,
      komik:
        'https://raw.githubusercontent.com/NuryaFahruRosyidin2406/images/main/SakamotoDaysChapter01/47.png?token=GHSAT0AAAAAABPHGJX5MNC3BDYBJCQIGBCIYPLWFKQ',
    },
    {
      id: 48,
      komik:
        'https://raw.githubusercontent.com/NuryaFahruRosyidin2406/images/main/SakamotoDaysChapter01/48.png?token=GHSAT0AAAAAABPHGJX46YSSISLCG2FVM4UYYPLWFMA',
    },
    {
      id: 49,
      komik:
        'https://raw.githubusercontent.com/NuryaFahruRosyidin2406/images/main/SakamotoDaysChapter01/49.png?token=GHSAT0AAAAAABPHGJX4ESP3WX3IBMUPY5XYYPLWHZQ',
    },
    {
      id: 50,
      komik:
        'https://raw.githubusercontent.com/NuryaFahruRosyidin2406/images/main/SakamotoDaysChapter01/50.png?token=GHSAT0AAAAAABPHGJX56UPD34QWQEE6VQHEYPLWH2Q',
    },
    {
      id: 51,
      komik:
        'https://raw.githubusercontent.com/NuryaFahruRosyidin2406/images/main/SakamotoDaysChapter01/51.png?token=GHSAT0AAAAAABPHGJX5N4PGBI7IOJWVTWSUYPLWH3Q',
    },
    {
      id: 52,
      komik:
        'https://raw.githubusercontent.com/NuryaFahruRosyidin2406/images/main/SakamotoDaysChapter01/52.png?token=GHSAT0AAAAAABPHGJX5WWRBJ2PWU3AAG6CIYPLWH5A',
    },
    {
      id: 53,
      komik:
        'https://raw.githubusercontent.com/NuryaFahruRosyidin2406/images/main/SakamotoDaysChapter01/53.png?token=GHSAT0AAAAAABPHGJX4ZGBZCMZA4D4J256WYPLWH6A',
    },
  ];

  const [gambar, setGambar] = useState(Data);

  const renderItem = ({item}) => {
    return (
      <View>
        <Image
          source={{uri: item.komik}}
          style={{width: 425, height: 700}}></Image>
      </View>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <FlatList
        data={gambar}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          backgroundColor: '#676464',
          paddingTop: 7,
          paddingBottom: 7,
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#8A8686',
            marginVertical: 6,
            paddingHorizontal: 60,
            paddingBottom: 20,
            borderRadius: 7,
          }}
          onPress={() => navigation.navigate('BottomTabs')}>
          <Text
            style={{
              color: 'white',
              fontSize: 16,
              fontWeight: 'bold',
              top: 9,
            }}>
            BACK
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#8A8686',
            marginVertical: 6,
            paddingHorizontal: 60,
            paddingBottom: 20,
            borderRadius: 7,
          }}
          onPress={() => navigation.navigate('BottomTabs')}>
          <Text
            style={{
              color: 'white',
              fontSize: 16,
              fontWeight: 'bold',
              top: 9,
            }}>
            NEXT
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MenuBaca;

const styles = StyleSheet.create({});
