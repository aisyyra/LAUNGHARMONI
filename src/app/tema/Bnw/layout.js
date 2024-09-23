export default function BnwLayout({ children }) {
    return (
      <html lang="en">
        <body>
          {children}{/* Tidak ada Header/Footer di sini */}
        </body>
      </html>
    );
  }