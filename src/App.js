import React, { useRef, useState } from "react";
import {
  ArrowBackIos as MdArrowBackIos,
  ArrowForwardIos as MdArrowForwardIos,
} from "@material-ui/icons";
import {
  Button,
  Typography,
  IconButton,
  Paper,
  Divider,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    margin: "50px 40px 10px 40px",
  },
  header: {
    backgroundColor: "#333",
    padding: "10px 15px",
    display: "flex",
    alignItems: "center",
    overflow: "Hidden",
  },

  active: {
    backgroundColor: "#ff9d1a",
    color: "#fff",
  },

  content: {
    flex: "1 1",
    display: "flex",
    flexDirection: "column",
  },
  pagination: {
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(2),
  },
  pageButton: {
    backgroundColor: "#ffdcb5",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.2s",
    borderRadius: "10px",
    padding: "10px",
  },
  dd: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "30px",
    "& h6": {
      fontSize: "16px",
      fontWeight: "bold",
    },
    "& h5": {
      fontSize: "2em",
      position: "relative",
      marginBottom: "20px",
      fontWeight: "bold",
      textAlign: "center",
      "& span": {
        content: "",
        position: "absolute",
        margin: "0 auto",
        left: "0",
        right: "0",
        backgroundColor: "orange",
        width: "140px",
        height: "1px",
        bottom: "-12px",
      },
    },
  },
  mainContainer: {
    display: "flex",
    flex: "1",
    "@media (max-width: 767px)": {
      flexDirection: "column",
    },
  },
  ibps: {
    textShadow: "2px 2px 2px #ff9415",
    color: "#333333",
    fontSize: "34px",
    textAlign: "center",
    marginBottom: "10px",
  },
  outbtn: {
    width: "100%",
    textAlign: "center",
    marginBottom: "20px",
    marginTop: "35px",
    color: "white",
    padding: "10px 15px",
    fontSize: "16px",
    margin: "0px 5px 0px 5px",
    backgroundColor: "#ff9415",
    borderRadius: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  outbtnP: {
    color: "white",
    padding: "10px 15px",
    fontSize: "16px",
    margin: "0px 5px 0px 5px",
    backgroundColor: "#ff9415",
    borderRadius: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  sidebar: {
    width: "200px",
    backgroundColor: "#20324b",
    color: "#fff",
    padding: "20px 18px",
    boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
    boxSizing: "border-box",
    "@media (max-width: 767px)": {
      width: "100%",
      marginBottom: "20px",
    },
  },
  subheading: {
    color: "#fff",
    fontSize: "16px",
    textAlign: "center",
    marginBottom: "10px",
  },
  cards: {
    padding: "0px 20px",
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    "@media (max-width: 767px)": {
      padding: "0px",
    },
  },
  card: {
    backgroundColor: "#fff",
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "5px",
    textAlign: "center",
    width: "calc(25% - 55px)",
    "@media (max-width: 992px)": {
      width: "calc(33.33% - 55px)",
    },
    "@media (max-width: 767px)": {
      width: "calc(50% - 50px)",
    },
  },
  scrollContainer: {
    margin: "10px 0 0",
    flexGrow: "1",
    overflowX: "auto",
    whiteSpace: "nowrap",
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": {
      width: 0,
    },
  },
  scrollItem: {
    display: "inline-block",
    color: "white",
    padding: "10px 15px",
    fontSize: "16px",
    margin: "0px 5px 0px 5px",
    backgroundColor: "#243a52",
    borderRadius: "20px",
    "&:last-child": {
      borderRight: "none",
    },
  },
  scrollBtn: {
    backgroundColor: "#fff",
    color: "gray",
    border: "none",
    padding: "9px 9px",
    cursor: "pointer",
    borderRadius: "50%",
    transition: "background-color 0.2s",
    display: "flex",
    justifyContent: "center",
    "&:hover": {
      backgroundColor: "#777",
    },
    "@media (max-width: 767px)": {
      display: "none",
    },
  },
  pageButton: {
    backgroundColor: "#ffdcb5",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.2s",
    borderRadius: "10px",
    padding: "10px",
  },
}));

function App() {
  const [selectOpt, setselectOpt] = useState("Option 1");
  const scrollRef = useRef(null);
  const allCards = Array(50)
    .fill()
    .map((_, i) => `Card ${i + 1}`);
  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(allCards.length / itemsPerPage);
  const classes = useStyles();

  // Logic to get the items for the current page
  const currentItems = allCards.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleOption = (value) => {
    setselectOpt(value);
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      if (direction === "left") {
        scrollRef.current.scrollBy({ left: -100, behavior: "smooth" });
      } else {
        scrollRef.current.scrollBy({ left: 100, behavior: "smooth" });
      }
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.dd}>
        <Typography variant="h6">Explore By Exams</Typography>
        <Typography variant="h5">
          Most Popular Exams<span></span>
        </Typography>
      </div>
      <div className={classes.header}>
        <IconButton
          className={classes.scrollBtn}
          onClick={() => scroll("left")}
        >
          <MdArrowBackIos />
        </IconButton>
        <div className={classes.scrollContainer} ref={scrollRef}>
          {Array(20)
            .fill()
            .map((_, i) => (
              <div
                elevation={2}
                key={i}
                className={`${classes.scrollItem} ${
                  selectOpt === `Option ${i + 1}` ? classes.active : ""
                }`}
                onClick={() => handleOption(`Option ${i + 1}`)}
              >
                Option {i + 1}
              </div>
            ))}
        </div>
        <IconButton
          className={classes.scrollBtn}
          onClick={() => scroll("right")}
        >
          <MdArrowForwardIos />
        </IconButton>
      </div>
      <Divider style={{ margin: "20px 0" }} />
      <div className={classes.mainContainer}>
        <div className={classes.sidebar}>
          <Typography className={classes.ibps}>IBPS RRB</Typography>
          <Typography className={classes.subheading}>CBO</Typography>
          <Button variant="outlined" className={classes.outbtn}>
            Out
          </Button>
          <Typography className={classes.ibps}>3330+</Typography>
        </div>
        <div className={classes.content}>
          <div className={classes.cards}>
            {currentItems.map((card, i) => (
              <Paper className={classes.card} key={i}>
                <img
                  src="https://www.freepnglogos.com/uploads/sbi-logo-png/sbi-logo-sbi-symbol-meaning-history-and-evolution-11.png"
                  width="100%"
                  alt="sbi logo sbi symbol meaning history and evolution"
                />
                <Typography align="center">SBI Logo</Typography>
              </Paper>
            ))}
          </div>
        </div>
      </div>
      <div className={classes.pagination}>
        {[...Array(totalPages).keys()].map((number) => (
          <Button
            key={number}
            variant="contained"
            className={`${currentPage == number + 1 ? classes.active : ""}${
              classes.pageButton
            } `}
            onClick={() => setCurrentPage(number + 1)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
