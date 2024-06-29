export interface IEmail {
  name: string;
  email: string;
  message: string;
  phoneNumber: string;
  image: any;
}

export const EmailTemplate = ({
  name,
  email,
  message,
  phoneNumber,
  image,
}: IEmail) => {
  return (
    <div
      style={{
        fontFamily:
          "system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue,sans-serif",
        margin: "20px auto",
        padding: "40px",
        backgroundColor: "#f5f5f5",
        height: "fit-content",
        width: "50%",
        maxWidth: "-webkit-fill-available",
      }}
    >
      {/* <div style={{ width: "100%" }}>
        <img
          src={image}
          style={{
            height: "auto",
            width: "40%",
            alignSelf: "center",
            maxWidth: "400px",
            margin: "0 50% 20px 50%",
          }}
          alt="honeysuckles-logo"
        />
      </div> */}
      <h1
        style={{
          margin: "0",
          marginBottom: "20px",
          width: "100%",
        }}
      >
        Honeysuckels Inquiry
      </h1>
      <h2
        style={{
          margin: "0",
          color: "#f66363",
          marginBottom: "10px",
          width: "100%",
        }}
      >
        Name: <span style={{ color: "black", fontWeight: "500" }}>{name}</span>
      </h2>
      <h2
        style={{
          margin: "0",
          color: "#f66363",
          marginBottom: "10px",
          width: "100%",
        }}
      >
        Email:{" "}
        <span style={{ color: "black", fontWeight: "500" }}>{email}</span>
      </h2>
      <h2
        style={{
          margin: "0",
          color: "#f66363",
          marginBottom: "10px",
          width: "100%",
        }}
      >
        Phone Number:{" "}
        <span style={{ color: "black", fontWeight: "500" }}>{phoneNumber}</span>
      </h2>
      <p style={{ fontSize: "20px", width: "100%" }}>{message}</p>
    </div>
  );
};
