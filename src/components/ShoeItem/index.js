import React from 'react';
import { Icon } from 'react-native-elements';
import {
    Container,
    ProductImage,
    ProductName,
    ProductPrice,
    AddButton,
    ButtonText,
    ButtonAmountText,
    ButtonAmount,
} from './styles';

function ShoeItem({ product }) {
    return (
        <Container>
            <ProductImage source={{ uri: product.image }} />
            <ProductName> {product.title}</ProductName>
            <ProductPrice> {product.formattedPrice}</ProductPrice>
            <AddButton>
                <ButtonAmount>
                    <Icon name="add-shopping-cart" color="#fff" size={24} />
                    <ButtonAmountText>{0}</ButtonAmountText>
                </ButtonAmount>
                <ButtonText>Adicionar ao carrinho</ButtonText>
            </AddButton>
        </Container>
    );
}

export default ShoeItem;
