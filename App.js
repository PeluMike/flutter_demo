// 

import { StyleSheet, Text, View, SafeAreaView, StatusBar, Platform } from 'react-native';

const barHeight = StatusBar.currentHeight

import Demo from './src/components/Demo';
export default function App() {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.topSpace}></View>
            <SafeAreaView style={styles.container}>
                <Demo />
            </SafeAreaView>
            <StatusBar barStyle="light-content" backgroundColor={'#075a9d'} />
        </View>

    );
}

const styles = StyleSheet.create({
    topSpace: {
        height: Platform.OS === 'android' ? 0 : 50,
        backgroundColor: Platform.OS === 'ios' && '#075a9d'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // marginTop: Platform.OS === 'android' && barHeight
    },
});
