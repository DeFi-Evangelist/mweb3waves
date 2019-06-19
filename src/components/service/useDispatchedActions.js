import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

export default function useDispatchedActions(actions) {
    const dispatch = useDispatch();

    const dispatchedActions = useMemo(() => bindActionCreators(actions, dispatch), []);
    return dispatchedActions;
}
