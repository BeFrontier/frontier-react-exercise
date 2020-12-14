import React from 'react'

import BooleanElement from '../../base/components/Input/BooleanElement/BooleanElement'
import MultichoiceElement from '../../base/components/Input/MultichoiceElement/MultichoiceElement'
import TextElement from '../../base/components/Input/TextElement/TextElement'
import TextareaElement from '../../base/components/Input/TextareaElement/TextareaElement'

import '../../base/styles/grid.scss'

import ElementProps from '../../types/ElementProps'

export default function ElementFactory(element: ElementProps<string|boolean>) {  
  switch (element.element.type){
    case 'boolean':
      return <BooleanElement {...element} key={element.element.id} />
    case 'textarea':
      return <TextareaElement {...element} key={element.element.id} />
    case 'text':
      return <TextElement {...element} key={element.element.id} />
    case 'multichoice':
      return <MultichoiceElement {...element} key={element.element.id} />
  }
}
