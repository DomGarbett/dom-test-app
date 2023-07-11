import {PinState, setPinState} from './Redux/slicers/pinReducer';
import {store} from './Redux/store';

const lockDevice = () => {
  store.dispatch(setPinState(PinState.LOCKED));
};

const unlockDevice = () => {
  store.dispatch(setPinState(PinState.ACCEPTED));
};

export {lockDevice, unlockDevice};