import GetCategoryDropdown from "components/Dropdowns/GetCategoryDropdown";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

// components

const CATEGORIES = [
  {
    name: "Cat 1",
    id: "1",
  },
  {
    name: "Cat 2",
    id: "2",
  },
  {
    name: "Cat 3",
    id: "3",
  },
  {
    name: "Cat 4",
    id: "4",
  },
];

export default function InformationBookCard({ title, id, bookInfo }) {
  const [bookTitle, setBookTitle] = useState(bookInfo?.title ?? "");
  const [bookAuthor, setBookAuthor] = useState(bookInfo?.author ?? "");
  const [bookCategory, setBookCategory] = useState(bookInfo?.category ?? "");
  const [bookPrice, setBookPrice] = useState(bookInfo?.price ?? 0);
  const [bookDescription, setBookDescription] = useState(
    bookInfo?.description ?? ""
  );
  const [bookImage, setBookImage] = useState(
    bookInfo?.image ?? "/img/placeholder.png"
  );

  useEffect(() => {
    if (id) {
      fetchBookDetail(id);
    }
  }, [id]);

  const fetchBookDetail = (id) => {
    //Call api get book detail
  };

  const onSubmit = () => {
    const bookInfo = {
      title: bookTitle,
      description: bookDescription,
      image: bookImage,
      author: bookAuthor,
      category: bookCategory,
      price: bookPrice,
    };

    console.log("book info: ", bookInfo);

    if (id) {
      //Call api update book
      toast.success("Update book success!");
    } else {
      toast.success("Add book success!");
      //Call api add new book
    }
  };

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">
              {title ?? "My account"}
            </h6>
            <button
              className="bg-blueGray-700 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="button"
              onClick={onSubmit}
            >
              {id ? "Update" : "Add"}
            </button>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form>
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Book Information
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4">
                <div className="lg:w-4/12 relative w-full mb-3 book-image">
                  <label
                    htmlFor="book-image"
                    className="form-label inline-block mb-2 text-gray-700 cursor-pointer"
                  >
                    <span className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                      Image
                    </span>
                    <img src={bookImage} alt="Image" />
                  </label>
                  <input
                    className="hidden form-control w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    type="file"
                    id="book-image"
                    onChange={(e) => {
                      if (e.target.files[0]) {
                        setBookImage(URL.createObjectURL(e.target.files[0]));
                      }
                    }}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="book-title"
                  >
                    Title
                  </label>
                  <input
                    id="book-title"
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value={bookTitle}
                    placeholder="Enter title"
                    onChange={(e) => setBookTitle(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="book-author"
                  >
                    Author
                  </label>
                  <input
                    id="book-author"
                    type="email"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Enter author"
                    value={bookAuthor}
                    onChange={(e) => setBookAuthor(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="book-price"
                  >
                    Price
                  </label>
                  <input
                    id="book-price"
                    type="number"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value={bookPrice}
                    min={0}
                    onChange={(e) => setBookPrice(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="book-duration"
                  >
                    Category
                  </label>
                  <GetCategoryDropdown
                    label="Category"
                    dropdownList={CATEGORIES}
                    action={setBookCategory}
                  />
                </div>
              </div>
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="book-description"
                  >
                    Description
                  </label>
                  <textarea
                    id="book-description"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    rows="4"
                    placeholder="Enter description"
                    value={bookDescription}
                    onChange={(e) => setBookDescription(e.target.value)}
                  ></textarea>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}