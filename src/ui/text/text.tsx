import classNames from 'classnames';
import * as React from 'react';

import text from './text.module.scss';

interface BaseProps {
  variant?:
    | 'openSansRegularSM'
    | 'openSansRegularLG'
    | 'openSansSemiBold'
    | 'openSansBold'
    | 'poppinsRegular'
    | 'poppinsMedium'
    | 'poppinsSemiBold';
  color?:
    | 'white'
    | 'gray'
    | 'lightGray'
    | 'black'
    | 'green'
    | 'lightGreen'
    | 'red';
  fontFamily?: 'roboto' | 'publicSans' | 'poppins' | 'openSans';
}

interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  element?: 'p';
}
interface DivProps extends React.HTMLAttributes<HTMLDivElement> {
  element?: 'div';
}

type TextProps = (ParagraphProps | DivProps) & BaseProps;

export function Text({
  children,
  variant,
  color,
  fontFamily,
  className,
  element = 'p',
  ...props
}: React.PropsWithChildren<TextProps>) {
  const textClass = classNames(
    {
      [text.text]: true,
      [text['white']]: color === 'white',
      [text['gray']]: color === 'gray',
      [text['lightGray']]: color === 'lightGray',
      [text['black']]: color === 'black',
      [text['green']]: color === 'green',
      [text['lightGreen']]: color === 'lightGreen',
      [text['red']]: color === 'red',
      [text['openSansRegularSM']]: variant === 'openSansRegularSM',
      [text['openSansRegularLG']]: variant === 'openSansRegularLG',
      [text['openSansSemiBold']]: variant === 'openSansSemiBold',
      [text['openSansBold']]: variant === 'openSansBold',
      [text['poppinsRegular']]: variant === 'poppinsRegular',
      [text['poppinsMedium']]: variant === 'poppinsMedium',
      [text['poppinsSemiBold']]: variant === 'poppinsSemiBold',
      [text['roboto']]: fontFamily === 'roboto',
      [text['publicSans']]: fontFamily === 'publicSans',
      [text['poppins']]: fontFamily === 'poppins',
      [text['openSans']]: fontFamily === 'openSans',
    },
    className,
  );

  if (element === 'div')
    return (
      <div
        className={textClass}
        {...(props as React.HTMLAttributes<HTMLDivElement>)}
      >
        {children}
      </div>
    );

  return (
    <p
      className={textClass}
      {...(props as React.HTMLAttributes<HTMLParagraphElement>)}
    >
      {children}
    </p>
  );
}
