import React from 'react';
import { View, StyleSheet } from 'react-native';

import Mega from './components/Mega/Mega';
/*import Contador from './components/Contador';
import Aleatorio from './components/Aleatorio';
import MinMax from './components/MinMax';
import CompPadrao, { Comp1, Comp2 } from './components/Multi';
import Primeiro from './components/Primeiro';*/

function App() {
  return (
    <View style={style.App}>
      <Mega qtdNumero={7}/>
      {/*<Aleatorio min={12} max={15}/>
      <Contador inicial={100}/>
      <Aleatorio min={12} max={15}/>
      <Aleatorio min={2} max={50}/>
      <Aleatorio min={2} max={50}/>
      <MinMax min={1} max={10}/>
      <MinMax min={4} max={15}/>
       <CompPadrao/>
      <Comp1/>
      <Comp2/>
      <Primeiro/> */}
    </View>
  );
}

const style = StyleSheet.create({
  App: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  }
});

export default App;