import { useRouter } from "next/router";
import Section1 from "../../src/component/About/Section1";
import Section2 from "../../src/component/About/Section2";
import Section3 from "../../src/component/About/Section3";
import Section4 from "../../src/component/About/Section4";

export default function About() {
  const router = useRouter();
  const changeRouteHandler = (routeStr) => {
    router.push(routeStr);
  };
  return (
    <div>
      <Section1 />
      <Section2 changeRouteHandler={changeRouteHandler} />
      <Section3 changeRouteHandler={changeRouteHandler} />
      <Section4 changeRouteHandler={changeRouteHandler} />
    </div>
  );
}
