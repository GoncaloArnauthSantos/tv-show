import { RootState } from '../../state/store';
import { IError } from '../../../api/entities/IError';

export const selectLoading = ({ generic: { isLoading = false } }: RootState): boolean => isLoading;

export const selectError = ({ generic: { error = {} as IError } }: RootState): IError => error;
