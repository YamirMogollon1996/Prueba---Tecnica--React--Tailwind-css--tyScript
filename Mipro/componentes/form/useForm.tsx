import React, { useState } from "react";

const useForm = <T extends Object>(initialStado: T) => {
  const [Form, setForm] = useState(initialStado);

  const handleChanuge = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setForm({
      ...Form,
      [name]: value,
    });
  };
  const Onsubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(Form);
  };

  return { Form, handleChanuge, Onsubmit };
};

export default useForm;
