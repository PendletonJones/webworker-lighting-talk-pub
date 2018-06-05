import * as React from 'react';
import { StyledFunction } from 'styled-components';

export type StyledWrapper<T, H> = StyledFunction<T & React.HTMLProps<H>>;
export type Maybe<T> = T | undefined;