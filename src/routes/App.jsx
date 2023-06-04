import React, { useReducer } from "react";
import { Routes, Route } from "react-router-dom";
import Context from "@context/Context";
import Home from "@pages/Home";
import About from "@pages/About";
import Play from "@pages/Play";

// Import CSS stylesheets
import "@styles/App.css";
import "@styles/extras.css";
import "@styles/generals.css";

const initialState = {
  playerName: undefined,
  difficulty: "MEDIUM",
  regions: ["Kanto"],
  score: 0,
  numCards: 0,
  timeBonus: 0,
  cardPending: undefined,
  cardOpened: undefined,
  cardsConfirmed: [],
  numCardOpened: 0,
  cardkeyOpened: undefined
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_PLAYER_NAME":
      return { ...state, playerName: action.payload };
    case "SET_DIFFICULTY":
      return { ...state, difficulty: action.payload };
    case "SET_REGIONS":
      return { ...state, regions: action.payload };
    case "SET_SCORE":
      return { ...state, score: action.payload };
    case "SET_NUM_CARDS":
      return { ...state, numCards: action.payload };
    case "SET_TIME_BONUS":
      return { ...state, timeBonus: action.payload };
    case "SET_CARD_PENDING":
      return { ...state, cardPending: action.payload };
    case "SET_CARD_OPENED":
      return { ...state, cardOpened: action.payload };
    case "ADD_CARD_CONFIRMED":
      return {
        ...state,
        cardsConfirmed: [...state.cardsConfirmed, action.payload],
      };
    case "SET_NUM_CARD_OPENED":
      return { ...state, numCardOpened: action.payload };
    case "SET_CARD_KEY_OPENED":
      return { ...state, cardkeyOpened: action.payload };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <Context.Provider value={{ ...state, dispatch }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/play" element={<Play />} />
        </Routes>
      </Context.Provider>
    </div>
  );
}

export default App;
