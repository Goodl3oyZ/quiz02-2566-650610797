"use client";

import { PostOwner } from "@/components/PostOwner";
import { Comment } from "@/components/Comment";
import { Reply } from "@/components/Reply";

export default function HomePage() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "#18191A" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px", backgroundColor: "#242526" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm"
      >
        <PostOwner
          postImagePath="/profileImages/myProfile.webp"
          posterName="Phanudet Sueaphueak 650610797"
          textPost="Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #261207"
          likePost="100"
        />

        <Comment
          userImagePath="/profileImages/lisa.jpg"
          username="Lisa"
          replyText="จริงค่า"
          likeNum="999"
        />

        <Reply
          userImagePath="/profileImages/puppy.jpg"
          username="หมาน้อย"
          replyText="จริงค้าบบบบบบบบ"
          likeNum="0"
        />

        <Reply
          userImagePath="/profileImages/popcat.png"
          username="Cat Meme"
          replyText="ลิซ่า"
          likeNum="2"
        />
        <Comment
          userImagePath="/profileImages/Charliebrown.jpg"
          username="Charlie Brown"
          replyText="บ้าไปแล้ว"
          likeNum="0"
        />
      </div>
    </div>
  );
}
