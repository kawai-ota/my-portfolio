import Head from "next/head";
import { useRouter } from "next/router";
import { siteMeta } from "../lib/constants";

const { siteTitle, siteDesc, siteUrl, siteLocale, siteType } = siteMeta;

interface MetaProps {
  pageTitle: string;
  pageDesc: string;
}

export default function Meta({ pageTitle, pageDesc }: MetaProps) {
  const title = pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle;
  const desc = pageDesc ?? siteDesc;
  const router = useRouter();
  const url = `${siteUrl}${router.asPath}`;

  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />

      <meta name="description" content={desc} />
      <meta property="og:description" content={desc} />

      <link rel="canonical" href={url} />
      <meta property="og:url" content={url} />

      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:type" content={siteType} />
      <meta property="og:locale" content={siteLocale} />
    </Head>
  );
}
