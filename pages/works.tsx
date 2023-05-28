import Container from "../components/container";
import Hero from "../components/hero";
import Image from "next/image";
import eyecatch1 from "../images/cat-app.png";
import eyecatch2 from "../images/comingsoon.jpg";
import styles from "../styles/works.module.css";

export default function Works() {
  return (
    <Container>
      <Hero title="Works" subtitle="my works" />
      <div className={styles.worksContainer}>
        <a href="https://cat-app-gamma.vercel.app/">
          <div
            style={{
              maxWidth: "1000px",
              height: "auto",
            }}
          >
            <Image
              src={eyecatch1}
              alt=""
              layout="responsive"
              priority
              placeholder="blur"
            />
          </div>
        </a>
        <p
          style={{
            maxWidth: "50%",
            height: "auto",
            marginTop: 30,
          }}
        >
          ←このアプリは、朝数回クリックすれば癒される猫さんがたくさん出てきてくれるというアプリです。
          <br />
          朝の憂鬱な時間を少しでも改善できればいいなという気持ちで作成しました。また、この作品はNext.jsを始めて使用した作品なので、少し拙い部分があると思います。
          <br />
          しかし、朝が辛いと思う人にとって少しでも笑顔に、元気になってほしいという気持ちで作成したので、使用してみてください！
          <br />
          また、このアプリではSSRを使用しています。
        </p>
      </div>
      <div className={styles.worksContainer}>
        <div
          style={{
            maxWidth: "1000px",
            height: "auto",
          }}
        >
          <Image
            src={eyecatch2}
            alt=""
            layout="responsive"
            priority
            placeholder="blur"
          />
        </div>
        <p
          style={{
            maxWidth: "50%",
            height: "auto",
            marginTop: 30,
          }}
        >
          ←このアプリは9月の完成をめどに作成しています。What&apos;s
          Today?というアプリ名にしようと考えています。
          <br />
          <br />
          具体的には色々な人が1日にあった面白い話や面白い画像・動画、また、癒される画像などもシェアできて、面白さや癒やされ度にランキングなどをつけることができます。
          <br />
          同じように、今日の美味しかったご飯、今日のファッション、今日の音楽など今日にまつわることを投稿できて、カテゴリごとにランキングをつけることができます。
          <br />
          <br />
          使用技術に関しては、
          <br />
          フロントエンド:Next.js(TypeScript)
          <br />
          バックエンド:Rails
          <br />
          を予定しています。また、入念にテストもしていこうと考えています。
        </p>
      </div>
    </Container>
  );
}
