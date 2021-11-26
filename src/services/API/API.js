import { FirestoreWrapper } from '../Firestore-Wrapper/Firestore-Wrapper';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';

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
    ...functions,
    async getProductsBasedOnCriteria({ category, years, brands, models, motors }) {
      if (!category) return;

      const dataCollectionRef = collection(db, this.db);
      let criteria = query(dataCollectionRef, where("category", "==", category));
      
      if (Array.isArray(years)) {
        criteria = query(dataCollectionRef, where("filteringOptions.years", "array-contains-any", years));
      }

      if (Array.isArray(brands)) {
        criteria = query(dataCollectionRef, where("filteringOptions.brands", "array-contains-any", brands));
      }


      if (Array.isArray(models)) {
        criteria = query(dataCollectionRef, where("filteringOptions.models", "array-contains-any", models));
      }


      if (Array.isArray(motors)) {
        criteria = query(dataCollectionRef, where("filteringOptions.motors", "array-contains-any", motors));
      }

      return await getDocs(criteria);
    }
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