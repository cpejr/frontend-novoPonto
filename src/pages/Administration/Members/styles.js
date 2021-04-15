import styled from 'styled-components';

const MembersComponent = styled.div`
    width: 100%; 
    min-height: 100vh;

    background-color: ${props => props.theme.appBackground};

    display: flex;
    flex-direction: column;
    padding: 30px 20px;

    .iconWithTitle{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 32px;

        .svgIcon{
            font-size: 40px;
            margin-right: 8px;
        }
        h1{
            font-size: 30px;
            font-weight: 400;
            line-height: 29px;
            color: #FFFFFF;
        }
    }

    .addAndSearchMemberArea{
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-top: 16px;
        margin-bottom: 48px;
    }

    table, th, tr, td{
        margin: 0;
        padding: 0;
    }

    .roleTable{
        width: 100%;
    }

    .roleTable tr{
        height: 80px;
        background-color: #141414;
        padding: 0px 20px;
        
        display: flex;
        justify-content: flex-start;
        align-items: center;
        border-bottom: 2px solid #1C1C1D;
    }

    .roleTable thead tr:first-child{
        height: 65px;
        background-color: #1D1D1D;
        
        display: flex;
        justify-content: flex-start;
        align-items: center;
        border-radius: 5px;
    }

    .memberColumn{
        width: 30%;
        max-width: 50vw;
        min-width: 160px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        color: #FFFFFF;
    }

    .roleColumn{
        width: 30%;
        max-width: 50vw;
        min-width: 160px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        color: #FFFFFF;
    }

    .isAdmColumn{
        width: 20%;
        min-width: 150px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    .editColumn, .garbageColumn{
        width: 10%;
        min-width: 80px;
        display: flex;
        justify-content: flex-start;
        align-items: center;

        svg{
            font-size: 25px;
            cursor: pointer;
        }
        svg:hover{
            color: rgb(255, 244, 41);
        }
    }

    .garbageColumn{
        svg:hover{
            color: #c70000;
        }
    }

    @media(max-width: 720px){
        .addAndSearchMemberArea{
            height: 90px;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-start;
            
        }
    }

`;

export  { MembersComponent };