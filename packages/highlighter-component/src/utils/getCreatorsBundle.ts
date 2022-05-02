/* eslint-disable max-len */
import type {
  ToolbarCreator,
  ComponentCreatorUnion,
  ComponentCreatorWithToolbar,
  ExtendedTypes,
} from '../interfaces/creators';

const withToolbar = (list: ComponentCreatorUnion[]): list is ComponentCreatorWithToolbar<ExtendedTypes>[] => list[0] && 'toolbarIcon' in list[0];

export const getCreatorsBundle = (
  creators: ComponentCreatorUnion[],
): {
  componentCreator: ComponentCreatorUnion[];
  toolbarCreator: ToolbarCreator<ExtendedTypes>[];
} => {
  if (!creators.length) throw new Error('Please add at least one creator');

  if (!withToolbar(creators)) {
    return {
      componentCreator: creators,
      toolbarCreator: [],
    };
  }

  return {
    componentCreator: creators,
    toolbarCreator: creators.map((el) => ({
      format: el.type,
      icon: el.toolbarIcon,
      type: el.toolbarType,
    })),
  };
};
