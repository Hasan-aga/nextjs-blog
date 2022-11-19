import layout from "../components/layout.module.css";
import Image from "next/image";

export default function () {
  return (
    <div className={layout.container}>
      <h2>404 Not found</h2>
      <div style={{ width: "500px", height: "500px", position: "relative" }}>
        <Image src="/images/travolta.gif" alt="" fill></Image>
      </div>
    </div>
  );
}
