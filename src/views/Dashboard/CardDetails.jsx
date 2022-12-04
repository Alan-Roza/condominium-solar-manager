import { StyleSheet, View, Text, Pressable } from 'react-native'
import {
  Text as TextPaper,
  TouchableRipple,
} from "react-native-paper";

// Component Card used inside dashboard
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
    height: 180,
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    elevation: 7,
    marginBottom: 25,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingTop: 5,
    borderWidth: 2,
    borderColor: 'rgba(234, 92, 43, 1)',
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