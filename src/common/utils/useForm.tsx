import { useState } from "react";
import { notification } from "antd";

interface IValues {
  name: string;
  email: string;
  message: string;
}

const initialValues: IValues = {
  name: "",
  email: "",
  message: "",
};

export const useForm = (validate: { (values: IValues): IValues }) => {
  const [formState, setFormState] = useState<{
    values: IValues;
    errors: IValues;
  }>({
    values: { ...initialValues },
    errors: { ...initialValues },
  });

  const handleSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const values = formState.values;
    const errors = validate(values);
    setFormState((prevState) => ({ ...prevState, errors }));

    // Email sending logic
    const emailBody = `Name: ${values.name}\nEmail: ${values.email}\nMessage: ${values.message}`;
    const mailtoLink = `mailto:neusec2024@gmail.com?subject=Contact Form Submission&body=${encodeURIComponent(emailBody)}`;

    if (Object.values(errors).every((error) => error === "")) {
      window.location.href = mailtoLink; // This will open the user's email client
      event.target.reset();
      setFormState(() => ({
        values: { ...initialValues },
        errors: { ...initialValues },
      }));

      notification["success"]({
        message: "Success",
        description: "Your message has been sent!",
      });
    } else {
      notification["error"]({
        message: "Error",
        description: "Please fix the errors in the form.",
      });
    }
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    event.persist();
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      values: {
        ...prevState.values,
        [name]: value,
      },
      errors: {
        ...prevState.errors,
        [name]: "",
      },
    }));
  };

  return {
    handleChange,
    handleSubmit,
    values: formState.values,
    errors: formState.errors,
  };
};
