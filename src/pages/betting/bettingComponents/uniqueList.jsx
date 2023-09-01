function UniqueList(props, town = false || true || 'status') {
  return [
    ...new Set(
      props.map((item) => {
        if (town === false) {
          return item.leadType;
        }
        if (town === true) {
          return item.town;
        }
        if (town === 'status') {
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
