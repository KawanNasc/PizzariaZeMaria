import { useState, useEffect } from 'react';
import { Image, Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Firebase from '../firebase';

export default function Login({navigation}) {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [user, setUser] = useState('');
  
  function dados (user) {
    setUser(user);
    if ( initializing ) setInitializing(false);  
  }

  function login() {

    Firebase.auth().signInWithEmailAndPassword(email, senha).catch(function(error) {
       const errorCode = error.code;
       const errorMessage = error.message;
       alert(errorCode, errorMessage);
    });

  }

  useEffect(() =>{

      Firebase.auth().onAuthStateChanged(function(user) {
        if (user) { alert("Acesso liberado"); } else { alert("Não permitido"); }
      });

  },[])

  if (user) { return navigation.navigate('home'); }

  return (

      <SafeAreaView style={estilos.container}>

        <Image source={require('../assets/header.jpg')} style={estilos.logo} />
        <Text style={estilos.entrada}> Pizzaria do Zé Maria </Text>

        <TextInput placeholderTextColor={'#fff'} style={estilos.input} placeholder="Digite o E-Mail de acesso" onChangeText={(email) => setEmail(email)} value={email} />
        <TextInput placeholderTextColor={'#fff'} style={estilos.input} placeholder="Digite a senha secreta" onChangeText={(senha) => setSenha(senha)} value={senha} />

        <TouchableOpacity 
          style={estilos.botao} onPress={() => { login(); } }>
          <Text style={ estilos.txtbotao }> Acessar </Text>  
        </TouchableOpacity>

      </SafeAreaView>

  );

}

const estilos = StyleSheet.create({

  container: { flex: 1, justifyContent: 'center', backgroundColor: '#ecf0f1', padding: 8, alignItems: 'center' },
  logo: { width: 200, height: 200, borderRadius: 150 },
  entrada: { marginTop: 55, marginBottom: 35, fontSize: 25, color: "#4B002", fontWeight: 'bold', paddingVertical: 14  },
  input: { width: 250, paddingLeft: 10, backgroundColor: '#000', color: '#fff', marginTop: 10, fontSize: 20, fontWeight: 'bold', borderRadius: 10  },
  botao: { width: 200, backgroundColor: '#000088', height: 40, marginTop: 35, borderRadius: 8, justifyContent: 'center', alignItems: 'center' },
  txtbotao: {  fontSize: 30, color: '#FF5EE', fontWeight: 'bold' }
  
});