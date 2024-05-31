export const rules = {
  login: [
    {
      required: true,
      message: "Please input login",
      trigger: "blur",
    },
    {
      min: 3,
      max: 10,
      message: "Length should be 3 to 10",
      trigger: "blur",
    },
  ],
  password: [
    {
      required: true,
      message: "Please input password",
      trigger: "blur",
    },
    {
      min: 5,
      message: "Length should be above 5",
      trigger: "blur",
    },
  ],
  repeated_password: [
    {
      required: true,
      message: "Please input password again",
      trigger: "blur",
    },
    {
      min: 5,
      message: "Length should be above 5",
      trigger: "blur",
    },
  ],
};
