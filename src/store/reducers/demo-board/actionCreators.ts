import { Card, demoService } from '@/common';
import { getErrorMessage } from '@/common/helpers';
import { AppThunk } from '@/store';
import { demoBoardActions } from '.';

export const getBoard =
  (boardId: string): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(demoBoardActions.setLoading(true));
      dispatch(demoBoardActions.setError(null));

      const neededBoard = await demoService.getBoard(boardId);

      dispatch(demoBoardActions.setCurrentBoard(neededBoard));
    } catch (error) {
      dispatch(demoBoardActions.setCurrentBoard(null));
    } finally {
      dispatch(demoBoardActions.setLoading(false));
    }
  };

export const getColumns =
  (boardId: string): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(demoBoardActions.setLoading(true));
      dispatch(demoBoardActions.setError(null));
      const columns = await demoService.getColumns(boardId);
      dispatch(demoBoardActions.setColumns(columns));
    } catch (error) {
      dispatch(demoBoardActions.setError(getErrorMessage(error)));
    } finally {
      dispatch(demoBoardActions.setLoading(false));
    }
  };

export const getCards =
  (boardId: string): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(demoBoardActions.setLoading(true));
      dispatch(demoBoardActions.setError(null));
      const cards = await demoService.getCards(boardId);
      dispatch(demoBoardActions.setCards(cards));
    } catch (error) {
      dispatch(demoBoardActions.setError(getErrorMessage(error)));
    } finally {
      dispatch(demoBoardActions.setLoading(false));
    }
  };

export const addColumn =
  (label: string, boardId: string): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(demoBoardActions.setLoading(true));
      dispatch(demoBoardActions.setError(null));
      const columns = await demoService.addNewColumn(label, boardId);
      dispatch(demoBoardActions.setColumns(columns));
    } catch (error) {
      dispatch(demoBoardActions.setError(getErrorMessage(error)));
    } finally {
      dispatch(demoBoardActions.setLoading(false));
    }
  };

export const addCard =
  (label: string, columnId: string, boardId: string): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(demoBoardActions.setLoading(true));
      dispatch(demoBoardActions.setError(null));
      const cards = await demoService.addNewCard(label, columnId, boardId);
      dispatch(demoBoardActions.setCards(cards));
    } catch (error) {
      dispatch(demoBoardActions.setError(getErrorMessage(error)));
    } finally {
      dispatch(demoBoardActions.setLoading(false));
    }
  };

export const updateCard =
  (card: Card): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(demoBoardActions.setLoading(true));
      dispatch(demoBoardActions.setError(null));
      const updatedCard = await demoService.updateCard(card);
      dispatch(demoBoardActions.updateCard(updatedCard));
    } catch (error) {
      dispatch(demoBoardActions.setError(getErrorMessage(error)));
    } finally {
      dispatch(demoBoardActions.setLoading(false));
    }
  };
