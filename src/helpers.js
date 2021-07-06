export function pretifyDate(timestamp) {
  return new Date(timestamp * 1000).toLocaleString('uk-UA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  });
}

export function cloneDeep(data) {
  return JSON.parse(JSON.stringify(data));
}
