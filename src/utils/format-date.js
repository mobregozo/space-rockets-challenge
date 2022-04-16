export function formatDate(timestamp) {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(timestamp));
}

export function formatDateTime(timestamp) {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  }).format(new Date(timestamp));
}

export function formatDateTimeOffset(timestamp) {
  const offset = `UTC ${timestamp.slice(19, 25)}`;
  const dateWithoutOffset = timestamp.slice(0, 19);
  const date = formatDateTime(dateWithoutOffset);
  return `${date} ${offset}`;
}
