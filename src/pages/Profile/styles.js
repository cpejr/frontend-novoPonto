import styled from 'styled-components';

const ProfileComponent = styled.div`
    width: 100%;
    min-height: 100vh;

    background-color: ${props => props.theme.appBackground}
`;

export  { ProfileComponent };