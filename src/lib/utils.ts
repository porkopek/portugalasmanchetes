export function htmlDecode(text: string) {
  let doc: Document | null = new DOMParser().parseFromString(text, 'text/html');
  let result = doc.documentElement.textContent;
  doc = null;

  return result;
}
