export const BUY_ITEM = 'BUY_ITEM';

export const buyItem = id => {
  // console.log('id in buyItem: ', id);
  return {
    type: BUY_ITEM,
    payload: id
  };
};