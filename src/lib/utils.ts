export function htmlDecode(text: string) {
  let doc: Document | null = new DOMParser().parseFromString(text, 'text/html');
  let result = doc.documentElement.textContent;
  doc = null;

  return result;
}

export function reduceTags(tags: string): string[] {
  const result = tags.split(' | ').splice(0, 3);

  return result;
}
export const getStoredCategoriesArray = () => {
  const storedCategoriesString = localStorage.getItem('categories');
  const result = storedCategoriesString === null ? null : JSON.parse(storedCategoriesString);
  return result;
};

export const getStoredCategoriesString = () => getStoredCategoriesArray()?.join(',');
