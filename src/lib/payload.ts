import { revalidateTag } from 'next/cache';
import type { CollectionAfterChangeHook, CollectionAfterDeleteHook, GlobalAfterChangeHook } from 'payload';

export const GlobalAfterChange: GlobalAfterChangeHook = ({ global }) => {
  revalidateTag(global.slug);
};

export const CollectionAfterChange: CollectionAfterChangeHook = ({ collection }) => {
  revalidateTag(collection.slug);
};

export const CollectionAfterDelete: CollectionAfterDeleteHook = ({ collection }) => {
  revalidateTag(collection.slug);
};
