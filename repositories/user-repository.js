async function create(connection, request) {
  const { id, fullName, email, password, addressId } = request;
  const sql =
    "INSERT INTO users (id, full_name, email, password, address_id) VALUES (?, ?, ?, ?, ?)";
  await connection.execute(sql, [id, fullName, email, password, addressId]);
  return { id, fullName, email, password, addressId };
}

async function getUserByEmail(connection, email) {
  const sql = "SELECT * FROM users WHERE email = ? LIMIT 1";
  const [result] = await connection.execute(sql, [email]);
  return result.length > 0 ? result[0] : null;
}

export default { create, getUserByEmail };
