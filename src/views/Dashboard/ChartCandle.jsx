import { StyleSheet, View, Text, Dimensions } from 'react-native'
import {
  BarChart,
} from "react-native-chart-kit";

export default function ChartCandle({ title, data, labels }) {
  return (
    <>
      <Text style={styles.title}>{title}</Text>
      <BarChart
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
        }}
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