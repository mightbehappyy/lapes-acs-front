'use client';

import React, { useState } from 'react';

import ViewRequest, { ViewRequestProps } from '../ViewRequestContent';
import * as S from './styles';

import { XCircle } from '@phosphor-icons/react';
import axios from 'axios';
export default function ModalViewRequest() {
  const [IsOpen, setIsOpen] = useState(false);
  const [requestData, setRequestData] = useState<ViewRequestProps>({
    id: 0,
    name: '',
    date: '',
    status: '',
    note: '',
    hours: 0
  });
  const closeModal = () => {
    setIsOpen(false);
  };
  const openModal = () => {
    setIsOpen(true);
    fetchData().then((data) => {
      setRequestData(data);
    });
  };
  const fetchData = async () => {
    try {
      const response = await axios.get('end-point'); // colocar o link do end-point aqui
      const data = response.data;
      return data;
    } catch (error) {
      console.error('Error fetching data', error);
    }
  };
  return (
    <div>
      <S.OpenRequest onClick={openModal}>Visualizar</S.OpenRequest>
      <S.ModalContainer
        isOpen={IsOpen}
        closeModal={closeModal}
        // eslint-disable-next-line react/no-children-prop
        children={<ViewRequest {...requestData} />}
        closeText={<XCircle size={30} color="#FF0000" />}
      ></S.ModalContainer>
    </div>
  );
}
