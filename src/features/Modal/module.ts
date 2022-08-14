import { modalReducers } from './redux/ModalSlices';
// import ModalSaga from './sagas/ModalSaga';
class ModalModule {
	readonly name = 'modal';

	getMiddlewares() {
		return [];
	}

	getReducers() {
		return {
			modal: modalReducers
		};
	}

	getSagas() {
		// return [ModalSaga()];
	}

	getRoutes() {
		return [];
	}
}

export const modalModule = new ModalModule();
