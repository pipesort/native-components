import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    justifyContent: 'center',
  },

  signinCard: {
    // width: 250,
    height: 400,
    flexDirection: 'column',
    backgroundColor: '#f2f2f2',
    margin: 10,
    // marginTop: -10,
    borderRadius: 20,
    // borderBottomLeftRadius: 40,
    // borderTopRightRadius: 40,
    padding: 16,
  },
  buttonCard: {
    backgroundColor: '#f2f2f2',
    borderTopLeftRadius: 50,
    height: 200,
  },
  button: {
    justifyContent: 'flex-end',
    backgroundColor: '#ff297f',
    alignItems: 'center',
    height: 50,
    width: '50%',
    borderRadius: 20,
    margin: 10,
    marginLeft: 30,
    marginRight: 30,
  },
});

ratingCompleted = rating => {
  console.log('Rating is: ' + rating);
};

function FormOne({navigation}) {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          flex: 3,
        }}>
        <View style={styles.signinCard}>
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              fontWeight: 'bold',
              width: 150,
              //   marginTop: 5,
            }}>
            enter your mobile number
          </Text>
          <Text style={{color: 'gray', fontSize: 18, width: 200}}>
            please enter registered mobile number
          </Text>
          <View>
            <TextInput
              placeholder="999999999"
              placeholderTextColor="#7d7d7d"
              style={{fontSize: 30, fontWeight: 'bold'}}
              autoFocus={true}
            />
          </View>
        </View>
      </View>
      <View style={styles.buttonCard}>
        <Text style={{color: 'gray', fontSize: 18, margin: 30}}>
          By clicking Sign in you are agree with our terms & conditions
        </Text>
        <TouchableOpacity>
          <View style={styles.button}>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Text
                style={{
                  color: 'white',
                  marginTop: 12,
                  marginLeft: 5,
                  fontSize: 18,
                }}>
                Sign in
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default FormOne;
