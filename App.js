import {LocalNotification} from './pushNotification';
import React, {useEffect} from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import PushNotification from 'react-native-push-notification';

const App = () => {
  useEffect(() => {

    //Configure PushNotification at the beginning of the Application 
    PushNotification.configure({
      onRegister: function (token) {
        console.log('TOKEN:', token);
      },

      //On Any Notification that pop us onNotification pop's out 
      onNotification: function (notification) {
        console.log('LOCAL NOTIFICATION ==>', notification);
      },

      //for FCM 
      senderID: '686876508699',
      popInitialNotification: true,
      requestPermissions: true,
    });

    //Crreate channel with id and name which are required parameters for creatign a push Notification  
    PushNotification.createChannel(
      {
        channelId: 'channel-id', // (required)
        channelName: 'channel-id', // (required)
      },
      created => console.log(`createChannel returned '${created}'`),
    );
  });

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 18, fontWeight: 'bold'}}>
        Press a button to trigger the notification
      </Text>
      <View style={{marginTop: 20}}>
        <Button
          title={'Local Push Notification'}
          onPress={() => LocalNotification()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default App;
