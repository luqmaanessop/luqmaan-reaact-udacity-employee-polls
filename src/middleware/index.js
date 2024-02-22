// DELETE ME!
// using modern redux uses the redux toolkit which now does the applyMiddleware for you, also thunk is now part of the package so it does not need to be applied explicitly anymore, this file can be safely deleted after reading
import thunk from "redux-thunk";
import logger from "./logger";
import {applyMiddleware} from "redux";

export default applyMiddleware(thunk, logger);
