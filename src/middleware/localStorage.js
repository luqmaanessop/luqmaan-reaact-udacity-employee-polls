const localStorageMiddleware = (store) => (next) => (action) => {
  const employeeStore = store.getState();
  const employeeStoreString = JSON.stringify(employeeStore);
  localStorage.setItem("employeeStore", employeeStoreString);

  const returnValue = next(action);
  return returnValue;
}

export default localStorageMiddleware;
