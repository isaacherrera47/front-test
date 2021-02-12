import {v4 as uuidv4} from 'uuid';

class ImageStorage {
  getData() {
    const data = Object.keys(localStorage)
      .filter((v) => v !== 'loglevel:webpack-dev-server') //Avoid webpack debug server
      .map((v) => localStorage.getItem(v));

    return data.sort().reverse();
  }

  storeData(data) {
    data.map((v) => localStorage.setItem(uuidv4(), v));
  }
}

export default new ImageStorage();