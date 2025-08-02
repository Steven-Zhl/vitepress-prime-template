export const transformTime = (time?: string | Date): string => {
  if (!time) return "";
  const date = time instanceof Date ? time : new Date(time);

  // 使用 toLocaleString 简化格式化
  return date.toLocaleString('sv-SE', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  }).replace('T', ' ');
};
