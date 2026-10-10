type SectionImagesProps = {
  images: { src: string; alt: string }[];
};

export default function SectionImages({ images }: SectionImagesProps) {
  return (
    <div className={`mt-6 grid gap-4 ${images.length > 1 ? "sm:grid-cols-2" : "grid-cols-1"}`}>
      {images.map(image => (
        <figure key={image.src} className="overflow-hidden rounded-xl border bg-secondary/20 p-2 sm:p-3">
          <img src={image.src} alt={image.alt} className="mx-auto max-h-[540px] w-full object-contain" loading="lazy" />
        </figure>
      ))}
    </div>
  );
}
