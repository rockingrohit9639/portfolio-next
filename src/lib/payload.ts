import { revalidateTag } from 'next/cache';
import type { GlobalAfterChangeHook } from 'payload';

export const GlobalAfterChange: GlobalAfterChangeHook = ({ global }) => {
  revalidateTag(global.slug);
};
