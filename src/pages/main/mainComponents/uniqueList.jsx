function UniqueList(props, town = false) {
  return [...new Set(props.map((item) => (town === true ? item.town : item.leadType)))].map(
    (item) => ({
      value: item,
      label: item,
    })
  );
}

export default UniqueList;
