import PushNotification from 'react-native-push-notification';

// PushNotification.configure({
//   onNotification: function (notification) {
//     console.log('LOCAL NOTIFICATION ==>', notification);
//   },
//   popInitialNotification: true,
//   requestPermissions: true,
// });

export const LocalNotification = () => {
  console.log('Invoked Local Push Notification ... ');
  PushNotification.localNotification({
    autoCancel: true,
    bigText:
      'This is local notification demo in React Native app. Only shown, when expanded.',
    subText: 'Local Notification Demo',
    title: 'Local Notification Title',
    message: 'Expand me to see more',
    vibrate: true,
    vibration: 300,
    playSound: true,
    soundName: 'default',
    actions: '["Yes", "No"]',
  });
};
