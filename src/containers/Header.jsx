import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import { Flex, Box } from '../components/shared';
import * as Controls from '../components/layout/header-controls';
import * as Layout from '../components/layout';
import theme from '../styled-components/theme';

const links = [
    {
        url: '#featured',
        title: 'Featured',
    },
    {
        url: '#things_to_do',
        title: 'Things to do',
    },
    {
        url: '#beauty_spas',
        title: 'Beauty & Spas',
    },
    {
        url: '#local',
        title: 'Local',
    },
    {
        url: '#goods',
        title: 'Goods',
    },
];

const userLinks = [
    {
        url: '#login',
        title: 'Login',
    },
];

const mobileWidth = parseInt(theme.breakpoints.lg.replace('px', ''), 10);
const mobileMenuSize = {
    0: '70px',
    md: '85px',
};

const Header = ({ onCreateCoupon }) => {
    const [activeUrl, setActiveUrl] = useState('');
    const [isMobile, setMobileState] = useState(false);
    const [isMenuActive, setMenuState] = useState(false);

    useEffect(() => {
        setActiveUrl(window.location.href);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < mobileWidth) {
                !isMobile && setMobileState(true);
            } else {
                isMobile && setMobileState(false);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isMobile]);

    const menuParams = {
        activeUrl,
        links,
        userLinks,
        setActiveUrl,
        onCreateCoupon: () => {
            setMenuState(false);
            onCreateCoupon();
        },
    };

    return (
        <>
            <Controls.HeaderLayout
                height={isMobile ? mobileMenuSize : '131px'}
                position={{
                    0: 'fixed',
                    lg: 'relative',
                }}
            >
                <Flex
                    alignItems="center"
                    height="100%"
                    pl={{
                        0: '16px',
                        xl: '114px',
                    }}
                    pr={{
                        0: '3%',
                        xl: '114px',
                    }}
                >
                    {isMobile && (
                        <Layout.Hamburger
                            isActive={isMenuActive}
                            onClick={() => setMenuState(!isMenuActive)}
                            bottom="6px"
                            position="relative"
                            bg="blue.0"
                        />
                    )}
                    <Controls.Logo flex={1} justifyContent={isMobile && 'center'} />
                    {!isMobile && <Layout.HeaderMenu {...menuParams} />}
                </Flex>
            </Controls.HeaderLayout>
            {isMobile && (
                <>
                    <Box width="100%" height={mobileMenuSize} />
                    <CSSTransition
                        in={isMenuActive}
                        timeout={Layout.MENU_ANIMATION_TIMEOUT}
                        classNames={Layout.MENU_ANIMATION_NAME}
                        unmountOnExit
                    >
                        <Layout.MobileMenu position="fixed" top={mobileMenuSize} {...menuParams} />
                    </CSSTransition>
                    <CSSTransition
                        in={isMenuActive}
                        timeout={Layout.OVERLAY_ANIMATION_TIMEOUT}
                        classNames={Layout.OVERLAY_ANIMATION_NAME}
                        unmountOnExit
                    >
                        <Layout.Overlay
                            onClick={() => setMenuState(!isMenuActive)}
                            top={mobileMenuSize}
                        />
                    </CSSTransition>
                </>
            )}
        </>
    );
};

export default Header;
