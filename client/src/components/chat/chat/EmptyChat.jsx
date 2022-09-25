import { Box, Typography, styled, Divider } from '@mui/material';
import { emptyChatImage } from '../../../constans/data';

const Component = styled(Box)`
    background: #f8f9fa;
    padding: 30px 0;
    text-align: center;
    height: 100vh;
`;
const Container = styled(Box)`
    padding: 0 200px;
`;
const Image = styled('img') ({
    width: 400,
    marginTop: 100
});
const Title = styled(Typography)`
    font-size: 32px;
    margin: 25px 0 10px 0;
    font-family: inherit;
    font-weight: 300;
    color: #41525d;
`;
const SubTitle = styled(Typography)`
    font-size: 14px;
    color: #667781;
    font-family: inherit;
    font-weight: 400;
`;
const StyledDivider = styled(Divider)`
    margin: 40px 0;
    opacity: 0.4;
`

const EmptyChat = () => {

    return (
        <Component>
            <Container>
                <Image src={emptyChatImage} alt="image" />
                <Title>WhatApp Web</Title>
                <SubTitle>Now sent and recive messages without keeping your phone online.</SubTitle>
                <SubTitle>Use WhatApp on up to 4 devices and 1 phone at same time.</SubTitle>
                <StyledDivider />
            </Container>
        </Component>
    )
}

export default EmptyChat;