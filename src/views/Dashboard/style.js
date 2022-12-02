import { Dimensions, StyleSheet } from 'react-native'

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  header: {
    marginTop: 20,
    alignItems: 'center',
  },
  headerContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  headerText: {
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
  logo: {
    height: 100,
    width: windowWidth,
  },
  pressableContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 70,
    marginBottom: 25,
    alignItems: 'center',
    justifyContent: 'space-around',
    borderWidth: 1,
    borderColor: '#545454',
    borderRadius: 10,
  },
  filterText: {
    color: '#545454',
    fontSize: 17,
    marginTop: 15,
    fontWeight: '600',
  },
  pressableButton: {
    height: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  workers: {
    marginVertical: 20,
    width: '100%',
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
