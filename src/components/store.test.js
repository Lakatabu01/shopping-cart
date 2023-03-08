import fetchProduct from "./api";
import "@testing-library/jest-dom";

describe("test API call", () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("Check if API call was successful", async () => {
    const fakeResponse = [
      {
        key: 1,
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
      },
    ];
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(fakeResponse),
    });

    const result = await fetchProduct();

    expect(global.fetch).toHaveBeenCalledWith(
      "https://fakestoreapi.com/products"
    );
    expect(result).toEqual(fakeResponse);
  });

  it("check for API call failure", async () => {
    global.fetch.mockRejectedValue(new Error("500 internal server error"));

    await expect(fetchProduct()).rejects.toThrow("500 internal server error");
  });
});
