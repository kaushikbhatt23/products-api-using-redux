import {
  FETCH_CARDS_REQUEST,
  FETCH_CARDS_SUCCESS,
  FETCH_CARDS_FAILURE,
  DELETE_CARD,
  SET_CARD
} from '../actions/cardActionTypes';

import { ProductObjectType } from '../App';

interface CardsState {
  data: ProductObjectType[];
  loading: boolean;
  error: string | null;
  selectedCard:ProductObjectType | null;
}


export interface RootState {
  cards: CardsState;
}


const initialState: CardsState = {
  data: [],
  loading: true,
  error: null,
  selectedCard : null,
};



const cardsReducer = (state = initialState, action: any): CardsState => {
  switch (action.type) {
    case FETCH_CARDS_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_CARDS_SUCCESS:
      return { ...state, data: action.payload.cards, loading: false };
    case FETCH_CARDS_FAILURE:
      return { ...state, error: action.payload.error, loading: false };
    case DELETE_CARD:
      return {
        ...state,
        data: state.data.filter((card) => card.id !== action.payload.id),
        selectedCard : (state.selectedCard && state.selectedCard.id === action.payload.id)?null: state.selectedCard,
      };
    case SET_CARD:
      return { ...state,selectedCard: action.payload.card}
    default:
      return state;
  }
};

export default cardsReducer;
