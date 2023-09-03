import { format, parseISO, parse, isWithinInterval, isAfter, isBefore } from 'date-fns';

function FilterArray({
  array,
  statusFilter,
  IDLeadsFilter,
  phoneNumberFilter,
  townFilter,
  vacancyFilter,
  setSelectedRow,
}) {
  const filteredPosts = array.filter((item) => {
    function statusMatches() {
      if (statusFilter !== '') {
        return item.status.toLowerCase().includes(statusFilter.toLowerCase());
      } else {
        return item.status;
      }
    }
    function IDLeadsMatches() {
      if (IDLeadsFilter !== '') {
        return item.IDLeads.toLowerCase().includes(IDLeadsFilter.toLowerCase());
      } else {
        return item.status;
      }
    }
    function phoneNumberMatches() {
      if (phoneNumberFilter !== '') {
        return item.phoneNumber.toLowerCase().includes(phoneNumberFilter.toLowerCase());
      } else {
        return item.phoneNumber;
      }
    }
    function townMatches() {
      if (townFilter !== '') {
        return item.town === townFilter;
      } else {
        return item.town;
      }
    }
    function vacancyMatches() {
      if (vacancyFilter !== '') {
        return item.vacancy === vacancyFilter;
      } else {
        return item.vacancy;
      }
    }
    return (
      statusMatches() &&
      IDLeadsMatches() &&
      phoneNumberMatches() &&
      townMatches() &&
      vacancyMatches()
    );
  });

  return (
    <tbody>
      {filteredPosts.map((item, index) => (
        <tr key={item.userId.toString()} onClick={() => setSelectedRow(item)}>
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
