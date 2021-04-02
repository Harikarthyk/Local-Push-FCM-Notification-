import PushNotification from 'react-native-push-notification';

//Local Push Notification is called on click of the button
export const LocalNotification = () => {
  PushNotification.localNotification({
    channelId: 'channel-id',
    title: 'Local Push Notification Title',
    message: 'This is message Area of the notification',
  });
};
