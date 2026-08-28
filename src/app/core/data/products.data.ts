export interface ProductItem {
  name: string;
  description: string;
  tags: string[];
}

export interface ProductCategory {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  icon: string; // key used to render an inline svg icon
  color: string; // tailwind gradient classes
  items: ProductItem[];
}

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    slug: 'taps-faucets',
    name: 'Taps & Faucets',
    shortName: 'Taps',
    tagline: 'Solid brass, chrome-finished, built to last',
    description:
      'Our tap and faucet range is engineered from high-grade brass with a triple-layer chrome finish for a mirror shine that resists tarnishing. From single-lever basin mixers to wall-mounted bib taps, every piece is pressure-tested for leak-free performance.',
    icon: 'faucet',
    color: 'from-brand-600 to-brand-800',
    items: [
      { name: 'Single Lever Basin Mixer', description: 'Smooth ceramic disc cartridge for precise flow and temperature control.', tags: ['Brass', 'Chrome'] },
      { name: 'Sink Cock with Swivel Spout', description: '360° swivel spout for flexible use across kitchen sink basins.', tags: ['Brass', 'Kitchen'] },
      { name: 'Wall Mounted Bib Tap', description: 'Heavy-duty quarter-turn ceramic disc for gardens and utility areas.', tags: ['Brass', 'Outdoor'] },
      { name: 'Angle Valve', description: 'Compact shut-off valve with anti-corrosion internals.', tags: ['Brass', 'Valve'] },
      { name: 'Overhead Shower Mixer', description: 'Dual-flow diverter mixer for overhead and hand shower combos.', tags: ['Brass', 'Shower'] },
      { name: 'Pillar Cock', description: 'Classic twin-handle pillar tap for wash basins.', tags: ['Brass', 'Classic'] },
    ],
  },
  {
    slug: 'sanitaryware',
    name: 'Sanitaryware',
    shortName: 'Sanitaryware',
    tagline: 'Rimless WCs, wash basins & anti-germ glazing',
    description:
      'Vitreous china sanitaryware finished with anti-germ glaze that keeps surfaces hygienic and easy to clean. Our rimless flush technology and tornado-flush WCs deliver powerful, quiet flushing while using less water.',
    icon: 'toilet',
    color: 'from-brass-500 to-brass-700',
    items: [
      { name: 'Rimless Wall-Hung WC', description: 'Tornado flush technology with concealed cistern compatibility.', tags: ['Anti-Germ', 'Rimless'] },
      { name: 'One-Piece Floor Mounted WC', description: 'S-trap outlet with soft-close UF seat cover included.', tags: ['Anti-Germ', 'S-Trap'] },
      { name: 'Table Top Wash Basin', description: 'Designer oval basin for modern vanity counters.', tags: ['Vitreous China'] },
      { name: 'Wall Hung Wash Basin', description: 'Space-saving basin with concealed bracket fitting.', tags: ['Compact'] },
      { name: 'Squatting Pan (Orissa)', description: 'Anti-skid textured surface with integrated foot rests.', tags: ['Anti-Skid'] },
      { name: 'Soft Close Seat Cover', description: 'UF-grade cover with slow-drop hinge mechanism.', tags: ['UF', 'Soft-Close'] },
    ],
  },
  {
    slug: 'showers',
    name: 'Showers & Overhead Systems',
    shortName: 'Showers',
    tagline: 'Rain showers, hand showers & shower panels',
    description:
      'From rain-effect overhead showers to multi-function hand showers, our shower systems combine even water dispersion with anti-clog silicone nozzles that stay clean and clear for years.',
    icon: 'shower',
    color: 'from-brand-500 to-brand-700',
    items: [
      { name: 'Rain Overhead Shower 8"', description: 'Ultra-thin stainless steel face with anti-clog jets.', tags: ['SS304'] },
      { name: 'Multi-Function Hand Shower', description: '5-flow-pattern hand shower with flexible braided hose.', tags: ['5-Flow'] },
      { name: 'Shower Panel with Body Jets', description: 'Thermostatic mixing with side body jets and hand shower.', tags: ['Thermostatic'] },
      { name: 'Exposed Shower Pipe Kit', description: 'Wall-mounted arm and pipe kit in brushed nickel.', tags: ['Brushed Nickel'] },
    ],
  },
  {
    slug: 'accessories',
    name: 'Bathroom Accessories',
    shortName: 'Accessories',
    tagline: 'Towel rails, soap dishes, robe hooks & more',
    description:
      'Our accessories range finishes off your bathroom with matching stainless steel and zinc-alloy fittings — corrosion resistant, rust-proof, and designed to coordinate with our tap collections.',
    icon: 'accessory',
    color: 'from-brass-400 to-brass-600',
    items: [
      { name: 'Towel Rail 24"', description: 'Round-bar stainless steel rail with concealed fasteners.', tags: ['SS304'] },
      { name: 'Soap Dish', description: 'Wall-mounted dish with drainage slots.', tags: ['Rust-Proof'] },
      { name: 'Robe Hook', description: 'Double-prong hook in matte black or chrome.', tags: ['Zinc Alloy'] },
      { name: 'Toilet Paper Holder', description: 'Covered holder to keep tissue dry.', tags: ['Chrome'] },
      { name: 'Tumbler Holder', description: 'Wall-mounted glass tumbler holder set.', tags: ['Glass'] },
      { name: 'Liquid Soap Dispenser', description: 'Wall-mount dispenser with refillable bottle.', tags: ['Refillable'] },
    ],
  },
  {
    slug: 'pipes-fittings',
    name: 'Pipes & Fittings',
    shortName: 'Pipes',
    tagline: 'CPVC, PVC & waste pipe solutions',
    description:
      'A complete range of supply and waste pipes, elbows, tees, and reducers engineered to IS standards, ensuring leak-proof joints and long-term durability under pressure.',
    icon: 'pipe',
    color: 'from-brand-700 to-brand-900',
    items: [
      { name: 'CPVC Supply Pipe', description: 'Hot & cold water supply pipe, IS 15778 compliant.', tags: ['CPVC'] },
      { name: 'PVC Waste Pipe', description: 'Soil and waste discharge pipe with solvent-weld joints.', tags: ['PVC'] },
      { name: 'Flexible Connection Hose', description: 'Braided stainless steel hose for tap connections.', tags: ['SS Braided'] },
      { name: 'Bib Cock Elbow', description: 'Brass elbow fitting for concealed plumbing lines.', tags: ['Brass'] },
    ],
  },
  {
    slug: 'valves',
    name: 'Valves & Control Fittings',
    shortName: 'Valves',
    tagline: 'Ball valves, float valves & angle stops',
    description:
      'Precision-machined brass valves that regulate flow and pressure across your plumbing network, tested to withstand repeated operation without leaking.',
    icon: 'valve',
    color: 'from-brass-600 to-brand-800',
    items: [
      { name: 'Brass Ball Valve', description: 'Full-bore quarter-turn valve for main line shut-off.', tags: ['Full-Bore'] },
      { name: 'Float Valve', description: 'Auto shut-off valve for overhead water tanks.', tags: ['Auto Shut-Off'] },
      { name: 'Angle Stop Valve', description: 'Compact valve for under-sink water lines.', tags: ['Compact'] },
      { name: 'Check Valve (Non-Return)', description: 'Prevents backflow in vertical or horizontal lines.', tags: ['Non-Return'] },
    ],
  },
];

export function getCategoryBySlug(slug: string): ProductCategory | undefined {
  return PRODUCT_CATEGORIES.find((c) => c.slug === slug);
}
