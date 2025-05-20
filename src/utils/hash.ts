import { createHash } from 'crypto';

function md5(text: string): string {
  return createHash('md5').update(text).digest('hex');
}

export { md5 };