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
        <Meta pageTitle="About" pageDesc="自己紹介" />
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
                数理科学科に所属しています。4年生から配属される研究室では、制御理論を用いた最適化について研究をします。
                <br />
                <br />
                現在はKnowns株式会社でフロントエンドエンジニアとして長期インターンをしています。
                <br />
                主な開発言語はTypeScriptです。
                <br />
                <br />
                また、個人開発では塾向けのB to Bサービスを開発しています。
                <br />
                使用技術は Docker,Next.js,Ruby on Railsです。
              </p>
              <h3>My Dream</h3>
              <p>
                <br />
                私たちの時代はどんどんと年金制度も崩壊してきて、一生働き続けるということが当たり前の時代になってくると思っています。
                <br />
                そして、その労働にかける時間というのは約12万時間になると言われています。この時間は家族や友達、趣味などの娯楽に費やす時間よりもよっぽど長い時間を労働の時間に費やすことになると考えています。
                <br />
                だからこそ、この12万時間という長い時間を意味のある時間にしたいと思っています。働く人一人一人が自分の仕事に熱中できて、自分の仕事に誇りを持てて、イキイキと働けるような社会づくりをエンジニアなら、エンジニアだからこそ提供できるものであると考えています。
                <br />
                私は将来的に、業務の無駄を省き、その時間を本来やるべき仕事に注いでより良い社会を提供するサービスを開発し、企業の働き方を変え、日本の働き方を変えることができるようなサービスを必ず開発します。
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
                大学2年生3月〜大学3年生5月→塾は退職し、Alleeks株式会社にて、フロントエンドエンジニアとして中期インターンを開始。
                <br />
                <br />
                大学3年生6月~大学3年生現在→Alleeks株式会社を退職し、Knowns株式会社にて、フロントエンドエンジニアとして長期インターンを開始。
                <br />
                <br />
                サマーインターン参加予定： 株式会社ラクス
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
