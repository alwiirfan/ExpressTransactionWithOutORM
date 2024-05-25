import userService from "../services/user-service.js";

async function createUser(req, res) {
  const { fullName, email, password, street, city, province, country } =
    req.body;

  try {
    const result = await userService.createUser({
      fullName: fullName,
      email: email,
      password: password,
      street: street,
      city: city,
      province: province,
      country: country,
    });

    return res.status(200).json({
      status: 200,
      message: "User created successfully",
      data: result,
    });
  } catch (error) {
    return res.status(500).json({ status: 500, message: error.message });
  }
}

export default { createUser };
