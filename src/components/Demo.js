// 
import { Text, View, StyleSheet, TouchableOpacity, Platform } from 'react-native'
import React, { useState } from 'react'
import styled from 'styled-components/native'


const Title = styled.Text`
    background-color: rgba(33, 150, 243, 1)
    color: white
    padding: 20px
    font-size: 17px
    font-weight: 700
`

const Button = styled(TouchableOpacity)`
    width: 60px
    height: 60px
    background-color: rgba(33, 150, 243, 1)
    border-radius: 30px
    align-items: center
    justify-content: center
    margin-right: 300px
`

function Demo() {
    const [counter, setCounter] = useState(0)

    const updatedCounter = () => {
        setCounter(counter + 1)
    }
    return (
        <View style={{ flex: 1 }}>
            <Title>Flutter Demo Home Page</Title>
            <View style={styles.centerWords}>
                <Text>You have pushed the button this many times:</Text>
                <Text style={{ fontSize: 60, color: '#777777', fontWeight: 300 }}>{counter}</Text>
            </View>
            <View style={styles.btnView}>
                <Button onPress={() => updatedCounter()}>
                    <Text style={styles.btnText}>+</Text>
                </Button>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    centerWords: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnView: {
        marginLeft: 290,
        marginBottom: Platform.OS === 'android' && 20
    },
    btnText: {
        color: '#fff',
        fontSize: Platform.OS === 'android' ? 30 : 40,
        fontWeight: 300
    }
})

export default Demo