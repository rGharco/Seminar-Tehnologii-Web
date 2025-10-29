const formatString = (s, ...format) => {
   return s.replace(/\[[^\]]+\]/g, () => format.shift() || '');
}

console.log(formatString("Un [substantiv] mergea [adjectiv] la munca.", 'cal', 'tropaind'));
