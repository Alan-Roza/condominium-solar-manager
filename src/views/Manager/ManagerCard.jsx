import { StyleSheet, View, Text, Pressable } from 'react-native'
import Arrow from "../../../assets/icons/Arrow";

export default function CondominiumCard({ condominium, onHandlePress }) {
    console.log(condominium.item)
    return (
        <Pressable style={styles.container} rippleColor="rgba(234, 92, 43, .2)" onPress={() => onHandlePress()}>
            <View style={styles.text}>
                <Text style={styles.title}>{condominium.name}</Text>
                <Text style={styles.subTitle}>
                    Síndicos:
                    <Text style={[styles.subTitle, { color: '#EA5C2B' }]}>
                        {condominium?.sindicos?.length}
                    </Text>
                </Text>
            </View>
            <Arrow />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 20,
        marginVertical: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        elevation: 10,
        backgroundColor: 'white',
        borderRadius: 8,
    },
    text: {
        
    },  
    title: {
        fontWeight: '700',
        fontSize: 25,
        color: '#EA5C2B',
    },
    subTitle: {
        fontWeight: '300',
        fontSize: 17,
        color: '#545454',
    },
    detailsText: {
        fontWeight: '700',
        fontSize: 18,
        color: '#EA5C2B',
    },
});