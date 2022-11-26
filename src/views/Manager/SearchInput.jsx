import React from "react";
import { SafeAreaView, StyleSheet, TextInput, View } from "react-native";
import CloseIcon from "../../../assets/icons/CloseIcon";
import SearchIcon from "../../../assets/icons/SearchIcon";
import Colors from "../../constants/Colors";
import Layout from "../../constants/Layout";
import useDebounce from "../../hooks/useDebounce";

const SearchInput = (props) => {
  const { placeholder, onSearch } = props

  const [search, setSearch] = React.useState('');

  useDebounce(() => {
    if (search) onSearch(search)
    if (!search) onSearch('')
  }, 500, [search])

  return (
    <SafeAreaView>
      <View style={styles.wrapper}>
        <TextInput
          style={styles.input}
          onChangeText={(value) => setSearch(value)}
          value={search}
          placeholder={placeholder ?? 'Pesquisar...'}
          placeholderTextColor={Colors.placeholderColor}
        />
        {search ? (
          <View style={styles.closeIconContainer}>
            <CloseIcon onPress={() => setSearch('')} color={Colors.placeholderColor} />
          </View>
        ): null}
        <SearchIcon style={styles.searchIcon} color={Colors.placeholderColor} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    margin: 12,
    borderRadius: Layout.borderRadius,
    color: Colors.placeholderColor,
    fontWeight: '500',
    backgroundColor: Colors.searchBackground,
    paddingLeft: 45,
    paddingRight: 35,
    fontSize: 16,
  },
  wrapper: {
    position: 'relative', 
    justifyContent: 'center',
  },
  searchIcon: {
    position: 'absolute', 
    alignSelf: 'center', 
    left: 0, 
    transform: [{ translateX: 25 }]
  },
  closeIconContainer: {
    position: 'absolute', 
    alignItems: 'center',
    justifyContent: 'center', 
    right: 0, 
    transform: [{ translateX: -25 }]
  }
});

export default SearchInput;