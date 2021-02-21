import styled, { css } from 'styled-components';

const menuVisible = (theme) => css`
  visibility: visible;
  opacity: 1;
`;

export const Container = styled.div`
  ${({ theme, visible }) => css`
    position: fixed;
    z-index: 5;
    top: 0;
    left: 0;
    right: 0;
    transition: all 300ms ease-in-out;

    @media ${theme.media.lteMedium} {
      height: 100vh;
      visibility: hidden;
      opacity: 0;
      ${visible && menuVisible(theme)}
    }
  `}
`;

export const MenuContainer = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 0.1rem solid ${theme.colors.mediumGray};

    @media ${theme.media.lteMedium} {
      flex-flow: column nowrap;
      justify-content: flex-start;
      align-items: center;
      text-align: center;
      min-height: 100vh;
      height: 100%;
      overflow-y: auto;
      padding: ${theme.spacings.xxlarge} 0;
      cursor: pointer;
    }
  `}
`;

export const Button = styled.button`
  ${({ theme, visible }) => css`
    background: ${theme.colors.primaryColor};
    color: ${theme.colors.white};
    width: 4rem;
    height: 4rem;
    position: fixed;
    z-index: 6;
    border: none;
    top: 2rem;
    right: 2rem;
    display: none;
    pointer-events: ${visible ? 'none' : 'all'};

    @media ${theme.media.lteMedium} {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    > svg {
      width: 2.5rem;
      height: 2.5rem;
    }
  `}
`;
