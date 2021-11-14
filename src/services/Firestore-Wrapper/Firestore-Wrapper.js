import { collection, getDocs, addDoc , doc, deleteDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from '@firebase/storage';

const FirestoreWrapper = {
  get: async (collectionName) => {
    const dataCollectionRef = collection(db, collectionName);
    return await getDocs(dataCollectionRef);
  },
  getById: async (collectionName, id) => {
    const fireDoc = doc(db, collectionName, id);
    return fireDoc;
  },
  save: async (collectionName, data) => {
    const dataCollectionRef = collection(db, collectionName);
    return await addDoc(dataCollectionRef, data);
  },
  saveWithImages: async (collectionName, data, images) => {
    const savedImages = await FirestoreWrapper.saveImages(images);
    data.pictures = savedImages;
    const dataCollectionRef = collection(db, collectionName);
    return await addDoc(dataCollectionRef, data);
  },
  saveImages: async (images) => {
    if (!images || images.length === 0) return [];

    return FirestoreWrapper.uploadAll(images);
  },

  uploadAll: (images) => {
    return Promise.all(images.map(function (file) {
      return FirestoreWrapper.uploadImage(file);
    }));
  },

  uploadImage: (file) => {
    const storage = getStorage();
    return new Promise((res, rej) => {
      try {
        const imageRef = ref(storage, 'images/' + file.name);
        uploadBytesResumable(imageRef, file).then((snapshot) => {
          getDownloadURL(snapshot.ref).then((url) => {
            res(url);
          });
        }).catch((error) => {
          rej(error);
        });
      } catch (error) {
        rej(error);
      }
    });
  },
  update: async (collectionName, id, data) => {
    const fireDoc = await FirestoreWrapper.getById(collectionName, id);
    return await updateDoc(fireDoc, data);
  },
  delete: async (collectionName, id) => {
    const doc = await FirestoreWrapper.getById(collectionName, id);
    return await deleteDoc(doc);
  }
}

export { FirestoreWrapper }