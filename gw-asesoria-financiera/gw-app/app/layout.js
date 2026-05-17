export const metadata = {
  title: 'GW Asesoría Financiera',
  description: 'Educación financiera para Tijuana y la frontera',
}
export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body style={{margin:0,padding:0,background:'#0f1220'}}>{children}</body>
    </html>
  )
}
