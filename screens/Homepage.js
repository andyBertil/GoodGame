import { StyleSheet, SafeAreaView, Text, View, Image, Dimensions} from "react-native";
import react from "react";
import { ScrollView } from "react-native-gesture-handler";



export default function TopStories(){
    const screenHeight = Dimensions.get('window').height;

    return (
        <ScrollView style = {styles.container}>
            <Text style = {styles.GreetingText}>Good Evening, Stash</Text>

            <Text style={styles.headingText}>Top Stories</Text>

{/* Horizontal ScrollView */}
<View style={{ height: screenHeight * 0.3 }}>
  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
    <View style={[styles.card, styles.cardHighProperties]} />
    <View style={[styles.card, styles.cardHighProperties]} />
    <View style={[styles.card, styles.cardHighProperties]} />
    <View style={[styles.card, styles.cardHighProperties]} />
  </ScrollView>
</View>

{/* Explore Further Section */}
<Text style={styles.ExplorefurtherText}>Explore Further</Text>

{/* Vertical Content Section */}
<View>
    <ScrollView vertical >
    <View style ={[styles.cardArticles, styles.cardLowProperties]} />
    <View style ={[styles.cardArticles, styles.cardLowProperties]} />
    <View style ={[styles.cardArticles, styles.cardLowProperties]} />
    </ScrollView>

    </View>
    
 

</ScrollView>
);
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 20,
        fontWeight: '450',
        paddingHorizontal: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 130,
        marginTop: 60,
    },
    ExplorefurtherText: {
        fontSize: 20,
        marginBottom: 45,
        paddingHorizontal: 25,
        fontWeight: '500',
        letterSpacing: 1,
        marginTop: 20

    },
    GreetingText: {
        marginTop: 40,
        fontSize: 25,
        fontWeight: '500',
        marginLeft: 10,
        letterSpacing: .5,
    },
    container: {
        padding: 8
    },
    ScrollView: {
        flexDirection: 'row'
    },
    card: {
        alignItems: 'center',
        flex: 1,
        width: 145,
        height: 185,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 20,
        borderRadius: 13,
    },
    cardArticles: {
        alignItems: 'center',
        width: 'fit',
        height: 145,
        marginLeft: 5,
        marginRight: 5,
        borderRadius: 25,
        marginTop: 7.5
    },

    cardHighProperties: {
        backgroundColor: '#e6e6e6'
    },
    cardLowProperties: {
        backgroundColor: '#e6e6e6'
    }
});
