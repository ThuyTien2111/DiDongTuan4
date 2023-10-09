import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Import thư viện icon

export default function App() {
  var [name, setName] = useState('');
  var [password, setPassword] = useState('');
  var [loginMessage, setLoginMessage] = useState('');

  var user = [{
    name: 'Tien',
    pass: '123',
  },
  {
    name: 'Tien2',
    pass: '12345',
  }
  ]
  const handleLogin = () => {
    // Check if the entered name and password match any user in your data
    var matchingUser = user.find((user) => user.name === name && user.pass === password);
  
    if (matchingUser) {
      // Update the state to show a success message
      setLoginMessage('Login successful with User:'+ name);
    } else {
      // Update the state to show a failure message
      setLoginMessage('Login failed');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>LOGIN</Text>

      <View style={styles.inputContainer}>
        <FontAwesome name="user" size={32} style={styles.icon} />
        <TextInput
          placeholder="Name"
          style={styles.input}
          value={name}
          onChangeText={text => setName(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <FontAwesome name="lock" size={32} style={styles.icon} />
        <TextInput
          placeholder="Password"
          secureTextEntry
          style={styles.input}
          value={password}
          onChangeText={text => setPassword(text)}
        />
      </View>

      <TouchableOpacity
        onPress={handleLogin}
        style={styles.loginButton}>
        <Text style={styles.loginButtonText}>LOGIN</Text>
      </TouchableOpacity>

      <Text style={styles.forgotPassword}>Forgot your password?</Text>
      <Text style={styles.loginMessage}>{loginMessage}</Text>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#FBCB00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    width: 100,
    height: 40,
    fontSize: 30,
    fontWeight: 700,
    lineHeight: 35.16,
    marginLeft: 30,
    alignSelf: 'flex-start',
    marginBottom: 40,
  },
  inputContainer: {
    height: 54,
    width: 330,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#F2F2F2',
    borderWidth: 1,
    borderRadius: 5,
    margin: 10,
  },
  icon: {
    padding: 10,
  },
  input: {
    width: 48,
    height: 21,
    fontSize: 18,
    fontWeight: 400,
    lineHeight: 21.09,
    flex: 1,
  },
  loginButton: {
    height: 45,
    width: 330,
    backgroundColor: 'black',
    borderRadius: 5,
    padding: 10,
    margin: 30,
  },
  loginButtonText: {
    fontSize: 20,
    fontWeight: 700,
    color: 'white',
    textAlign: 'center',
  },
  forgotPassword: {
    fontWeight: 700,
    fontSize: 20,
    lineHeight: 23.44,
    color: 'black',
  },
  loginMessage: {
    fontSize: 20,
    fontWeight: 700,
    color: 'green', // You can adjust the color for success or failure
    textAlign: 'center',
  },
};
// //2c
// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TextInput as RNTextInput } from 'react-native';
// import { Button, Checkbox } from 'react-native-paper';
// import Icon from 'react-native-vector-icons/FontAwesome';

// const App = () => {
//   var [password, setPassword] = useState('');
//   var [passwordLength, setPasswordLength] = useState(8);
//   var [includeLowerCase, setIncludeLowerCase] = useState(true);
//   var [includeUpperCase, setIncludeUpperCase] = useState(false);
//   var [includeNumber, setIncludeNumber] = useState(true);
//   var [includeSpecialSymbol, setIncludeSpecialSymbol] = useState(false);

//   const generatePassword = () => {
//     // Tạo logic để tạo mật khẩu dựa trên các yêu cầu ở đây.
//     // Đoạn mã này cần xác định các ký tự sẽ bao gồm và tạo mật khẩu dựa trên chúng.
//     let characters = '';
//     if (includeLowerCase) characters += 'abcdefghijklmnopqrstuvwxyz';
//     if (includeUpperCase) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     if (includeNumber) characters += '0123456789';
//     if (includeSpecialSymbol) characters += '!@#$%^&*()_+';

//     let newPassword = '';
//     for (let i = 0; i < passwordLength; i++) {
//       var randomIndex = Math.floor(Math.random() * characters.length);
//       newPassword += characters.charAt(randomIndex);
//     }

//     setPassword(newPassword);
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.container2}>
//         <Text style={styles.title}>PASSWORD GENERATOR</Text>
//         <View style={styles.passwordContainer}>
//           <Text style={styles.password}>{password}</Text>
//         </View>
//         <View style={styles.inputContainer}>
//           <Text style={styles.inputLabel}>Password length</Text>
//           <RNTextInput
//             value={String(passwordLength)}
//             onChangeText={(text) => setPasswordLength(parseInt(text) || 0)}
//             keyboardType="numeric"
//             style={styles.input}
//           />
//         </View>
//         <View style={styles.checkboxContainer}>
//           <Checkbox.Item
//             label="Include lower case letters"
//             status={includeLowerCase ? 'checked' : 'unchecked'}
//             onPress={() => setIncludeLowerCase(!includeLowerCase)}
//             style={styles.checkbox}
//             labelStyle={styles.checkboxLabel}
//           />
//           <Checkbox.Item
//             label="Include upper case letters"
//             status={includeUpperCase ? 'checked' : 'unchecked'}
//             onPress={() => setIncludeUpperCase(!includeUpperCase)}
//             style={styles.checkbox}
//             labelStyle={styles.checkboxLabel}
//           />
//           <Checkbox.Item
//             label="Include numbers"
//             status={includeNumber ? 'checked' : 'unchecked'}
//             onPress={() => setIncludeNumber(!includeNumber)}
//             style={styles.checkbox}
//             labelStyle={styles.checkboxLabel}
//           />
//           <Checkbox.Item
//             label="Include special symbols"
//             status={includeSpecialSymbol ? 'checked' : 'unchecked'}
//             onPress={() => setIncludeSpecialSymbol(!includeSpecialSymbol)}
//             style={styles.checkbox}
//             labelStyle={styles.checkboxLabel}
//           />
//         </View>
//         <View style={styles.buttonContainer}>
//           <Button
//             mode="contained"
//             icon={() => <Icon name="refresh" size={20} color="white" />}
//             onPress={generatePassword}
//             style={styles.button}
//           >
//             <View style={styles.buttonTextContainer}>
//               <Text style={styles.buttonText}>GENERATE PASSWORD</Text>
//             </View>
//           </Button>
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#6c76be',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     height: 64,
//     textAlign: 'center',
//     fontWeight: '700',
//     color: 'white',
//     fontSize: 25,
//     lineHeight: 29,
//     marginBottom: 20,
//   },
//   passwordContainer: {
//     width: 280,
//     height: 50,
//     backgroundColor: '#151537',
//     padding: 10,
//     marginBottom: 20,
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   inputLabel: {
//     width: 223,
//     height: 24,
//     fontWeight: '700',
//     fontSize: 20,
//     lineHeight: 23,
//     color: 'white',
//     marginRight: 5,
//   },
//   input: {
//     width: 118,
//     height: 33,
//     flex: 1,
//     backgroundColor: 'white',
//     paddingHorizontal: 10,
//   },
//   container2: {
//     width: 322,
//     height: 550,
//     backgroundColor: '#23235B',
//     borderRadius: 15,
//     padding: 20,
//     marginBottom: 20,
//   },
//   password: {
//     color: 'white',
//     fontSize: 18,
//   },
//   checkboxContainer: {
//     marginLeft: -15,
//     width: 300,
//   },
//   checkbox: {
//     width: '100%',
//     marginBottom: 10,
//   },
//   checkboxLabel: {
//     height: 26,
//     fontWeight: '700',
//     fontSize: 20,
//     lineHeight: 23,
//     color: 'white',
//   },
//   buttonContainer: {
//     alignItems: 'center',
//   },
//   button: {
//     width: 269,
//     height: 55,
//     backgroundColor: '#3B3B98',
//   },
//   buttonTextContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   buttonText: {
//     marginTop:7,
//     height:21,
//     fontWeight:700,
//     fontSize:17,
//     lineHeight:22,
//     color: 'white',
//   },
// });

// export default App;
////////////////////////////////////////////////////////////////////////

// //Tiki order
// import React, { useState } from 'react';
// import { View, Text, Image, TouchableOpacity, TextInput, Button, StyleSheet } from 'react-native';

// const App = () => {
//   const [quantity, setQuantity] = useState(1);
//   const unitPrice = 141800;
//   const total = unitPrice * quantity;

//   return (
//     <View style={styles.pageContainer}>
//       {/* Part 1 */}
//       <View style={styles.partContainer}>
//         <View style={styles.productContainer}>
//           <View style={styles.productImageContainer}>
//             <Image
//               source={require('./img/8a692ce25c7ed5778c5e2e72576a15cc.jpg')} // Đường dẫn đến ảnh sản phẩm
//               style={styles.productImage}
//             />
//           </View>
//           <View style={styles.productInfo}>
//             <Text style={styles.productDes}>Nguyên hàm tích phân và ứng dụng</Text>
//             <Text style={styles.productDes}>Cung cấp bởi Tiki Trading</Text>
//             <Text style={styles.productPrice}>141.800 đ</Text>
//             <Text style={styles.productOldPrice}>141.800 đ</Text>
//             <View style={styles.quantityContainer}>
//               <TouchableOpacity onPress={() => setQuantity(quantity - 1)}>
//                 <Text style={styles.quantityButton}>-</Text>
//               </TouchableOpacity>
//               <Text style={styles.quantityText}>{quantity}</Text>
//               <TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
//                 <Text style={styles.quantityButton}>+</Text>
//               </TouchableOpacity>
//               <TouchableOpacity>
//               <Text style={styles.buyLater}>Mua sau</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </View>
//         <View style={styles.discountCodeContainer}>
//           <Text style={styles.discountCode}>Mã giảm giá đã lưu</Text>
//           <TouchableOpacity style={styles.viewCodeContainer}>
//             <Text style={styles.viewCode}>Xem tại đây</Text>
//           </TouchableOpacity>
//         </View>
//         <View style={styles.buttonsContainer}>
//           {/* Nút "Mã giảm giá" */}
//           <TouchableOpacity style={styles.discountButton}>
//             {/* Hình chữ nhật màu vàng */}
//             <Text style={styles.discountButtonText}>
//               <View style={styles.yellowRectangle}></View>
//               Mã giảm giá
//             </Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.buyNowButton}>
//             <Text style={styles.buyNowButtonText}>Áp dụng</Text>
//           </TouchableOpacity>
//         </View>
      
//       </View>
      
//       {/* Space */}
//       <View style={styles.space}></View>

//       {/* Part 2 */}
//       <View style={styles.partContainer}>
//       <View style={styles.giftCodeContainer}>
//           <Text style={styles.giftCode}>Bạn có phiếu quà tặng Tiki/ Got it/ Urbox?</Text>
//           <TouchableOpacity style={styles.viewGiftCodeContainer}>
//             <Text style={styles.viewGiftCode}>Nhập tại đây</Text>
//           </TouchableOpacity>
//         </View>
//       </View>

//       {/* Space */}
//       <View style={styles.smallSpace}></View>

//       {/* Part 3 */}
//       <View style={styles.partContainer}>
//         <View style={styles.subtotalContainer}>
//           <View style={styles.subtotalTextContainer}>
//             <Text style={styles.subtotalText}>Tạm tính</Text>
//             <Text style={styles.subtotalPrice}>{total} đ</Text>
//           </View>
//         </View>
//       </View>

//       {/* Space */}
//       <View style={styles.largeSpace}></View>

//       {/* Part 4 */}
//       <View style={styles.partContainer}>
//         <View style={styles.subtotalContainer}>
//           <View style={styles.subtotalTextContainer}>
//             <Text style={styles.totalText}>Thành tiền</Text>
//             <Text style={styles.subtotalPrice}>{total} đ</Text>
//           </View>
//           <TouchableOpacity style={styles.orderButton}>
//             <Text style={styles.orderButtonText}>TIẾN HÀNH ĐẶT HÀNG</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   pageContainer: {
//     flex: 1,
//     backgroundColor: 'lightgray', // Màu nền của toàn trang
//     padding: 20,
//   },
//   partContainer: {
//     width: 375,
//     backgroundColor: 'white', // Màu nền của các phần
//     marginTop:-20,
//     marginLeft:-20,
//     marginBottom: 20,
//     padding: 20,
//   },
//   space: {
//     height: 20, // Độ cao của khoảng cách giữa các phần
//   },
//   largeSpace: {
//     height: 100, // Độ cao của khoảng cách lớn
//   },
//   smallSpace: {
//     height: 20, // Độ cao của khoảng cách nhỏ
//   },
//   productContainer: {
//     flexDirection: 'row',
//   },
//   productImageContainer: {
//     flex: 1,
//   },
//   productImage: {
//     width: 104,
//     height: 127,
//   },
//   productInfo: {
//     flex: 2,
//     paddingLeft: 10,
//   },
//   productDes:{
//     height: 14,
//     fontWeight:700,
//     fontSize:12,
//     lineHeight:15,
//     marginBottom:10,
//   },
  
//   productPrice: {
//     width:100,
//     height:21,
//     fontWeight:700,
//     fontSize:18,
//     lineHeight:21,
//     color: 'red',
//   },
//   productOldPrice: {
//     width:60,
//     height:14,
//     fontWeight:700,
//     fontSize:12,
//     lineHeight:14,
//     marginTop:10,
//     color: '#808080',
//     textDecorationLine: 'line-through',
//   },
//   quantityContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   quantityButton: {
//     width:14,
//     backgroundColor:'lightgray',
//     color: 'black',
//     textAlign: 'center',
//   },
//   quantityText: {
//     width:9,
//     height:18,
//     fontWeight:700,
//     lineHeight:17,
//     fontSize: 15,
//     marginLeft: 10,
//     marginRight: 10,
//   },
//   buyLater: {
//     width:55,
//     height:14,
//     fontWeight:700,
//     lineHeight:14,
//     fontSize: 12,
//     marginLeft: 100,
//     color: '#134FEC',
//   },
//   discountCodeContainer: {
//     flexDirection: 'row',
//     marginTop: 15,
//   },
//   discountCode: {
//     width:150,
//     height:14,
//     fontWeight:700,
//     lineHeight:14,
//     fontSize: 12,
//     marginLeft:10,
//     color: 'black',
//   },
//   viewCodeContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   viewCode: {
//     width:150,
//     height:14,
//     fontWeight:700,
//     lineHeight:14,
//     fontSize: 12,
//     marginLeft:-30,
//     color: 'blue',
//   },
//   giftCodeContainer: {
//     flexDirection: 'row',
//   },
//   giftCode: {
//     width:300,
//     height:14,
//     fontWeight:700,
//     lineHeight:13,
//     fontSize: 12,
//     color: 'black',
//   },
//   viewGiftCodeContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   viewGiftCode: {
//     width:80,
//     height:14,
//     fontWeight:700,
//     lineHeight:14,
//     fontSize: 12,
//     color: 'blue',
//   },
//   buttonsContainer: {
//     flexDirection: 'row',
//     marginTop: 10,
//   },
//   discountButton: {
//     width:208,
//     height:45,
//     backgroundColor: 'white',
//     borderColor: 'black',
//     borderWidth: 1,
//     borderRadius: 2,
//     padding: 10,
//     marginRight: 10,
//   },
//   discountButtonText: {
//     width:200,
//     height:21,
//     fontWeight: 700,
//     fontSize:18,
//     lineHeight:21,
//     color: 'black',
//   },
//   buyNowButton: {
//     width:120,
//     height:45,
//     borderRadius:2,
//     backgroundColor: 'blue',
//     padding: 10,
//   },
//   buyNowButtonText: {
//     width:100,
//     height:23,
//     fontWeight: 700,
//     fontSize:20,
//     lineHeight:23,
//     textAlign: 'center',
//     color: 'white',
//   },
//   subtotalContainer: {
//   },
//   subtotalTextContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   subtotalText: {
//     width:100,
//     height:21,
//     fontWeight:700,
//     fontSize:18,
//     lineHeight:21,
//     color: 'black',
//   },
//   subtotalPrice: {
//     color: 'red',
//   },
//   totalText: {
//     width:100,
//     height:21,
//     fontWeight:700,
//     fontSize:18,
//     lineHeight:21,
//     color: '#808080',
//   },

//   orderButton: {
//     width:331,
//     height:45,
//     backgroundColor: '#E53935',
//     padding: 10,
//     marginTop: 10,
//   },
//   orderButtonText: {
//     height:23, 
//     fontWeight:700,
//     lineHeight:23,
//     textAlign: 'center',
//     color: 'white',
//   },
//   yellowRectangle: {
//     width: 40,    // Độ rộng của hình chữ nhật
//     height: 20,   // Độ cao của hình chữ nhật
//     backgroundColor: 'yellow', // Màu nền của hình chữ nhật
//     marginRight: 10,
//   },
// });
// export default App;
