import React from "react";
import styled from "styled-components";
import Developer from "../../interface/developer";
import theme from "../../config/theme";
import DeveloperListItem from "../DeveloperListItem";
import Warning from "../Warning";

const { colors } = theme;

type Props = {
  developers: Developer[] | null
}

const ListMultipleDevelopers = ({ developers }: Props) => {
  return (
    <DeveloperUl>
      {developers?.map((developer, index) => (
        <DeveloperListItem developer={developer}/>
      ))}
    </DeveloperUl>
  )
}

const WarningNoDevelopers = () => {
  return (
    <Warning>
      Não há desenvolvedores para listar
    </Warning>
  )
}

const DeveloperList = ({ developers }: Props ) => {
  if (developers && developers?.length > 0) {
    return <ListMultipleDevelopers developers={developers}/>
  } else {
     return <WarningNoDevelopers/>
  }
}

export default DeveloperList 

const DeveloperUl = styled.ul`
  padding-left:0;
  list-style:none;
`;