import axios from "axios";
import {
	ADD_ITEM,
	DATA_LOADED,
	LOADING,
	REMOVE_ITEM,
	UPDATE_ITEM,
} from "./const";

const baseurl = process.env.REACT_APP_BASE_URL;
console.log(baseurl);

export const addItem = (newItems) => async (dispatch) => {
	try {
		dispatch({ type: LOADING });
		const response = await axios.post(`${baseurl}/items/add-item`, {
			...newItems,
		});
		dispatch({ type: ADD_ITEM, payload: response.data.data });
	} catch (error) {
		dispatch({ type: "error" });
	}
};

export const fetchItem = () => async (dispatch) => {
	try {
		dispatch({ type: LOADING });
		const response = await axios.get(`${baseurl}/items/items`);
		dispatch({ type: DATA_LOADED, payload: response.data.data });
	} catch (error) {
		dispatch({ type: "error" });
	}
};

export const deleteItem = (itemId) => async (dispatch) => {
	try {
		dispatch({ type: LOADING });
		const response = await axios.delete(`${baseurl}/items/${itemId}`);
		dispatch({ type: REMOVE_ITEM, payload: itemId });
	} catch (error) {
		dispatch({ type: "error" });
	}
};

export const editItem = (itemId, updatedItem) => async (dispatch) => {
	try {
		dispatch({ type: LOADING });
		const response = await axios.post(`${baseurl}/items/${itemId}/update`, {
			...updatedItem,
		});
		dispatch({ type: UPDATE_ITEM, payload: response.data.data });
	} catch (error) {
		dispatch({ type: "error" });
	}
};
