import axios from "axios";

const loading = () => ({ type: 'LOADING'});

// export const login = searchTerm => {
//     return async dispatch => {
//         dispatch(loading());
//         try {
//             const data = await fetchUserData(searchTerm);
//             dispatch(loadUserResult(data))
//         } catch (err) {
//             console.warn(err.message);
//             dispatch({ type: 'SET_ERROR' })
//         };
//     };
// };
