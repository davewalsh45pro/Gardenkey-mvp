// GardenKey shared icon set — generic botanical artwork per category.
// No photo hosting exists yet, so this gives every plant a distinct visual
// instead of a flat colour block, and works the same for companion cards.
const GK_ICONS = {
  Tree: `<path d="M50 90V55" stroke="white" stroke-width="4" stroke-linecap="round"/><circle cx="50" cy="35" r="26" fill="white" fill-opacity=".85"/><circle cx="30" cy="45" r="16" fill="white" fill-opacity=".6"/><circle cx="70" cy="45" r="16" fill="white" fill-opacity=".6"/>`,
  Shrub: `<circle cx="50" cy="45" r="28" fill="white" fill-opacity=".8"/><circle cx="30" cy="55" r="18" fill="white" fill-opacity=".55"/><circle cx="70" cy="55" r="18" fill="white" fill-opacity=".55"/><path d="M50 90V60" stroke="white" stroke-width="4" stroke-linecap="round"/>`,
  Perennial: `<path d="M50 90V30" stroke="white" stroke-width="4" stroke-linecap="round"/><ellipse cx="50" cy="26" rx="14" ry="20" fill="white" fill-opacity=".85"/><ellipse cx="34" cy="46" rx="12" ry="7" fill="white" fill-opacity=".6" transform="rotate(-30 34 46)"/><ellipse cx="66" cy="46" rx="12" ry="7" fill="white" fill-opacity=".6" transform="rotate(30 66 46)"/>`,
  "Tender perennial": `<path d="M50 90V40" stroke="white" stroke-width="4" stroke-linecap="round"/><ellipse cx="34" cy="45" rx="20" ry="9" fill="white" fill-opacity=".7" transform="rotate(-20 34 45)"/><ellipse cx="66" cy="45" rx="20" ry="9" fill="white" fill-opacity=".7" transform="rotate(20 66 45)"/><ellipse cx="50" cy="55" rx="20" ry="9" fill="white" fill-opacity=".85"/>`,
  Fern: `<path d="M50 90V25" stroke="white" stroke-width="3" stroke-linecap="round"/>${[20,32,44,56,68].map(y=>`<path d="M50 ${y} q-16 -6 -24 4 M50 ${y} q16 -6 24 4" stroke="white" stroke-opacity=".7" stroke-width="3" stroke-linecap="round" fill="none"/>`).join('')}`,
  Vegetable: `<circle cx="50" cy="58" r="24" fill="white" fill-opacity=".85"/><path d="M50 34 Q56 20 68 22" stroke="white" stroke-width="4" stroke-linecap="round" fill="none"/><ellipse cx="66" cy="20" rx="9" ry="5" fill="white" fill-opacity=".7" transform="rotate(30 66 20)"/>`,
  Bulb: `<path d="M50 30 Q66 40 60 62 Q56 78 50 82 Q44 78 40 62 Q34 40 50 30Z" fill="white" fill-opacity=".85"/><path d="M50 30 L50 18" stroke="white" stroke-width="3" stroke-linecap="round"/>`,
  Corm: `<ellipse cx="50" cy="58" rx="22" ry="18" fill="white" fill-opacity=".85"/><path d="M50 40V20" stroke="white" stroke-width="3" stroke-linecap="round"/>`,
  Tuber: `<ellipse cx="42" cy="60" rx="16" ry="12" fill="white" fill-opacity=".8"/><ellipse cx="62" cy="52" rx="13" ry="10" fill="white" fill-opacity=".7"/>`,
  Grass: `${[36,46,56,64].map((x,i)=>`<path d="M${x} 88 Q${x-6+ (i%2?12:0)} 50 ${x+2} 20" stroke="white" stroke-opacity=".8" stroke-width="3" stroke-linecap="round" fill="none"/>`).join('')}`,
  Succulent: `<path d="M50 85 C30 75 30 45 50 25 C70 45 70 75 50 85Z" fill="white" fill-opacity=".85"/><path d="M50 85 C38 78 38 55 50 40 C62 55 62 78 50 85Z" fill="white" fill-opacity=".6"/>`,
  Houseplant: `<path d="M50 88V30" stroke="white" stroke-width="4" stroke-linecap="round"/><path d="M50 40 Q20 30 22 55 Q40 55 50 40Z" fill="white" fill-opacity=".8"/><path d="M50 40 Q80 30 78 55 Q60 55 50 40Z" fill="white" fill-opacity=".65"/>`,
  Herb: `<path d="M50 88V45" stroke="white" stroke-width="3" stroke-linecap="round"/>${[[38,55],[62,55],[50,40]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="10" fill="white" fill-opacity=".7"/>`).join('')}`,
  Fruit: `<circle cx="50" cy="55" r="22" fill="white" fill-opacity=".85"/><path d="M50 33 Q54 22 65 24" stroke="white" stroke-width="4" stroke-linecap="round" fill="none"/>`,
  Mixed: `<path d="M35 88V50" stroke="white" stroke-width="3" stroke-linecap="round"/><path d="M65 88V40" stroke="white" stroke-width="3" stroke-linecap="round"/><ellipse cx="35" cy="42" rx="12" ry="16" fill="white" fill-opacity=".8"/><ellipse cx="65" cy="32" rx="10" ry="14" fill="white" fill-opacity=".65"/>`
};
function gkIconSvg(category){
  const key = Object.keys(GK_ICONS).find(k => (category||'').toLowerCase().includes(k.toLowerCase()));
  const body = GK_ICONS[key] || GK_ICONS.Perennial;
  return `<svg viewBox="0 0 100 100" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">${body}</svg>`;
}
