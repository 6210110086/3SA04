import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { FlatList, ImageBackground, StyleSheet, Text, View,} from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'

const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
    { place: 'Pattani',code: '94150'},
    { place: 'Yala',code: '95000'}
   ]

const ZipItem = ({place, code, navigation}) => (
    <View>
    <TouchableHighlight onPress={() => {
        navigation.navigate('Weather',{zipCode: code})
    }}>
    <View style={styles.zipItem}>
        <Text>{place}</Text>
        <Text>{code}</Text>
        
        </View>
        </TouchableHighlight>
        <Text> </Text>
    </View>
)
export default function ZipCodeScreen(){
    const navigation = useNavigation()
    return (
        <ImageBackground source={require('../sky.jpg')} style={styles.backdrop}>
        <View >
            <FlatList
                data = {availableZipItems}
                keyExtractor={item => item.code}
                renderItem={({item}) => <ZipItem {...item} navigation={navigation}/>}
                />
    </View></ImageBackground>
    );
   
   }
const styles = StyleSheet.create({
    backdrop: {
        flexDirection: 'column',
        width: '100%',
        height:'100%'
    },
    zipItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: '100%',
        backgroundColor: '#f0ffff',
        flex: 1
    }
})