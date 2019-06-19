import { createImmutableReducer, makeActionCreator } from '../libs/redux-actions';

const initialState = {
    modalMenuOpen: false,
};

export const INIT_APP = 'INIT_APP';
const CHANGE_MOBILE_MENU_STATE = 'CHANGE_MOBILE_MENU_STATE';

export const changeMobileMenuState = makeActionCreator(CHANGE_MOBILE_MENU_STATE, 'isOpen');

export default createImmutableReducer(initialState, {
    [CHANGE_MOBILE_MENU_STATE]: (state, { isOpen }) => {
        state.modalMenuOpen = isOpen;
    },
});
