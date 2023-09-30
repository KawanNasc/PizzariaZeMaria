import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

export default function Home() {

  return (

    <ScrollView>

      <View style={estilos.body}>

        <View>

          <Image style={estilos.header} source={require("../assets/header.jpg")} />

          <View style={estilos.introducao}>
            <Text style={estilos.bemvindo}>Cardápio</Text>
            <Text style={estilos.bemvindo}>Sinta-se á vontade para tomar a melhor dose do dia!</Text>
          </View>

          <View style={estilos.cardapio}>
            <Text style={estilos.titulo}>Cardápio exclusivo</Text>

            <View>
              <Text style={estilos.bebidas}>Mussarela</Text>
              <Text style={estilos.bebidas}>Mussarela...........R$60,99</Text>
              <Image style={estilos.foto} resizeMode="center" source={require("../assets/mussarela.jpg")} />
              <Text style={estilos.descricao}>
                Descubra a receita de Pizza de Mussarela para fazer em 50 minutos. Em uma tigela juntar os ingredientes, acrescentando a água aos poucos. Bata a massa até que fique com uma consistência homogênea e elástica.
              </Text>
            </View>
            
            <View>
              <Text style={estilos.bebidas}>Calabresa</Text>
              <Text style={estilos.bebidas}>Calabresa....................R$24,99</Text>
              <Image style={estilos.foto} resizeMode="center" source={require("../assets/calabresa.jpg")} />
              <Text style={estilos.descricao}>
                Descubra a receita de Pizza de calabresa para fazer em 120 minutos. Bata o tomate no liquidificador com os demais ingredientes até formar uma mistura homogênea.
              </Text>
            </View>
            

            <View style={estilos.footer}>
              <Text style={estilos.pedido}>Escolha o que lhe deseja para hoje e esperamos que se divirta :)</Text>
            </View>

          </View>

        </View>

      </View>

    </ScrollView>

  );

}

const estilos = StyleSheet.create({

  body: { flex: 1, justifyContent: "center", backgroundColor: "#101010" },

  header: { width: 400, height: 200 },
  
  introducao: { backgroundColor: "#6f0000", borderRadius: 20, width: 300, marginLeft: 45, margin: 30 },

  bemvindo: { textAlign: "center", padding: 15, fontWeight: "bold", fontSize: 18 },

  cardapio: { backgroundColor: "#e71f10", borderRadius: 60, width: 300, marginLeft: 45, alignItems: "center", padding: 30 },

  titulo: { fontSize: 30, padding: 50, fontWeight: "bold" },

  bebidas: { padding: 5, fontSize: 18 },

  foto: { width: 200, height: 150 },

  descricao: { marginBottom: 15, fontSize: 15 },
  
  footer: { backgroundColor: "#ff8634", borderRadius: 20, width: 250, marginLeft: 25, margin: 30 },

  pedido: { textAlign: "center", padding: 15, fontWeight: "bold", fontSize: 18 }

})