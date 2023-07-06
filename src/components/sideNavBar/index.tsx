'use client';

import { useState } from 'react';

import * as S from './style';

import { User, Bell, Trash, Power } from '@phosphor-icons/react';

export default function SideNavBar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openCloseNav = () => {
    if (isOpen == false) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
    console.log(isOpen);
  };

  return (
    <S.Container isOpen={isOpen}>
      <S.PerfilDiv>
        {!isOpen ? (
          <S.PerfilDivInside>
            <S.PerfilIcon onClick={openCloseNav}>
              <User size={24} weight="bold" color="#000" />
            </S.PerfilIcon>
          </S.PerfilDivInside>
        ) : (
          <S.PerfilDivInside>
            <S.PerfilIcon onClick={openCloseNav}>
              <User size={32} weight="bold" color="#000" />
            </S.PerfilIcon>
            <S.Div>
              <p>Nome Aluno</p>
              <p>curso upe</p>
            </S.Div>
          </S.PerfilDivInside>
        )}
      </S.PerfilDiv>
      <S.Line isOpen={isOpen} />
      <S.Div>
        <S.UlItems id="ul1">
          <S.LiItems>
            {!isOpen ? (
              <S.LiInsideDiv isOpen={isOpen}>
                <Bell size={24} />
              </S.LiInsideDiv>
            ) : (
              <S.LiInsideDiv isOpen={isOpen}>
                <S.navBarLink href="/">
                  <Bell size={24} />
                  <S.PLink>notificação</S.PLink>
                </S.navBarLink>
              </S.LiInsideDiv>
            )}
          </S.LiItems>
          <S.LiItems>
            {!isOpen ? (
              <S.LiInsideDiv isOpen={isOpen}>
                <Trash size={24} />
              </S.LiInsideDiv>
            ) : (
              <S.LiInsideDiv isOpen={isOpen}>
                <S.navBarLink href="/">
                  <Trash size={24} />
                  <S.PLink>lixeira</S.PLink>
                </S.navBarLink>
              </S.LiInsideDiv>
            )}
          </S.LiItems>
          <S.BlankDiv></S.BlankDiv>
        </S.UlItems>
      </S.Div>

      <S.Line isOpen={isOpen} />
      <S.BlankDiv>
        <S.UlItems>
          <S.LiItems></S.LiItems>
        </S.UlItems>
      </S.BlankDiv>
      <S.Line isOpen={isOpen} />
      <S.Div>
        <S.UlItems>
          <S.LiItems>
            {!isOpen ? (
              <S.LiInsideDiv isOpen={isOpen}>
                <Power size={24} />
              </S.LiInsideDiv>
            ) : (
              <S.LiInsideDiv isOpen={isOpen}>
                <Power size={24} />
                <p>Sair</p>
              </S.LiInsideDiv>
            )}
          </S.LiItems>
        </S.UlItems>
      </S.Div>
    </S.Container>
  );
}
