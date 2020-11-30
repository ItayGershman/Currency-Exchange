import { Wrapper, StyledLink } from '../../styledComponents';
import { useEffect, useState } from 'react';

const ChartNavigation = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth);
  const windowsReSize = () => {
    setIsMobile(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', windowsReSize);
    return () => window.removeEventListener('resize', windowsReSize);
  });
  const handleDirection = () => {
    if (isMobile < 800) return 'row';
    else return 'column';
  };
  const handleLinks = () => {
    if (isMobile < 700) {
      return { padding: '5px', margin: '7px', width: '95px' };
    } else {
      return { padding: '12px', margin: '20px', width: '140px'};
    }
  };

  return (
    <>
      <Wrapper direction={() => handleDirection()}>
        <StyledLink
          padding={() => handleLinks().padding}
          margin={() => handleLinks().margin}
          width={() => handleLinks().width}
          href='/line-charts'
        >
          Line Chart
        </StyledLink>
        <StyledLink
          padding={() => handleLinks().padding}
          margin={() => handleLinks().margin}
          width={() => handleLinks().width}
          href='/area-charts'
        >
          Area Chart
        </StyledLink>
        <StyledLink
          padding={() => handleLinks().padding}
          margin={() => handleLinks().margin}
          width={() => handleLinks().width}
          href='/bar-charts'
        >
          Bar Chart
        </StyledLink>
      </Wrapper>
    </>
  );
};

export default ChartNavigation;
