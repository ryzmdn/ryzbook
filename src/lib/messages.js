import {
  collection,
  addDoc,
  query,
  orderBy,
  limit,
  getDocs,
  deleteDoc,
  where,
} from "firebase/firestore";
import { database } from "@/lib/firebase";

export class MessageService {
  static MAX_MESSAGES = 100;
  static STORAGE_KEY = "lastMessageSent";
  static EXPIRED_MESSAGE = 365 * 24 * 60 * 60 * 1000;

  static async checkCanSendMessage(deviceId) {
    if (!this.checkCanSendMessageLocal()) return false;

    const oneHourAgo = Date.now() - 3600000;
    const q = query(
      collection(database, "messages"),
      where("deviceId", "==", deviceId),
      where("timestamp", ">", oneHourAgo),
      orderBy("timestamp", "desc"),
      limit(1)
    );

    const snapshot = await getDocs(q);
    return snapshot.empty;
  }

  static checkCanSendMessageLocal() {
    const lastSent = localStorage.getItem(this.STORAGE_KEY);
    if (!lastSent) return true;

    const lastSentTime = parseInt(lastSent, 10);
    return Date.now() - lastSentTime > 3600000;
  }

  static async addMessage(message) {
    await addDoc(collection(database, "messages"), message);
    localStorage.setItem(this.STORAGE_KEY, Date.now().toString());
    await this.deleteOldMessages();
    await this.deleteExpiredMessages();
  }

  static async deleteOldMessages() {
    const messagesQuery = query(
      collection(database, "messages"),
      orderBy("timestamp", "asc")
    );

    const snapshot = await getDocs(messagesQuery);
    if (snapshot.size > this.MAX_MESSAGES) {
      const oldestDoc = snapshot.docs[0];
      await deleteDoc(oldestDoc.ref);
    }
  }

  static async deleteExpiredMessages() {
    const oneYearAgo = Date.now() - this.EXPIRED_MESSAGE;
    
    const expiredMessagesQuery = query(
      collection(database, "messages"),
      where("timestamp", "<", oneYearAgo),
      orderBy("timestamp", "asc"),
      limit(100)
    );

    const deleteExpiredBatch = async (snapshot) => {
      const deletionPromises = snapshot.docs.map(doc => deleteDoc(doc.ref));
      await Promise.all(deletionPromises);

      if (snapshot.size === 100) {
        const nextSnapshot = await getDocs(expiredMessagesQuery);
        if (!nextSnapshot.empty) {
          await deleteExpiredBatch(nextSnapshot);
        }
      }
    };

    const initialSnapshot = await getDocs(expiredMessagesQuery);
    if (!initialSnapshot.empty) {
      await deleteExpiredBatch(initialSnapshot);
    }
  }

  static getMessagesQuery() {
    return query(
      collection(database, "messages"),
      orderBy("timestamp", "desc"),
      limit(this.MAX_MESSAGES)
    );
  }
}
