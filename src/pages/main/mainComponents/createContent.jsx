function createContent(post, type) {
  function chengType(item) {
    if (type == 'userId') return item.userId;
    if (type == 'town') return item.town;
    if (type == 'leadType') return item.leadType;
    if (type == 'registeredFrom') return item.registeredFrom;
    if (type == 'registeredTo') return item.registeredTo;
    if (type == 'priority') return item.priority;
    if (type == 'rate') return item.rate;
  }

  const result = post.map((item, index) => {
    return chengType(item);
  });
  return result;
}
export default createContent;
