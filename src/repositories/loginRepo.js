const loginRepo = {
  checkCredentials: async (email, password) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    if (
      email != "kmtsm1692004@gmail.com" ||
      password != "kmtsm1692004@gmail.com"
    ) {
      throw new Error("Data is not valid!");
    }
  },
  checkOtp: async (email, otp) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    if (otp != 0) {
      throw new Error("Data is not valid!");
    }
  },
};
export default loginRepo;
