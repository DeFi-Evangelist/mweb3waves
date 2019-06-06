import React, { memo } from 'react';
import LinesEllipsis from 'react-lines-ellipsis';
import memoizeOne from 'memoize-one';

import { Rating, Price, Discount } from './coupon-controls';

import { Box, Flex, Text } from '../shared';

const isEmpty = memoizeOne(val => val === undefined || val === 0);

const Coupon = ({
    name,
    title,
    image,
    rating,
    ratings,
    longDescription,
    couponTerm,
    priceTerm,
    oldPrice,
    newPrice,
    discount,
    onClick,
    couponPrice,
    ...rest
}) => (
    <Box bg="gray.0" width="300px" height="300px" position="relative" onClick={onClick} {...rest}>
        <Box position="relative">
            <Box
                height="117px"
                style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover' }}
            />
            {!isEmpty(discount) && (
                <Box position="absolute" top="20px" right="10px">
                    <Discount>{`${discount}%`}</Discount>
                </Box>
            )}
        </Box>
        <Box px="20px" pt="10px">
            {!isEmpty(rating) && <Rating value={rating}>{`${rating} (${ratings} ratings)`}</Rating>}
            <Text
                letterSpacing="0.4375px"
                lineHeight="22px"
                fontWeight="bold"
                pt="10px"
                fontSize="14px"
            >
                {name}
            </Text>
            <Text lineHeight="18px" fontWeight="200" pt="8px" fontSize="12px">
                <LinesEllipsis
                    text={longDescription}
                    maxLine="2"
                    ellipsis="..."
                    trimRight
                    basedOn="letters"
                />
            </Text>
            <Text lineHeight="18px" fontWeight="normal" pt="8px" fontSize="12px">
                {title}
            </Text>
            <Flex position="absolute" bottom="20px" width="100%" pr="40px">
                <Text
                    color="blue.0"
                    letterSpacing="0.4375px"
                    lineHeight="22px"
                    fontWeight="bold"
                    fontSize="14px"
                    flex={1}
                >
                    {`${couponPrice} ${couponTerm}`}
                </Text>
                {oldPrice !== newPrice && (
                    <Price term={priceTerm} isOld>
                        {oldPrice}
                    </Price>
                )}
                <Price term={priceTerm}>{newPrice}</Price>
            </Flex>
        </Box>
    </Box>
);

Coupon.defaultProps = { priceTerm: '$' };

export default memo(Coupon);
