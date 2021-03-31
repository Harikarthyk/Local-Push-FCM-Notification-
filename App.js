import {LocalNotification} from './pushNotification';
import React, {useEffect} from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import PushNotification from 'react-native-push-notification';

const App = () => {
  useEffect(() => {
    PushNotification.configure({
      onRegister: function (token) {
        console.log('TOKEN:', token);
      },
      onNotification: function (notification) {
        console.log('Push Notificaiton Configuration Invoked ...');
        console.log('LOCAL NOTIFICATION ==>', notification);
      },
      senderID: '686876508699',
      popInitialNotification: true,
      requestPermissions: true,
    });
    PushNotification.createChannel(
      {
        channelId: 'channel-id', // (required)
        channelName: 'My channel', // (required)
        channelDescription: 'A channel to categorise your notifications', // (optional) default: undefined.
        playSound: false, // (optional) default: true
        soundName: 'default', // (optional) See `soundName` parameter of `localNotification` function
        importance: 4, // (optional) default: 4. Int value of the Android notification importance
        vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
      },
      created => console.log(`createChannel returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
    );
  }, []);
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
