import { getConnection } from "../db.js";
import userRepository from "../repositories/user-repository.js";
import addressService from "./address-service.js";
import { v4 as uuid } from "uuid";

async function createUser(request) {
  const connection = await getConnection();

  try {
    await connection.beginTransaction();

    const { fullName, email, password, street, city, province, country } =
      request;

    const existingUser = await userRepository.getUserByEmail(connection, email);
    if (existingUser) {
      throw new Error("User already exists");
    }

    console.log(existingUser);

    const address = await addressService.createAddress(connection, {
      id: uuid().toString(),
      street: street,
      city: city,
      province: province,
      country: country,
    });

    console.log(address);

    const result = await userRepository.create(connection, {
      id: uuid().toString(),
      fullName: fullName,
      email: email,
      password: password,
      addressId: address.id,
    });

    console.log(result);

    await connection.commit();

    return {
      id: result.idUser,
      fullName: result.fullName,
      email: result.email,
      password: result.password,
      addressId: result.addressId,
      adress: {
        id: address.id,
        street: address.street,
        city: address.city,
        province: address.province,
        country: address.country,
      },
    };
  } catch (error) {
    await connection.rollback();
    throw error;
  } finally {
    connection.release();
  }
}

export default { createUser };
