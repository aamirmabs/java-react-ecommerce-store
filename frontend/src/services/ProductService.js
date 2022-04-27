import axios from "axios";

const PRODUCT_BASE_URL = "http://localhost:8080/api/products";
const PRODUCT_CATEGORY_BASE_URL = "localhost:8080/api/product-category";

const PRODUCT_SEARCH_BASE_URL = "http://localhost:8080/api/products/search";

const INDOOR_PLANTS_URL =
  "http://localhost:8080/api/product-category/1/products";
const OUTDOOR_PLANTS_URL =
  "http://localhost:8080/api/product-category/2/products";
const TOOLS_URL = "http://localhost:8080/api/product-category/3/products";
const ACCESSORIES_URL = "http://localhost:8080/api/product-category/4/products";

class ProductService {
  saveProduct(product) {
    return axios.post(PRODUCT_BASE_URL, product);
  }

  getProducts() {
    return axios.get(PRODUCT_BASE_URL);
  }

  getIndoorPlants() {
    return axios.get(INDOOR_PLANTS_URL);
  }
  getOutdoorPlants() {
    return axios.get(OUTDOOR_PLANTS_URL);
  }
  getTools() {
    return axios.get(TOOLS_URL);
  }
  getAccessories() {
    return axios.get(ACCESSORIES_URL);
  }

  findByNameContaining(query) {
    const queryString =
      PRODUCT_SEARCH_BASE_URL + "/findByNameContaining?name=" + query;
  }
}

export default new ProductService();
