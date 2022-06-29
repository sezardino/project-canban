import { Card, demoService, getErrorMessage } from '@/common';
import { AppThunk } from '@/store';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { demoBoardActions } from '.';

export const getBoard = createAsyncThunk('demo-board/getBoard', async (id: string) => {
  return await demoService.getBoard(id);
});

export const getColumns = createAsyncThunk('demo-board/getColumns', async (id: string) => {
  return await demoService.getColumns(id);
});

export const getCards = createAsyncThunk('demo-board/getCards', async (id: string) => {
  return await demoService.getCards(id);
});

export const addColumn = createAsyncThunk(
  'demo-board/addColumn',
  async (params: { label: string; boardId: string }) => {
    return await demoService.addNewColumn(params.label, params.boardId);
  },
);

export const addCard = createAsyncThunk(
  'demo-board/addCard',
  async (params: { title: string; columnId: string; boardId: string }) => {
    return await demoService.addNewCard(params.title, params.columnId, params.boardId);
  },
);

export const updateCard = createAsyncThunk('demo-board/updateCard', async (card: Card) => {
  return await demoService.updateCard(card);
});
