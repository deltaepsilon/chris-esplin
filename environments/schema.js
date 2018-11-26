export default {
  activationCode: (db, activationCodeId) => {
    return db
      .collection('admin')
      .doc('content')
      .collection('activation-codes')
      .doc(activationCodeId);
  },

  activationCodes: db => {
    return db
      .collection('admin')
      .doc('content')
      .collection('activation-codes');
  },

  contentBySku: (db, sku) => {
    return db.collection('content').where(`skus.${sku}`, '==', true);
  },

  userActivationCode: (rtdb, uid) => {
    return rtdb.ref('activation-code').child(uid);
  },

  messageLogs: db => {
    return db
      .collection('admin')
      .doc('logs')
      .collection('messages');
  },

  messageStats: (db, uid) => {
    const collection = db
      .collection('admin')
      .doc('stats')
      .collection('messages');

    return uid ? collection.doc(uid) : collection;
  },

  notifications: (rtdb, uid) => {
    return rtdb.ref('notifications').child(uid);
  },

  presence: (rtdb, uid) => {
    return rtdb.ref('presence').child(uid);
  },

  pushNotifications: (rtdb, uid) => {
    return rtdb.ref('push-notifications').child(uid);
  },

  settings: (db, uid) => {
    return db
      .collection('permission-based')
      .doc('user-owned')
      .collection('settings')
      .doc(uid);
  },

  subscriptions: db => {
    return db
      .collection('permission-based')
      .doc('user-readable')
      .collection('subscriptions');
  },

  userSubscriptions: (db, uid) => {
    return db
      .collection('permission-based')
      .doc('user-readable')
      .collection('subscriptions')
      .doc(uid);
  },

  user: (db, uid) => {
    return db.collection('users').doc(uid);
  },

  users: db => {
    return db.collection('users');
  },

  userMessages: (db, uid) => {
    return db
      .collection('permission-based')
      .doc('user-owned')
      .collection('messages')
      .doc(uid)
      .collection('messages');
  },

  userUploads: (storage, uid, hash) => {
    return storage
      .ref('user-uploads')
      .child(uid)
      .child(hash);
  },
};
