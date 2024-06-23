export interface IEmail {
  name: string;
  email: string;
  message: string;
  phoneNumber: string;
}

export const EmailTemplate: React.FC<Readonly<IEmail>> = ({
  name,
  email,
  message,
  phoneNumber,
}) => (
  <div
    style={{
      display: "flex",
      fontFamily:
        "system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue,sans-serif",
      flexDirection: "column",
      gap: "20px",
      margin: "20px 50px",
      padding: "40px",
      backgroundColor: "#f5f5f5",
      height: "100vh",
    }}
  >
    <img
      src="../public/HeadLogo.svg"
      style={{
        height: "auto",
        width: "40%",
        alignSelf: "center",
        maxWidth: "400px",
      }}
      alt="honeysuckles-logo"
    />
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <h2 style={{ margin: "0", color: "#f66363" }}>
        Name: <span style={{ color: "black", fontWeight: "500" }}>{name}</span>
      </h2>
      <h2 style={{ margin: "0", color: "#f66363" }}>
        Email:{" "}
        <span style={{ color: "black", fontWeight: "500" }}>{email}</span>
      </h2>
      <h2 style={{ margin: "0", color: "#f66363" }}>
        Phone Number:{" "}
        <span style={{ color: "black", fontWeight: "500" }}>{phoneNumber}</span>
      </h2>
    </div>
    <p style={{ fontSize: "24px" }}>{message}</p>
  </div>
);
