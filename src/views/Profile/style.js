import { Dimensions, StyleSheet } from 'react-native'

const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingTop: 100,
  },
  title: {
    fontWeight: "800",
    fontSize: 26,
    marginHorizontal: 20,
    textAlign: "left",
    marginVertical: 30,
    color: "#545454",
  },
  input: {
    color: '#EA5C2B',
  },
  button: {
    backgroundColor: "#EA5C2B",
    marginHorizontal: 20,
    marginVertical: 30,
    borderRadius: 10,
    height: 50,
    justifyContent: "center",
  },
  buttonText: {
    color: "#FFF",
    textAlign: "center",
    justifyContent: 'center',
    fontWeight: "700",
    marginHorizontal: 2,
    fontSize: 16,
  },
  infoContainer: {
    position: 'absolute',
    top: 0,
    right: 15,
    alignItems: 'center',
  },
  infoText: {
    color: '#FFF',
    fontSize: 12,
  },
  leaveButton: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  label: {
    marginHorizontal: 20,
    fontWeight: "500",
    fontSize: 16,
    marginBottom: -5,
  },
  errorMessage: {
    marginTop: -10,
    marginBottom: 15,
    marginHorizontal: 20,
    fontWeight: "500",
    fontSize: 13,
    color: "red",
  },
  logo: {
    height: 100,
    width: '100%',
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    height: windowHeight / 3.5,
    marginTop: 50,
  },
  headerText: {
    color: '#FFF',
    fontSize: 33,
    lineHeight: 35,
    fontWeight: '700',
  },
  generalContainer: {
    flex: 1,
    backgroundColor: '#E3501D'
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EA5C2B15',
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 50,
  },
  prefix: {
    paddingHorizontal: 20,
    fontWeight: 'bold',
    color: 'black'
  },
  remove: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    marginVertical: 10,
    marginHorizontal: 20,
  },
  removeLink: {
    color: '#EA5C2B',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  userCard: {
    backgroundColor: '#FFF',
    marginHorizontal: 15,
    borderRadius: 20,
    height: 150,
    flexDirection: 'row',
    marginBottom: -70,
    zIndex: 1000,
    elevation: 15,
    shadowColor: '#000',
  },
  avatar: {
    width: 125,
    height: 150,
    borderRadius: 25,
    marginTop: -20,
    marginLeft: -5,
    elevation: 15,
    shadowColor: '#000',
  },
  textContainer: {
    marginHorizontal: 20,
    flex: 1,
    justifyContent: 'center',
    wordBreak: 'break-all'
  },
  userName: {
    fontSize: 22,
    fontWeight: '700',
  },
  verifyContainer: {
    flexDirection: 'row',
    marginBottom: 15,
    alignItems: 'center',
  },
  verify: {
    color: '#EA5C2B',
    fontWeight: '800',
    fontSize: 16,
  },
  level: {
    color: '#797979',
    fontWeight: '300',
  },
});
