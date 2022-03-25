function AstronautRows(props) {
  const { craft, name } = props;
  return (
    <tr>
      <td>{craft}</td>
      <td>{name}</td>
    </tr>
  );
}

export default AstronautRows;
