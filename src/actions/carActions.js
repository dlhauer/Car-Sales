export const BUY_ITEM = 'BUY_ITEM';
export const REMOVE_FEATURE = 'REMOVE_FEATURE'

export const buyItem = id => {
  // console.log('id in buyItem: ', id);
  return {
    type: BUY_ITEM,
    payload: id
  };
};

export const removeFeature = id => {
  return {
    type: REMOVE_FEATURE,
    payload: id
  }
}