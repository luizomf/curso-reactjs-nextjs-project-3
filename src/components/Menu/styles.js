import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    justify-content: center;
    padding: calc(${theme.spacings.small} / 2) 0;
    border-bottom: 0.1rem solid ${theme.colors.mediumGray};

    @media ${theme.media.lteMedium} {
      align-items: center;
      bottom: 0;
      min-height: 100vh;
    }
  `}
`;

export const Container = styled.div`
  ${({ theme }) => css`
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow-y: auto;
    width: 100%;

    @media ${theme.media.lteMedium} {
      min-height: 100vh;
      height: 100%;
      padding: ${theme.spacings.xlarge} 0;
      display: flex;
      flex-flow: column nowrap;
      justify-content: flex-start;
    }
  `}
`;
