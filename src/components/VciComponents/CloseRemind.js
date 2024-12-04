import React from 'react'
import { VciCloseRemindStyled } from '../../pages/Vci/style'

export default function CloseRemind() {
  return (
    <VciCloseRemindStyled className='close-remind'>
        <div className='text row1'>Game on hold,</div>
        <div className='text row2'>match will resume shortly</div>
    </VciCloseRemindStyled>
  )
}
