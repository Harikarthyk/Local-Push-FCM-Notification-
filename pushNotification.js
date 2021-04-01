import PushNotification from 'react-native-push-notification';

// PushNotification.configure({
//   onNotification: function (notification) {
//     console.log('LOCAL NOTIFICATION ==>', notification);
//   },
//   popInitialNotification: true,
//   requestPermissions: true,
// });

//Local Push Notification is called on click of the button
export const LocalNotification = () => {
  PushNotification.localNotification({
    channelId: 'channel-id',
    title: 'Local Push Notification Title',
    message: 'This is message Area of the notification',
  });
};
