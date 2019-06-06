import { useState, useMemo } from 'react';

function useAppDialogs() {
    const [dialogOpened, changeDialogState] = useState(false);
    const [resultOpened, changeResultState] = useState(false);
    const [formOpened, changeFormState] = useState(false);
    const [selectedCoupon, selectCoupon] = useState();

    const [
        onDialogOpen,
        onDialogClose,
        onResultOpen,
        onResultClose,
        onFormOpened,
        onFormClose,
    ] = useMemo(
        () => [
            (coupon) => {
                selectCoupon(coupon);
                changeDialogState(true);
            },
            () => changeDialogState(false),
            () => changeResultState(true),
            () => changeResultState(false),
            () => changeFormState(true),
            () => changeFormState(false),
        ],
        [],
    );

    return {
        selectedCoupon,
        dialog: [dialogOpened, onDialogOpen, onDialogClose],
        result: [resultOpened, onResultOpen, onResultClose],
        form: [formOpened, onFormOpened, onFormClose],
    };
}

export default useAppDialogs;
