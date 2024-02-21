import classNames from 'classnames';
import * as React from 'react';

import classes from './text.module.scss';

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
      [classes.text]: true,
      [classes['white']]: color === 'white',
      [classes['gray']]: color === 'gray',
      [classes['lightGray']]: color === 'lightGray',
      [classes['black']]: color === 'black',
      [classes['green']]: color === 'green',
      [classes['lightGreen']]: color === 'lightGreen',
      [classes['red']]: color === 'red',
      [classes['openSansRegularSM']]: variant === 'openSansRegularSM',
      [classes['openSansRegularLG']]: variant === 'openSansRegularLG',
      [classes['openSansSemiBold']]: variant === 'openSansSemiBold',
      [classes['openSansBold']]: variant === 'openSansBold',
      [classes['poppinsRegular']]: variant === 'poppinsRegular',
      [classes['poppinsMedium']]: variant === 'poppinsMedium',
      [classes['poppinsSemiBold']]: variant === 'poppinsSemiBold',
      [classes['roboto']]: fontFamily === 'roboto',
      [classes['publicSans']]: fontFamily === 'publicSans',
      [classes['poppins']]: fontFamily === 'poppins',
      [classes['openSans']]: fontFamily === 'openSans',
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
