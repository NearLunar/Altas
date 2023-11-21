import { SafeAreaView, StyleSheet, Text } from "react-native";

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Altas Mobile App Index.tsx</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
