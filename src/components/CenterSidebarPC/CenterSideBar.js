import styled from 'styled-components';

const CenterSidebarPC = styled.div`
  .main-area {
    height: 100%;
    width: 100%;
    background-color: #131228;
    position: relative;
    display: flex;
    justify-content: space-between;
    & > .right-area {
      overflow: auto;
      height: 100%;
      width: 100%;
    }
    & > .right-area::-webkit-scrollbar {
    display: none;
  }
  }
  .vci-tabs {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 1;
    display: flex;
    height:70px;
    width: 100%;
    justify-content: space-between;
    background-color: #000;
    border: 1px solid rgba(255, 255, 255, 0.12);
    padding: 8px 40px;
    .tab {
      user-select: none;
      cursor: pointer;
      height: 48px;
    }
    @media (min-width: 600px) {
      padding: 8px 80px;
      height: unset;
      background-color: rgba(18, 18, 18, 0.65);
      backdrop-filter: blur(17.5px);
    }
  }

`;

export default CenterSidebarPC;
