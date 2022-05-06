import { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ClipLoader } from 'react-spinners';
import styled, { css, ThemeContext } from 'styled-components';

import { ErrorComponent } from '../../../components/error-component/index';
import { RootState } from '../../../store/index';
import { CodeBlock } from '../code-block/index';

function Codes(): JSX.Element {}
