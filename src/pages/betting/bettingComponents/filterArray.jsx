import { format, parseISO, parse, isWithinInterval, isAfter, isBefore } from 'date-fns';

function FilterArray({
  array,
  startDate,
  endDate,
  statusFilter,
  townFilter,
  leadTypeFilter,
  priorityFilter,
}) {
  const filteredPosts = array.filter((item) => {
    function registeredDate() {
      if (startDate > endDate) {
        return false;
      }
      if (!startDate && !endDate) return true;

      const postDate = parse(item.dateRegistration, 'dd.MM.yyyy', new Date());

      if (startDate && endDate) {
        const startFilterDate = parse(startDate, 'yyyy-MM-dd', new Date());
        const endFilterDate = parse(endDate, 'yyyy-MM-dd', new Date());

        if (isBefore(startFilterDate, endFilterDate) || isSameDay(startFilterDate, endFilterDate)) {
          return isWithinInterval(postDate, { start: startFilterDate, end: endFilterDate });
        } else {
          return false;
        }
      }

      if (startDate) {
        const startFilterDate = parse(startDate, 'yyyy-MM-dd', new Date());
        return isAfter(postDate, startFilterDate) || isSameDay(postDate, startFilterDate);
      }

      if (endDate) {
        const endFilterDate = parse(endDate, 'yyyy-MM-dd', new Date());
        return isBefore(postDate, endFilterDate) || isSameDay(postDate, endFilterDate);
      }

      return true;
    }

    function statusMatches() {
      if (statusFilter !== '') {
        return item.status.toLowerCase().includes(statusFilter.toLowerCase());
      } else {
        return item.status;
      }
    }

    // function leadTypeMatches() {
    //   if (leadTypeFilter !== '') {
    //     return item.leadType.toLowerCase().includes(leadTypeFilter.toLowerCase());
    //   } else {
    //     return item.leadType;
    //   }
    // }

    // function priorityMatches() {
    //   if (priorityFilter !== '') {
    //     return item.priority === Number(priorityFilter);
    //   } else {
    //     return item.priority;
    //   }
    // }

    // return registeredDate() && townMatches() && leadTypeMatches() && priorityMatches();
    return registeredDate() && statusMatches();
  });

  return (
    <tbody>
      {filteredPosts.map((item, index) => (
        <tr key={item.userId.toString()}>
          <td>{item.IDLeads}</td>
          <td>{item.dateRegistration}</td>
          <td>{item.updateDate}</td>
          <td>{item.firstName}</td>
          <td>{item.lastname}</td>
          <td>{item.phoneNumber}</td>

          <td>{item.town}</td>
          <td>{item.status}</td>
          <td>{item.reward}</td>
          <td>{item.reasonNotLeading}</td>
          <td>{item.user}</td>
          <td>{item.vacancy}</td>

          <td>{item.challengeStatus}</td>
          <td>{item.UTMcontent}</td>
          <td>{item.UTMsource}</td>
          <td>{item.tariff}</td>
          <td>{item.visitDatetime}</td>
        </tr>
      ))}
    </tbody>
  );
}

export default FilterArray;
