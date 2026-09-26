// next/image renders local src paths as-is when images.unoptimized is set
// (as it is for static export), so basePath isn't applied automatically —
// this prefixes it manually, matching next.config.ts's NEXT_PUBLIC_BASE_PATH.
export function assetPath(path: string): string {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}
