async function create(connection, request) {
  const { id, street, city, province, country } = request;
  const sql =
    "INSERT INTO address (id, street, city, province, country) VALUES (?, ?, ?, ?, ?)";
  await connection.execute(sql, [id, street, city, province, country]);
  return { id, street, city, province, country };
}

export default { create };
