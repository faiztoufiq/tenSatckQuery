import styled from 'styled-components';
import { commonColor } from '../common/color';
export const Container = styled.div`
    
    padding: 100px;
    background-color: ${commonColor.backGroundColor};
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
export const Loading = styled.div`
    font-size: 18px;
    color: ${commonColor.darkGreyLoading};
`;

export const Error = styled.div`
    color: red;
    font-weight: bold;
`;

export const Title = styled.h1`
    display: flex;         
    align-items: center;  
    justify-content:center;
    font-size: 20px;
    color: ${commonColor.darkCharcoal};
`;

export const List = styled.ul`
    list-style-type: none;
    padding: 0;
`;

export const ListItem = styled.li`
    margin-bottom: 15px;
    padding: 10px;
    background-color: ${commonColor.backGroundGrayColor};
    border: 1px solid ${commonColor.borderBlack};
    border-radius: 4px;
`;

export const PostTitle = styled.h1`
    font-size: 20px;
    margin: 0;
`;

export const PostBody = styled.p`
    font-size: 16px;
    color: ${commonColor.darkGray};
`;
