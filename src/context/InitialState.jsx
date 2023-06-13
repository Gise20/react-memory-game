export const initialState = {
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
    cardkeyOpened: undefined,
    timeGameSec: 0,
  };
  
  export const reducer = (state, action) => {
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
      case "SET_CARD_CONFIRMED_RESET":
        return { ...state, cardsConfirmed: [] };
      case "SET_NUM_CARD_OPENED":
        return { ...state, numCardOpened: action.payload };
      case "SET_CARD_KEY_OPENED":
        return { ...state, cardkeyOpened: action.payload };
      case "SET_TIME_GAME_SEC":
        return { ...state, timeGameSec: action.payload };
      case "SET_CLEAN_NEW_GAME":
        return {
          ...state,
          cardPending: undefined,
          cardOpened: undefined,
          cardsConfirmed: [],
          numCardOpened: 0,
          cardkeyOpened: undefined,
          score: 0,
          timeGameSec: 0,
        };
      default:
        return state;
    }
  };
  