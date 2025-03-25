// Question Types
// 1. MCQs | Multiple Choice | single
// 2. boolean | true/false | single
// 3. MAQs | Multiple Answers | multiple

import { Topic } from '.'
import CodeSnippet1 from '../../assets/images/code-snippet-1.png'

export const react: Topic = {
  topic: 'Spanish',
  level: 'Intermediate',
  totalQuestions: 11,
  totalScore: 100,
  totalTime: 100,
  questions: [
    {
      question: 'How do you say "hello" in Spanish?',
      choices: [
        'Hola',
        'Adiós',
        'Gracias',
        'Por favor',
      ],
      type: 'MCQs',
      correctAnswers: [
        'Hola',
      ],
      score: 10,
    },
    {
      question: 'What is the capital of Spain?',
      choices: ['Barcelona', 'Madrid', 'Valencia', 'Seville'],
      type: 'MCQs',
      correctAnswers: ['Madrid'],
      score: 5,
    },
    {
      question: 'Which of the following is a traditional Spanish dish?',
      choices: [
        'Sushi',
        'Pizza',
        'Paella',
        'Pasta',
      ],
      type: 'MCQs',
      correctAnswers: ['Paella'],
      score: 10,
    },
    {
      question:
        'Which of the following is a famous Spanish artist known for his surrealist paintings?',
      choices: [
        'Pablo Picasso',
        'Salvador Dalí',
        'Diego Velázquez',
        'Francisco Goya',
      ],
      type: 'MAQs',
      correctAnswers: ['Salvador Dalí'],
      score: 10,
    },
    {
      question: 'What is the official language of Spain?',
      choices: ['Spanish', 'English', 'French', 'German'],
      type: 'MCQs',
      correctAnswers: ['Spanish'],
      score: 10,
    },
    {
      question:
        'Which of the following is a famous Spanish festival known for its running of the bulls?',
      choices: ['La Tomatina', 'San Fermín', 'Feria de Abril', 'Semana Santa'],
      type: 'MCQs',
      correctAnswers: ['San Fermín'],
      score: 5,
    },
    {
      question: 'What is the currency of Spain?',
      choices: ['Euro', 'Dollar', 'Pound', 'Yen'],
      
      type: 'MCQs',
      correctAnswers: ['Euro'],
      score: 10,
    },
    {
      question:
        'Which of the following is a famous Spanish architect known for his unique and innovative designs?',
      choices: [
        'Antoni Gaudí',
        'Frank Gehry',
        'Zaha Hadid',
        'Le Corbusier',
      ],
      type: 'MAQs',
      correctAnswers: [
        'Antoni Gaudí',
      ],
      score: 10,
    },
    {
      question: 'How do you say "dog" in Spanish?',
      choices: ['Gato', 'Perro', 'Vaca', 'Pez'],
        
      
      type: 'MCQs',
      correctAnswers: ['Perro'],
      score: 10,
    },
    {
      question: 'How do you say "Miss" in Spanish?',
      
      choices: ['Señor', 'Señora', 'Señorita', 'Niño'],
        
      
      type: 'MCQs',
      correctAnswers: [
        'Señorita',
      ],
      score: 10,
    },
    {
      question: 'True or False: Spain is known for its siestas.',
      choices: ['True', 'False'],
      type: 'boolean',
      correctAnswers: ['True'],
      score: 5,
    },
  ],
}
