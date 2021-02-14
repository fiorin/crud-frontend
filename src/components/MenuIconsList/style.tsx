import theme from "../../config/theme";
import styled from "styled-components";

const { colors } = theme;

export const MenuIconsList = styled.ul`
  list-style: none;
  padding-left:0;
`;

export const MenuIconItem = styled.li`
  font-size: 1.5em;
  color: ${ colors.textinverse };
  text-align: center;
    opacity: .9;
  &.disabled {
    opacity: .5;
  }
  &:not(last-child) {
    margin-bottom:.5em;
  }
`;