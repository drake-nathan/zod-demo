import axios from "axios";

export const fetchUsers = async (amount: number) => {
  const res = await axios.get(
    `http://localhost:3005/users?amount=${amount}`,
  );

  return res.data;
};
