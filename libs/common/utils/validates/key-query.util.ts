/**
 * is key query valid
 * @param keyName
 * @param pattern
 * @returns
 */
export function isKeyQueryValid(keyName: string, pattern) {
  return keyName && keyName.match(pattern);
}

/**
 * is f_key query valid
 * @param keyName
 * @param pattern
 * @returns
 */
export function isFKeyQueryValid(
  keyName: string,
  pattern = /^[-1|((\d+)(\|\d)*)]+$/g,
) {
  return keyName && keyName.match(pattern);
}
