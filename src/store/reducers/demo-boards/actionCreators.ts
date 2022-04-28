import { createAsyncThunk } from '@reduxjs/toolkit';

import { getErrorMessage, demoService } from '@/common';
import { AppThunk } from '@/store';

import { demoBoardsActions } from '.';

export const getBoards = createAsyncThunk('demo-boards/getBoards', async (_, thunkAPI) => {
  try {
    return await demoService.getBoards();
  } catch (error) {
    thunkAPI.rejectWithValue(getErrorMessage(error));
  }
});

export const addBoard =
  (label: string): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(demoBoardsActions.setInfo(null));
      dispatch(demoBoardsActions.setError(null));
      dispatch(demoBoardsActions.setLoading(true));
      const boards = await demoService.addNewBoard(label);
      dispatch(demoBoardsActions.setBoards(boards));
      dispatch(demoBoardsActions.setInfo(`Board ${label} added successfully`));
    } catch (error) {
      dispatch(demoBoardsActions.setError(getErrorMessage(error)));
    } finally {
      dispatch(demoBoardsActions.setLoading(false));
    }
  };

export const deleteBoard =
  (id: string): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(demoBoardsActions.setLoading(true));
      const deletedBoard = await demoService.deleteBoard(id);
      dispatch(demoBoardsActions.deleteBoard(deletedBoard));
      dispatch(demoBoardsActions.setInfo(`Board ${deletedBoard.label} was deleted`));
    } catch (error) {
      dispatch(demoBoardsActions.setError(getErrorMessage(error)));
    } finally {
      dispatch(demoBoardsActions.setLoading(false));
    }
  };
