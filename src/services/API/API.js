import { FirestoreWrapper } from '../Firestore-Wrapper/Firestore-Wrapper';


const functions = {
  get() {
    return FirestoreWrapper.get(this.db);
  },
  getById(id) {
    return FirestoreWrapper.getById(this.db, id);
  },
  save(data) {
    return FirestoreWrapper.save(this.db, data);
  },
  saveWithImages(data, images) {
    return FirestoreWrapper.saveWithImages(this.db, data, images);
  },
  saveImages(images) {
    return FirestoreWrapper.saveImages(images);
  },
  update(id, data) {
    return FirestoreWrapper.update(this.db, id, data);
  },
  delete(id) {
    return FirestoreWrapper.delete(this.db, id);
  }
}

const API = {
  PRODUCTS: {
    db: 'products',
    ...functions
  },
  YEARS: {
    db: 'years',
    ...functions
  },
  BRANDS: {
    db: 'brands',
    ...functions
  },
  CATEGORIES: {
    db: 'categories',
    ...functions
  }
}

export { API };