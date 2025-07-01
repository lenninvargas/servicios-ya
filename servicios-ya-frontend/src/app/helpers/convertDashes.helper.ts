export function toUrlString(str: string): string {
  return str.trim().replace(/\s+/g, '-');
}

export function fromUrlString(str: string): string {
  return str.replace(/-/g, ' ');
}
