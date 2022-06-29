import { createAsyncThunk } from '@reduxjs/toolkit';
import { demoService } from '@/common';

export const getBoards = createAsyncThunk('demo-boards/getBoards', async () => {
  return await demoService.getBoards();
});

export const addBoard = createAsyncThunk('demo-boards/addBoard', async (label: string) => {
  return await demoService.addNewBoard(label);
});

export const deleteBoard = createAsyncThunk('demo-boards/deleteBoard', async (id: string) => {
  return await demoService.deleteBoard(id);
});
