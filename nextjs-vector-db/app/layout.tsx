import "./global.css";

export const metadata = {
  title: "Tantive GPT",
  description: "Alles was man über die Tantive wissen kannn und sollte",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
