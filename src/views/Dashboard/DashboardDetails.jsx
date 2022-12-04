import { useEffect, useState } from 'react';
import { View, Text, Image, Pressable, ScrollView, ActivityIndicator } from 'react-native'
import api from '../../services/api';
import CardDetails from './CardDetails';
import ChartCandle from './ChartCandle';
import ChartLine from './ChartLine';
import { styles } from './style'

export default function DashboardDetails({ route, navigation }) {
  const [filter, setFilter] = useState('month')
  const [condominiumData, setCondominiumData] = useState([])
  const [graphicDataAC, setGraphicDataAC] = useState(null)
  const [graphicDataDC, setGraphicDataDC] = useState(null)
  const [loading, setLoading] = useState(false)

  const getCondominium = async (id, filter) => {
    setLoading(true)
    try {
      const response = await api.get(`/register/${filter.includes('month') ? 'month' : 'list'}?condominioId=${id}`)
      const sum = await api.get(`/register/sum?condominioId=${id}`)

      if (sum?.data?.data) {
        console.log(sum?.data?.data, 'sum')
        setCondominiumData(sum?.data?.data)
      }

      if (response?.data?.data && response?.data?.data?.length) {

        const formattedDataAC = filter.includes('month') ? response?.data?.data?.map((item) => item.avg_ac_voltage ?? 0) : response?.data?.data?.slice(0,7)?.map((item) => item.avg_ac_voltage ?? 0)
        const formattedDataDC = filter.includes('month') ? response?.data?.data?.map((item) => item.avg_dc_voltage ?? 0) : response?.data?.data?.slice(0,7)?.map((item) => item.avg_dc_voltage ?? 0)
        const formattedDate = response?.data?.data?.slice(0,7)?.map((item) => item.date?.slice(5))

        setGraphicDataAC({ data: formattedDataAC, labels: filter.includes('month') ? ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"] : formattedDate })
        setGraphicDataDC({ data: formattedDataDC, labels: filter.includes('month') ? ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"] : formattedDate })
      }
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }

  useEffect(() => {
    getCondominium(route?.params?.condominium?.id, filter)
  }, [])

  return (
    <ScrollView contentContainerStyle={styles.container} style={{ flex: 1, backgroundColor: '#FFF' }}>

      <View style={styles.header}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Dados da Produção</Text>
          <Text style={styles.headerTitle}>{route.params?.condominium?.name ?? ''}</Text>
        </View>
      </View>

      <Text style={styles.filterText}>Filtro de produção</Text>
      <View style={styles.pressableContainer}>
        <Pressable
          style={[styles.pressableButton, filter === 'month' ? { borderTopLeftRadius: 9, borderBottomLeftRadius: 9, backgroundColor: '#EA5C2B' } : {}]}
          onPress={() => {setFilter('month'); getCondominium(route?.params?.condominium?.id, 'month')}}
        >
          <Text
            style={[{ fontSize: 17, fontWeight: '800' }, filter === 'month' ? { color: '#FFF' } : {}]}
          >
            MÊS
          </Text>
        </Pressable>

        <Pressable
          style={[styles.pressableButton, filter === 'day' ? { borderTopRightRadius: 9, borderBottomRightRadius: 9, backgroundColor: '#EA5C2B' } : {}]}
          onPress={() => {setFilter('day');getCondominium(route?.params?.condominium?.id, 'day')}}
        >
          <Text
            style={[{ fontSize: 17, fontWeight: '800' }, filter === 'day' ? { color: '#FFF' } : {}]}
          >
            DIA
          </Text>
        </Pressable>
      </View>

      {loading ? (
        <ActivityIndicator
          size="large"
          color='#EA5C2B'
        />
      ) : (
        <>
          {graphicDataAC && (
            <ChartLine data={graphicDataAC.data} labels={graphicDataAC.labels} title="Corrente Alternada" />
          )}

          {graphicDataDC && (
            <ChartCandle data={graphicDataDC.data} labels={graphicDataDC.labels} title="Corrente Continua" />
          )}

          <View style={styles.header}>
            <View style={styles.headerContainer}>
              <Text style={styles.headerText}>Detalhes de Produção</Text>
              <Text style={styles.headerTitle}>Informações</Text>
            </View>
          </View>

          <View style={styles.workers}>
            <View style={styles.workersTable}>
              <Text style={styles.workersName}>Tensão Média</Text>
              <Text style={styles.workersNumber}>{Number(condominiumData?.[0]?.avg_dc_voltage ?? 0).toFixed(2) ?? '-'}V</Text>
            </View>
            <View style={styles.workersTable}>
              <Text style={styles.workersName}>Máxima Tensão</Text>
              <Text style={styles.workersNumber}>{Number(condominiumData?.[0]?.max_dc_voltage ?? 0).toFixed(2)}V</Text>
            </View>
            <View style={styles.workersTable}>
              <Text style={styles.workersName}>Mínima Tensão</Text>
              <Text style={styles.workersNumber}>{Number(condominiumData?.[0]?.min_dc_voltage ?? 0).toFixed(2)}V</Text>
            </View>
            <View style={styles.workersTable}>
              <Text style={styles.workersName}>Temperatura Média</Text>
              <Text style={styles.workersNumber}>{Number(condominiumData?.[0]?.avg_temperature ?? 0).toFixed(2)}°C</Text>

            </View>
            <View style={styles.workersTable}>
              <Text style={styles.workersName}>Temperatura Máxima</Text>
              <Text style={styles.workersNumber}>{Number(condominiumData?.[0]?.max_temperature ?? 0).toFixed(2)}°C</Text>

            </View>
            <View style={styles.workersTable}>
              <Text style={styles.workersName}>Temperatura Mínima</Text>
              <Text style={styles.workersNumber}>{Number(condominiumData?.[0]?.min_temperature ?? 0)?.toFixed(2)}°C</Text>

            </View>
          </View>
        </>
      )}

    </ScrollView>
  )
}
