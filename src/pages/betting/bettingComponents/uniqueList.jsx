function UniqueList(props, name = 'vacancy' || 'Town' || 'status') {
  return [
    ...new Set(
      props.map((item) => {
        if (name === 'vacancy') {
          return item.vacancy;
        }
        if (name === 'Town') {
          return item.town;
        }
        if (name === 'status') {
          return item.status;
        }
      })
    ),
  ].map((item) => ({
    value: item,
    label: item,
  }));
}

export default UniqueList;
