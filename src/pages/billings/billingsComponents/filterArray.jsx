import { parse } from 'date-fns';

function FilterArray({ array, townFilter, leadTypeFilter, priorityFilter, startDate, endDate }) {
  const filteredPosts = array.filter((item) => {
    function registeredDate(start, end) {
      if (start > end) {
        return false;
      }
      if (!start && !end) return true;

      const postDate = parse(item.dateRegistration, 'dd.MM.yyyy', new Date());
      console.log(postDate);
      if (start && end) {
        const startFilterDate = parse(start, 'yyyy-MM-dd', new Date());
        const endFilterDate = parse(end, 'yyyy-MM-dd', new Date());

        if (isBefore(startFilterDate, endFilterDate) || isSameDay(startFilterDate, endFilterDate)) {
          return isWithinInterval(postDate, { start: startFilterDate, end: endFilterDate });
        } else {
          return false;
        }
      }

      if (start) {
        const startFilterDate = parse(start, 'yyyy-MM-dd', new Date());
        return isAfter(postDate, startFilterDate) || isSameDay(postDate, startFilterDate);
      }

      if (end) {
        const endFilterDate = parse(end, 'yyyy-MM-dd', new Date());
        return isBefore(postDate, endFilterDate) || isSameDay(postDate, endFilterDate);
      }

      return true;
    }

    return registeredDate();
  });

  console.log(array);
  return (
    <tbody>
      {filteredPosts.map((item, index) => (
        <tr key={item.userId.toString()}>
          <td>{item.town}</td>
          <td>{item.leadType}</td>
          <td>{item.registeredFrom}</td>
          <td>{item.registeredTo}</td>
          <td>{item.priority}</td>
          <td>{item.rate}</td>
        </tr>
      ))}
    </tbody>
  );
}

export default FilterArray;
