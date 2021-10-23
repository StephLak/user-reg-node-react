export const URL_ORIGIN = window.location.origin;

export const BASE_KEY = `x!#@!ng<DD>**^${URL_ORIGIN}449a!!das!h~board?>//`;

export const ROOT_REDUX_PERSIST_KEY = `${BASE_KEY}@ROOT`;

export const USER_TOKEN_KEY = `${BASE_KEY}@TOKEN`;

type StorageUtilsOptions = {
  item?: any;
  storage: any;
  itemKey: string;
};

export const saveItemToStorage = ({
  item,
  storage,
  itemKey,
}: StorageUtilsOptions) => {
  if (!item) return;

  if (typeof item !== "string") item = JSON.stringify(item);

  storage.setItem(itemKey, item);
};

export const getItemFromStorage = ({
  storage,
  itemKey,
}: StorageUtilsOptions) => {
  const savedItem = storage.getItem(itemKey);

  if (typeof savedItem === "string") return savedItem;

  return (savedItem && JSON.parse(savedItem)) || null;
};

export const removeItemFromStorage = ({
  itemKey,
  storage,
}: StorageUtilsOptions) => storage.removeItem(itemKey);
