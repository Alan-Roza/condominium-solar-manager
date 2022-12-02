import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
  },
  header: {
    marginVertical: 30,
  },
  headerAbout: {
    color: "#EA5C2B",
    fontSize: 17,
    fontWeight: '700'
  },
  headerTitle: {
    color: '#545454',
    fontSize: 25,
    lineHeight: 27,
    fontWeight: '600',
  },
  about: {
    marginVertical: 0,
  },
  aboutTitle: {
    color: "#EA5C2B",
    fontSize: 22,
    marginBottom: 5,
    fontWeight: '700'
  },
  aboutText: {
    color: '#545454',
    fontSize: 15,
    textAlign: 'justify',
    fontWeight: '300',
  },
  workers: {
    marginVertical: 20,
  },
  workersTitle: {
    color: "#EA5C2B",
    fontSize: 22,
    marginBottom: 10,
    fontWeight: '700'
  },
  workersTable: {
    borderBottomWidth: 1,
    borderBottomColor: "#54545422",
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  workersName: {
    color: '#545454',
    fontSize: 17,
    fontWeight: '500',
    flex:1,
  },
  workersNumber: {
    color: '#545454',
    fontSize: 17,
    fontWeight: '300',
    alignSelf: 'flex-end',
  },
});
