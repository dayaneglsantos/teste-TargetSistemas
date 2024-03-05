import { Question, Title } from './styles/styles'

function App() {
  //Resolução questão 1
  const INDICE = 13
  let SOMA = 0
  let K = 0

  while (K < INDICE) {
    K += 1
    SOMA += K
  }

  //Resolução questão 2
  const checkNumber = (number: number) => {
    let prevNumber = 0
    let currentNumber = 1

    while (currentNumber < number) {
      const nextNumber = prevNumber + currentNumber
      prevNumber = currentNumber
      currentNumber = nextNumber
    }

    if (currentNumber === number) {
      return `O número que você informou (${number}) faz parte da sequência de Fibonacci`
    } else {
      return `O número que você informou (${number}) NÃO faz parte da sequência de Fibonacci`
    }
  }

  //Resolução questão 5
  const reverse = (string: string) => {
    const array = string.split('')
    let start = 0
    let end = array.length - 1

    while (start < end) {
      const first = array[start]
      array[start] = array[end]
      array[end] = first

      start++
      end--
    }

    const newString = array.join('')
    return `Você nos enviou a string "${string}" e a inversão dela é "${newString}"`
  }

  return (
    <>
      <Title>Desafio Target Sistemas</Title>

      <Question>
        <h2>Questão 1</h2>
        <span>Resposta:</span>
        <p>{SOMA}</p>
      </Question>

      <Question>
        <h2>Questão 2</h2>
        <span>Resposta:</span>
        <p>{checkNumber(21)}</p>
      </Question>

      <Question>
        <h2>Questão 3</h2>
        <span>Resposta:</span>
        <p>
          <span className="question-item">A</span>: 9 - sequência de números
          ímpares
        </p>
        <p>
          <span className="question-item">B</span>: 128 - multiplica o número
          anterior por 2
        </p>
        <p>
          <span className="question-item">C</span>: 49 - eleva o número ao
          quadrado de acordo com a posição, ou seja, 0 * 0 = 0, 1 * 1 = 1, 2 * 2
          = 4 e assim por diante...
        </p>
        <p>
          <span className="question-item">D</span>: 100 - sequência de números
          pares elevado ao quadrado
        </p>
        <p>
          <span className="question-item">E</span>: 13 - sequência de Fibonacci
        </p>
        <p>
          <span className="question-item">F</span>: 200 - números que começam
          com a letra D
        </p>
      </Question>

      <Question>
        <h2>Questão 4</h2>
        <span>Resposta:</span>
        <p>
          Primeiramente deveriamos ligar um dos interruptores e deixa-lo ligado
          por alguns minutos para que a lâmpada possa esquentar. Após isso,
          desligariamos este e ligariamos outro interruptor. Ao chegar na sala,
          poderiamos deduzir que o primeiro interruptor na qual ligamos
          inicialmente e desligamos se trata da lâmpada que está quente. A
          lampada que estiver ligada se trata do segundo interruptor que está
          ligado no momento e a lampada desligada e que não está quente se trata
          do terceiro interruptor que não foi ligado
        </p>
      </Question>

      <Question>
        <h2>Questão 5</h2>
        <span>Resposta:</span>
        <p>{reverse('gratidao')}</p>
      </Question>
    </>
  )
}

export default App
