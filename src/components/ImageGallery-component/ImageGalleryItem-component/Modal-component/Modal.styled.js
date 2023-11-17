import styled from 'styled-components';
import { AiFillCloseCircle } from 'react-icons/ai';

export const LargeImg = styled.img`
  max-width: 1280px;
`;

export const ButtonModal = styled.button`
  position: absolute;
  top: 40px;
  right: 40px;
  border: none;
  background: none;
  cursor: pointer;
`;

export const CloseIcon = styled(AiFillCloseCircle)`
  fill: #fff;
  stroke: #020202;
  stroke-width: 20px;
  width: 40px;
  height: 40px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1280px;
  height: auto;
  min-height: 700px;
`;
