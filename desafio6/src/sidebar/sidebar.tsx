import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { File } from 'resources/files/types'
import markeeLogo from './markee-logo.png'
import * as icon from 'ui/icons'
import * as S from './sidebar-styles'




export function Sidebar () {
  return (
    <S.Aside>
      <header>
        <S.H1>
          <S.LogoLink href='/'>
            <S.Img src={markeeLogo} alt='Markee.' />
          </S.LogoLink>
        </S.H1>
      </header>

      <S.H2>
        <span>Arquivos</span>
      </S.H2>

      <S.Button onClick={files}>
        <icon.PlusDark /> Adicionar arquivo
      </S.Button>

      <S.FileList>
        {files.map(file => (
          <S.FileListItem key={file.id}>
            <S.FileItemLink href={`/file/${file.id}`} active={file.active}>
              {file.name}
            </S.FileItemLink>

            {file.active && <S.StatusIconStyled status={file.status} />}

            {!file.active && (
              <S.RemoveButton title={`Remover o arquivo ${file.name}`}>
                <S.RemoveIcon />
              </S.RemoveButton>
            )}
          </S.FileListItem>
        ))}
      </S.FileList>
    </S.Aside>
  )
}
