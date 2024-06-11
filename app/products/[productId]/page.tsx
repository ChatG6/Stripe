export default function Page({ params }: { params: { productId: string } }) {
  return (
    <p>{params.productId}</p>
  );
}