let initIDB = async () => {
  return new Promise<IDBDatabase>((res, ret) => {
    let request = window.indexedDB.open('Test1DB', 0);
    request.onerror = (event) => {
      console.error("Why didn't you allow my web app to use IndexedDB?!");
      ret('idb not ok');
    };
    request.onsuccess = (event) => {
      const db = (event.target as any).result as IDBDatabase;
      res(db);
    };
  });
};

export const useIDB = () => {
  return initIDB();
};
