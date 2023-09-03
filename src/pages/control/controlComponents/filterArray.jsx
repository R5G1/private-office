import { format, parseISO, parse, isWithinInterval, isAfter, isBefore } from 'date-fns';

function FilterArray({ array, handleRowClick }) {
  const filteredPosts = array.filter((item) => {
    function shouldExclude() {
      const excludedStatuses = ['Не лид', 'Приглашен в Хаб', 'Создан'];
      return excludedStatuses.includes(item.status);
    }
    return !shouldExclude();
  });

  return (
    <tbody>
      {filteredPosts.map((item, index) => (
        <tr key={item.userId.toString()} onClick={() => handleRowClick(item)}>
          <td>
            {item.firstName} {item.lastname}
          </td>
          <td>{item.IDLeads}</td>
          <td>{item.status}</td>
        </tr>
      ))}
    </tbody>
  );
}

export default FilterArray;
