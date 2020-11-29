import { Wrapper, StyledLink } from '../../styledComponents';

const ChartNavigation = () => {
  return (
    <>
      <Wrapper>
        <StyledLink href='/line-charts'>Line Chart</StyledLink>
        <StyledLink href='/area-charts'>Area Chart</StyledLink>
        <StyledLink href='/bar-charts'>Bar Chart</StyledLink>
      </Wrapper>
    </>
  );
};

export default ChartNavigation;
