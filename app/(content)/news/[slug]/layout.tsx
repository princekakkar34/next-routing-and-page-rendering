export default function NewsDetailPage({ children, modal }: { children: React.ReactNode, modal: React.ReactNode }) {
  return (
    <>
      {modal}
      {children}
    </>
  );
}