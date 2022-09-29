import {StyleSheet, Dimensions} from "react-native";

const {height,width} = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  button:{
    backgroundColor: '#04bf9dc6',
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 35,
    marginHorizontal: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#F8F4E5'
  },
  buttonText:{
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
    letterSpacing: 0.5,
  },
  bottomContainer:{
    justifyContent: 'center',
    height: height/3
  },
  TextInput:{
    height: 50,
    borderWidth: 1,
    borderColor: '#a6a79f8f',
    marginHorizontal:20,
    marginVertical: 10,
    borderRadius: 25,
    paddingLeft: 10,
  },
  formButton:{
    backgroundColor: '#234A33',
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 35,
    marginHorizontal: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#03A696',
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
    marginBottom: 70,
    ...StyleSheet.absoluteFill,
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
    top: -55,
  },
  logostyle:{
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    top: -200,
  },
});


export default styles