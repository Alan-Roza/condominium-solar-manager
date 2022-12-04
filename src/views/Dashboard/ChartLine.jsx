import { StyleSheet, View, Text, Dimensions } from 'react-native'
import {
  LineChart,
} from "react-native-chart-kit";

// Line Graphic component
export default function ChartLine({ title, data, labels }) {
  return (
    <>
      <Text style={styles.title}>{title}</Text>
      <LineChart
        data={{
          labels: labels,
          datasets: [
            {
              data: data
            }
          ]
        }}
        width={Dimensions.get("window").width - 20}
        height={250}
        yAxisInterval={1}
        chartConfig={{
          backgroundColor: "#FFF",
          backgroundGradientFrom: "#FFF",
          backgroundGradientTo: "#FFF",
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(234, 92, 43, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#FFF"
          },
        }}
        bezier
      />
    </>
  )
}

const styles = StyleSheet.create({
  title: {
    fontWeight: '700',
    fontSize: 27,
    color: '#545454',
    marginBottom: 10,
  },
});