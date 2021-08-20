//call it like
//const [err, result] = asyncWrapper(yourAsyncMethod());
export const asyncWrapper = async (promise) => {
  try {
    return [null, await promise];
  } catch (err) {
    return [err];
  }
};
