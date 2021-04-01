import {LocalNotification} from './pushNotification';
import React, {useEffect} from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import PushNotification from 'react-native-push-notification';
// import messaging from '@react-native-firebase/messaging';

const App = () => {
  // messaging().setBackgroundMessageHandler(async remoteMessage => {
  //   console.log('Message handled in the background!', remoteMessage);
  // });
  useEffect(() => {
    PushNotification.configure({
      onRegister: function (token) {
        console.log('TOKEN:', token);
      },
      onNotification: function (notification) {
        console.log('LOCAL NOTIFICATION ==>', notification);
      },
      senderID: '686876508699',
      popInitialNotification: true,
      requestPermissions: true,
    });
    PushNotification.getDeliveredNotifications(res => console.log(res));
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
