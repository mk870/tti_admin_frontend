import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./rootReducer";
import { rootSaga as saga } from "containers/App/sagas";

const sagaMiddleware = createSagaMiddleware();
const getStore = (params = {}) => {
  const middlewares = [logger, thunk, sagaMiddleware];

  const store = createStore(rootReducer, applyMiddleware(...middlewares));

  sagaMiddleware.run(saga);
  return store;
};

export default getStore;
