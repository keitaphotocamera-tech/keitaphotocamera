import React, { useEffect, useRef, useState } from "react";
import * as faceapi from "face-api.js";
import { supabase } from "./supabaseClient";

export default function FaceScan() {
  const videoRef = useRef();
  const [modelsLoaded, setModelsLoaded] = useState(false);
  const [message, setMessage] = useState("กำลังโหลดโมเดล...");

  // โหลดโมเดล face-api.js
  useEffect(() => {
    const loadModels = async () => {
    const MODEL_URL = "./models";
    await Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
        faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
        faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
      ]);
      setModelsLoaded(true);
      setMessage("พร้อมใช้งาน! กดปุ่มเพื่อสแกนใบหน้า");
    };
    loadModels();

    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
      videoRef.current.srcObject = stream;
    });
  }, []);

  // สแกนหน้า
  const handleScan = async () => {
    if (!modelsLoaded) {
      setMessage("โมเดลยังโหลดไม่ครบ...");
      return;
    }

    setMessage("กำลังสแกน...");
    const detection = await faceapi
      .detectSingleFace(videoRef.current, new faceapi.TinyFaceDetectorOptions())
      .withFaceLandmarks()
      .withFaceDescriptor();

    if (!detection) {
      setMessage("ไม่พบใบหน้า ลองใหม่อีกครั้ง");
      return;
    }

    const embedding = Array.from(detection.descriptor);
    console.log("📸 Face embedding:", embedding);

    // บันทึกข้อมูลไปยัง Supabase
    const userId = "demo-user"; // สมมุติ user (ภายหลังจะใช้ auth)
    const { error } = await supabase.from("face_embeddings").insert({
      user_id: userId,
      embedding,
    });

    if (error) {
      console.error(error);
      setMessage("เกิดข้อผิดพลาดในการบันทึก Supabase");
    } else {
      setMessage("✅ บันทึกใบหน้าสำเร็จ!");
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "1rem" }}>
      <h2>สแกนใบหน้า</h2>
      <video ref={videoRef} width="320" height="240" autoPlay muted></video>
      <div style={{ margin: "1rem" }}>
        <button onClick={handleScan}>📷 สแกนใบหน้า</button>
      </div>
      <p>{message}</p>
    </div>
  );
}
