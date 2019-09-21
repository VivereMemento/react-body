const LANGUAGE_INIT = 'LANGUAGE::INIT';
const LANGUAGE_SWITCH = 'LANGUAGE::SWITCH';

export const languageSwitch = (payload = {}) => () => ({ type: LANGUAGE_SWITCH, payload });
export const languageInit = (payload = {}) => () => ({ type: LANGUAGE_INIT, payload });

const initialState = {};

const language = (state = initialState, { type, payload }) => (
	type === LANGUAGE_INIT		? {...state, ...payload}
	: type === LANGUAGE_SWITCH  ? payload
								: state
);
export const getLanguageState = state => state.language;

export default language;