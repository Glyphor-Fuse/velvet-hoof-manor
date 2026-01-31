import { motion } from "motion/react";

const ANIMALS = [
  {
    name: "Sir Alistair",
    species: "Pygmy Goat",
    image: "https://raw.githubusercontent.com/Glyphor-Fuse/velvet-hoof-manor/main/public/images/pygmy-goat-velvet.png",
    description: "Our premier ambassador, posed against emerald velvet.",
    size: "large"
  },
  {
    name: "The Duchess",
    species: "Silkie Chicken",
    image: "https://oaidalleapiprodscus.blob.core.windows.net/private/org-ABYTuqk3l6jQwNFHMl5zLDus/user-28g2Vr2tFHWmicI728ehPG3p/img-GpTkRWP6BsKtd4yeWWjJhbb4.png?st=2026-01-30T23%3A33%3A40Z&se=2026-01-31T01%3A33%3A40Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=0ec745ad-3d9b-4d43-86db-87a2c9b420f1&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2026-01-30T15%3A32%3A18Z&ske=2026-01-31T15%3A32%3A18Z&sks=b&skv=2024-08-04&sig=AKH9G8wHAPoFC/LnGULUBzpucYzB9RnGv5aJv4QuDUw%3D",
    description: "Feathers like spun silk, a favorite of the estate.",
    size: "small"
  },
  {
    name: "Baron Von Fluff",
    species: "Alpaca",
    image: "https://raw.githubusercontent.com/Glyphor-Fuse/velvet-hoof-manor/main/public/images/alpaca-pearls.png",
    description: "Adorned in heirloom pearls for afternoon tea.",
    size: "medium"
  },
  {
    name: "Lady Penelope",
    species: "Miniature Horse",
    image: "https://raw.githubusercontent.com/Glyphor-Fuse/velvet-hoof-manor/main/public/images/mini-horse-estate.png",
    description: "The crown jewel of our manicured gardens.",
    size: "large"
  }
];

export const EditorialGallery = () => {
  return (
    <section className="bg-cream-silk py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <h2 className="font-serif text-5xl text-racing-green md:text-7xl">
            The Autumn <span className="italic underline decoration-gold/30">Collection</span>
          </h2>
          <p className="mt-6 font-sans text-sm uppercase tracking-widest text-racing-green/60">
            A seasonal study of our residents in their finest forms.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {ANIMALS.map((animal, idx) => (
            <motion.div
              key={animal.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative overflow-hidden group ${
                animal.size === 'large' ? 'lg:col-span-7' : 
                animal.size === 'medium' ? 'lg:col-span-5' : 'lg:col-span-4'
              }`}
            >
              <div className="aspect-[3/4] overflow-hidden bg-racing-green/5">
                <img 
                  src={animal.image} 
                  alt={animal.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-6">
                <div className="flex items-baseline justify-between border-b border-racing-green/10 pb-4">
                  <h3 className="font-serif text-2xl text-racing-green">{animal.name}</h3>
                  <span className="font-sans text-xs uppercase tracking-widest text-gold">{animal.species}</span>
                </div>
                <p className="mt-4 font-sans text-sm leading-relaxed text-racing-green/70">
                  {animal.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EditorialGallery;
