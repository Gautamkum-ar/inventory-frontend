import { ADD_ITEM, DATA_LOADED, REMOVE_ITEM, UPDATE_ITEM } from "./const";

const initialState = {
	items: [],
};

export const itemReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case ADD_ITEM: {
			return {
				...state,
				items: [...state.items, payload],
			};
		}
		case DATA_LOADED: {
			return {
				...state,
				items: payload,
			};
		}
		case REMOVE_ITEM: {
			return {
				...state,
				items: state.items.filter((item) => item._id !== payload),
			};
		}
		case UPDATE_ITEM: {
			return {
				...state,
				items: state.items.map((item) =>
					item._id === payload._id
						? {
								...item,
								name: payload.name,
								quantity: payload.quantity,
								price: payload.price,
						  }
						: item
				),
			};
		}
		default: {
			return state;
		}
	}
};
