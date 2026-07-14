import logoAsset from "@/assets/land-marvel-logo.png.asset.json";

interface LogoNameProps {
  className?: string;
  height?: number;
  alt?: string;
}

export function LogoName({ className = "", height, alt = "Land Marvel" }: LogoNameProps) {
  return (
    <img
      src={logoAsset.url}
      alt={alt}
      className={`inline-block align-middle w-auto object-contain ${className}`}
      style={height ? { height: `${height}em`, width: "auto" } : undefined}
    />
  );
}
