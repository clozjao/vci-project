import styled from 'styled-components';

const MainContainerPC = styled.div`

  &.displayPCTopContainer {
    height: 100vh;
    overflow: auto;
    width: 100%;
    .CenterSidebarPC{
      height: 100%;
      width: 100%;
      padding-right: 0px;
    }
  }
  @media (min-width: ${({ theme }) => theme.pixel.b}) {
    margin: 0 auto;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    box-sizing: border-box;
    
    &.displayPCTopContainer {
      height: 100vh;
      overflow: auto;
    }
  }

`;

export default MainContainerPC;
