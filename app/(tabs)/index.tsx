import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/logo4.png')}
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.tituloContainer}>
        <ThemedText type="title">Bem-vindo ao meu perfil!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.tituloContainer}>
        <ThemedText type="subtitle">Sobre perfil:</ThemedText>
      </ThemedView>
      <ThemedView style={styles.textoContainer}>
        <ThemedText>
          <ThemedText type="defaultSemiBold">Neste perfil, você terá acesso a todas as minhas redes sociais.
          </ThemedText>
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.tituloContainer}>
        <ThemedText type="subtitle">Sobre mim:</ThemedText>
      </ThemedView>
      <Image source={require('@/assets/images/eu.jpeg')} style={styles.icon} />
      <ThemedView style={styles.textoContainer}>
        <ThemedText type="defaultSemiBold">
          Sou a Lívia Fernanda, aluna da ETEC Miltton Gazzetti de Presidente Vensceslau-SP. Atualmente estou 
          no 3ºEM de Téc. em inforática e tenho muita vontade de cursar ESTÉTICA E COSMÉTICA
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.tituloContainer}>
        <ThemedText type="subtitle">Próxima página:</ThemedText>
        </ThemedView>
        <ThemedView style={styles.textoContainer}>
        <ThemedText type="defaultSemiBold">
          Na outra página estará todas as minhas redes sociais para você ter acesso.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>

  );
}

const styles = StyleSheet.create({
  tituloContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  textoContainer: {
    gap: 8,
    marginBottom: 8,
  },
  headerImage: {
    height: 300,
    width: 450,
    bottom: -40,
    left: -30,
    position: 'absolute',
  },
  icon:{
    justifyContent:'center',
    alignItems:'center',
    borderRadius:200,
    height:200,
    width:200,
    alignSelf:'center',
  }
});