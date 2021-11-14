export const LocalStorage = {
  get(key) {
    if (!key) return;

    return localStorage.getItem(key);
  },
  set(key, value) {
    if (!key || value) return;

    localStorage.setItem(key, value);
  },
  remove(key) {
    localStorage.removeItem(key);
  },
  clear() {
    localStorage.clear();
  },
}