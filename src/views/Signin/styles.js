import {StyleSheet, Dimensions} from "react-native";

const {height,width} = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#FFF0',
  },
  button:{
    backgroundColor: '#FFF',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#F8F4E5'
  },
  buttonText:{
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 0.5,
    color: '#FFF',
  },
  screenButtonText:{
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 0.5,
    color: '#EA5C2B',
  },
  bottomContainer:{
    justifyContent: 'center',
    height: height/1.5,
    borderTopLeftRadius: 30, 
    borderTopRightRadius: 30,
    backgroundColor: '#FFF'
  },
  TextInput:{
    height: 45,
    borderWidth: 1,
    backgroundColor: '#EA5C2B25',
    borderColor: 'transparent',
    marginHorizontal:20,
    marginVertical: 10,
    borderRadius: 10,
    paddingLeft: 10,
  },
  formButton:{
    backgroundColor: '#EA5C2B',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#EA5C2B',
    shadowColor:"#000",
    shadowOffset:{
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  formInputContainer:{
    // ...StyleSheet.absoluteFill,
    zIndex: -1,
    justifyContent: 'center',
  },
  closeButton:{
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignSelf: 'center',
    shadowColor:"#000",
    shadowOffset:{
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.35,
    shadowRadius: 6.30,
    elevation: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 25,
    marginTop: 30
  },
  logostyle:{
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});


export default styles