import {SortingOptionVariants} from '../const.ts';


export type SortingOption = typeof SortingOptionVariants[keyof typeof SortingOptionVariants];
