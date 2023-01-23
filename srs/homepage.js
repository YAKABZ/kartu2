import { StatusBar } from 'expo-status-bar';
import React  from 'react';
import { StyleSheet, Text, View , TouchableOpacity, Modal} from 'react-native';
import { Navbar } from './Navbar';
import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons'; 
export  function HomePage() {
 const [ModalOpisanie, SetModalOpisanie] = useState(false)
 const [ModalRasklad, SetModalRasklad] = useState(false)
  return (
    
    <View style={styles.container}>

      <TouchableOpacity onPress={()=>{SetModalOpisanie(true)}} style={styles.but}><Text style={styles.text}>описание карт</Text></TouchableOpacity>
      <TouchableOpacity style={styles.but}><Text style={styles.text}>выбрать три карты</Text></TouchableOpacity>
      <StatusBar style="light" />



      <Modal visible={ModalOpisanie}>
        <View style={styles.container}>


          <View OnPress={()=>{SetModalOpisanie(false)}}>
<AntDesign  name="closesquareo" size={24} color="white" />
          </View>
      
      </View>

      </Modal>






      <Modal visible={ModalRasklad}>
      <View>


<View OnPress={()=>{SetModalRasklad(false)}}>
<AntDesign  name="closesquareo" size={24} color="white" />
</View>

</View>


      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f1f1f',
    justifyContent: 'flex-start',
    alignItems: 'center',
    color: 'white',

  },

  but: {
 width: 320,
 height: 75,
 borderRadius: 24,
 backgroundColor: '#9400D3',
 margin: 40,
 color: 'black',
 justifyContent: 'center',
 alignItems: 'center'
  },

  text: {
    color: 'white',
  }
});
