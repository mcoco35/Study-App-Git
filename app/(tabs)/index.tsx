import { StyleSheet, TouchableOpacity } from 'react-native';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Study App</Text>
      
      <TouchableOpacity style={styles.flashcard}>
        <Text style={styles.flashcardText}>Question</Text>
      </TouchableOpacity>
    </View>
  );
}


//API KEY
// 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



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7', 
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3C3C3C', 
    marginBottom: 20,
  },
  flashcard: {
    backgroundColor: '#fff', 
    borderRadius: 10,
    padding: 20,
    width: '100%',
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5, 
  },
  flashcardText: {
    fontSize: 18,
    color: '#3C3C3C',
    textAlign: 'center',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
