import addressRepository from "../repositories/address-repository.js";

async function createAddress(connection, request) {
  try {
    const { id, street, city, province, country } = request;

    const result = await addressRepository.create(connection, {
      id: id,
      street: street,
      city: city,
      province: province,
      country: country,
    });

    return result;
  } catch (error) {
    throw new Error(error.message);
  }
}

export default { createAddress };
