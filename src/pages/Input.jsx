import React from "react";

const InputPropsMap = {
  email:   { type: "email",  name: "email",    placeholder: "Enter your email",    pattern: ".+@.+\\..+" },
  name:    { type: "text",   name: "name",     placeholder: "Enter your name",     minLength: 2 },
  contact: { type: "tel",    name: "contact",  placeholder: "Enter your phone",    pattern: "[0-9]{10,}" },
  password:{ type: "password", name: "password",placeholder: "Enter your password", minLength: 5 }

};

export default function Input({ kind, ...rest }) {
  const props = InputPropsMap[kind] || { type: "text", name: kind };
  return <input {...props} {...rest} />;
}