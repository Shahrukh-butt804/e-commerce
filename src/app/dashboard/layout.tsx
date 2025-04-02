import ShoppingCart from "@/components/myCart";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <>
      {children}
      <ShoppingCart/>
    </>
  );
}
