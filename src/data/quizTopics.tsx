import { ReactNode } from 'react'

import { ReactComponent as BulbIcon } from '../assets/icons/bulb.svg'

type QuizTopic = {
  title: string
  icon: ReactNode
  disabled?: boolean
}

export const quizTopics: QuizTopic[] = [
 
  {
    title: 'Test Your Knowledge',
    icon: <BulbIcon />,
  },
  
  
]
