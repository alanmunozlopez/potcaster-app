// TODO: this fn is only to test the loading pages, remove after
export const utils = time =>
  new Promise(resolve => {
    setTimeout(() => resolve(1), time);
  });

export const unEscape = htmlStr => {
  htmlStr = htmlStr.replace(/&lt;/g, '<');
  htmlStr = htmlStr.replace(/&gt;/g, '>');
  htmlStr = htmlStr.replace(/&quot;/g, '"');
  htmlStr = htmlStr.replace(/&#39;/g, "'");
  htmlStr = htmlStr.replace(/&amp;/g, '&');
  return htmlStr;
};
