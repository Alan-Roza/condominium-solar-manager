import { StyleSheet, View, Text, Pressable } from 'react-native'
import {
  Text as TextPaper,
  TouchableRipple,
} from "react-native-paper";

export default function CardDetails({ title, subTitle, data, onHandlePress }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle}>{subTitle}</Text>

      <View style={styles.divider} />

      <TouchableRipple
        borderless
        rippleColor="rgba(234, 92, 43, .2)"
        style={styles.details}
        onPress={onHandlePress}
      >
        <TextPaper style={styles.detailsText}>
          Ver Detalhes
        </TextPaper>
      </TouchableRipple>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 200,
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    elevation: 10,
    backgroundColor: 'white',
    borderRadius: 8,
    paddingTop: 5,
  },
  title: {
    paddingHorizontal: 15,
    fontWeight: '700',
    fontSize: 25,
    color: '#EA5C2B',
  },
  subTitle: {
    paddingHorizontal: 15,
    fontWeight: '300',
    fontSize: 17,
    flex: 1,
    color: '#545454',
    marginVertical: 10,
  },
  details: {
    borderBottomEndRadius: 8,
    borderBottomStartRadius: 8,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  divider: {
    borderTopColor: '#EA5C2B',
    borderTopWidth: 1,
  },
  detailsText: {
    fontWeight: '700',
    fontSize: 18,
    color: '#EA5C2B',
  },
});