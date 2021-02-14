import { useRouter } from "next/router";

export default function ID() {
  const router = useRouter();
  const { id } = router.query;

  return <div>공연 ID: {id}</div>;
}
