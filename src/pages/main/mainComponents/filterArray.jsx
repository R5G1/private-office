import { parse } from 'date-fns';

function FilterArray({ array, townFilter, leadTypeFilter, priorityFilter, startDate, endDate }) {
  const filteredPosts = array.filter((item) => {
    function registeredDate() {
      if (!startDate && !endDate) {
        return true;
      }

      const registeredFromDate = parse(item.registeredFrom, 'dd.MM.yyyy', new Date());
      const registeredToDate = parse(item.registeredTo, 'dd.MM.yyyy', new Date());
      const selectedFromDate = parse(startDate, 'yyyy-MM-dd', new Date());
      const selectedToDate = parse(endDate, 'yyyy-MM-dd', new Date());

      return selectedFromDate <= registeredFromDate && selectedToDate >= registeredToDate;
    }

    function townMatches() {
      if (townFilter !== '') {
        return item.town === townFilter;
      } else {
        return item.town;
      }
    }

    function leadTypeMatches() {
      if (leadTypeFilter !== '') {
        return item.leadType === leadTypeFilter;
      } else {
        return item.leadType;
      }
    }

    function priorityMatches() {
      if (priorityFilter !== '') {
        return item.priority === Number(priorityFilter);
      } else {
        return item.priority;
      }
    }

    return registeredDate() && townMatches() && leadTypeMatches() && priorityMatches();
  });

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
