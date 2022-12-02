import { StatusBar } from 'expo-status-bar';
import { useContext, useEffect, useState } from 'react';
import { View, Text, Image, Pressable, ScrollView, ActivityIndicator, FlatList } from 'react-native'
import userContext from '../../config/userContext';
import api from '../../services/api';
import EmptyList from '../EmptyList';
import CardDetails from './CardDetails';
import ChartCandle from './ChartCandle';
import ChartLine from './ChartLine';
import { styles } from './style'

const CONTEXT_CONTENT = [
  `Para ter mais detalhes e informações das placas solares, clique abaixo em "Ver Detalhes".`,
  `Quer saber ainda mais sobre como andam as placas solares neste condomínio? Clique em "Ver Detalhes"!`,
  `Nunca foi tão prático e ágil monitorar as placas solares de um condomínio, clique abaixo para mais detalhes.`,
  `Quer entender com mais detalhes e precisão a respeito das placas solares neste condomínio? clique no botão abaixo.`
]

export default function Dashboard({ navigation }) {
  const [filter, setFilter] = useState('day')
  const [condominiuns, setCondominiuns] = useState([])
  const [loading, setLoading] = useState(false)
  const {userInfos} = useContext(userContext);

  const FILTER_DATA = {
    labels: filter.includes('month')
      ? ["Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"]
      : ["25/11", "26/11", "27/11", "28/11", "29/11", "30/11", "01/12"],
    data: !condominiuns?.length ? [0, 0, 0, 0, 0, 0, 0] : [
      Math.random() * (filter.includes('month') ? 90 : 1),
      Math.random() * (filter.includes('month') ? 100 : 2),
      Math.random() * (filter.includes('month') ? 100 : 2),
      Math.random() * (filter.includes('month') ? 40 : 2),
      Math.random() * (filter.includes('month') ? 100 : 2),
      Math.random() * (filter.includes('month') ? 60 : 2),
      Math.random() * (filter.includes('month') ? 70 : 2),
    ]
  }

  const getDashboardInfos = async () => {
    setLoading(true)
    try {
        const response = await api.get('/condominio/list?sindicoId=*')

        const specificCond = response?.data?.data?.find((item) => item?.id?.includes(id))

        const allUsers = await api.get('/user/list')

        if (allUsers && specificCond) {
            const filteredUsers = allUsers?.data?.data?.filter((user) => specificCond?.sindicos?.includes(user?.id))
            setCondominiumSindicos(filteredUsers)
        }
    } catch (error) {
        console.log(error)
        setErrorMessage(error.toString());
        setVisibleSnackbar(true);
    }
    setLoading(false)
}

const getCondominiuns = async () => {
  setLoading(true)
  try {
    const response = await api.get(`/condominio/list?sindicoId=${userInfos?.principals?.includes('SINDICO') ? userInfos?.id : '*'}`)
    if (response?.data?.data) setCondominiuns(response?.data?.data)
  } catch (error) {
    console.log(error)
  }
  setLoading(false)
}

useEffect(() => {
  getCondominiuns()
}, [])

  return (
    <ScrollView contentContainerStyle={styles.container} style={{ flex: 1 }}>
      
      <View style={styles.header}>
        <Image resizeMode="contain" style={styles.logo} source={require('../../../assets/images/logo.png')} />
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Resumo dos totais</Text>
          <Text style={styles.headerTitle}>Produção dos Condomínios</Text>
        </View>
      </View>

      <Text style={styles.filterText}>Filtro de produção</Text>
      <View style={styles.pressableContainer}>
        <Pressable
          style={[styles.pressableButton, filter === 'month' ? { borderTopLeftRadius: 9, borderBottomLeftRadius: 9, backgroundColor: '#EA5C2B' } : {}]}
          onPress={() => setFilter('month')}
        >
          <Text
            style={[{ fontSize: 17, fontWeight: '800' }, filter === 'month' ? { color: '#FFF' } : {}]}
          >
            MÊS
          </Text>
        </Pressable>

        <Pressable
          style={[styles.pressableButton, filter === 'day' ? { borderTopRightRadius: 9, borderBottomRightRadius: 9, backgroundColor: '#EA5C2B' } : {}]}
          onPress={() => setFilter('day')}
        >
          <Text
            style={[{ fontSize: 17, fontWeight: '800' }, filter === 'day' ? { color: '#FFF' } : {}]}
          >
            DIA
          </Text>
        </Pressable>
      </View>

      <ChartLine data={FILTER_DATA.data} labels={FILTER_DATA.labels} title="Corrente Alternada" />
      <ChartCandle data={FILTER_DATA.data} labels={FILTER_DATA.labels} title="Corrente Continua" />

      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Administração</Text>
        <Text style={styles.headerTitle}>Condomínios</Text>
      </View>

      <View>
          {loading ? (
            <ActivityIndicator
              size="large"
              color='#EA5C2B'
            />
          ) : (
            <FlatList
              ListEmptyComponent={() => <EmptyList onRefresh={() => getCondominiuns()} />}
              style={{ paddingTop: 20 }}
              data={condominiuns}
              renderItem={({ item }) => (
                <CardDetails title={item?.name} subTitle={CONTEXT_CONTENT[Math.floor(Math.random() * (CONTEXT_CONTENT?.length))]} data={item} onHandlePress={() => navigation.navigate('DashboardDetails', {condominium: item})} />
              )}
            />
          )}
        </View>

    </ScrollView>
  )
}
