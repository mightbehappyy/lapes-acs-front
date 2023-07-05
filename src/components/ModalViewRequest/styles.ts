import { Modal } from '../Modal';

import styled from 'styled-components';

export const ModalContainer = styled(Modal)`
  border-radius: 15px;
  height: 90vh;
  overflow: auto;
  width: 60%;
  padding-top: 15px;
  justify-content: center;
  display: flex;
  background-color: #e4e4e4;
  border: #253555 1px solid;

  @media (max-width: 1200px) {
    width: 85%;
  }
`;

export const OpenRequest = styled.button`
  font-weight: 700;
  font-size: 12px;
`;
