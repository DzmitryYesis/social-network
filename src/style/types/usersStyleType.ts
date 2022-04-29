export type DivPropsType = {
  direction: 'column' | 'column-reverse' | 'row' | 'row-reverse';
  justifyContent?:
    | 'flex-end'
    | 'flex-start'
    | 'center'
    | 'space-between'
    | 'space-around';
  alignItems?: 'flex-end' | 'flex-start' | 'center' | 'self-end' | 'self-start';
  width?: string;
};
