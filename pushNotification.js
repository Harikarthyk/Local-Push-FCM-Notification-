import PushNotification from 'react-native-push-notification';

// PushNotification.configure({
//   onNotification: function (notification) {
//     console.log('LOCAL NOTIFICATION ==>', notification);
//   },
//   popInitialNotification: true,
//   requestPermissions: true,
// });

export const LocalNotification = () => {
  // console.log('Invoked Local Push Notification ... ');
  // PushNotification.localNotificationSchedule({
  //   message: 'My Notification Message', // (required)
  //   date: new Date(Date.now() + 60 * 1000), // in 60 secs
  //   actions: ['ReplyInput'],
  //   reply_placeholder_text: 'Write your response...', // (required)
  //   reply_button_text: 'Reply', // (required)
  // });
  PushNotification.localNotification({
    channelId: 'channel-id',
    title: 'Local Notification Title',
    message: 'Expand me to see more',
  });
};
