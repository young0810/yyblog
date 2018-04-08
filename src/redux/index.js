import { combineReducers } from "redux";

import { basicReducer } from "./basicReducer";

import { writeReducer } from "./writeReducer";

import { articleReducer } from "./articleReducer";

export default combineReducers({ basicReducer, writeReducer, articleReducer });
