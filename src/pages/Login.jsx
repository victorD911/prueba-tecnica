const handleSubmit = (e) => {
  e.preventDefault();

  login(username, pin);

  navigate("/dashboard");
};