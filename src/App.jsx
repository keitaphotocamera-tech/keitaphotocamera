// import React from "react";

// export default function App() {
//   return (
//     <div style={{ textAlign: "center", padding: "2rem" }}>
//       <h1>🚀 Face Store</h1>
//       <p>ระบบขายภาพด้วยการสแกนใบหน้า</p>
//       <p>เชื่อมต่อ Supabase และสแกนใบหน้าผ่านกล้อง</p>
//     </div>
//   );
// }
import React, { useState } from "react";
import FaceScan from "./FaceScan";

export default function App() {
  const [showScan, setShowScan] = useState(false);

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>🚀 Face Store</h1>
      <p>ระบบขายภาพด้วยการสแกนใบหน้า</p>
      {!showScan ? (
        <button onClick={() => setShowScan(true)}>เริ่มสแกนใบหน้า</button>
      ) : (
        <FaceScan />
      )}
    </div>
  );
}
