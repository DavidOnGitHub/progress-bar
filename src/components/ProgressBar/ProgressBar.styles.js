import styled from 'styled-components';
import { colors } from '../../config/app';

export const Container = styled.div`
  position: relative;
  margin: 10px 0;
  border: solid 1px ${colors.border};
  height: 48px;
  width: 100%;
`;

export const ProgressIndicator = styled.div`
  position: absolute;
  background-color: ${({ percentage }) =>
    percentage > 100 ? colors.progressRed : colors.progressBlue};
  top: 0;
  bottom: 0;
  left: 0;
  right: ${({ percentage }) =>
    percentage > 100 ? '0' : `calc(100% - ${percentage}%)`};
  transition: right 0.2s linear;
`;

export const ProgressPercentage = styled.p`
  position: relative;
  text-align: center;
`;
