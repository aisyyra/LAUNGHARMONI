export default function GoldenBlackLayout({ children }) {
    return (
      <html lang="en">
        <body>
          <main>{children}</main> {/* Tidak ada Header/Footer di sini */}
        </body>
      </html>
    );
  }