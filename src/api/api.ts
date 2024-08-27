class Api {
  async getShopItems({ limit }: { limit: number }) {
    const response = await fetch('/shopItems');
    const json = await response.json();

    return json;
  }

  async getShopItemById({ id }: { id: number }) {
    const response = await fetch(`/shopItems/${id}`);
    const json = await response.json();

    return json;
  }

  async getCategories() {
    const response = await fetch('/categories');
    const json = await response.json();

    return json;
  }

  async getBestSellCategories() {
    const response = await fetch('/bestSellCategories');
    const json = await response.json();

    return json;
  }

  async getTestimonials() {
    const response = await fetch('/testimonials');
    const json = await response.json();

    return json;
  }

  async getSaleItems() {
    const response = await fetch('/saleItems');
    const json = await response.json();

    return json;
  }
}

export const api = new Api();
