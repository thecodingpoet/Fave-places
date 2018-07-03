import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class App extends React.Component {
  state = {
    placeName: '',
    places: []
  }

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "") return;
    this.setState(prevState => ({
      placeName: '',
      places: prevState.places.concat(prevState.placeName)
    }));
  }

  placesListView = () => this.state.places.map((place, i) => <Text key={i}>{place}</Text>);

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput 
            style= {styles.placeInput}
            placeholder= 'An awesome place'
            value={this.state.placeName} 
            onChangeText={(text) => this.setState({placeName: text})}
          />
          <Button 
            title='Add' 
            style= {styles.placeButton}
            onPress={this.placeSubmitHandler}
          />
        </View>
        {this.placesListView()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  placeInput: {
    width: '80%'
  },
  placeButton: {
    width: '20%'
  }
});
