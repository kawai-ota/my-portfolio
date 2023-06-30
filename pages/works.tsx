import Meta from "../components/meta";
import Container from "../components/container";
import Hero from "../components/hero";
import Image from "next/image";
import eyecatch1 from "../images/cat-app.png";
import eyecatch2 from "../images/comingsoon.jpg";
import styles from "../styles/works.module.css";

export default function Works() {
  return (
    <Container>
      <Meta pageTitle="Works" pageDesc=" 作品一覧" />
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
          }}
        >
          ←For Cram Teacherという塾向けのサービスを開発しております。
          <br />
          <br />
          私は、長期インターンを始める前に塾講師として東京個別指導学院(以下、TKGと呼ぶ)に勤めておりました。
          <br />
          TKGでは、有給申請や講師のスケジュールやタスクを紙に記載して管理するなど、デジタル化が進んでいない職場でした。講師の方々含め、「紙にいちいち書くのは面倒」などの声もたくさん上がっていました。そこで、この現状を変えたいと思ったことがきっかけで塾向けのサービスを開発して提供しようと考えました。
          <br />
          <br />
          主な内容としては、講師個人、チームでのタスク、講師それぞれのスケジュール管理やスケジュールの共有、有給申請のデジタル化など、私が体験してきて非常に時間がかかるような作業をデジタル化したサービスとなっています。
          <br />
          このサービスを用いることで、業務が多い講師の皆さんの役に立つことができたらいいなと心から思っています。
          <br />
          <br />
          使用技術に関しては、
          <br />
          フロントエンド:Next.js(TypeScript)
          <br />
          バックエンド:Ruby on Rails
          <br />
          その他: Docker Firebase AWS
        </p>
      </div>
    </Container>
  );
}
