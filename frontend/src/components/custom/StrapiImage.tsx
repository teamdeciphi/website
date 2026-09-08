import Image from "next/image";

export function StrapiImage({
  src,
  alt,
  className,
  priority = false,
  width = 800,
  height = 450,
}: {
  src?: string;
  alt: string;
  className?: string;
  priority?: boolean;
  width?: number;
  height?: number;
}) {
  return (
    <Image
      src={src ?? "/deciphi-logo.svg"}
      alt={alt}
      priority={priority}
      height={height}
      width={width}
      sizes="(max-width:768px) 100vw, 800px"
      className={`object-cover ${className ?? ""}`}
    />
  );
}
