import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
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
    fontSize: 16,
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
    fontWeight: "700",
    fontSize: 16,
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
    paddingTop: 50,
  },
  headerText: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 35,
  },
  generalContainer: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  welcomeText: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: '500',
  },
  subtitleText: {
    color: '#FFF',
    fontSize: 25,
    fontWeight: '500',
    lineHeight: 30,
    textAlign: 'center',
    width: '80%',
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
  registerText: {
    color: '#818181',
  },
  register: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginVertical: 20,
  },
  registerLink: {
    color: '#EA5C2B',
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
