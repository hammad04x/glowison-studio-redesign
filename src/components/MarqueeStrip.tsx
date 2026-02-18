const items = [
  "Graphic Design", "Visiting Cards", "Digital Printing", "Flex Banners",
  "Acrylic Cutting", "MDF Work", "Vinyl Stickers", "Trophy Engraving",
  "Name Plates", "Wall Decor", "Logo Cutting", "Letter Cutting",
];

const MarqueeStrip = () => (
  <div className="bg-primary py-4 overflow-hidden">
    <div className="flex whitespace-nowrap marquee-track">
      {[...items, ...items].map((item, i) => (
        <span key={i} className="inline-flex items-center gap-6 mx-6 text-primary-foreground font-heading font-bold text-sm uppercase tracking-wider">
          {item}
          <span className="w-2 h-2 rounded-full bg-primary-foreground/30" />
        </span>
      ))}
    </div>
  </div>
);

export default MarqueeStrip;
