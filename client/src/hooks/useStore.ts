import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


const useStore = () => {
    const { user, userId } = useAppSelector(state => state.auth);
    const dispatch = useAppDispatch();

    return {
        userId,
        user,
        dispatch
    };
};

export default useStore;