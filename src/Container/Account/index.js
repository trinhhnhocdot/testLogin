import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/FontAwesome";
import { Linking } from 'react-native';
import { useSelector } from'react-redux';


const Account = ({ navigation }) => {
    const users = useSelector(state => state.user)

        console.log('DATA USER REDUX : ',users.data[0].data.Name);

                // sdt 0904886098
                const callCustomerCare  =()=>{
                    const phoneNumber = '0904886098';
                    Linking.openURL(`tel:${phoneNumber}`)
                    .then((result)=>{
                        if (result) {
                            console.log('Đã bắt đầu cuộc gọi');
                          } else {
                            console.log('Không thể bắt đầu cuộc gọi');
                          }
                    })
                    .catch((error) => {
                        console.error('Lỗi khi thực hiện cuộc gọi:', error);
                      });
                }
    return (
        <View style={{ flex: 1 }}>
            {/* statusbarst */}
            <View style={styles.statusbarst}>
                <View style={styles.textContainer}>
                    <Text style={styles.textstatus}>Tài khoản</Text>
                </View>
                <TouchableOpacity style={styles.iconContainer}
                    onPress={() => { navigation.goBack() }}
                >
                    <Icon name={"chevron-left"} size={23} color={'white'} />
                </TouchableOpacity>
            </View>

            {/* image , name , email */}
            <View style={styles.containeruser} >
                <TouchableOpacity>
                    <Image style={styles.imguser} source={require('../../Asset/Image/user.jpg')} />
                </TouchableOpacity>
                <Text style={styles.textname}>{users.data[0].data.Name}</Text>
                <Text style={styles.textemail}>{users.data[0].data.Email}</Text>
            </View>


            <View style={{}} >
                <View style={styles.item1}>
                    <TouchableOpacity onPress={callCustomerCare}>
                        <Text style={styles.textitem1}>
                            Chăm sóc khách hàng
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon style={styles.itemicon1} name={'chevron-right'} size={10} color={'gray'} />
                    </TouchableOpacity>
                </View>

                <View style={styles.item1}>
                    <TouchableOpacity >
                        <Text style={styles.textitem1}>
                            Cài đặt và mật khẩu
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon style={styles.itemicon1} name={'chevron-right'} size={10} color={'gray'} />
                    </TouchableOpacity>
                </View>

                <View style={styles.item1}>
                    <TouchableOpacity >
                        <Text style={styles.textitem1}>
                            Đánh giá ứng dụng
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon style={styles.itemicon1} name={'chevron-right'} size={10} color={'gray'} />
                    </TouchableOpacity>
                </View>
            </View>
            {/* logout */}
            <TouchableOpacity style={styles.logoutcontainer}>

                <Icon style={styles.itemicon1} name={'chevron-right'} size={10} color={'red'} />
                <Text>ĐĂNG XUẤT</Text>

            </TouchableOpacity>

        </View>
    )
}

export default Account

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
        left: 10,

    },
    containeruser: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10%'
    },
    imguser: {

        width: 80,
        height: 80,
        borderRadius: 100,
    },
    textname: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 10,
        color: 'gray'
    },
    textemail: {
        color: 'silver',
        fontSize: 14,
        marginTop: 8
    },
    item1: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        alignItems: 'center'
    },
    textitem1: {
        color: 'black',
        fontWeight: '400',
        fontSize: 13,
        padding:10,
    
    },
    logoutcontainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
    },
    itemicon1: {
        padding: 10,

    }

})
