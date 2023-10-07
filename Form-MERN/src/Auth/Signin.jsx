import { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const SignInForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/signin",
        formData
      );

      if (response.status === 200) {
        console.log(response.data.message);
      } else {
        console.log("Server responded with an error.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SignInContainer>
      <h2>Sign In</h2>
      <form onSubmit={handleFormSubmit}>
        <Input
          type="text"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <Input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        <Button type="submit">Sign In</Button>
      </form>
    </SignInContainer>
  );
};

const SignInContainer = styled.div`
  width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export default SignInForm;
