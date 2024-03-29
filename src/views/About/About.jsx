import React from "react";
import { ScrollView, Text, View } from "react-native";
import { styles } from './style'

// All students Facens
const STUDENT_WORKERS = [
  {
    name: 'Alan Cruz Roza',
    number: '200904'
  },
  {
    name: 'Ana Julia da Silva Moraes',
    number: '200716'
  },
  {
    name: 'Larissa Marques Molina ',
    number: '200681'
  },
  {
    name: 'Matheus Henrique Santos Zacarias',
    number: '200064'
  },
  {
    name: 'Nathan Roberto Gonçalves dos Santos',
    number: '200065'
  },
  {
    name: 'Vinicius Ferreira Gomes',
    number: '200603'
  },
  {
    name: 'Yuri Carlos Achnitz Batista Belinski',
    number: '200262'
  },
]

// About screen
export default function About({ navigation }) {
  return (
    <ScrollView style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.headerAbout}>Informações do projeto</Text>
        <Text style={styles.headerTitle}>GERENCIADOR LOREM</Text>
      </View>

      <View style={styles.about}>
        <Text style={styles.aboutTitle}>Sobre o aplicativo</Text>
        <Text style={styles.aboutText}>O projeto visa atender as necessidades apresentadas pela construtora Planeta. Sempre mantendo o foco em sustentabilidade, o App assiste a soluções em problemas de gestão: como o gerenciamento dos dados que são emitidos por placas solares em condomínios da construtora. Através do Lorem é realizado o processamento dos dados e apresentado ao usuário de forma legível, simples e organizado.</Text>
      </View>

      <View style={styles.workers}>
        <Text style={styles.workersTitle}>Colaboradores</Text>
        {STUDENT_WORKERS.map((worker) => (
          <View style={styles.workersTable} key={worker.number}>
            <Text style={styles.workersName}>{worker.name}</Text>
            <Text style={styles.workersNumber}>{worker.number}</Text>
          </View>
        ))}
      </View>

    </ScrollView>
  );
}
