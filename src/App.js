import React, { useRef, useState } from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import "./App.css";

function App() {
  const [selectOpt, setselectOpt] = useState("Option 1");
  const scrollRef = useRef(null);
  const allCards = Array(50)
    .fill()
    .map((_, i) => `Card ${i + 1}`);
  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(allCards.length / itemsPerPage);

  // Logic to get the items for the current page
  const currentItems = allCards.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const scroll = (direction) => {
    if (scrollRef.current) {
      if (direction === "left") {
        scrollRef.current.scrollBy({ left: -100, behavior: "smooth" });
      } else {
        scrollRef.current.scrollBy({ left: 100, behavior: "smooth" });
      }
    }
  };
  const handleOption = (value) => {
    setselectOpt(value);
  };

  return (
    <div className="container">
      <div className="dd">
        <h1 className="zeromargin explore">Explore By Exams</h1>
        <h1 className="zeromargin popular">
          <span>Most Popular Exams</span>
        </h1>
      </div>
      <div className="header">
        <button className="scroll-btn" onClick={() => scroll("left")}>
          <MdArrowBackIos />
        </button>
        <div className="scroll-container" ref={scrollRef}>
          {Array(20)
            .fill()
            .map((_, i) => (
              <div
                key={i}
                className={`scroll-item ${
                  selectOpt === `Option ${i + 1}` ? "active" : ""
                }`}
                onClick={() => handleOption(`Option ${i + 1}`)}
              >
                Option {i + 1}
              </div>
            ))}
        </div>
        <button className="scroll-btn" onClick={() => scroll("right")}>
          <MdArrowForwardIos />
        </button>
      </div>
      <div className="main-content">
        <div className="sidebar">
          <div className="ibps-rrb">IBPS RRB</div>
          <div className="sub-heading">CBO</div>

          <div className="out-btn">
            <a>Out</a>
          </div>

          <div className="ibps-rrb">3330+</div>
        </div>
        <div className="content">
          <div className="cards">
            {currentItems.map((card, i) => (
              <div key={i} className="card">
                <img
                  style={{ width: "100%" }}
                  src="https://www.freepnglogos.com/uploads/sbi-logo-png/sbi-logo-sbi-symbol-meaning-history-and-evolution-11.png"
                  width="200"
                  alt="sbi logo sbi symbol meaning history and evolution"
                />
                <p>SBI Logo</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="pagination">
        {[...Array(totalPages).keys()].map((number) => (
          <button
            key={number}
            className={`page-button ${
              currentPage === number + 1 ? "active" : ""
            }`}
            onClick={() => setCurrentPage(number + 1)}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default App;
