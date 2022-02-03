import { RootState } from '../../state/store';

export const selectLoading = ({ generic: { isLoading = false } }: RootState): boolean => isLoading;
