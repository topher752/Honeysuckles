import {
  Body,
  Column,
  Container,
  Font,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://honeysuckles.vercel.app";
const LOGO_URL = `${SITE_URL}/HoneysucklesLogo.png`;

export interface IEmail {
  name: string;
  email: string;
  message: string;
  phoneNumber: string;
  sale?: string;
}

// The sale radio group in ContactForm is seasonal. While it is commented out the
// form still posts this default, so treat it as "nothing selected" either way.
const hasSale = (sale?: string) => !!sale && sale !== "None Selected";

export const EmailTemplate = ({
  name,
  email,
  message,
  phoneNumber,
  sale,
}: IEmail) => {
  return (
    <Html>
      <Head>
        <Font
          fontFamily="Raleway"
          fallbackFontFamily="Helvetica"
          webFont={{
            url: "https://fonts.gstatic.com/s/raleway/v34/1Ptxg8zYS_SKggPNyCg4QIFqPfE.woff2",
            format: "woff2",
          }}
          fontWeight={500}
          fontStyle="normal"
        />
        <Font
          fontFamily="Roboto"
          fallbackFontFamily="Arial"
          webFont={{
            url: "https://fonts.gstatic.com/s/roboto/v47/KFOmCnqEu92Fr1Mu4mxK.woff2",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
      <Preview>
        New inquiry from {name}
        {hasSale(sale) ? ` — ${sale}` : ""}
      </Preview>
      <Body style={body}>
        <Container style={container}>
          <Section style={header}>
            <Heading style={headerTitle}>Honeysuckles</Heading>
            <Text style={headerSubtitle}>Personalized Floral Designs</Text>
          </Section>

          <Section style={content}>
            <Heading style={sectionTitle}>New Inquiry</Heading>
            <Text style={introText}>
              Select the email below to reach out to {name}.
            </Text>

            <Section style={fieldGroup}>
              <Text style={label}>Name</Text>
              <Text style={value}>{name}</Text>
            </Section>

            <Section style={fieldGroup}>
              <Text style={label}>Email</Text>
              <Text style={value}>
                <Link href={`mailto:${email}`} style={linkStyle}>
                  {email}
                </Link>
              </Text>
            </Section>

            {phoneNumber && (
              <Section style={fieldGroup}>
                <Text style={label}>Phone Number</Text>
                <Text style={value}>
                  <Link href={`tel:${phoneNumber}`} style={linkStyle}>
                    {phoneNumber}
                  </Link>
                </Text>
              </Section>
            )}

            {hasSale(sale) && (
              <Section style={shadedBlock}>
                <Text style={label}>Sale Request</Text>
                <Text style={shadedValue}>{sale}</Text>
              </Section>
            )}

            <Row>
              <Column style={messageAccentBar} />
              <Column style={messageBlockCell}>
                <Text style={label}>Message</Text>
                <Text style={messageValue}>{message}</Text>
              </Column>
            </Row>
          </Section>

          <Section style={footer}>
            <Hr style={footerDivider} />
            <Row>
              <Column style={footerCell}>
                <Img
                  src={LOGO_URL}
                  alt="Honeysuckles"
                  width={180}
                  height={49}
                  style={logoImg}
                />
              </Column>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

//#region styles
const body: React.CSSProperties = {
  backgroundColor: "#f5f5f5",
  fontFamily: "Roboto, Arial, sans-serif",
  margin: 0,
  padding: "40px 0",
};

const container: React.CSSProperties = {
  maxWidth: "600px",
  margin: "0 auto",
  backgroundColor: "#ffffff",
};

const header: React.CSSProperties = {
  backgroundColor: "#750d37",
  borderRadius: "10px 10px 0 0",
  textAlign: "center",
  padding: "36px 40px 32px",
};

const headerTitle: React.CSSProperties = {
  color: "#ffffff",
  fontFamily: "Raleway, Helvetica, sans-serif",
  fontSize: "32px",
  fontWeight: 500,
  letterSpacing: "0.04em",
  margin: 0,
};

const headerSubtitle: React.CSSProperties = {
  color: "#f3d7df",
  fontSize: "13px",
  fontStyle: "italic",
  letterSpacing: "0.06em",
  margin: "8px 0 0",
};

const content: React.CSSProperties = {
  padding: "36px 40px 28px",
};

const sectionTitle: React.CSSProperties = {
  color: "#f66363",
  fontFamily: "Raleway, Helvetica, sans-serif",
  fontSize: "20px",
  fontWeight: 700,
  margin: "0 0 6px",
};

const introText: React.CSSProperties = {
  color: "#6b6b6b",
  fontSize: "14px",
  margin: "0 0 24px",
};

const fieldGroup: React.CSSProperties = {
  marginBottom: "16px",
};

const label: React.CSSProperties = {
  color: "#750d37",
  fontSize: "12px",
  fontWeight: 700,
  letterSpacing: "0.06em",
  textTransform: "uppercase",
  margin: "0 0 2px",
};

const value: React.CSSProperties = {
  color: "#212121",
  fontSize: "15px",
  margin: 0,
};

const linkStyle: React.CSSProperties = {
  color: "#035e7b",
  textDecoration: "none",
};

const shadedBlock: React.CSSProperties = {
  backgroundColor: "#fdeeee",
  padding: "14px 16px",
  marginBottom: "16px",
};

const shadedValue: React.CSSProperties = {
  color: "#212121",
  fontSize: "15px",
  margin: 0,
};

const messageAccentBar: React.CSSProperties = {
  backgroundColor: "#002e2c",
  width: "4px",
};

const messageBlockCell: React.CSSProperties = {
  backgroundColor: "#fafafa",
  padding: "14px 16px",
};

// Source is a <textarea>, so preserve the line breaks the sender typed.
const messageValue: React.CSSProperties = {
  color: "#212121",
  fontSize: "15px",
  lineHeight: "1.6",
  margin: 0,
  whiteSpace: "pre-wrap",
};

const footer: React.CSSProperties = {
  padding: "0 40px 32px",
};

const footerDivider: React.CSSProperties = {
  borderColor: "#f66363",
  margin: 0,
};

const footerCell: React.CSSProperties = {
  textAlign: "center",
  padding: "20px 0 0",
};

const logoImg: React.CSSProperties = {
  display: "block",
  margin: "0 auto",
};
//#endregion
