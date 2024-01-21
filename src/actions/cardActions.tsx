import { ProductObjectType } from '../App';
import {
  FETCH_CARDS_REQUEST,
  FETCH_CARDS_SUCCESS,
  FETCH_CARDS_FAILURE,
  DELETE_CARD,
  SET_CARD
} from './cardActionTypes';

export const fetchCardsRequest = () => ({
  type: FETCH_CARDS_REQUEST,
});

export const fetchCardsSuccess = (cards: ProductObjectType[]) => ({
  type: FETCH_CARDS_SUCCESS,
  payload: { cards },
});

export const fetchCardsFailure = (error: string) => ({
  type: FETCH_CARDS_FAILURE,
  payload: { error },
});

export const deleteCard = (id: number) => ({
  type: DELETE_CARD,
  payload: { id },
});

export const setCard = (card: ProductObjectType) => ({
  type: SET_CARD,
  payload: { card },
});
