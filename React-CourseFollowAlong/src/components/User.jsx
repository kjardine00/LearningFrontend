function User({ id, name, username }) {
  return (
    <div style={{ border: "4px solid red", margin: "8px 0px" }}>
      <div>{name}</div>
      <div>{username}</div>
      <div>{id}</div>
    </div>
  );
}

export default User;
