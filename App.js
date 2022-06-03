import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,TouchableOpacity,
TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.banner}>
        <View><Ionicons name="arrow-back" size={30} color="black" /></View>
        <View>
          <TouchableOpacity><Text style={styles.bannerText}>Edit Profile</Text></TouchableOpacity>
        </View>
      </View>
      <View style={styles.profileDetails}>
        <View>
        <Image source={{uri: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"}}
        style={styles.imageSize} />
        </View>
        <View style={styles.posIcon}><TouchableOpacity style={styles.camCont}><Ionicons name="camera-outline" size={25} color="white" /></TouchableOpacity></View>
      </View>
      <View style={styles.profileData}>
        <Text style={styles.posTextSch}>School</Text>
        <TextInput style={styles.textInput}>The Lawrenceville School</TextInput>
        <Text style={styles.posTextEmail}>Email Address</Text>
        <TextInput style={styles.textInput}>danielrozar@gmail.com</TextInput>
        <Text style={styles.posTextName}>Name</Text>
        <TextInput style={styles.textInput}>Daniel Rozar</TextInput>
        <Text style={styles.posTextNickName}>Nick Name</Text>
        <TextInput style={styles.textInput}>r.daniel</TextInput>
        <Text style={styles.posTextEmergency}>Emergency Number</Text>
        <TextInput style={styles.textInput}>+1-987654321</TextInput>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Update Profile</Text></TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    paddingHorizontal: 16,
    backgroundColor: 'rgb(196, 225, 248)'
  },
  banner: {
    flex: 0.5,
    justifyContent: 'flex-start',
    flexDirection: "row",
    width: "100%",
    height: "10%",
    marginBottom: 3,
    backgroundColor: "rgb(255, 255, 255)"
  },
  bannerText: {
    fontSize: 20,
    marginHorizontal: 100
  },
  profileDetails: {
    flex: 3,
    alignItems: 'center',
    position: 'relative',
    paddingTop: 30,
    backgroundColor: 'rgb(255, 255, 255)'
  },
  imageSize: {
    width:150,
    height: 150,
    borderRadius: 75
  },
  posIcon: {
    position: 'absolute',
    top: 130,
    right: 90
  },
  camCont: {
    backgroundColor: 'rgb(39, 180, 228)',
    borderRadius: 10
  },
  profileData: {
    flex: 5,
    backgroundColor: 'rgb(255, 255, 255)',
    position: 'relative',
    justifyContent: 'center',
    padding: 20
  },
  posTextSch: {
    position: 'absolute',
    top: 20,
    left: 35,
    backgroundColor: 'rgb(255, 255, 255)',
    zIndex: 1 
  },
  posTextEmail: {
    position: 'relative',
    top: 8,
    left: 15,
    backgroundColor: 'rgb(255, 255, 255)',
    zIndex: 1 
  },
  posTextName: {
    position: 'relative',
    top: 8,
    left: 15,
    backgroundColor: 'rgb(255, 255, 255)',
    zIndex: 1 
  },
  posTextNickName: {
    position: 'relative',
    top: 8,
    left: 15,
    backgroundColor: 'rgb(255, 255, 255)',
    zIndex: 1
  },
  posTextEmergency: {
    position: 'relative',
    top: 8,
    left: 16,
    backgroundColor: 'rgb(255, 255, 255)',
    zIndex: 1 
  },
  textInput: {
    height: 40,
    fontSize: 20,
    borderWidth: 1,
    borderRadius: 10,
    borderTopWidth: 0,
    paddingLeft: 10,
    borderStyle: 'solid',
    borderColor: 'rgb(200, 206, 210)',
  },
  footer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center' ,
    backgroundColor: 'rgb(255, 255, 255)'
  },
  button: {
    height: 60,
    width: 250,
    borderRadius: 75,
    backgroundColor: 'rgb(39, 180, 228)'
  },
  buttonText: {
    alignSelf: 'center',
    color: 'rgb(255, 255, 255)',
    padding: 15,
    fontSize: 20
  }
});
