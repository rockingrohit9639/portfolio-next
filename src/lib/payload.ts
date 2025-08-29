import { revalidateTag } from 'next/cache';
import type { CollectionAfterChangeHook, GlobalAfterChangeHook } from 'payload';

export const GlobalAfterChange: GlobalAfterChangeHook = ({ global }) => {
  revalidateTag(global.slug);
};

export const CollectionAfterChange: CollectionAfterChangeHook = ({ collection }) => {
  revalidateTag(collection.slug);
};
