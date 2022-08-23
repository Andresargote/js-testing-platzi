const { generateManyBooks } = require("../fakes/book.fake");
const BooksService = require("./books.service");

const mockGetAll = jest.fn();

jest.mock("../lib/mongo.lib.js", () =>
  jest.fn().mockImplementation(() => {
    return {
      getAll: mockGetAll,
      create: () => {},
    };
  })
);

describe("Test for BooksService", () => {
  let service;

  beforeEach(() => {
    service = new BooksService();
    jest.clearAllMocks();
  });

  describe("test for getBooks", () => {
    test("should return a book list", async () => {
      const fakeBooks = generateManyBooks(20);
      mockGetAll.mockResolvedValue(fakeBooks);

      const books = await service.getBooks({});

      expect(books.length).toEqual(fakeBooks.length);
      expect(mockGetAll).toHaveBeenCalled();
      expect(mockGetAll).toHaveBeenCalledTimes(1);
      expect(mockGetAll).toHaveBeenCalledWith("books", {});
    });
  });
});
