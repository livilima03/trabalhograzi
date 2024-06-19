import Ionicons from '@expo/vector-icons/Ionicons';
import { Link, Stack } from 'expo-router';
import { StyleSheet, Image, View, Pressable, Text } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import * as Linking from 'expo-linking';
export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <Image source={require('@/assets/images/social-midias.jpg')} style={styles.headerImage} />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Redes Sociais:</ThemedText>
      </ThemedView>

      <ThemedView style={styles.contentContainer}>

      <Pressable style={styles.redes} onPress={() => Linking.openURL('https://www.linkedin.com/in/livia-lima-b74898314/')}>
  <Image source={require('@/assets/images/7.png')} style={styles.icon} />
</Pressable>

        <Pressable style={styles.redes} onPress={() => {Linking.openURL("mailto:liviafernanda03.lima@gmail.com")}}>
        <Image source={require('@/assets/images/8.png')} style={styles.icon} />
        </Pressable>

        <Pressable style={styles.redes} onPress={() => {Linking.openURL("https://github.com/livilima03")}}>
        <Image source={require('@/assets/images/2.png')} style={styles.icon} />
        </Pressable>

      <Pressable style={styles.redes} onPress={() => {Linking.openURL("https://br.pinterest.com/liviafernanda03lima/")}}>
        <Image source={require('@/assets/images/3.png')} style={styles.icon} />
        </Pressable>
          
        <Pressable style={styles.redes} onPress={() => {Linking.openURL("tel:5518996929701")}}>
        <Image source={require('@/assets/images/4.png')} style={styles.icon} />
        </Pressable>
        
        <Pressable style={styles.redes} onPress={() => {Linking.openURL("https://www.instagram.com/lfernanda__03/")}}>
        <Image source={require('@/assets/images/5.png')} style={styles.icon} />
        </Pressable>

        <Pressable style={styles.redes} onPress={() => {Linking.openURL("https://x.com/liviafer03_")}}>
        <Image source={require('@/assets/images/6.png')} style={styles.icon} />
        </Pressable>

        <Pressable style={styles.redes} onPress={() => {Linking.openURL("https://www.youtube.com/account")}}>
        <Image source={require('@/assets/images/yt.png')} style={styles.icon} />
        </Pressable>



      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    width: '100%',
    height: '100%',
  },
  titleContainer: {
    padding: 16,
  },
  contentContainer: {
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  redes: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign:'center',
    marginTop: 16,
    backgroundColor: 'white',
    borderRadius: 100,
    padding: 10,
    width: 300,
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 8,
  },
  text: {
    fontSize: 16,
    color:'black'
    
  },
});