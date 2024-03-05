import styled from 'styled-components'

export const Title = styled.h1`
  text-align: center;
  margin-top: 12px;
  color: #b11116;
`

export const Question = styled.div`
  margin: 24px auto;

  border-bottom: 1px solid pink;
  max-width: 940px;
  width: 100%;
  padding: 0 12px 36px;

  h2 {
    color: #780a06;
    margin-bottom: 12px;
  }

  > span {
    font-weight: bold;
    display: block;
    margin-bottom: 8px;
  }

  .question-item {
    color: #404040;
    font-weight: bold;
  }
`
