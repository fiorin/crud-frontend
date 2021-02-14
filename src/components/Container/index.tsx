import styled from "styled-components";
import theme from "../../config/theme";

const { colors, borders } = theme;
const Container : any = styled.div`
  padding:50px;
`;

Container.External = styled.div`
  display:flex;
  max-width: 90%;
  width:900px;
  margin-left: auto;
  margin-right: auto;
  border-radius: ${borders.radius };
  flex-direction: row;
  overflow: hidden;
  background: ${colors.columns.icons};
  &:before {
    content:"";
    display: table;
  }
  &:after {
    clear:both;
  }
`;

Container.Internal = styled.div`
  flex: 1;
  display:flex;
  flex-direction: row;
  background: ${colors.columns.options};
  border-top-left-radius: ${borders.radius };
  border-bottom-left-radius: ${borders.radius };
`;

Container.Columns = {
  Icons: styled.div`
    width:60px;
    padding: 30px 10px;
  `,
  Options: styled.div`
    width:200px;
    padding: 30px 10px;
  `,
  Content: styled.div`
    background: ${colors.columns.content};
    flex: 1;
    padding: 30px 20px;
    border-top-left-radius: ${borders.radius };
    border-bottom-left-radius: ${borders.radius };
  `,
}

export default Container;
