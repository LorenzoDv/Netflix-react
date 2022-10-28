
import axios from "axios";
import * as actions from "../api";

const api =
    ({ dispatch }) =>
        (next) =>
            async (action) => {
                if (action.type !== actions.apiCallBegan.type) return next(action);

                const { method, data, onStart, onSuccess, onError } =
                    action.payload;

                if (onStart) dispatch({ type: onStart });

                next(action);

                try {

                    const response = await axios.request({
                        baseURL: `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_KEY}`,
                        method,
                        data,
                    });

                    dispatch(actions.apiCallSucess(response.data));

                    if (onSuccess)
                        dispatch({ type: onSuccess, payload: response.data });
                } catch (error) {

                    dispatch(actions.apiCallFailed(error.message));

                    if (onError) dispatch({ type: onError, payload: error.message });
                }
            };

export default api;