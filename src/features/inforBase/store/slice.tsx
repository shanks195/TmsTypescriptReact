import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IError, RootState } from "types";
import { 
        IFolder,
        IInforBasicState,
        IStatus,
        IBlock,
        IRoom,
        IVersion,
        IDeclarationForm,
        IIdentifier,
        ISampleType,
        ITextNumber
      } from "types/models/InforBasic";
      
const initialState: IInforBasicState = {
  folders: [],
  loadedFolder: false,
  loadingFolder: false,
  statuses:[],
  loadingStatus:false,
  loadedStatus:false,
  versions:[],
  loadingVersion:false,
  loadedVersion:false,
   textNumbers:[],
   loadingTextNumber:false,
  loadedTextNumber:false,
  declarationForms:[],
  loadingDeclarationForm:false,
  loadedDeclarationForm:false,
  identifiers:[],
  loadedIdentifier:false,
  loadingIdentifier:false,
  blocks: [],
  loadedBlock:false,
  loadingBlock:false,
  rooms:[],
  loadedRoom:false,
  loadingRoom:false,
  sampleTypes:[],
  loadedSampleType:false,
  loadingSampleType:false,
  errors: [],
}

const InforBasicSlice = createSlice({
  name: 'InforBasic',
  initialState,
  reducers: {
    fetchFolders(state){
      state.folders = [];
      state.loadedFolder = false;
      state.loadingFolder = true;
      state.errors = [];
    },
    fetchFoldersSuccess(state, action: PayloadAction<IFolder[]>){
      state.folders = action.payload;
      state.errors = [];
      state.loadingFolder = false;
      state.loadedFolder = true;
    },
    fetchFoldersFailure(state, action: PayloadAction<IError[]>){
      state.loadingFolder = false;
      state.loadedFolder = true;
      state.errors = action.payload;
    },
    fetchStatuses(state){
      state.statuses = [];
      state.loadedStatus = false;
      state.loadingStatus = true;
      state.errors = [];
    },
    fetchStatusesSuccess(state, action: PayloadAction<IStatus[]>){
      state.statuses = action.payload;
      state.errors = [];
      state.loadingStatus = false;
      state.loadedStatus = true;
    },
    fetchStatusesFailure(state, action: PayloadAction<IError[]>){
      state.loadingStatus = false;
      state.loadedStatus = true;
      state.errors = action.payload;
    },
    fetchVersions(state){
      state.versions = [];
      state.loadedVersion = false;
      state.loadingVersion = true;
      state.errors = [];
    },
    fetchVersionsSuccess(state, action: PayloadAction<IVersion[]>){
      state.versions = action.payload;
      state.errors = [];
      state.loadingVersion = false;
      state.loadedVersion = true;
    },
    fetchVersionsFailure(state, action: PayloadAction<IError[]>){
      state.loadingVersion = false;
      state.loadedVersion = true;
      state.errors = action.payload;
    },
    fetchTextNumbers(state){
      state.versions = [];
      state.loadedVersion = false;
      state.loadingVersion = true;
      state.errors = [];
    },
    fetchTextNumbersSuccess(state, action: PayloadAction<ITextNumber[]>){
      state.textNumbers= action.payload;
      state.errors = [];
      state.loadingTextNumber = false;
      state.loadedTextNumber = true;
    },
    fetchTextNumbersFailure(state, action: PayloadAction<IError[]>){
      state.loadingTextNumber = false;
      state.loadedTextNumber = true;
      state.errors = action.payload;
    },
    fetchDeclarationForms(state){
      state.declarationForms = [];
      state.loadedDeclarationForm = false;
      state.loadingDeclarationForm = true;
      state.errors = [];
    },
    fetchDeclarationFormsSuccess(state, action: PayloadAction<IDeclarationForm[]>){
      state.declarationForms= action.payload;
      state.errors = [];
      state.loadingDeclarationForm= false;
      state.loadedDeclarationForm = true;
    },
    fetchDeclarationFormsFailure(state, action: PayloadAction<IError[]>){
      state.loadingDeclarationForm = false;
      state.loadedDeclarationForm = true;
      state.errors = action.payload;
    },
    fetchIdentifiers(state){
      state.identifiers = [];
      state.loadedIdentifier = false;
      state.loadingIdentifier = true;
      state.errors = [];
    },
    fetchIdentifiersSuccess(state, action: PayloadAction<IIdentifier[]>){
      state.identifiers= action.payload;
      state.errors = [];
      state.loadingIdentifier= false;
      state.loadedIdentifier = true;
    },
    fetchIdentifiersFailure(state, action: PayloadAction<IError[]>){
      state.loadingIdentifier= false;
      state.loadedIdentifier = true;
      state.errors = action.payload;
    },
    fetchBlocks(state){
      state.identifiers = [];
      state.loadedIdentifier = false;
      state.loadingIdentifier = true;
      state.errors = [];
    },
    fetchBlocksSuccess(state, action: PayloadAction<IBlock[]>){
      state.blocks= action.payload;
      state.errors = [];
      state.loadingBlock= false;
      state.loadedBlock = true;
    },
    fetchBlocksFailure(state, action: PayloadAction<IError[]>){
      state.loadingBlock= false;
      state.loadedBlock = true;
      state.errors = action.payload;
    },
    fetchRooms(state){
      state.rooms = [];
      state.loadedRoom = false;
      state.loadingRoom = true;
      state.errors = [];
    },
    fetchRoomsSuccess(state, action: PayloadAction<IRoom[]>){
      state.rooms= action.payload;
      state.errors = [];
      state.loadingRoom= false;
      state.loadedRoom = true;
    },
    fetchRoomsFailure(state, action: PayloadAction<IError[]>){
      state.loadingRoom= false;
      state.loadedRoom = true;
      state.errors = action.payload;
    },
    fetchSampleType(state){
      state.rooms = [];
      state.loadedRoom = false;
      state.loadingRoom = true;
      state.errors = [];
    },
    fetchSampleTypesSuccess(state, action: PayloadAction<ISampleType[]>){
      state.sampleTypes= action.payload;
      state.errors = [];
      state.loadingSampleType= false;
      state.loadedSampleType = true;
    },
    fetchSampleTypesFailure(state, action: PayloadAction<IError[]>){
      state.loadingSampleType= false;
      state.loadedSampleType = true;
      state.errors = action.payload;
    },

  }
});



// Actions

export const fetchFolders = InforBasicSlice.actions.fetchFolders;
export const fetchFoldersSuccess = InforBasicSlice.actions.fetchFoldersSuccess;
export const fetchFoldersFailure = InforBasicSlice.actions.fetchFoldersFailure;

export const fetchBlocks = InforBasicSlice.actions.fetchBlocks;
export const fetchBlocksFailure= InforBasicSlice.actions.fetchBlocksFailure;
export const fetchBlocksSuccess=InforBasicSlice.actions.fetchBlocksSuccess;

export const fetchDeclarationForms= InforBasicSlice.actions.fetchDeclarationForms;
export const fetchDeclarationFormsFailure= InforBasicSlice.actions.fetchDeclarationFormsFailure;
export const fetchDeclarationFormsSuccess= InforBasicSlice.actions.fetchDeclarationFormsSuccess;

export const fetchIdentifiers = InforBasicSlice.actions.fetchIdentifiers;
export const fetchIdentifiersFailure = InforBasicSlice.actions.fetchIdentifiersFailure;
export const fetchIdentifiersSuccess = InforBasicSlice.actions.fetchIdentifiersSuccess;

export const fetchVersions= InforBasicSlice.actions.fetchVersions;
export const fetchVersionsFailure= InforBasicSlice.actions.fetchVersionsFailure;
export const fetchVersionsSuccess =InforBasicSlice.actions.fetchVersionsSuccess;

export const fetchTextNumbers = InforBasicSlice.actions.fetchTextNumbers;
export const fetchTextNumbersFailure = InforBasicSlice.actions.fetchTextNumbersFailure;
export const fetchTextNumbersSuccess = InforBasicSlice.actions.fetchTextNumbersSuccess;

export const fetchStatuses = InforBasicSlice.actions.fetchStatuses;
export const fetchStatusesFailure= InforBasicSlice.actions.fetchStatusesFailure;
export const fetchStatusesSuccess=InforBasicSlice.actions.fetchStatusesSuccess;

export const fetchRooms = InforBasicSlice.actions.fetchRooms;
export const fetchRoomsFailure = InforBasicSlice.actions.fetchRoomsFailure;
export const fetchRoomsSuccess = InforBasicSlice.actions.fetchRoomsSuccess;

export const fetchSampleType= InforBasicSlice.actions.fetchSampleType;
export const fetchSampleTypesFailure = InforBasicSlice.actions.fetchSampleTypesFailure;
export const fetchSampleTypesSuccess= InforBasicSlice.actions.fetchSampleTypesSuccess;


// Selectors
export const getFolders = (state: RootState) => state.inforBasic.folders;
export const isLoadingFolders = (state: RootState) => state.inforBasic.loadingFolder;
export const isLoadedFolders = (state: RootState) => state.inforBasic.loadedFolder;

export const getStatuses = (state: RootState) => state.inforBasic.statuses;
export const isLoadingStatuses = (state: RootState) => state.inforBasic.loadingStatus;
export const isLoadedStatuses = (state: RootState) => state.inforBasic.loadedStatus;

export const getVersions = (state: RootState) => state.inforBasic.versions;
export const isLoadingVersions = (state: RootState) => state.inforBasic.loadingVersion;
export const isLoadedVersions = (state: RootState) => state.inforBasic.loadedVersion;


export const getIdentifiers = (state: RootState) => state.inforBasic.identifiers;
export const isLoadingIdentifiers = (state: RootState) => state.inforBasic.loadingIdentifier;
export const isLoadedIdentifiers = (state: RootState) => state.inforBasic.loadedIdentifier;

export const getTextNumbers = (state: RootState) => state.inforBasic.textNumbers;
export const isLoadingTextNumbers = (state: RootState) => state.inforBasic.loadingTextNumber;
export const isLoadedTextNumbers = (state: RootState) => state.inforBasic.loadedTextNumber;

export const getDeclarationForms = (state: RootState) => state.inforBasic.declarationForms;
export const isLoadingDeclarationForms = (state: RootState) => state.inforBasic.loadingDeclarationForm;
export const isLoadedDeclarationForms = (state: RootState) => state.inforBasic.loadedDeclarationForm;

export const getBlocks = (state: RootState) => state.inforBasic.blocks;
export const isLoadingBlocks = (state: RootState) => state.inforBasic.loadingBlock;
export const isLoadedBlocks = (state: RootState) => state.inforBasic.loadedBlock;

export const getRooms = (state: RootState) => state.inforBasic.rooms;
export const isLoadingRooms = (state: RootState) => state.inforBasic.loadingRoom;
export const isLoadedRooms = (state: RootState) => state.inforBasic.loadedRoom;

export const getSampleTypes = (state: RootState) => state.inforBasic.sampleTypes;
export const isLoadingSampleTypes = (state: RootState) => state.inforBasic.loadingSampleType;
export const isLoadedSampleTypes = (state: RootState) => state.inforBasic.loadedSampleType;
// Reducer
const InforBasicReducer = InforBasicSlice.reducer;
export default InforBasicReducer;