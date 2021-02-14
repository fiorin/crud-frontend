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
  @media(max-width: 800px) {
    max-width: 95%;
    flex-direction: column;
  }
`;

Container.Internal = styled.div`
  flex: 1;
  display:flex;
  flex-direction: row;
  background: ${colors.columns.options};
  border-top-left-radius: ${borders.radius };
  border-bottom-left-radius: ${borders.radius };
  @media(max-width: 800px) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    flex-direction: column;
  }
`;

Container.Columns = {
  Icons: styled.div`
    width:60px;
    padding: 30px 10px;
    @media(max-width: 800px) {
      width:100%;
      padding: 0 10px;
    }
  `,
  Options: styled.div`
    width:200px;
    padding: 30px 10px;
    @media(max-width: 800px) {
      padding: 20px;
    }
  `,
  Content: styled.div`
    background: ${colors.columns.content};
    flex: 1;
    padding: 30px 20px;
    border-top-left-radius: ${borders.radius };
    border-bottom-left-radius: ${borders.radius };
    min-height:400px;
    @media(max-width: 800px) {
      padding: 20px;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      flex-direction: column;
      min-height:auto;
    }
  `,
}

export default Container;
