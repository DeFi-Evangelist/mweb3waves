import React, { useState, useMemo } from 'react';
import { hot } from 'react-hot-loader/root';

import { Flex, Modal } from './components/shared';
import { Coupons, Header } from './containers';
import { Dialog, Result } from './components/modal';

const App = () => {
    const [dialogOpened, changeDialogState] = useState(false);
    const [resultOpened, changeResultState] = useState(false);
    const [selectedCoupon, selectCoupon] = useState();

    const [onDialogOpen, onDialogClose, onResultOpen, onResultClose] = useMemo(
        () => [
            (coupon) => {
                selectCoupon(coupon);
                changeDialogState(true);
            },
            () => changeDialogState(false),
            () => changeResultState(true),
            () => changeResultState(false),
        ],
        [],
    );

    return (
        <>
            <Header />
            <Flex justifyContent="center" p="20px" flexWrap="wrap">
                <Coupons onDialogOpen={onDialogOpen} />
            </Flex>
            <Modal open={dialogOpened} onClose={onDialogClose}>
                <Dialog
                    coupon={selectedCoupon}
                    onClose={onDialogClose}
                    onSubmit={() => {
                        onDialogClose();
                        onResultOpen();
                    }}
                />
            </Modal>
            <Modal open={resultOpened} onClose={onResultClose}>
                <Result onClose={onResultClose} />
            </Modal>
        </>
    );
};

export default hot(App);
