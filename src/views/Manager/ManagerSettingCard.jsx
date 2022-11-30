import { StyleSheet, View, Text, Pressable } from 'react-native'
import Trash from "../../../assets/icons/Trash";
import Plus from "../../../assets/icons/Plus";

export default function ManagerSettingCard({ manager, onHandlePress, isPlus = false }) {
    return (
        <Pressable style={styles.container}>
            <View style={styles.text}>
                <Text style={styles.title}>{manager?.name}</Text>
                <Text style={styles.subTitle}>
                    Síndico
                </Text>
            </View>
            <Pressable onPress={() => onHandlePress()}>
                {!isPlus ? (
                    <Trash />
                ) : (
                    <Plus color={'#EA5C2B'} />
                )}
            </Pressable>
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