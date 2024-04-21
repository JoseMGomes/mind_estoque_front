import React, { useState, useCallback, forwardRef } from 'react';
import { TextInputMask, TextInputMaskProps } from 'react-native-masked-text';

import Input from '../Input';

interface InputMask extends TextInputMaskProps{


}

const InputMask: React.FC<InputMask> = ({ type, ...rest }, inputRef) => {
  const [text, setText] = useState('');
  const [rawText, setRawText] = useState('');

  const handleChangeText = useCallback((maskedText:string, unmaskedText:any) => {
    setText(maskedText);
    setRawText(unmaskedText);
  }, []);

  return (
    <TextInputMask
      type={type}
      includeRawValueInChangeText
      value={text}
      options={
        {maskType:'BRL'}
      }
      onChangeText={handleChangeText}
      customTextInput={Input}
      customTextInputProps={{
        ref: inputRef,
        rawText,
        onInitialData: setText,
      }}
      {...rest}
    />
  );
};

export default (InputMask);