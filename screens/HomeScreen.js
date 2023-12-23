import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, StatusBar, Image, ScrollView, Button, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { launchImageLibrary } from 'react-native-image-picker';

import { SelectList } from 'react-native-dropdown-select-list';
import DateTimePicker from 'react-native-modern-datepicker';
import { MaterialIcons } from '@expo/vector-icons';
export default function HomeScreen() {
  const navigation = useNavigation();
  const [selectImage, setSelectImage] = useState('');
  const [category, setCategory] = useState("");
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState("date");

  const ImagePicker = () => {
    let options = { storageOptions: { path: 'image' } };
    launchImageLibrary(options, response => {
      if (response.assets) {
        setSelectImage(response.assets[0].uri);
      }
    });
  };

  const categories = [
    { key: 'GWN', value: 'Gown (4yards +)' },
    { key: 'KFTN', value: 'Kaftan (6yards +)' },
    { key: 'SHRT', value: 'Shirt (1.5yards +)' },
    { key: 'SKRT', value: 'Skirt (2yards +)' },
    { key: 'CRTP', value: 'Croptop (2yards +)' },
    { key: 'BLPT', value: 'Blouse & Trouser (6yards +)' },
    { key: 'JPST', value: 'Jumpsuit (5yards +)' },
    { key: 'JPST', value: 'Kaftan + Agbada (12yards +)' },
    { key: 'AGBD', value: 'Agbada only (6yards +)' },
    { key: 'TRSR', value: 'Trouser (2yards +)' },
    { key: 'BLS', value: 'Blouse (1.5yards +)' },
    { key: 'HDGR', value: 'Headgear (1yard +)' },
    { key: 'UDWR', value: 'Underwear (1yard +)' },
    { key: 'SWMS', value: 'Swimsuit (2yards +)' },
  ];

  const showMode = (modeToShow) => {
    setShow(true);
    setMode(modeToShow);
  };

  const onChange = (e, selectedDate) => {
    setDate(selectedDate);
    setShow(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <StatusBar style="auto" />

        <View style={{
          paddingHorizontal: 10, marginTop: 20, marginVertical: 30, marginLeft: 10,
          flexDirection: 'row', fontSize: 20,
        }}>
          <SelectList style={styles.categories}
            setSelected={setCategory}
            data={categories}
            placeholder={"Select Category"}
            defaultOption={{ key: 'DEF', value: 'Select Dress Category' }}
          />
        </View>

        <View style={styles.trends}>
          <ScrollView scrollEventThrottle={16} horizontal={true}>

            <View style={styles.addImage}>
              <View style={{ flexDirection: 'row' }}>
                <MaterialIcons name="mode-edit" size={24} color="#aaa" />
                <TextInput
                  style={styles.imageName}
                  placeholder="Dress Image"
                />
              </View>

              <View style={styles.slides} >
                <MaterialIcons name="add-circle" size={35} color="#004500" />
                {selectImage ? (
                  <Image
                    source={{ uri: selectImage }}
                    style={{ resizeMode: 'cover', height: 300, width: 200 }}
                  />
                ) : (
                  <Text>No Image Selected</Text>
                )}
              </View>
            </View>

            <View style={styles.addImage}>
              <View style={{ flexDirection: 'row' }}>
                <MaterialIcons name="mode-edit" size={24} color="#aaa" />
                <TextInput
                  style={styles.imageName}
                  placeholder="Dress Fabric Image"
                />
              </View>
              <View style={styles.slides} >
                <MaterialIcons name="add-circle" size={35} color="#004500" />
                <Image
                  source={{ uri: selectImage }}
                  style={{ resizeMode: 'cover' }}
                />
              </View>
            </View>

            <View style={styles.addImage}>
              <View style={{ flexDirection: 'row' }}>
                <MaterialIcons name="mode-edit" size={24} color="#aaa" />
                <TextInput
                  style={styles.imageName}
                  placeholder="Sleeve Image"
                />
              </View>
              <View style={styles.slides} >
                <MaterialIcons name="add-circle" size={35} color="#004500" />
                <Image
                  source={{ uri: selectImage }}
                  style={{ resizeMode: 'cover' }}
                />
              </View>
            </View>

            <View style={styles.addImage}>
              <View style={{ flexDirection: 'row' }}>
                <MaterialIcons name="mode-edit" size={24} color="#aaa" />
                <TextInput
                  style={styles.imageName}
                  placeholder="Neck Image"
                />
              </View>
              <View style={styles.slides} >
                <MaterialIcons name="add-circle" size={35} color="#004500" />
                <Image
                  source={{ uri: selectImage }}
                  style={{ resizeMode: 'cover' }}
                />
              </View>
            </View>

            <View style={styles.addImage}>
              <View style={{ flexDirection: 'row' }}>
                <MaterialIcons name="mode-edit" size={24} color="#aaa" />
                <TextInput
                  style={styles.imageName}
                  placeholder="Slit Image"
                />
              </View>
              <View style={styles.slides} >
                <MaterialIcons name="add-circle" size={35} color="#004500" />
                <Image
                  source={{ uri: selectImage }}
                  style={{ resizeMode: 'cover' }}
                />
              </View>
            </View>

            <View style={styles.addImage}>
              <View style={{ flexDirection: 'row' }}>
                <MaterialIcons name="mode-edit" size={24} color="#aaa" />
                <TextInput
                  style={styles.imageName}
                  placeholder="Chest Image"
                />
              </View>
              <View style={styles.slides} >
                <MaterialIcons name="add-circle" size={35} color="#004500" />
                <Image
                  source={{ uri: selectImage }}
                  style={{ resizeMode: 'cover' }}
                />
              </View>
            </View>

            <View style={styles.addImage}>
              <View style={{ flexDirection: 'row' }}>
                <MaterialIcons name="mode-edit" size={24} color="#aaa" />
                <TextInput
                  style={styles.imageName}
                  placeholder="Embroidery Image"
                />
              </View>
              <View style={styles.slides} >
                <MaterialIcons name="add-circle" size={35} color="#004500" />
                <Image
                  source={{ uri: selectImage }}
                  style={{ resizeMode: 'cover' }}
                />
              </View>
            </View>

            <View style={styles.addImage}>
              <View style={{ flexDirection: 'row' }}>
                <MaterialIcons name="mode-edit" size={24} color="#aaa" />
                <TextInput
                  style={styles.imageName}
                  placeholder="Corset Image"
                />
              </View>
              <View style={styles.slides} >
                <MaterialIcons name="add-circle" size={35} color="#004500" />
                <Image
                  source={{ uri: selectImage }}
                  style={{ resizeMode: 'cover' }}
                />
              </View>
            </View>

          </ScrollView>
        </View>



        <View style={styles.order}>
          <View style={styles.orderPanel}>

            <View style={styles.info} >

              <View style={styles.inputRow}>
                <MaterialIcons name="location-on" size={24} color="grey" style={styles.inputIcon} />
                <TextInput
                  style={styles.placeholder}
                  numberOfLines={4}
                  placeholder="Enter Delivery City"
                />
              </View>
            </View>

            <View style={{ fontWeight: '600', fontSize: 18, paddingVertical: 10 }} >
              <Button
                title="Set Delivery Date"
                color="#004500"
                style={styles.calendarButton}
                onPress={() => showMode("date")}
                statusBar="auto"
              />
              {
                show && (
                  <DateTimePicker
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    onChange={onChange}
                    style={{ marginBottom: 50, position: 'relative' }}
                  />
                )
              }
            </View>


            <View style={styles.fabricRow} >
              <View style={styles.statement}>
                <Text style={{ fontSize: 17 }}>
                  Do you have your fabric?
                </Text>
              </View>
              <View style={{
                borderWidth: .5,
                borderColor: '#aaa',
                width: '50%',
                height: 40,
                borderRadius: 12,
                flexDirection: 'row',
                backgroundColor: 'white',
                alignItems: 'center',
                paddingLeft: 5,
                paddingRight: 5,
              }}>
                <Pressable
                  style={{
                    width: '50%',
                    height: 30,
                    backgroundColor: 'white',
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                  onPress={() => console.log('Yes button pressed')}>
                  <Text style={{
                    fontWeight: '400',
                    color: 'black',
                    fontSize: 18
                  }}>Yes</Text>
                </Pressable>
                <Pressable style={{
                  width: '50%',
                  height: 30,
                  backgroundColor: '#004500',
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
                  onPress={() => console.log('No button pressed')}>
                  <Text style={{
                    fontWeight: '400',
                    color: 'white',
                    fontSize: 18
                  }}>No</Text>
                </Pressable>
              </View>
            </View>

          </View>


          <View style={styles.buy}>
            <View style={styles.outfitPanel}>
              <View style={styles.outfit}>
                <Text style={{ color: 'white' }}> Total Price </Text>
              </View>
              <View style={[styles.outfit, {
                backgroundColor: '#fff',
                paddingBottom: 30,
                zIndex: 1
              }]}>
                <Text style={styles.buttons2}> N12,000 </Text>
              </View>

              <View style={[styles.outfit, {
                backgroundColor: '#004500',
                marginBottom: 0,
                paddingTop: 30,
                paddingBottom: 30,
                //zIndex: 2,
              }]}>
                <Text style={styles.buttons1}> Pay </Text>
              </View>
            </View>
          </View>



        </View>
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  addImage: {
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'center',
    marginTop: 10,
  },

  boxShadow: {
    flex: 1,
    padding: 10,
    marginTop: 50,
    marginLeft: 10,
  },


  buttons1: {
    fontSize: 20,
    fontWeight: '600',
    //backgroundColor: '#ddd',
    color: 'white',
    position: 'absolute',
    marginBottom: 20
  },


  buttons2: {
    fontSize: 17,
    fontWeight: '600',
    //backgroundColor: '#ddd',
    color: '#004500',
    position: 'absolute',
    marginBottom: 20
  },


  buy: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    height: 200,
    width: 400,
    marginHorizontal: 0,
  },

  calendarButton: {
    margin: 5,
    marginLeft: 5,
    borderColor: '#004500',
    backgroundColor: '#004500',
    justifyContent: 'center',
    borderRadius: 25,
    padding: 7,
    shadowColor: 'grey',
    shadowOffset: 10,
    elevation: 10,
    color: "#004500"
  },

  categories: {
    backgroundColor: '#004500',
    color: 'white',
    fontSize: 19,
    zIndex: 3
  },

  fabricRow: {
    //flexDirection: 'row',
    //alignItems: 'center',
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 1,
  },

  headerPanel: {
    flex: .15,
    flexDirection: 'row',
    backgroundColor: '#fff'
  },



  imageName: {
    color: 'grey',
    fontSize: 14,
    paddingHorizontal: 'center',
  },

  info: {
    flexDirection: 'row',
    //alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: 'center',
    backgroundColor: 'white',
  },


  inputIcon: {
    alignItems: 'center',
  },


  inputRow: {
    borderRadius: 10,
    margin: 5,
    marginLeft: 10,
    borderWidth: .5,
    borderColor: '#ccc',
    backgroundColor: 'white',
    flex: 1,
    padding: 10,
    marginTop: 2,
    flexDirection: 'row',
    justifyContent: 'start'
  },


  order: {
    flex: 0.55,
    //zIndex: 2,
    backgroundColor: 'white',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingBottom: 20,
    marginTop: 1,
    shadowColor: '#aaa',
    shadowOffset: {
      width: 1,
      height: 1
    },
    shadowOpacity: '0.7',
    shadowRadius: 10,
  },


  orderPanel: {
    flex: 1,
    backgroundColor: 'white',
    paddingBottom: 20,
    paddingTop: 20,

  },


  outfit: {
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },



  outfitPanel: {
    backgroundColor: '#fff',
    position: 'absolute',
    borderWidth: .5,
    borderRadius: 30,
    paddingTop: 20,
    marginTop: 0,
    marginHorizontal: 100,
    //zIndex: 1,
    justifyContent: 'center',
    width: 220,
    height: 120,
    bottom: 25
  },


  placeholder: {
    fontSize: 17,
    textTransform: 'uppercase', 
    paddingLeft: 20,
  },


  slides: {
    marginTop: 7.5,
    marginBottom: 30,
    backgroundColor: '#eee',
    flex: 1,
    borderRadius: 15,
    height: 350,
    width: 190,
    padding: 10,
  },

  statement: {
    borderRadius: 30,
    marginLeft: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
    margin: 5
    //padding: 10,
    //marginTop: 2,
  },

  trends: {
    flex: 0.5,
    backgroundColor: '',
    flexDirection: 'row',
    paddingLeft: 5
  },

});