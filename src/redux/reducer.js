import {
	ADD_ITEM,
	ADD_SALE,
	DATA_LOADED,
	LOAD_SALE,
	REMOVE_ITEM,
	UPDATE_ITEM,
} from "./const";

const initialState = {
	items: [],
	sales: [],
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
		case LOAD_SALE: {
			return {
				...state,
				sales: payload,
			};
		}
		case ADD_SALE: {
			return {
				...state,
				sales: [...state.sales, payload],
			};
		}
		default: {
			return state;
		}
	}
};
