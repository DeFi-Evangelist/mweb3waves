import React, {
    useEffect, useState, memo, useCallback,
} from 'react';
import MediaQuery from 'react-responsive';
import { useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import { Flex, Box } from '../components/shared';
import * as Controls from '../components/layout/header-controls';
import * as Layout from '../components/layout';
import theme from '../styled-components/theme';
import * as LINKS from '../components/layout/links';
import { useDispatchedActions } from '../components/service';
import * as rootActions from '../reducers/root';

const { breakpoints } = theme;

const menuHeight = {
    0: '114px',
    sm: '131px',
};

const mapStateToProps = state => ({
    isOpen: state.root.modalMenuOpen,
});

const Header = () => {
    const [activeUrl, setActiveUrl] = useState('');

    useEffect(() => {
        setActiveUrl(window.location.href);
    }, []);

    const { isOpen } = useSelector(mapStateToProps);
    const { changeMobileMenuState } = useDispatchedActions(rootActions);

    const onCloseMenu = useCallback(() => changeMobileMenuState(false));

    return (
        <>
            <Controls.HeaderLayout height={menuHeight} position="fixed">
                <Flex
                    alignItems={{
                        0: 'flex-start',
                        sm: 'center',
                    }}
                    height="100%"
                    px={{
                        0: '20px',
                        lg: '39px',
                        xl: '114px',
                    }}
                    pt={{
                        0: '14px',
                        sm: '0px',
                    }}
                    flexDirection={{
                        0: 'column',
                        sm: 'row',
                    }}
                >
                    <Flex width="100%" justifyContent="center">
                        <Layout.HeaderLine
                            activeUrl={activeUrl}
                            links={LINKS.headerLinks}
                            userLinks={LINKS.userLinks}
                            setActiveUrl={setActiveUrl}
                            changeMobileMenuState={changeMobileMenuState}
                            tabletResolution={breakpoints.lg}
                            mobileResolution={breakpoints.sm}
                            menuOpened={isOpen}
                        />
                    </Flex>
                    <MediaQuery maxWidth={breakpoints.sm}>
                        <Flex width="100%" pt="10px">
                            <Controls.Logo isActive size="small" />
                            <Flex flex={1} justifyContent="flex-end" alignItems="center">
                                <Controls.SearchIcon />
                            </Flex>
                        </Flex>
                    </MediaQuery>
                </Flex>
            </Controls.HeaderLayout>
            <Box width="100%" height={menuHeight} />
            <MediaQuery maxWidth={breakpoints.lg}>
                <CSSTransition unmountOnExit {...Layout.menuAnimation} in={isOpen}>
                    <Layout.MobileMenu top="0px" onClose={onCloseMenu} position="fixed" />
                </CSSTransition>
                <CSSTransition unmountOnExit {...Layout.overlayAnimation} in={isOpen}>
                    <Layout.Overlay onClick={onCloseMenu} top="0px" />
                </CSSTransition>
            </MediaQuery>
        </>
    );
};

export default memo(Header);
