import React, { useState } from "react";
import { TextField, Button, TextareaAutosize } from "@mui/material";
import axios from "axios";

const CardForm = ({ addCard }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    interests: "",
    linkedin: "",
    twitter: "",
  });

  const handleChange = (e) => {
    setFormData((currData) => {
      return { ...currData, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    addCard(formData);
    setFormData({
        name: "",
        description: "",
        interests: "",
        linkedin: "",
        twitter: "",
      })
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        fullWidth
        label="Name"
        name="name"
        variant="outlined"
        value={formData.name}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        fullWidth
        label="description"
        name="description"
        value={formData.description}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Interests"
        name="interests"
        value={formData.interests}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        fullWidth
        label="LinkedIn profile"
        name="linkedin"
        variant="outlined"
        value={formData.linkedin}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Twitter profile"
        name="twitter"
        variant="outlined"
        value={formData.twitter}
        onChange={handleChange}
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};

export default CardForm;
