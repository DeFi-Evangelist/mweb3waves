import React, { useState, useEffect } from 'react';
import { hot } from 'react-hot-loader/root';

import { Flex, Modal } from './components/shared';
import { Coupons, Header } from './containers';
import { Dialog, Result, Form } from './components/modal';
import { useAppDialogs } from './components/service';
import { getCoupons } from './api';

const App = () => {
    const {
        selectedCoupon,
        dialog: [dialogOpened, onDialogOpen, onDialogClose],
        result: [resultOpened, onResultOpen, onResultClose],
        form: [formOpened, onFormOpen, onFormClose],
    } = useAppDialogs();

    const [coupons, updateCoupons] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await getCoupons();
            updateCoupons(response);
        }
        fetchData();
    }, []);

    return (
        <>
            <Header onCreateCoupon={onFormOpen} />
            <Flex justifyContent="center" p="20px" flexWrap="wrap">
                <Coupons onDialogOpen={onDialogOpen} coupons={coupons} />
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
            <Modal open={formOpened} onClose={onFormClose}>
                <Form
                    onClose={onFormClose}
                    onSubmit={(data) => {
                        updateCoupons([...coupons, { ...data, id: new Date().valueOf() }]);
                        onFormClose();
                    }}
                />
            </Modal>
        </>
    );
};

export default hot(App);
