import { View, Text, StyleSheet, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import { defaultStyles } from '@/constants/Styles'
// import { TextInput } from 'react-native-gesture-handler'
import Colors from '@/constants/Colors'
import { Link } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

enum SingInType {
  Phone,
  Email,
  Google,
  Apple
}

const Page = () => {

  const [countryCode, setCountryCode] = useState("+92")
  const [phoneNumber, setPhoneNumber] = useState("")
  const onSignIn = async (type: SingInType) => {
    if (type === SingInType.Phone) {

    }
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior='padding'
      keyboardVerticalOffset={80}
    >
      <View style={defaultStyles.container}>
        <Text style={defaultStyles.header}>Welcome back</Text>
        <Text style={defaultStyles.descriptionText}>
          Enter the phone number associated with your account
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Country Code"
            placeholderTextColor={Colors.gray}
            value={countryCode}
          />

          <TextInput
            style={[styles.input, { flex: 1 }]}
            placeholder="Mobile Number"
            keyboardType="numeric"
            placeholderTextColor={Colors.gray}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
        </View>

        <TouchableOpacity
          style={[defaultStyles.pillButton,
          phoneNumber !== "" ? styles.enable : styles.disable,
          { marginBottom: 20 }]} onPress={() => onSignIn(SingInType.Phone)}>
          <Text style={defaultStyles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: "row", alignItems: 'center', gap: 16 }}>
        <View style={{ flex: 1, height: StyleSheet.hairlineWidth, backgroundColor: Colors.gray }} />

        <Text style={{ color: Colors.gray, fontSize: 20 }}>or</Text>

        <View style={{ flex: 1, height: StyleSheet.hairlineWidth, backgroundColor: Colors.gray }} />
      </View>

      <TouchableOpacity
        onPress={() => onSignIn(SingInType.Email)}
        style={[defaultStyles.pillButton,
        {
          flexDirection: 'row',
          backgroundColor: '#fff',
          marginTop: 20,
          gap: 16
        }]}
      >
        <Ionicons name='mail' size={24} color={'#000'} />
        <Text style={[defaultStyles.buttonText, { color: '#000' }]}>Continue with email</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => onSignIn(SingInType.Google)}
        style={[defaultStyles.pillButton,
        {
          flexDirection: 'row',
          backgroundColor: '#fff',
          marginTop: 20,
          gap: 16
        }]}
      >
        <Ionicons name='logo-google' size={24} color={'#000'} />
        <Text style={[defaultStyles.buttonText, { color: '#000' }]}>Continue with google</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => onSignIn(SingInType.Apple)}
        style={[defaultStyles.pillButton,
        {
          flexDirection: 'row',
          backgroundColor: '#fff',
          marginTop: 20,
          gap: 16
        }]}
      >
        <Ionicons name='logo-apple' size={24} color={'#000'} />
        <Text style={[defaultStyles.buttonText, { color: '#000' }]}>Continue with apple</Text>
      </TouchableOpacity>


    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 40,
    flexDirection: 'row',
  },
  input: {
    backgroundColor: Colors.lightGray,
    padding: 20,
    borderRadius: 16,
    fontSize: 20,
    marginRight: 10,
  },
  enable: {
    backgroundColor: Colors.primary
  },
  disable: {
    backgroundColor: Colors.primaryMuted
  }
})

export default Page