import parse from "html-react-parser";

interface TextProps {
  contentHTML: string;
}

export default function ConvertBody({ contentHTML }: TextProps) {
  const contentReact = parse(contentHTML);
  return <>{contentReact}</>;
}
