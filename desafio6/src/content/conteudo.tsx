import { useState, ChangeEvent } from 'react'
import * as S from './content-style'

function Content () {
  const [content, setContent] = useState(' ')

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value)
  }
  return (
    <S.ContentWrapper>
      <S.Header>
        <S.Input defaultValue='Sem título' />
      </S.Header>

      <S.ContentSection>
        <S.Textarea
          placeholder='Digite aqui seu markdown'
          value={content}
          onChange={handleChange}
        />

        <S.Article>
          {content}
        </S.Article>
      </S.ContentSection>
    </S.ContentWrapper>
  )
}

export { Content }
