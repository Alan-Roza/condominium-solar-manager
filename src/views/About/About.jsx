import React from "react";
import { ScrollView, Text, View } from "react-native";
import { styles } from './style'

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

export default function About({ navigation }) {
  return (
    <ScrollView style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.headerAbout}>Informações do projeto</Text>
        <Text style={styles.headerTitle}>Sobre o LOREM</Text>
      </View>

      <View style={styles.about}>
        <Text style={styles.aboutTitle}>Sobre o aplicativo</Text>
        <Text style={styles.aboutText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, aut alias nemo porro ea excepturi officia accusantium odio, in suscipit vitae facere distinctio ipsa. Repudiandae consequuntur vel non earum. Doloribus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, aut alias nemo porro ea excepturi officia accusantium odio, in suscipit vitae facere distinctio ipsa. Repudiandae consequuntur vel non earum. Doloribus!</Text>
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
