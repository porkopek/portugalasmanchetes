export function htmlDecode(text: string) {
  let doc: Document | null = new DOMParser().parseFromString(text, 'text/html');
  let result = doc.documentElement.textContent;
  doc = null;

  return result;
}

export function reduceTags(tags: string): string[] {
  const result = tags.split(' | ').splice(0, 4);

  return result;
}

export function getLocalStorageObject<T>(item: string) {
  const storedCategoriesString = localStorage.getItem(item);
  const result: T | null =
    storedCategoriesString === null ? null : JSON.parse(storedCategoriesString);
  return result;
}

export function setLocalStorageObject(item: string, object: any) {
  const stringObject = JSON.stringify(object);
  localStorage.setItem(item, stringObject);
}

export const getDaysSince2020First = (today?: Date) => {
  const firstDay = new Date(2020, 0, 1);
  if (today == null) {
    today = new Date();
  }
  const elapsedMilliseconds = today.valueOf() - firstDay.valueOf();
  const days = Math.trunc(elapsedMilliseconds / (1000 * 60 * 60 * 24));
  return days;
};

export function formatDate(date: Date) {
  var day = date.getUTCDate();
  var month = date.getUTCMonth() + 1;
  var year = date.getUTCFullYear();

  return day + ' - ' + month + ' - ' + year;
}
