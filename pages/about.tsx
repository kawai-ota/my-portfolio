import Meta from "../components/meta";
import Hero from "../components/hero";
import Container from "../components/container";
import PostBody from "../components/post-body";
import Contact from "../components/contact";
import {
  TwoColumn,
  TwoColumnMain,
  TwoColumnSidebar,
} from "../components/two-column";
import Image from "next/image";
import eyecatch from "../images/about-kukku.jpg";

export default function About() {
  return (
    <>
      <Container>
        <Meta pageTitle="About" pageDesc = "自己紹介"/>
        <Hero title="About" subtitle="Who's Ota Kawai" />

        <figure>
          <Image
            src={eyecatch}
            alt=""
            layout="responsive"
            width={1200}
            height={800}
            objectFit="contain"
            sizes="(min-width:1152px) 1152px, 100vw"
            priority
            placeholder="blur"
          />
        </figure>

        <TwoColumn>
          <TwoColumnMain>
            <PostBody>
              <h2>My Introduce</h2>
              <p>
                河合桜汰(かわい おうた)と申します。芝浦工業大学 システム理工学部
                数理科学科に所属しています。4年生から配属される研究室では、機械学習を専攻しようと考えています。
                <br />
                私は、ファッションに興味があるので、画像認識を用いて、自分の持っている洋服の中で最新のトレンドに合わせた
                オシャレな組み合わせを見つけることができるような機能を開発したいと考えています。
                <br />
                私はファッションに興味を持ってから、外に出かけることが大好きになったりと自分の生活が大きく変わリました。
                今は、ファッションに興味がない人でも自分が開発したアプリでファッションが好きになってくれるそんなキッカケになってくれたらいいと思うので、4年生からの研究では
                全力で取り組み、必ずこのアプリの開発を実現させたいと考えています。
              </p>
              <h3>My Dream</h3>
              <p>
                私の将来の夢は世界中を笑顔にできるエンジニアになることです。4年生からの研究テーマもファッションを通じて、世界中の人を笑顔にするという目的があります。
                私自身、ファッションを好きになったことがきっかけで外に出かけることが多くなり、外に出ることによって今まで以上に笑顔になる時間が増えました。そんな自分の経験を活かして、今はファッションが好きでない人にも興味を持ってもらって色々な人の笑顔の原動力になりたいと思っています。
                <br />
                また、ファッション以外にも人を笑顔にするシステムやサービスをどんどん生み出して、どんな国の人でも笑顔になれる。そんなシステムやサービスを実現したいと考えています。
                <br />
              </p>
              <h3>My career</h3>
              <p>
                大学1年生→東京個別指導学院、武田塾での塾講師として勤務。
                <br />
                <br />
                大学2年生→引き続き2つの塾で勤務。2年目となり、東京個別指導学院ではリーダー講師を経験。
                <br />
                <br />
                大学2年生2月→YouTubeでTECH
                WORLDというチャンネルと出会い、エンジニアになることを志す。1ヶ月間HTML&CSS、JavaScriptを独学で学習し、ポートフォリオを作成。
                <br />
                <br />
                大学2年生3月〜大学3年生現在→塾は退職し、Alleeks株式会社にてエンジニアインターンとして勤務。
                <br />
                <br />
                Alleeks株式会社での主な業務は Your
                connectというコールセンターシステムの改良、保守・運用や、VIXELLというPanasonicの医薬品輸送向け保冷ボックスの改良などを担当。
                <br />
                6月からは新規事業のmangaxというAIを使用した誰でも漫画が描けるようになるシステムのフロント部分の開発担当をする。
                <br />
                開発以外にもインターン生向けの課題を作成したり、インターン生リーダーを担当。
              </p>
            </PostBody>
          </TwoColumnMain>
          <TwoColumnSidebar>
            <Contact />
          </TwoColumnSidebar>
        </TwoColumn>
      </Container>
    </>
  );
}
