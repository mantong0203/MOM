export const createAgenda = (agenda) => {
    return (dispatch, getState) => {
      dispatch({ type: 'CREATE_AGENDA', agenda});
    }
};