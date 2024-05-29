import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  InfoRounded,
  EditOutlined,
  DeleteOutline,
  AutoStories,
  People,
} from "@mui/icons-material";
import BookModal from "./BookModal";

const BookSingleCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="border-2 border-gray-500 rounded-lg px-4 py-2 relative hover:shadow-xl m-3">
        <h2 className="absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg">
          {book.publishYear}
        </h2>

        <h4 className="my-2 text-gray-500">{book._id}</h4>

        <div className="flex justify-start items-center gap-x-2">
          <AutoStories className="text-red-300 text-2xl" />
          <h2 className="my-1">{book.title}</h2>
        </div>

        <div className="flex justify-start items-center gap-x-2">
          <People className="text-red-300 text-2xl" />
          <h2 className="my-1">{book.author}</h2>
        </div>

        <div className="flex justify-start items-center gap-x-2 mt-4 p-4">
          <Link to={`/books/details/${book._id}`}>
            <InfoRounded className="text-2xl text-green-800 hover:text-black" />
          </Link>
          <Link to={`/books/edit/${book._id}`}>
            <EditOutlined className="text-2xl text-yellow-600 hover:text-black" />
          </Link>
          <Link to={`/books/delete/${book._id}`}>
            <DeleteOutline className="text-2xl text-red-600 hover:text-black" />
          </Link>
        </div>

        {showModal && (
          <BookModal book={book} onClose={() => setShowModal(false)} />
        )}
      </div>
    </>
  );
};

export default BookSingleCard;
